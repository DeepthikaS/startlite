import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Services from './components/servicescontainer/services'
import Pricing from './components/pricingcontainer/pricing'
import Calltoaction from './components/calltoaction'
import Testimonial from './components/testimonialcontainer/testimonial'
import Client from './components/clientcontainer/client'
import Contact from './components/contactcontainer/contact'
import Footer from './components/footercontainer/footer'
import './components/assets/js/main.js'


import './components/assets/css/bootstrap.min.css'
import './components/assets/css/default.css'
import './components/assets/css/LineIcons.css'
import './components/assets/css/magnific-popup.css'
import './components/assets/css/style.css'
import './components/assets/css/style.css.map'



function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <Pricing/>
      <Calltoaction/>
      <Testimonial/>
      <Client/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
