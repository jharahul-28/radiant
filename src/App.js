import './App.css';
import Footer from './Components/Footer_1';
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer />
    </div>
  );
}

export default App;
