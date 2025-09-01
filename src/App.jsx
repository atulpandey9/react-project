import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Pricing from './Components/Pricing';
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
  </>
);
}

export default App
