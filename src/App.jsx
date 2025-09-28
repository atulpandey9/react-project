import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Pricing from './Components/Pricing';
import Gallery from './Components/Gallery';
import Appointment from './Components/Appointment';
import Footer from './Components/Footer';
function App(){
 return (
  <>
  <section className='img-section'>
  <Navbar/>
  <Hero/>
</section>
{/* service section */}
<section className='service-container'>
<Service/>
</section>

{/* pricing plans section */}
<section className='pricing-plan'>
<Pricing/>
</section>

{/* {gallery-section} */}
<section className='gallery-section'>
<Gallery/>
</section>
{/* appointment section */}
<section className='appointment-section'>
<Appointment/>
</section>

<footer className='foot-section'>
  <Footer/>
</footer>

  </>
);
}

export default App
