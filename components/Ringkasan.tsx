import React, { useEffect, useState } from 'react';
import Card from './common/Card';

type SummaryTab = '4.1' | '4.2' | '4.3';

const TABS: { id: SummaryTab; label: string; title: string }[] = [
    { id: '4.1', label: 'Topik 4.1', title: 'Introduction to Ordinary Differential Equations' },
    { id: '4.2', label: 'Topik 4.2', title: 'First Order Differential Equations' },
    { id: '4.3', label: 'Topik 4.3', title: 'Second Order Differential Equations' },
];

const SectionTitle: React.FC<{ en: string; ms: string }> = ({ en, ms }) => (
    <div className="mb-4">
        <h2 className="text-2xl font-bold text-text-dark">{en}</h2>
        <p className="text-sm text-text-light">{ms}</p>
    </div>
);

const Formula: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-lg bg-slate-100 p-4 text-center font-mono text-base md:text-lg">
        {children}
    </div>
);

const Steps: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
    <ol className="list-decimal list-outside pl-5 space-y-2 text-text-dark">
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ol>
);

const Example: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-6 space-y-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-text-dark">
        <p className="font-semibold text-emerald-800">{title}</p>
        {children}
    </div>
);

const IntroductionSummary: React.FC = () => (
    <div className="space-y-6">
        <Card>
            <SectionTitle en="Ordinary Differential Equation (ODE)" ms="Persamaan pembezaan biasa" />
            <p className="text-text-dark">
                Persamaan yang mengandungi satu atau lebih <strong>derivative</strong> bagi fungsi yang tidak diketahui,
                contohnya <span className="font-mono">y(x)</span>. Ia dipanggil <em>ordinary</em> kerana hanya ada satu pembolehubah bebas, iaitu <span className="font-mono">x</span> atau <span className="font-mono">t</span>.
            </p>
            <Formula>dy/dx = k·y</Formula>
            <p className="text-sm text-text-light">
                Persamaan di atas bermaksud kadar perubahan <span className="font-mono">y</span> adalah berkadar dengan <span className="font-mono">y</span> itu sendiri.
            </p>
        </Card>

        <Card>
            <SectionTitle en="Order and Degree" ms="Peringkat (order) dan darjah (degree)" />
            <ul className="list-disc list-outside pl-5 space-y-2 text-text-dark">
                <li><strong>Order</strong> ialah peringkat derivative tertinggi dalam persamaan.</li>
                <li><strong>Degree</strong> ialah kuasa bagi derivative peringkat tertinggi, selepas persamaan dibersihkan daripada pecahan dan punca. Degree hanya ditakrifkan jika persamaan ialah polinomial dalam derivative.</li>
            </ul>
            <Example title="Klasifikasi contoh">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="border-b border-emerald-200 text-emerald-800">
                                <th className="py-2 pr-4 font-semibold">Persamaan</th>
                                <th className="py-2 pr-4 font-semibold">Order</th>
                                <th className="py-2 font-semibold">Degree</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono">
                            <tr className="border-b border-emerald-100">
                                <td className="py-2 pr-4">dy/dx + 2y = x</td>
                                <td className="py-2 pr-4">1</td>
                                <td className="py-2">1</td>
                            </tr>
                            <tr className="border-b border-emerald-100">
                                <td className="py-2 pr-4">d²y/dx² + 4y = 0</td>
                                <td className="py-2 pr-4">2</td>
                                <td className="py-2">1</td>
                            </tr>
                            <tr className="border-b border-emerald-100">
                                <td className="py-2 pr-4">(dy/dx)³ + y = x</td>
                                <td className="py-2 pr-4">1</td>
                                <td className="py-2">3</td>
                            </tr>
                            <tr>
                                <td className="py-2 pr-4">(d³y/dx³)² + (dy/dx)⁴ = 0</td>
                                <td className="py-2 pr-4">3</td>
                                <td className="py-2">2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Example>
        </Card>

        <Card>
            <SectionTitle en="Modelling with ODEs" ms="Memodelkan situasi dengan ODE" />
            <p className="text-text-dark mb-3">Banyak situasi sebenar boleh diterangkan dengan ODE:</p>
            <ul className="list-disc list-outside pl-5 space-y-3 text-text-dark">
                <li>
                    <strong>Penyejukan (Newton's law of cooling):</strong>{' '}
                    <span className="font-mono">dT/dt = −k(T − T<sub>s</sub>)</span>. Kopi menjadi sejuk lebih perlahan apabila beza suhu dengan bilik semakin kecil.
                </li>
                <li>
                    <strong>Pertumbuhan eksponen:</strong> <span className="font-mono">dP/dt = kP</span>. Bilangan bakteria membiak pada kadar yang sebanding dengan jumlah semasa.
                </li>
                <li>
                    <strong>Sistem mekanikal (Newton's second law):</strong>{' '}
                    <span className="font-mono">m·d²x/dt² + c·dx/dt + k·x = 0</span>. Ini ialah persamaan order 2 bagi sistem spring-jisim.
                </li>
            </ul>
        </Card>

        <Card>
            <SectionTitle en="General and Particular Solution" ms="Penyelesaian umum dan penyelesaian khusus" />
            <ul className="list-disc list-outside pl-5 space-y-2 text-text-dark">
                <li><strong>General solution</strong> mengandungi constant sebarang <span className="font-mono">C</span>. Bilangan constant sama dengan order persamaan.</li>
                <li><strong>Particular solution</strong> diperoleh apabila constant ditentukan menggunakan <strong>initial condition</strong>, contohnya <span className="font-mono">y(0) = 2</span>.</li>
            </ul>
            <Example title="Contoh: dy/dx = 3y dengan y(0) = 2">
                <p className="font-mono">y = Ce<sup>3x</sup></p>
                <p className="font-mono">y(0) = 2 &nbsp;⇒&nbsp; C = 2</p>
                <p className="font-mono font-semibold">Particular solution: y = 2e<sup>3x</sup></p>
            </Example>
        </Card>
    </div>
);

const FirstOrderSummary: React.FC = () => (
    <div className="space-y-6">
        <Card>
            <SectionTitle en="First Order Differential Equation" ms="Persamaan pembezaan peringkat pertama" />
            <p className="text-text-dark">
                Persamaan ini hanya mengandungi <strong>first derivative</strong> <span className="font-mono">dy/dx</span>,
                tiada <span className="font-mono">d²y/dx²</span>. Terdapat dua kaedah utama:
                <strong> Separation of Variables</strong> dan <strong>Integrating Factor</strong>.
            </p>
            <p className="mt-3 text-sm text-text-light">
                Cara memilih kaedah: jika anda boleh asingkan semua sebutan <span className="font-mono">y</span> ke satu sisi
                dan semua sebutan <span className="font-mono">x</span> ke sisi lain, gunakan Separation of Variables.
                Jika bentuknya <span className="font-mono">dy/dx + P(x)y = Q(x)</span>, gunakan Integrating Factor.
            </p>
        </Card>

        <Card>
            <SectionTitle en="Separation of Variables" ms="Pemisahan pembolehubah" />
            <p className="text-text-dark">Bentuk piawai yang boleh diselesaikan dengan kaedah ini:</p>
            <Formula>dy/dx = g(x) · h(y)</Formula>
            <Steps
                items={[
                    <>Asingkan variables: letakkan semua sebutan <span className="font-mono">y</span> (termasuk <span className="font-mono">dy</span>) di sebelah kiri, dan semua sebutan <span className="font-mono">x</span> (termasuk <span className="font-mono">dx</span>) di sebelah kanan.</>,
                    <>Integrate kedua-dua belah: <span className="font-mono">∫ dy/h(y) = ∫ g(x) dx</span>.</>,
                    <>Tambah <strong>constant of integration</strong> <span className="font-mono">C</span> pada satu sisi sahaja.</>,
                    <>Selesaikan untuk <span className="font-mono">y</span> (explicit general solution) jika boleh, contohnya dengan mengambil eksponen kedua-dua belah.</>,
                    <>Guna <strong>initial condition</strong>, contohnya <span className="font-mono">y(0) = 1</span>, untuk cari <span className="font-mono">C</span>. Hasilnya ialah <strong>particular solution</strong>.</>,
                ]}
            />
            <Example title="Contoh: dy/dx = 2xy, dengan y(0) = 1">
                <p className="font-mono">dy/y = 2x dx</p>
                <p className="font-mono">∫ dy/y = ∫ 2x dx &nbsp;⇒&nbsp; ln|y| = x² + C</p>
                <p className="font-mono">y = A·e<sup>x²</sup>, dengan A = e<sup>C</sup></p>
                <p className="font-mono">y(0) = 1 &nbsp;⇒&nbsp; A = 1</p>
                <p className="font-mono font-semibold">Particular solution: y = e<sup>x²</sup></p>
            </Example>
        </Card>

        <Card>
            <SectionTitle en="Integrating Factor" ms="Faktor pengamiran" />
            <p className="text-text-dark">Bentuk piawai (linear first order):</p>
            <Formula>dy/dx + P(x) · y = Q(x)</Formula>
            <p className="text-text-dark">Integrating factor dan sifat utamanya:</p>
            <Formula>
                μ(x) = e<sup>∫P(x) dx</sup> &nbsp;&nbsp;|&nbsp;&nbsp; d/dx [μ(x) · y] = μ(x) · Q(x)
            </Formula>
            <p className="text-sm text-text-light">
                Sebelah kiri selepas didarab dengan <span className="font-mono">μ(x)</span> ialah
                <span className="font-mono"> d/dx (μy)</span>, jadi ia boleh terus diintegrate.
            </p>
            <div className="mt-4">
                <Steps
                    items={[
                        <>Tulis persamaan dalam standard form. Pastikan pekali <span className="font-mono">dy/dx</span> ialah 1.</>,
                        <>Kenal pasti <span className="font-mono">P(x)</span> (pekali <span className="font-mono">y</span>) dan <span className="font-mono">Q(x)</span> (sebelah kanan).</>,
                        <>Kira integrating factor <span className="font-mono">μ(x) = e<sup>∫P(x) dx</sup></span>. Constant <span className="font-mono">C</span> belum perlu ditambah di sini.</>,
                        <>Darab kedua-dua belah dengan <span className="font-mono">μ(x)</span>. Sebelah kiri menjadi <span className="font-mono">d/dx (μy)</span>.</>,
                        <>Integrate kedua-dua belah: <span className="font-mono">μy = ∫ μQ dx + C</span>.</>,
                        <>Selesaikan untuk <span className="font-mono">y</span>: <span className="font-mono">y = (1/μ)(∫ μQ dx + C)</span>.</>,
                        <>Guna <strong>initial condition</strong> untuk cari <span className="font-mono">C</span>.</>,
                    ]}
                />
            </div>
            <Example title="Contoh: dy/dx + 2y = 4, dengan y(0) = 3">
                <p className="font-mono">P(x) = 2 &nbsp;⇒&nbsp; μ(x) = e<sup>2x</sup></p>
                <p className="font-mono">d/dx (e<sup>2x</sup>y) = 4e<sup>2x</sup></p>
                <p className="font-mono">e<sup>2x</sup>y = 2e<sup>2x</sup> + C</p>
                <p className="font-mono">y = 2 + C·e<sup>-2x</sup></p>
                <p className="font-mono">y(0) = 3 &nbsp;⇒&nbsp; 2 + C = 3 &nbsp;⇒&nbsp; C = 1</p>
                <p className="font-mono font-semibold">Particular solution: y = 2 + e<sup>-2x</sup></p>
            </Example>
        </Card>

        <Card>
            <h2 className="mb-4 text-2xl font-bold text-text-dark">Ringkasan Pantas 4.2</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 text-text-light">
                            <th className="py-2 pr-4 font-semibold">Method</th>
                            <th className="py-2 pr-4 font-semibold">Standard form</th>
                            <th className="py-2 pr-4 font-semibold">Key step</th>
                            <th className="py-2 font-semibold">General solution</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono text-text-dark">
                        <tr className="border-b border-slate-100 align-top">
                            <td className="py-3 pr-4 font-sans font-semibold">Separation of Variables</td>
                            <td className="py-3 pr-4">dy/dx = g(x)·h(y)</td>
                            <td className="py-3 pr-4">∫ dy/h(y) = ∫ g(x) dx</td>
                            <td className="py-3">Solve for y, add C</td>
                        </tr>
                        <tr className="align-top">
                            <td className="py-3 pr-4 font-sans font-semibold">Integrating Factor</td>
                            <td className="py-3 pr-4">dy/dx + P(x)·y = Q(x)</td>
                            <td className="py-3 pr-4">μ = e<sup>∫P dx</sup></td>
                            <td className="py-3">y = (1/μ)(∫ μQ dx + C)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card>

        <Card>
            <h2 className="mb-4 text-2xl font-bold text-danger">⚠️ Kesilapan Lazim 4.2</h2>
            <ul className="list-disc list-outside pl-5 space-y-2 text-text-dark">
                <li>Lupa <strong>integrate</strong> selepas asingkan variables. Jangan tinggalkan <span className="font-mono">dy/y</span> tanpa sebarang integral.</li>
                <li>Lupa <strong>constant C</strong>, atau lupa tanda mutlak dalam <span className="font-mono">ln|y|</span>.</li>
                <li>Tidak tulis dalam standard form dahulu, jadi <span className="font-mono">P(x)</span> yang dikenal pasti salah.</li>
                <li>Tanda salah pada integrating factor: ia ialah <span className="font-mono">e<sup>∫P dx</sup></span>, bukan <span className="font-mono">e<sup>-∫P dx</sup></span>.</li>
                <li>Lupa darab <span className="font-mono">Q(x)</span> dengan <span className="font-mono">μ(x)</span> di sebelah kanan.</li>
            </ul>
        </Card>
    </div>
);

const SecondOrderSummary: React.FC = () => (
    <div className="space-y-6">
        <Card>
            <SectionTitle en="Homogeneous Second Order Differential Equation" ms="Persamaan pembezaan homogen peringkat kedua" />
            <p className="text-text-dark">Bentuk umum (pekali malar, sebelah kanan = 0):</p>
            <Formula>
                a·y'' + b·y' + c·y = 0
            </Formula>
            <Steps
                items={[
                    <>Bentuk <strong>auxiliary equation</strong>: gantikan <span className="font-mono">y''</span> dengan <span className="font-mono">m²</span>, <span className="font-mono">y'</span> dengan <span className="font-mono">m</span>, dan <span className="font-mono">y</span> dengan <span className="font-mono">1</span>.</>,
                    <>Kira <strong>discriminant</strong> <span className="font-mono">Δ = b² − 4ac</span> untuk tentukan jenis roots.</>,
                    <>Pilih bentuk <strong>general solution</strong> mengikut jadual di bawah.</>,
                    <>Jika ada initial conditions, guna untuk cari constants <span className="font-mono">A</span> dan <span className="font-mono">B</span>.</>,
                ]}
            />
            <Formula>
                am² + bm + c = 0 &nbsp;&nbsp;|&nbsp;&nbsp; m = (−b ± √Δ) / 2a
            </Formula>
        </Card>

        <Card>
            <SectionTitle en="Three Cases of General Solution" ms="Tiga kes penyelesaian umum" />
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 text-text-light">
                            <th className="py-2 pr-4 font-semibold">Case</th>
                            <th className="py-2 pr-4 font-semibold">Discriminant</th>
                            <th className="py-2 pr-4 font-semibold">Roots</th>
                            <th className="py-2 font-semibold">General solution</th>
                        </tr>
                    </thead>
                    <tbody className="text-text-dark">
                        <tr className="border-b border-slate-100 align-top">
                            <td className="py-3 pr-4 font-semibold">1. Real &amp; distinct</td>
                            <td className="py-3 pr-4 font-mono">Δ &gt; 0</td>
                            <td className="py-3 pr-4 font-mono">m₁ ≠ m₂, both real</td>
                            <td className="py-3 font-mono">y = Ae<sup>m₁x</sup> + Be<sup>m₂x</sup></td>
                        </tr>
                        <tr className="border-b border-slate-100 align-top">
                            <td className="py-3 pr-4 font-semibold">2. Real &amp; equal</td>
                            <td className="py-3 pr-4 font-mono">Δ = 0</td>
                            <td className="py-3 pr-4 font-mono">m₁ = m₂ = m</td>
                            <td className="py-3 font-mono">y = (A + Bx)e<sup>mx</sup></td>
                        </tr>
                        <tr className="align-top">
                            <td className="py-3 pr-4 font-semibold">3. Complex conjugate</td>
                            <td className="py-3 pr-4 font-mono">Δ &lt; 0</td>
                            <td className="py-3 pr-4 font-mono">m = p ± qi</td>
                            <td className="py-3 font-mono">y = e<sup>px</sup>(A cos qx + B sin qx)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-text-dark space-y-1">
                <p>
                    Kes 3: <span className="font-mono">p = −b / 2a</span> dan <span className="font-mono">q = √|Δ| / 2a</span>.
                    Dalam kes ini penyelesaian berayun (oscillates). Jika p &lt; 0, amplitud semakin mengecil apabila x bertambah.
                </p>
                <p>
                    Kes 2: sebutan <span className="font-mono">x</span> diperlukan kerana roots sama. Tanpa <span className="font-mono">Bx</span>, penyelesaian tidak lengkap.
                </p>
            </div>
        </Card>

        <Card>
            <h2 className="mb-4 text-2xl font-bold text-text-dark">Contoh Ringkas</h2>
            <Example title="Contoh: y'' + 5y' + 6y = 0">
                <p className="font-mono">m² + 5m + 6 = 0 &nbsp;⇒&nbsp; (m + 2)(m + 3) = 0</p>
                <p className="font-mono">Δ = 5² − 4(1)(6) = 1 &gt; 0 &nbsp;⇒&nbsp; Case 1</p>
                <p className="font-mono">m = −2, −3</p>
                <p className="font-mono font-semibold">General solution: y = Ae<sup>-2x</sup> + Be<sup>-3x</sup></p>
            </Example>
        </Card>

        <Card>
            <h2 className="mb-4 text-2xl font-bold text-danger">⚠️ Kesilapan Lazim 4.3</h2>
            <ul className="list-disc list-outside pl-5 space-y-2 text-text-dark">
                <li>Tanda negatif pada <span className="font-mono">b</span> atau <span className="font-mono">−4ac</span> semasa kira discriminant.</li>
                <li>Lupa <span className="font-mono">x</span> dalam Case 2: tulis <span className="font-mono">(A + Bx)e<sup>mx</sup></span>, bukan <span className="font-mono">Ae<sup>mx</sup> + Be<sup>mx</sup></span>.</li>
                <li>Lupa real part <span className="font-mono">e<sup>px</sup></span> di luar kurungan dalam Case 3.</li>
            </ul>
        </Card>
    </div>
);

const Ringkasan: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SummaryTab>('4.1');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const current = TABS.find(tab => tab.id === activeTab) ?? TABS[0];

    return (
        <div className="min-h-screen bg-background-light text-text-dark">
            <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
                    <a href="#home" className="text-lg font-extrabold text-primary">
                        &larr; Laman Utama
                    </a>
                    <span className="text-sm font-semibold text-text-light">Ringkasan</span>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 md:px-8 md:py-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Ringkasan</p>
                <h1 className="mt-2 text-3xl font-extrabold text-text-dark md:text-4xl">Ringkasan Formula &amp; Kaedah</h1>
                <p className="mt-3 max-w-3xl text-lg text-text-light">
                    Rujukan pantas untuk setiap topik. Istilah matematik dikekalkan dalam Bahasa Inggeris, manakala penerangan dalam Bahasa Melayu.
                </p>

                <div role="tablist" aria-label="Pilih topik" className="mt-8 flex flex-wrap gap-3">
                    {TABS.map(tab => {
                        const selected = tab.id === activeTab;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                role="tab"
                                aria-selected={selected}
                                onClick={() => setActiveTab(tab.id)}
                                className={`rounded-lg border px-4 py-2 text-left text-sm font-semibold transition-colors ${
                                    selected
                                        ? 'border-primary bg-primary text-white shadow-sm'
                                        : 'border-slate-300 bg-white text-text-dark hover:bg-slate-100'
                                }`}
                            >
                                <span className="block">{tab.label}</span>
                                <span className={`block text-xs font-normal ${selected ? 'text-blue-100' : 'text-text-light'}`}>
                                    {tab.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div role="tabpanel" className="mt-8">
                    <h2 className="mb-6 text-xl font-bold text-text-dark">{current.label}: {current.title}</h2>
                    {activeTab === '4.1' && <IntroductionSummary />}
                    {activeTab === '4.2' && <FirstOrderSummary />}
                    {activeTab === '4.3' && <SecondOrderSummary />}
                </div>
            </main>
        </div>
    );
};

export default Ringkasan;
