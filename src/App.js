import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
    <Navbar title = "Text Utility" about = "About Us" contact = "Contact Us"/>
    <TextForm />
  </>
  );
}

export default App;
