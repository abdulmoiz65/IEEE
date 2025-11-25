import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutConference from '../components/AboutConference';
import ThemeSection from '../components/ThemeSection';
import StructureSection from '../components/StructureSection';
import WorkshopsSection from '../components/WorkshopsSection';

function Home() {
  return (
    <>
      <Navbar />
      <Header /> 
      <AboutConference /> 
      <ThemeSection />
      <StructureSection />
      <WorkshopsSection />
      <Footer />

    </>
  );
}

export default Home;
