import {useRouter} from 'next/router'
import {useEffect,useState} from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const PaymentModal = dynamic(()=>import('../../components/PaymentModal'),{ssr:false})

export default function PropertyPage(){
  const router = useRouter()
  const {id} = router.query
  const [p,setP]=useState(null)
  const [show,setShow]=useState(false)
  useEffect(()=>{
    if(!id) return
    fetch('/api/data/properties').then(r=>r.json()).then(all=>{
      setP(all.find(x=>x.id===id))
    })
  },[id])
  if(!p) return null
  return (<>
    <Navbar/>
    <div className="container">
      <div className="card">
        <h1>{p.title}</h1>
        <p>Price: ₹{p.price.toLocaleString()} • Tokens: {p.tokens.toLocaleString()} • Rent/mo: ₹{p.rentMonthly.toLocaleString()}</p>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a className="btn" href="/docs/sale_deed_sample.pdf" target="_blank" rel="noreferrer">Sale Deed</a>
          <a className="btn" href="/docs/valuation_report_sample.pdf" target="_blank" rel="noreferrer">Valuation</a>
          <a className="btn" href="/docs/rera_certificate_sample.pdf" target="_blank" rel="noreferrer">RERA Cert</a>
          <button className="btn" onClick={()=>setShow(true)}>Buy Tokens</button>
        </div>
      </div>
    </div>
    <Footer/>
    {show && <PaymentModal property={p} onClose={()=>setShow(false)} />}
  </>)
}
