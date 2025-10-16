
import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import FormulaDisplay from './components/FormulaDisplay';
import InteractiveSolver from './components/InteractiveSolver';
import WorkedExamples from './components/WorkedExamples';
import PracticeArea from './components/PracticeArea';
import ReferenceCard from './components/ReferenceCard';
import Tips from './components/Tips';
import Guide from './components/Guide';

const App: React.FC = () => {
    return (
        <div className="bg-background-light min-h-screen text-text-dark">
            <main className="container mx-auto p-4 md:p-8">
                <Header />

                <div className="space-y-8">
                    <Guide />
                    <Introduction />
                    <FormulaDisplay />
                    <InteractiveSolver />
                    <WorkedExamples />
                    <PracticeArea />
                    <ReferenceCard />
                    <Tips />
                </div>

                <footer className="text-center text-text-light mt-12 pb-4">
                    <p>&copy; 2024 Tutor Interaktif. Dibangunkan dengan Google AI.</p>
                </footer>
            </main>
        </div>
    );
};

export default App;
