
export interface GeminiProblem {
    equation: {
        a: number;
        b: number;
        c: number;
    };
    solution: string;
    explanation: string;
    case: 'real_distinct' | 'real_equal' | 'complex_conjugate';
}
