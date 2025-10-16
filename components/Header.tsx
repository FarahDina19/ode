
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                Tutor Interaktif: Persamaan Pembezaan
            </h1>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
                Pelajari cara menyelesaikan persamaan pembezaan homogen peringkat kedua langkah demi langkah.
            </p>
            <div className="mt-4 text-left inline-block bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Objektif Pembelajaran:</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li>Membentuk persamaan ciri (auxiliary equation).</li>
                    <li>Menentukan jenis penyelesaian berdasarkan pembezalayan (discriminant).</li>
                    <li>Menyelesaikan untuk punca nyata, sama, dan kompleks.</li>
                    <li>Menulis penyelesaian am bagi setiap kes.</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
