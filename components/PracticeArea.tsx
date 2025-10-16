
import React, { useState, useCallback, useEffect } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import { generateProblem } from '../services/geminiService';
import type { GeminiProblem } from '../types';

const PracticeArea: React.FC = () => {
    const [difficulty, setDifficulty] = useState<'Mudah' | 'Sederhana' | 'Mencabar'>('Mudah');
    const [problem, setProblem] = useState<GeminiProblem | null>(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const fetchProblem = useCallback(async () => {
        setIsLoading(true);
        setError('');
        setFeedback('');
        setShowSolution(false);
        setUserAnswer('');
        try {
            const newProblem = await generateProblem(difficulty);
            setProblem(newProblem);
        } catch (err) {
            setError('Gagal menjana soalan. Sila cuba lagi.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [difficulty]);

    useEffect(() => {
        fetchProblem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [difficulty]);

    const checkAnswer = () => {
        if (!problem) return;
        
        // Normalize answers for comparison
        const normalize = (str: string) => str.toLowerCase().replace(/\s/g, '').replace(/c1/g, 'c₁').replace(/c2/g, 'c₂');
        const userNorm = normalize(userAnswer);
        const correctNorm = normalize(problem.solution);

        // Allow for swapped constants
        const parts = problem.solution.split('+');
        let alternativeNorm = '';
        if (parts.length === 2) {
             alternativeNorm = normalize(parts[1].trim() + ' + ' + parts[0].trim().substring(parts[0].trim().indexOf('=')+1));
        }

        if (userNorm === correctNorm || (alternativeNorm && userNorm === alternativeNorm)) {
            setFeedback('Jawapan anda betul! Hebat!');
            if (feedback !== 'Jawapan anda betul! Hebat!') { // Prevent double counting on multiple checks
                setScore(s => ({ correct: s.correct + 1, total: s.total + 1 }));
            }
        } else {
            setFeedback('Jawapan kurang tepat. Semak semula pengiraan atau format anda.');
             if (feedback !== 'Jawapan anda betul! Hebat!') { // Only increment total if it's a new attempt
                setScore(s => ({ ...s, total: s.total + 1 }));
            }
        }
        setShowSolution(false);
    };
    
    const formatEquation = (eq: GeminiProblem['equation']) => {
        const y_double_prime = `${eq.a === 1 ? '' : eq.a}y''`;
        const y_prime = `${eq.b > 0 ? '+' : ''} ${eq.b === 1 ? '' : eq.b === -1 ? '-' : eq.b}y'`;
        const y_term = `${eq.c > 0 ? '+' : ''} ${eq.c}y`;
        return `${y_double_prime} ${y_prime.replace('+ -', '-')} ${y_term.replace('+ -', '-')} = 0`.replace(/\s+/g, ' ');
    };

    return (
        <Card>
            <h2 className="text-2xl font-bold mb-4">Kawasan Latihan (Abstract)</h2>
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    {(['Mudah', 'Sederhana', 'Mencabar'] as const).map(level => (
                        <Button key={level} onClick={() => setDifficulty(level)} variant={difficulty === level ? 'primary' : 'secondary'} className={difficulty !== level ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : ''}>
                            {level}
                        </Button>
                    ))}
                </div>
                <div className="font-semibold text-lg">Skor: {score.correct} / {score.total}</div>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg">
                {isLoading && <p>Menjana soalan baru... <i className="fas fa-spinner fa-spin"></i></p>}
                {error && <p className="text-danger">{error}</p>}
                {problem && !isLoading && (
                    <div className="space-y-4">
                        <p className="text-lg">Selesaikan persamaan berikut:</p>
                        <p className="font-mono text-2xl text-center p-4 bg-white rounded-md shadow-inner">{formatEquation(problem.equation)}</p>
                        
                        <div className="flex flex-col">
                            <label htmlFor="user-answer" className="mb-2 font-semibold">Jawapan anda:</label>
                            <input
                                id="user-answer"
                                type="text"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                placeholder="Tulis penyelesaian am di sini"
                                className="p-2 border-2 border-slate-300 rounded-lg font-mono text-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>

                        {feedback && (
                            <p className={`p-3 rounded-lg text-center font-semibold ${feedback.includes('betul') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {feedback}
                            </p>
                        )}
                        
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button onClick={fetchProblem} variant="primary" disabled={isLoading}>
                                <i className="fas fa-sync-alt mr-2"></i> Jana Soalan Baru
                            </Button>
                            <Button onClick={checkAnswer} variant="secondary" disabled={!userAnswer}>
                                Semak Jawapan
                            </Button>
                            <Button onClick={() => setShowSolution(!showSolution)} variant="warning">
                                {showSolution ? 'Sembunyi' : 'Tunjuk'} Penyelesaian
                            </Button>
                        </div>

                        {showSolution && (
                            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                <h4 className="font-bold text-amber-800">Penyelesaian:</h4>
                                <p className="font-mono text-amber-900">{problem.solution}</p>
                                <h4 className="font-bold text-amber-800 mt-2">Penerangan:</h4>
                                <p className="text-amber-900">{problem.explanation}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
};

export default PracticeArea;
