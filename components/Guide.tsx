
import React from 'react';
import Card from './common/Card';

const Guide: React.FC = () => {
    return (
        <Card>
            <h2 className="text-2xl font-bold mb-4 text-primary">Panduan Penggunaan</h2>
            <div className="space-y-4 text-text-dark">
                <p>Selamat datang ke Tutor Interaktif! Aplikasi ini direka untuk membantu anda memahami Persamaan Pembezaan Peringkat Kedua melalui pendekatan <strong>CVSA (Concrete-Visual-Symbol-Abstract)</strong>.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Pengenalan Konsep:</strong> Mulakan dengan contoh dunia sebenar untuk memahami 'mengapa' kita belajar topik ini.</li>
                    <li><strong>Paparan Formula:</strong> Kenali notasi dan formula utama yang akan digunakan.</li>
                    <li><strong>Penyelesai Interaktif:</strong> Cuba selesaikan masalah langkah demi langkah dengan bimbingan dan maklum balas segera.</li>
                    <li><strong>Contoh Lengkap:</strong> Kaji contoh-contoh yang diselesaikan sepenuhnya untuk mengukuhkan pemahaman.</li>
                    <li><strong>Kawasan Latihan:</strong> Jana soalan baru dan uji kemahiran anda secara bebas.</li>
                    <li><strong>Kad Rujukan & Tips:</strong> Gunakan sebagai rujukan pantas untuk formula dan untuk mengelakkan kesilapan lazim.</li>
                </ul>
                <p>Mulakan dari atas dan ikuti setiap bahagian untuk pengalaman pembelajaran yang terbaik!</p>
            </div>
        </Card>
    );
};

export default Guide;
