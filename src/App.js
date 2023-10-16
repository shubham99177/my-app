// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>

      {/* <Navbar addlink ="addlink" /> */}
      <Navbar />
      <Textform name="Enter the text to analyze below" />

    </>
  )
}

export default App;
