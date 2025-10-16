
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
                            <strong>Lupa 'x' dalam Kes 2:</strong> Ramai pelajar menulis <code className="bg-red-100 text-red-800 rounded px-1">C₁eᵐˣ + C₂eᵐˣ</code>. Jawapan yang betul memerlukan 'x' pada sebutan kedua: <code className="bg-green-100 text-green-800 rounded px-1">(C₁ + C₂x)eᵐˣ</code>.
                        </li>
                        <li>
                            <strong>Tanda negatif:</strong> Berhati-hati dengan tanda negatif apabila mengira pembezalayan (b²) atau menggunakan formula kuadratik.
                        </li>
                         <li>
                            <strong>Punca kompleks:</strong> Jangan lupa memasukkan bahagian nyata <code className="bg-red-100 text-red-800 rounded px-1">eᵖˣ</code> di luar kurungan untuk kes punca kompleks.
                        </li>
                    </ul>
                </div>
                 <div>
                    <h2 className="text-2xl font-bold mb-4 text-secondary">💡 Tips untuk Ingat</h2>
                     <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Fokus pada Persamaan Ciri:</strong> Langkah paling penting ialah menukar persamaan pembezaan kepada persamaan kuadratik. Jika ini betul, selebihnya lebih mudah.
                        </li>
                         <li>
                            <strong>Hafal Tiga Bentuk:</strong> Kenal pasti tiga bentuk penyelesaian am. Kaitkan setiap bentuk dengan nilai pembezalayan (>0, =0, <0).
                        </li>
                         <li>
                            <strong>Semak jawapan:</strong> Walaupun tidak wajib, anda boleh membezakan penyelesaian anda dua kali dan masukkan semula ke dalam persamaan asal untuk mengesahkan ia sama dengan sifar.
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    );
};

export default Tips;
