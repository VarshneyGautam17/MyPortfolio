import './App.css';
import AboutMe from './Components/AboutMe';
import Certificates from './Components/Certificates';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Maincon1 from './Components/Maincon1';
import Maincon2 from './Components/Maincon2';
import Projects from './Components/Projects';
import WorkExp from './Components/WorkExp';
import img2 from "./Images/ImportedPhoto_1709728437815.jpg";


function App() {
  return (
    <div class="App">
      <Header />
      
      <Maincon1 />
      <AboutMe />
      <WorkExp />
      <Projects />
      <Certificates />
      <ContactMe />
      <Footer />
      
      
    </div>
  );
}

export default App;
