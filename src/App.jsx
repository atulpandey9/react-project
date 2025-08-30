import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
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
  </>
);
}

export default App
