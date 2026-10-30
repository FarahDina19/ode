
import React, { useState } from 'react';
import Card from './common/Card';

const ReferenceCard: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex justify-between items-center">
                <h2 className="text-2xl font-bold">Kad Rujukan Formula</h2>
                <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
            </div>
            {isOpen && (
                <div className="mt-4 border-t pt-4 space-y-4">
                    <div>
                        <h3 className="font-semibold">Bentuk Am: <span className="font-mono font-normal">ay'' + by' + cy = 0</span></h3>
                    </div>
                     <div>
                        <h3 className="font-semibold">Persamaan Ciri: <span className="font-mono font-normal">am² + bm + c = 0</span></h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                         <div className="p-3 bg-slate-50 rounded-lg">
                            <p className="font-semibold text-sm">Kes 1: b²-4ac &gt; 0</p>
                            <p className="font-mono text-green-600">y = C₁e<sup>m₁x</sup> + C₂e<sup>m₂x</sup></p>
                            <p className="text-xs text-text-light">Punca nyata & berbeza.</p>
                        </div>
                         <div className="p-3 bg-slate-50 rounded-lg">
                            <p className="font-semibold text-sm">Kes 2: b²-4ac = 0</p>
                            <p className="font-mono text-green-600">y = (C₁ + C₂x)e<sup>mx</sup></p>
                            <p className="text-xs text-text-light">Punca nyata & sama.</p>
                        </div>
                         <div className="p-3 bg-slate-50 rounded-lg">
                            <p className="font-semibold text-sm">Kes 3: b²-4ac &lt; 0</p>
                            <p className="font-mono text-green-600">y = e<sup>px</sup>(C₁cos(qx) + C₂sin(qx))</p>
                            <p className="text-xs text-text-light">Punca kompleks (m = p ± iq).</p>
                        </div>
                    </div>
                </div>
            )}
        </Card>
    );
};

export default ReferenceCard;
