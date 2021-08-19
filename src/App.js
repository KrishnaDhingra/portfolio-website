import Navbar from './components/Navbar/index.js'
import First_Home_Component from './components/First_Home_Component/index.js'
import Footer from './components/Footer/index.js'
import './index.css'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <First_Home_Component></First_Home_Component>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
