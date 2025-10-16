
import React from 'react';
import Card from './common/Card';

const WorkedExamples: React.FC = () => {
    const examples = [
        {
            title: "Kes 1: Punca Nyata & Berbeza",
            problem: "y'' + y' - 6y = 0",
            auxiliary: "m² + m - 6 = 0",
            discriminant: "1² - 4(1)(-6) = 25 > 0",
            roots: "(m+3)(m-2) = 0  => m₁ = -3, m₂ = 2",
            solution: "y = C₁e⁻³ˣ + C₂e²ˣ",
            visual: "Sistem kembali kepada rehat tanpa ayunan (overdamped/critically damped)."
        },
        {
            title: "Kes 2: Punca Nyata & Sama",
            problem: "y'' - 4y' + 4y = 0",
            auxiliary: "m² - 4m + 4 = 0",
            discriminant: "(-4)² - 4(1)(4) = 0",
            roots: "(m-2)² = 0  => m₁ = m₂ = 2",
            solution: "y = (C₁ + C₂x)e²ˣ",
            visual: "Sistem kembali kepada rehat dengan paling cepat tanpa ayunan (critically damped)."
        },
        {
            title: "Kes 3: Punca Kompleks Konjugat",
            problem: "y'' + 2y' + 5y = 0",
            auxiliary: "m² + 2m + 5 = 0",
            discriminant: "2² - 4(1)(5) = -16 < 0",
            roots: "m = -1 ± 2i (p=-1, q=2)",
            solution: "y = e⁻ˣ(C₁cos(2x) + C₂sin(2x))",
            visual: "Sistem berayun semasa kembali kepada rehat (underdamped)."
        }
    ];

    return (
        <Card>
            <h2 className="text-2xl font-bold mb-4">Contoh Lengkap</h2>
            <div className="space-y-6">
                {examples.map((ex, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-2 text-primary">{ex.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold">Penyelesaian Simbolik</h4>
                                <ul className="space-y-1 mt-2 text-sm">
                                    <li><strong>Masalah:</strong> <span className="font-mono">{ex.problem}</span></li>
                                    <li><strong>Persamaan Ciri:</strong> <span className="font-mono">{ex.auxiliary}</span></li>
                                    <li><strong>Pembezalayan:</strong> <span className="font-mono text-orange-600">{ex.discriminant}</span></li>
                                    <li><strong>Punca:</strong> <span className="font-mono">{ex.roots}</span></li>
                                    <li><strong>Penyelesaian Am:</strong> <span className="font-mono text-green-600">{ex.solution}</span></li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-3 rounded">
                                 <h4 className="font-semibold">Interpretasi Visual</h4>
                                 <p className="text-text-light text-sm mt-2">{ex.visual}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default WorkedExamples;
