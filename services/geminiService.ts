import { GoogleGenAI, Type } from "@google/genai";
import { GeminiProblem } from '../types';

const fallbackProblem: GeminiProblem = {
    equation: { a: 1, b: -3, c: 2 },
    solution: "y = C₁e^(2x) + C₂e^x",
    explanation: "Kes ini mempunyai punca nyata dan berbeza. Persamaan ciri ialah m² - 3m + 2 = 0, yang memberikan punca m=1 dan m=2.",
    case: 'real_distinct',
};

export const generateProblem = async (difficulty: 'Mudah' | 'Sederhana' | 'Mencabar'): Promise<GeminiProblem> => {
    try {
        if (!process.env.API_KEY) {
            console.warn("API key not found. Using fallback problem.");
            return fallbackProblem;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const prompt = `Generate a second-order homogeneous linear differential equation problem with constant coefficients (ay'' + by' + cy = 0) for a student. The difficulty level is ${difficulty}. Provide integer coefficients a, b, and c. Ensure 'a' is always non-zero.
- For 'Mudah' difficulty, ensure roots are small integers.
- For 'Sederhana' difficulty, roots can be larger integers or simple fractions.
- For 'Mencabar' difficulty, use larger coefficients that result in complex roots.
Return the problem details in JSON format according to the provided schema.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        equation: {
                            type: Type.OBJECT,
                            properties: {
                                a: { type: Type.INTEGER, description: "Coefficient of y''" },
                                b: { type: Type.INTEGER, description: "Coefficient of y'" },
                                c: { type: Type.INTEGER, description: "Coefficient of y" },
                            },
                            required: ['a', 'b', 'c'],
                        },
                        solution: { type: Type.STRING, description: "General solution" },
                        explanation: { type: Type.STRING, description: "Explanation of solution steps" },
                        case: { type: Type.STRING, description: "Type of roots (real_distinct, real_equal, complex_conjugate)" },
                    },
                    required: ['equation', 'solution', 'explanation', 'case'],
                },
            },
        });

        // Validate response
        if (!response || !response.equation || !response.solution) {
            return fallbackProblem;
        }
        return response as GeminiProblem;
    } catch (err) {
        console.error("Error generating problem:", err);
        return fallbackProblem;
    }
};
