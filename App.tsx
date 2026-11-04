
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
import Landing from './components/Landing';
import TopicLanding from './components/TopicLanding';
import { topicFromHash } from './components/topics';

const App: React.FC = () => {
    // Hash routing: "#topik/4-2" shows that subtopic's landing page; other hashes show the main page.
    const [hash, setHash] = React.useState(window.location.hash);

    React.useEffect(() => {
        const onChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', onChange);
        return () => window.removeEventListener('hashchange', onChange);
    }, []);

    const topic = topicFromHash(hash);
    if (topic) {
        return <TopicLanding topic={topic} />;
    }

    return (
        <div className="bg-background-light min-h-screen text-text-dark">
            <Landing />
            <main id="tutor" className="container mx-auto p-4 md:p-8 scroll-mt-20">
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
