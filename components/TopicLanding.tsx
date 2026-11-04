import React, { useEffect } from 'react';
import { Topic, TOPICS } from './topics';

const TopicLanding: React.FC<{ topic: Topic }> = ({ topic }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [topic.id]);

    const index = TOPICS.findIndex(t => t.id === topic.id);
    const prev = TOPICS[index - 1];
    const next = TOPICS[index + 1];

    return (
        <div className="min-h-screen bg-background-light text-text-dark">
            <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
                    <a href="#home" className="text-lg font-extrabold text-primary">
                        &larr; Laman Utama
                    </a>
                    <span className="text-sm font-semibold text-text-light">Topik {topic.code}</span>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 md:px-8 md:py-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Subtopik {topic.code}</p>
                <h1 className="mt-2 text-3xl font-extrabold text-text-dark md:text-4xl">{topic.title}</h1>
                <p className="mt-3 max-w-3xl text-lg text-text-light">{topic.summary}</p>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
                        <h2 className="text-xl font-bold text-text-dark">Hasil Pembelajaran</h2>
                        <ul className="mt-4 list-disc list-outside pl-5 space-y-2 text-text-dark">
                            {topic.outcomes.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        {topic.activities && (
                            <>
                                <h2 className="mt-8 text-xl font-bold text-text-dark">Aktiviti Pengajaran</h2>
                                <ol className="mt-4 list-decimal list-outside pl-5 space-y-2 text-text-dark">
                                    {topic.activities.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ol>
                            </>
                        )}
                    </section>

                    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-fit">
                        <h2 className="text-xl font-bold text-text-dark">Mula Belajar</h2>
                        <p className="mt-2 text-sm text-text-light">Pilih halaman untuk dibuka.</p>
                        <div className="mt-5 flex flex-col gap-3">
                            {topic.pages.map(page => (
                                <a
                                    key={page.href}
                                    href={page.href}
                                    className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
                                >
                                    {page.label} &rarr;
                                </a>
                            ))}
                        </div>
                    </aside>
                </div>

                <nav className="mt-12 flex flex-wrap justify-between gap-4 border-t border-slate-200 pt-6 text-sm font-semibold">
                    {prev ? (
                        <a href={`#topik/${prev.id}`} className="text-primary hover:underline">&larr; {prev.code} {prev.title}</a>
                    ) : <span />}
                    {next ? (
                        <a href={`#topik/${next.id}`} className="text-primary hover:underline">{next.code} {next.title} &rarr;</a>
                    ) : <span />}
                </nav>
            </main>
        </div>
    );
};

export default TopicLanding;
