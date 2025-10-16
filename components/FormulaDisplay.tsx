import React from 'react';
import Card from './common/Card';

const FormulaDisplay: React.FC = () => {
    return (
        <Card>
            <h2 className="text-2xl font-bold mb-4">Paparan Formula (Symbol)</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Bentuk Am Persamaan</h3>
                    <div className="bg-slate-100 p-4 rounded-lg text-center">
                        <p className="font-mono text-2xl">
                            <span className="text-blue-600">a</span>y'' + <span className="text-blue-600">b</span>y' + <span className="text-blue-600">c</span>y = <span className="text-green-600">0</span>
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Persamaan Ciri (Auxiliary Equation)</h3>
                    <p className="text-text-light mb-2">Kita menukarkan persamaan pembezaan kepada persamaan algebra untuk mencari punca-puncanya.</p>
                    <div className="bg-slate-100 p-4 rounded-lg text-center">
                        <p className="font-mono text-2xl">
                            <span className="text-blue-600">a</span>m<sup>2</sup> + <span className="text-blue-600">b</span>m + <span className="text-blue-600">c</span> = <span className="text-green-600">0</span>
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Tiga Jenis Penyelesaian</h3>
                    <p className="text-text-light mb-2">Jenis penyelesaian bergantung kepada nilai pembezalayan (discriminant): <span className="font-mono text-orange-600">b<sup>2</sup> - 4ac</span>.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border border-slate-200 p-4 rounded-lg">
                            <p className="font-semibold">Kes 1: Punca Nyata & Berbeza</p>
                            <p className="font-mono text-orange-600 mb-2">b<sup>2</sup> - 4ac &gt; 0</p>
                            <p className="font-mono text-green-600">y = C₁e<sup>m₁x</sup> + C₂e<sup>m₂x</sup></p>
                        </div>
                        <div className="border border-slate-200 p-4 rounded-lg">
                            <p className="font-semibold">Kes 2: Punca Nyata & Sama</p>
                            <p className="font-mono text-orange-600 mb-2">b<sup>2</sup> - 4ac = 0</p>
                            <p className="font-mono text-green-600">y = (C₁ + C₂x)e<sup>mx</sup></p>
                        </div>
                        <div className="border border-slate-200 p-4 rounded-lg">
                            <p className="font-semibold">Kes 3: Punca Kompleks Konjugat</p>
                            <p className="font-mono text-orange-600 mb-2">b<sup>2</sup> - 4ac &lt; 0</p>
                            <p className="font-mono text-green-600">y = e<sup>px</sup>(C₁cos(qx) + C₂sin(qx))</p>
                            <p className="text-xs text-text-light">di mana m = p ± iq</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default FormulaDisplay;
