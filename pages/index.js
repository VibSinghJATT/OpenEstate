import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const PaymentModal = dynamic(()=>import('../components/PaymentModal'),{ssr:false})

export default function Home(){
  const [showModal,setShowModal]=useState(false)
  const [properties,setProperties]=useState([])
  useEffect(()=>{
    fetch('/api/data/properties').then(r=>r.json()).then(j=>setProperties(j))
    import('gsap').then(({gsap})=>{
      gsap.from('.hero-title',{y:40,opacity:0,duration:0.9})
      gsap.utils.toArray('.prop-card').forEach((el,i)=>{
        gsap.from(el,{y:30,opacity:0,duration:0.8,delay:0.15*i})
      })
    })
  },[])
  return (<>
    <Navbar/>
    <main className="container">
      <section className="hero card">
        <h1 className="hero-title" style={{fontSize:40}}>Own real estate like buying shares.</h1>
        <p style={{color:'#9a9a9a'}}>Fractional, transparent, and compliant (demo).</p>
        <button id="buy" className="btn" onClick={()=>setShowModal(true)}>Buy Tokens (Simulate)</button>
      </section>
      <section style={{marginTop:24}}>
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {properties.map(p=>(
            <div key={p.id} className="card prop-card">
              <h3>{p.title}</h3>
              <p>Price: ₹{p.price.toLocaleString()}</p>
              <p>Tokens: {p.tokens.toLocaleString()}</p>
              <p>Rent/mo: ₹{p.rentMonthly.toLocaleString()}</p>
              <a className="btn" href={`/property/${p.id}`}>View</a>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer/>
    {showModal && <PaymentModal onClose={()=>setShowModal(false)} />}
  </>)
}
