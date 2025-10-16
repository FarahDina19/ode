
import React from 'react';
import Card from './common/Card';

const Introduction: React.FC = () => {
    return (
        <Card>
            <h2 className="text-2xl font-bold mb-4">Pengenalan Konsep (Concrete & Visual)</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Kenapa Ini Penting? Contoh Dunia Sebenar</h3>
                    <p className="text-text-light mb-4">
                        Persamaan pembezaan peringkat kedua kelihatan abstrak, tetapi ia menerangkan banyak fenomena di sekeliling kita. Bayangkan sebuah <strong>sistem suspensi kereta</strong>.
                    </p>
                    <p className="text-text-light">
                        Apabila kereta melanggar bonggol, spring akan memampat dan penyerap hentak akan menentang pergerakan itu. Persamaan yang mengawal bagaimana suspensi kembali ke keadaan rehat adalah persamaan pembezaan peringkat kedua!
                    </p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg text-center">
                    <div className="flex justify-around items-end h-40">
                        {/* Visual representation of damping */}
                        <div className="w-1/4">
                            <div className="h-20 bg-danger animate-pulse rounded-t-md" title="Overdamped"></div>
                            <p className="text-sm mt-2 font-semibold">Lambat Kembali (Overdamped)</p>
                        </div>
                        <div className="w-1/4">
                             <div className="h-28 bg-secondary animate-pulse rounded-t-md" style={{animationDuration: '1s'}} title="Critically Damped"></div>
                            <p className="text-sm mt-2 font-semibold">Cepat & Licin (Critically Damped)</p>
                        </div>
                        <div className="w-1/4">
                             <div className="h-16 bg-warning animate-bounce rounded-t-md" title="Underdamped"></div>
                            <p className="text-sm mt-2 font-semibold">Berayun (Underdamped)</p>
                        </div>
                    </div>
                     <p className="text-xs mt-4 text-text-light">Visualisasi bagaimana sistem kembali kepada keseimbangan. Ini ditentukan oleh 'punca' persamaan kita.</p>
                </div>
            </div>
        </Card>
    );
};

export default Introduction;
