import "./App.css";
import Main from "./Components/Main";
import Product from "./Components/Product";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <div className="app">
      <Navbar/>
      <Main/>
      <Product/>
      <About/>
      <Footer/>
      </div>
        
    </>
  );
}

export default App;
