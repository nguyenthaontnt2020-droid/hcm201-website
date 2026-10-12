import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import YoutubeLectures from './components/YoutubeLectures';
import Chapters from './components/Chapters';
import KahootQuiz from './components/KahootQuiz';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Hero />
        <Overview />
        <YoutubeLectures />
        <Chapters />
        <KahootQuiz />
      </main>
      <Footer />
    </div>
  );
}

export default App;