import Camp from './components/Camp';
import Features from './components/Features';
import GetApp from './components/GetApp';
import Guide from './components/Guide';
import Hero from './components/Hero';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </main>
  );
};

export default Home;
