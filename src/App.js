import Navbar from './components/Navbar/index.js'
import First_Home_Component from './components/First_Home_Component/index.js'
import Footer from './components/Footer/index.js'
import Home_Contact from './components/Home_Contact/index.js'
import Contact from './components/Contact/index.js'
import Work from './components/Work/index.js'
import Work_Service from './Services/Work/index.js'
import Home_Service from './Services/Home/index.js'
import Contact_Service from './Services/Contact/index.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'

import './index.css'
function App() {

  return (
    <Router>
        <div className="App">

          <Navbar></Navbar>

          <div className="container">

            <Switch>
              <Route path={['/', '/portfolio-website']} exact component={Home_Service}/>
              <Route path='/work' exact component={Work_Service}/>
              <Route path='/contact' exact component={Contact_Service}/>
            </Switch>

            <Home_Contact></Home_Contact>
            <Footer></Footer>

          </div>

        </div>
    </Router>
  );
}

export default App;
