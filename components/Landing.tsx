import React from 'react';
import { Topic, TOPICS } from './topics';

// Decorative solution curves (over-damped, critically damped, under-damped),
// the same behaviour the tutor's introduction describes.
const buildCurve = (f: (t: number) => number, baseY: number, amp: number): string => {
    const points: string[] = [];
    for (let x = 0; x <= 1200; x += 10) {
        const t = x / 100;
        const y = baseY - amp * f(t);
        points.push(`${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)}`);
    }
    return points.join(' ');
};

const CURVES = [
    { d: buildCurve(t => Math.exp(-0.5 * t), 300, 220), color: '#3b82f6' },
    { d: buildCurve(t => (1 + t) * Math.exp(-t), 300, 220), color: '#f59e0b' },
    { d: buildCurve(t => Math.exp(-0.2 * t) * Math.cos(2 * t), 300, 220), color: '#10b981' },
];

// Keyhole-shaped panel (same silhouette as the reference hero).
const KEYHOLE_PATH =
    'M 30 150 A 130 130 0 0 1 290 150 C 290 215 250 250 228 290 L 250 400 Q 252 420 232 420 L 88 420 Q 68 420 70 400 L 92 290 C 70 250 30 215 30 150 Z';

const Keyhole: React.FC = () => (
    <div className="relative w-72 md:w-80" style={{ aspectRatio: '320 / 440' }}>
        <svg viewBox="0 0 320 440" className="absolute inset-0 w-full h-full drop-shadow-2xl" aria-hidden="true">
            <path d={KEYHOLE_PATH} fill="#0f172a" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-16 pb-20 text-center text-white">
            <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-slate-300">Selamat datang ke</p>
            <h1 className="mt-2 text-2xl md:text-4xl font-extrabold leading-tight">Tutor Interaktif</h1>
            <p className="mt-2 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-slate-300">Differential Equations</p>
            <p className="mt-5 text-xs md:text-sm leading-relaxed text-slate-200">
                Fahami perubahan.<br />Selesaikan persamaan.
            </p>
            <a
                href="#topik"
                className="mt-6 inline-block rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-200 transition-colors"
            >
                Mula Belajar
            </a>
        </div>
    </div>
);

const TopicCard: React.FC<{ topic: Topic }> = ({ topic }) => (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-background-light/60 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-bold text-primary">{topic.code}</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                Tersedia
            </span>
        </div>

        <h3 className="mt-3 text-xl font-bold text-text-dark">{topic.title}</h3>
        <p className="mt-3 text-sm text-text-light">{topic.summary}</p>

        <div className="mt-auto pt-6">
            <a
                href={`#topik/${topic.id}`}
                className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
            >
                Lihat Topik &rarr;
            </a>
        </div>
    </article>
);

const Landing: React.FC = () => {
    return (
        <div id="home" className="scroll-mt-20">
            <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
                    <a href="#home" className="flex items-center gap-2 text-lg font-extrabold text-primary">
                        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
                            <path d="M2 16 C 8 4, 12 4, 16 16 S 24 28, 30 16" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                            <path d="M2 24 C 8 20, 14 20, 18 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>Tutor Interaktif</span>
                    </a>

                    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-text-light">
                        <a href="#home" className="hover:text-primary transition-colors">Home</a>
                        <a href="#topik" className="hover:text-primary transition-colors">Topik</a>
                        <a href="#tutor" className="hover:text-primary transition-colors">Tutor</a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            aria-label="Kembali"
                            className="h-9 w-9 rounded-full border border-slate-300 text-text-dark hover:bg-slate-900 hover:text-white transition-colors"
                        >
                            &larr;
                        </button>
                        <button
                            type="button"
                            onClick={() => window.history.forward()}
                            aria-label="Ke hadapan"
                            className="h-9 w-9 rounded-full border border-slate-300 text-text-dark hover:bg-slate-900 hover:text-white transition-colors"
                        >
                            &rarr;
                        </button>
                    </div>

                    <a
                        href="#topik"
                        className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-text-dark hover:bg-slate-900 hover:text-white transition-colors"
                    >
                        Mula Belajar
                    </a>
                </div>
            </header>

            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
                <svg
                    viewBox="0 0 1200 600"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
                    aria-hidden="true"
                >
                    {CURVES.map(curve => (
                        <path
                            key={curve.color}
                            d={curve.d}
                            fill="none"
                            stroke={curve.color}
                            strokeWidth={3}
                            vectorEffect="non-scaling-stroke"
                        />
                    ))}
                </svg>

                <div className="relative container mx-auto flex flex-col items-center px-4 py-16 md:px-8 md:py-24">
                    <Keyhole />
                    <p className="mt-8 text-center text-lg font-bold text-text-dark">Tutor Interaktif: Differential Equations</p>
                </div>
            </section>

            <section id="topik" className="scroll-mt-20 bg-white py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <p className="text-center text-sm font-semibold uppercase tracking-widest text-secondary">
                        Sukatan Pelajaran
                    </p>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-text-dark md:text-4xl">Topik Pembelajaran</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-center text-text-light">
                        Ordinary Differential Equations, dari pengenalan asas hingga persamaan peringkat kedua.
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {TOPICS.map(topic => (
                            <TopicCard key={topic.id} topic={topic} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
