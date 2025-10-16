
import React, { useState, useMemo } from 'react';
import Card from './common/Card';
import Button from './common/Button';

type Step = 'form_equation' | 'discriminant' | 'case' | 'roots' | 'solution';

const InteractiveSolver: React.FC = () => {
    const problem = useMemo(() => ({ a: 1, b: -5, c: 6 }), []); // y'' - 5y' + 6y = 0
    
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
                    setFeedback({ ...feedback, disc: 'Belum tepat. Kira semula b² - 4ac.' });
                    setStatus({ ...status, disc: 'incorrect' });
                }
                break;
            case 'case':
                 if (inputs.case_type.toLowerCase().includes('berbeza') || inputs.case_type.toLowerCase().includes('distinct')) {
                    setFeedback({ ...feedback, case: 'Betul! Oleh kerana b² - 4ac > 0, kita ada punca nyata dan berbeza.' });
                    setStatus({ ...status, case: 'correct' });
                    setStep('roots');
                 } else {
                    setFeedback({ ...feedback, case: 'Pilih jenis kes yang betul berdasarkan nilai pembezalayan > 0.' });
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
                const correctAnswer = "y=C1e^(3x)+C2e^(2x)".replace(/\s/g, '');
                const userAnswer = inputs.solution.replace(/\s/g, '');
                if (userAnswer === correctAnswer || userAnswer === "y=C1e^(2x)+C2e^(3x)".replace(/\s/g, '')) {
                     setFeedback({ ...feedback, sol: 'Tahniah! Anda telah berjaya menyelesaikan masalah ini.' });
                     setStatus({ ...status, sol: 'correct' });
                } else {
                    setFeedback({ ...feedback, sol: 'Hampir siap. Gunakan format y = C₁e^(m₁x) + C₂e^(m₂x) dengan punca yang betul.' });
                    setStatus({ ...status, sol: 'incorrect' });
                }
                break;
        }
    };
    
    const isStepDisabled = (currentStep: Step): boolean => {
        const stepOrder: Step[] = ['form_equation', 'discriminant', 'case', 'roots', 'solution'];
        return stepOrder.indexOf(currentStep) > stepOrder.indexOf(step);
    }
    
    const getInputClass = (stepStatus: string) => {
        if (stepStatus === 'correct') return 'border-secondary focus:ring-secondary';
        if (stepStatus === 'incorrect') return 'border-danger focus:ring-danger';
        return 'border-slate-300 focus:ring-primary';
    }
    
    const getFeedbackClass = (stepStatus: string) => {
        if (stepStatus === 'correct') return 'bg-green-100 text-green-800';
        if (stepStatus === 'incorrect') return 'bg-red-100 text-red-800';
        return 'bg-blue-100 text-blue-800';
    }

    return (
        <Card>
            <h2 className="text-2xl font-bold mb-4">⭐ Penyelesai Interaktif Langkah-demi-Langkah</h2>
            <p className="mb-4">Selesaikan masalah berikut: <strong className="font-mono text-lg">y'' - 5y' + 6y = 0</strong></p>

            <div className="space-y-6">
                {/* Step 1 */}
                <fieldset disabled={isStepDisabled('form_equation')} className="space-y-2 p-4 border rounded-lg">
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
                
                {/* Step 3 */}
                <fieldset disabled={isStepDisabled('case')} className="space-y-2 p-4 border rounded-lg">
                    <legend className="font-semibold px-2">Langkah 3: Tentukan Jenis Kes</legend>
                    <select value={inputs.case_type} onChange={e => setInputs({...inputs, case_type: e.target.value})} className={`p-2 border-2 rounded ${getInputClass(status.case)}`}>
                        <option value="">Pilih kes...</option>
                        <option value="distinct">Punca Nyata & Berbeza</option>
                        <option value="equal">Punca Nyata & Sama</option>
                        <option value="complex">Punca Kompleks Konjugat</option>
                    </select>
                     {feedback.case && <p className={`p-2 rounded text-sm ${getFeedbackClass(status.case)}`}>{feedback.case}</p>}
                    {status.case !== 'correct' && <Button onClick={() => handleCheck('case')}>Semak Langkah 3</Button>}
                </fieldset>

                {/* Step 4 */}
                <fieldset disabled={isStepDisabled('roots')} className="space-y-2 p-4 border rounded-lg">
                    <legend className="font-semibold px-2">Langkah 4: Cari Punca-punca (m₁ dan m₂)</legend>
                    <div className="flex items-center space-x-4">
                        <span>m₁ = <input type="text" value={inputs.root1} onChange={e => setInputs({...inputs, root1: e.target.value})} className={`w-16 text-center p-1 border-2 rounded ${getInputClass(status.roots)}`} /></span>
                        <span>m₂ = <input type="text" value={inputs.root2} onChange={e => setInputs({...inputs, root2: e.target.value})} className={`w-16 text-center p-1 border-2 rounded ${getInputClass(status.roots)}`} /></span>
                    </div>
                     {feedback.roots && <p className={`p-2 rounded text-sm ${getFeedbackClass(status.roots)}`}>{feedback.roots}</p>}
                    {status.roots !== 'correct' && <Button onClick={() => handleCheck('roots')}>Semak Langkah 4</Button>}
                </fieldset>
                
                {/* Step 5 */}
                <fieldset disabled={isStepDisabled('solution')} className="space-y-2 p-4 border rounded-lg">
                    <legend className="font-semibold px-2">Langkah 5: Tulis Penyelesaian Am</legend>
                    <input type="text" value={inputs.solution} onChange={e => setInputs({...inputs, solution: e.target.value})} placeholder="Contoh: y=C1e^(ax)+C2e^(bx)" className={`w-full p-2 border-2 rounded font-mono ${getInputClass(status.sol)}`} />
                    <p className="text-xs text-text-light">Guna C1 dan C2 untuk pemalar.</p>
                     {feedback.sol && <p className={`p-2 rounded text-sm ${getFeedbackClass(status.sol)}`}>{feedback.sol}</p>}
                    {status.sol !== 'correct' && <Button onClick={() => handleCheck('solution')}>Semak Jawapan Akhir</Button>}
                </fieldset>
            </div>
        </Card>
    );
};

export default InteractiveSolver;
