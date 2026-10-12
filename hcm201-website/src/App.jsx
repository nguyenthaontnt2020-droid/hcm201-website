import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Podcast from './components/Podcast';
import Chapters from './components/Chapters';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Hero />
        <Overview />
        <Podcast />
        <Chapters />
        <Quiz />
      </main>
      <Footer />
    </div>
  );
}

export default App;