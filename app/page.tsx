import Features from './components/Features';
import Guide from './components/Guide';
import Hero from './components/Hero';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Guide />
      <Features />
    </main>
  );
};

export default Home;
