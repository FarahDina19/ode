
import React from 'react';
import Card from './common/Card';

const Tips: React.FC = () => {
    return (
        <Card>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-danger">⚠️ Kesilapan Lazim</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Lupa 'x' dalam Case 2:</strong> Ramai pelajar menulis <code className="bg-red-100 text-red-800 rounded px-1">C₁eᵐˣ + C₂eᵐˣ</code>. Jawapan yang betul memerlukan 'x' pada sebutan kedua: <code className="bg-green-100 text-green-800 rounded px-1">(C₁ + C₂x)eᵐˣ</code>.
                        </li>
                        <li>
                            <strong>Tanda negatif:</strong> Berhati-hati dengan tanda negatif apabila mengira discriminant (b²) atau menggunakan quadratic formula.
                        </li>
                         <li>
                            <strong>Complex roots:</strong> Jangan lupa memasukkan real part <code className="bg-red-100 text-red-800 rounded px-1">eᵖˣ</code> di luar kurungan untuk case complex roots.
                        </li>
                    </ul>
                </div>
                 <div>
                    <h2 className="text-2xl font-bold mb-4 text-secondary">💡 Tips untuk Ingat</h2>
                     <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Fokus pada Auxiliary Equation:</strong> Langkah paling penting ialah menukar differential equation kepada quadratic equation. Jika ini betul, selebihnya lebih mudah.
                        </li>
                         <li>
                            <strong>Hafal Tiga Bentuk:</strong> Kenal pasti tiga bentuk general solution. Kaitkan setiap bentuk dengan nilai discriminant (&gt;0, =0, &lt;0).
                        </li>
                         <li>
                            <strong>Semak jawapan:</strong> Walaupun tidak wajib, anda boleh differentiate penyelesaian anda dua kali dan masukkan semula ke dalam persamaan asal untuk mengesahkan ia sama dengan sifar.
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    );
};

export default Tips;
