export interface TopicPage {
    label: string;
    href: string;
}

export interface Topic {
    id: string;
    code: string;
    title: string;
    summary: string;
    outcomes: string[];
    activities?: string[];
    pages: TopicPage[];
}

// Subtopics follow the ODE unit plan (4.1 - 4.3).
export const TOPICS: Topic[] = [
    {
        id: '4-1',
        code: '4.1',
        title: 'Introduction to Ordinary Differential Equations',
        summary: 'Kenali apa itu persamaan pembezaan dan cara mengelaskannya mengikut order dan degree.',
        outcomes: [
            'Introduce differential equations using a few examples related to mechanical systems.',
            'Classify differential equations according to their order and degree.',
            'Explain the meaning of order and degree of a differential equation and how to classify it.',
        ],
        pages: [{ label: 'Pengenalan ODE', href: 'topics/4-1-pengenalan-ode.html' }],
    },
    {
        id: '4-2',
        code: '4.2',
        title: 'First Order Differential Equations',
        summary: 'Selesaikan persamaan peringkat pertama dengan kaedah pemisahan pemboleh ubah dan faktor pengamiran.',
        outcomes: [
            'Solve first order differential equations by using the separation of variables method.',
            'Find the solution of a first order differential equation by using separation of variables.',
            'Solve first order differential equations by using the integrating factor.',
            'Find the solution of first order differential equations by finding the integrating factor.',
        ],
        pages: [
            { label: 'Pemisahan Pembolehubah', href: 'topics/4-2-pemisahan-pembolehubah.html' },
            { label: 'Faktor Pengamiran', href: 'topics/4-2-faktor-pengamiran.html' },
        ],
    },
    {
        id: '4-3',
        code: '4.3',
        title: 'Second Order Differential Equations',
        summary: 'Selesaikan persamaan homogen peringkat kedua menggunakan persamaan tambahan dan diskriminan.',
        outcomes: [
            'Solve homogeneous second order differential equations.',
        ],
        activities: [
            'Form the auxiliary equation from the given second order differential equation.',
            'Solve the homogeneous equation depending on the roots of the auxiliary equation.',
            'Choose the type of solution by the discriminant b² − 4ac: > 0 real and distinct roots, = 0 real and equal roots, < 0 complex conjugate roots m = p ± qi.',
            'Find complex conjugate roots by using the quadratic formula.',
        ],
        pages: [
            { label: 'Tutor Interaktif', href: '#tutor' },
            { label: 'Selesaikan Persamaan', href: 'topics/4-3-selesaikan-persamaan.html' },
        ],
    },
];

// Returns the topic for a hash such as "#topik/4-2", or undefined for other routes.
export const topicFromHash = (hash: string): Topic | undefined => {
    const match = /^#topik\/([\w-]+)$/.exec(hash);
    return match ? TOPICS.find(topic => topic.id === match[1]) : undefined;
};
