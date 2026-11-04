
import React from 'react';
import Card from './common/Card';

const Introduction: React.FC = () => {
    return (
        <Card>
            <h2 className="text-2xl font-bold mb-4">Pengenalan Konsep (Concrete & Visual)</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="min-w-0">
                    <h3 className="text-xl font-semibold mb-2">Kenapa Ini Penting? Contoh Dunia Sebenar</h3>
                    <p className="text-text-light mb-4">
                        Second-order differential equations kelihatan abstrak, tetapi ia menerangkan banyak fenomena di sekeliling kita. Bayangkan sebuah <strong>sistem suspensi kereta</strong>.
                    </p>
                    <p className="text-text-light">
                        Apabila kereta melanggar bonggol, spring akan memampat dan penyerap hentak akan menentang pergerakan itu. Persamaan yang mengawal bagaimana suspensi kembali ke keadaan rehat adalah second-order differential equation!
                    </p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg text-center min-w-0">
                    <div className="flex justify-around items-end gap-2 h-40">
                        {/* Visual representation of damping */}
                        <div className="flex-1 min-w-0">
                            <div className="h-20 bg-danger animate-pulse rounded-t-md" title="Overdamped"></div>
                            <p className="text-xs sm:text-sm mt-2 font-semibold break-words">Lambat Kembali (Overdamped)</p>
                        </div>
                        <div className="flex-1 min-w-0">
                             <div className="h-28 bg-secondary animate-pulse rounded-t-md" style={{animationDuration: '1s'}} title="Critically Damped"></div>
                            <p className="text-xs sm:text-sm mt-2 font-semibold break-words">Cepat & Licin (Critically Damped)</p>
                        </div>
                        <div className="flex-1 min-w-0">
                             <div className="h-16 bg-warning animate-bounce rounded-t-md" title="Underdamped"></div>
                            <p className="text-xs sm:text-sm mt-2 font-semibold break-words">Berayun (Underdamped)</p>
                        </div>
                    </div>
                     <p className="text-xs mt-4 text-text-light">Visualisasi bagaimana sistem kembali kepada keseimbangan. Ini ditentukan oleh 'roots' persamaan kita.</p>
                </div>
            </div>
        </Card>
    );
};

export default Introduction;
