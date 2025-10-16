import React, { useState, useMemo } from 'react';
import Card from './common/Card';
import Button from './common/Button';

type Step = 'form_equation' | 'discriminant' | 'case' | 'roots' | 'solution';

const InteractiveSolver: React.FC = () => {
    const problem = useMemo(() => ({ a: 1, b: -5, c: 6 }), []);
    const [step, setStep] = useState<Step>('form_equation');
    const [inputs, setInputs] = useState({
        eq_a: '', eq_b: '', eq_c: '',
        disc_val: '',
        case_type: '',
        root1: '', root2: '',
        solution: ''
    });
    const [feedback, setFeedback] = useState({
        eq: '', disc: '', case: '', roots: '', sol: ''
    });
    const [status, setStatus] = useState({
        eq: 'pending', disc: 'pending', case: 'pending', roots: 'pending', sol: 'pending'
    });

    // Helper for feedback classes
    const getFeedbackClass = (status: string) => status === 'correct' ? 'bg-green-100 text-green-800' : status === 'incorrect' ? 'bg-red-100 text-red-800' : 'bg-slate-100';
    const getInputClass = (status: string) => status === 'correct' ? 'border-green-600' : status === 'incorrect' ? 'border-red-600' : 'border-slate-300';
    const isStepDisabled = (target: Step) => {
        const order: Step[] = ['form_equation', 'discriminant', 'case', 'roots', 'solution'];
        return order.indexOf(step) < order.indexOf(target);
    };

    const handleCheck = (currentStep: Step) => {
        switch (currentStep) {
            case 'form_equation':
                if (inputs.eq_a === '1' && inputs.eq_b === '-5' && inputs.eq_c === '6') {
                    setFeedback({ ...feedback, eq: 'Betul! Persamaan ciri dibentuk dengan betul.' });
                    setStatus({ ...status, eq: 'correct' });
                    setStep('discriminant');
                } else {
                    setFeedback({ ...feedback, eq: 'Cuba lagi. Gantikan a, b, dan c dari persamaan asal ke dalam am² + bm + c = 0.' });
                    setStatus({ ...status, eq: 'incorrect' });
                }
                break;
            case 'discriminant':
                const disc = problem.b**2 - 4 * problem.a * problem.c;
                if (parseInt(inputs.disc_val) === disc) {
                    setFeedback({ ...feedback, disc: `Tepat! Nilai pembezalayan ialah ${disc}.` });
                    setStatus({ ...status, disc: 'correct' });
                    setStep('case');
                } else {
                    setFeedback({ ...feedback, disc: `Nilai tidak tepat. Cuba kira semula: b² - 4ac.` });
                    setStatus({ ...status, disc: 'incorrect' });
                }
                break;
            case 'case':
                const discValue = problem.b**2 - 4 * problem.a * problem.c;
                let correctCase = '';
                if (discValue > 0) correctCase = 'real_distinct';
                else if (discValue === 0) correctCase = 'real_equal';
                else correctCase = 'complex_conjugate';
                if (inputs.case_type === correctCase) {
                    setFeedback({ ...feedback, case: 'Tepat! Anda memilih kes yang betul.' });
                    setStatus({ ...status, case: 'correct' });
                    setStep('roots');
                } else {
                    setFeedback({ ...feedback, case: 'Cuba lagi. Pilih kes berdasarkan nilai discriminant.' });
                    setStatus({ ...status, case: 'incorrect' });
                }
                break;
            case 'roots':
                if ((inputs.root1 === '2' && inputs.root2 === '3') || (inputs.root1 === '3' && inputs.root2 === '2')) {
                    setFeedback({ ...feedback, roots: 'Cemerlang! Punca-puncanya ialah 2 dan 3.' });
                    setStatus({ ...status, roots: 'correct' });
                    setStep('solution');
                } else {
                    setFeedback({ ...feedback, roots: 'Tidak tepat. Gunakan formula kuadratik atau pemfaktoran untuk m² - 5m + 6 = 0.' });
                    setStatus({ ...status, roots: 'incorrect' });
                }
                break;
            case 'solution':
                const correctAnswer = "y=C₁e^(3x)+C₂e^(2x)".replace(/\s/g, '');
                const userAnswer = inputs.solution.replace(/\s/g, '').replace(/C1/g, 'C₁').replace(/C2/g, 'C₂');
                if (userAnswer === correctAnswer || userAnswer === "y=C₁e^(2x)+C₂e^(3x)".replace(/\s/g, '')) {
                    setFeedback({ ...feedback, sol: 'Tahniah! Penyelesaian lengkap dan betul.' });
                    setStatus({ ...status, sol: 'correct' });
                } else {
                    setFeedback({ ...feedback, sol: 'Kurang tepat. Sila semak semula bentuk umum penyelesaian untuk dua punca nyata dan berbeza.' });
                    setStatus({ ...status, sol: 'incorrect' });
                }
                break;
        }
    };

    return (
        <Card>
            <fieldset className="space-y-2 p-4 border rounded-lg">
                <legend className="font-semibold px-2">Langkah 1: Bentuk Persamaan Ciri</legend>
                <div className="flex items-center space-x-2 font-mono text-xl">
                    (<input type="text" value={inputs.eq_a} onChange={e => setInputs({...inputs, eq_a: e.target.value})} className={`w-12 text-center p-1 border-2 rounded ${getInputClass(status.eq)}`} />)m² +
                    (<input type="text" value={inputs.eq_b} onChange={e => setInputs({...inputs, eq_b: e.target.value})} className={`w-12 text-center p-1 border-2 rounded ${getInputClass(status.eq)}`} />)m +
                    (<input type="text" value={inputs.eq_c} onChange={e => setInputs({...inputs, eq_c: e.target.value})} className={`w-12 text-center p-1 border-2 rounded ${getInputClass(status.eq)}`} />) = 0
                </div>
                {feedback.eq && <p className={`p-2 rounded text-sm ${getFeedbackClass(status.eq)}`}>{feedback.eq}</p>}
                {status.eq !== 'correct' && <Button onClick={() => handleCheck('form_equation')}>Semak Langkah 1</Button>}
            </fieldset>
            {/* Step 2 */}
            <fieldset disabled={isStepDisabled('discriminant')} className="space-y-2 p-4 border rounded-lg">
                <legend className="font-semibold px-2">Langkah 2: Kira Pembezalayan (b² - 4ac)</legend>
                <input type="text" value={inputs.disc_val} onChange={e => setInputs({...inputs, disc_val: e.target.value})} placeholder="Nilai" className={`w-24 text-center p-1 border-2 rounded ${getInputClass(status.disc)}`} />
                {feedback.disc && <p className={`p-2 rounded text-sm ${getFeedbackClass(status.disc)}`}>{feedback.disc}</p>}
                {status.disc !== 'correct' && <Button onClick={() => handleCheck('discriminant')}>Semak Langkah 2</Button>}
            </fieldset>
            {/* Next steps... */}
            {/* Add similar fieldsets for case, roots, and solution, with appropriate inputs/buttons/feedback */}
        </Card>
    );
};

export default InteractiveSolver;
