import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function About(){
  return (<>
    <Navbar/>
    <div className="container">
      <h1>About OpenEstate</h1>
      <p>We make real estate investing accessible, transparent, and fractional. This demo uses simulated payments and a faux blockchain log.</p>
    </div>
    <Footer/>
  </>)
}
