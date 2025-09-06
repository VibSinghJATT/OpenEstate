import {useState} from 'react'
export default function PaymentModal({onClose,property}){
  const [method,setMethod]=useState('bank')
  const [status,setStatus]=useState('')
  const simulate = async ()=>{
    setStatus('Processing...')
    const res = await fetch('/api/payments/simulate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        method, propertyId:property?.id||'pune-2bhk', tokens:10, user:'demo@openestate.app'
      })
    })
    const j = await res.json(); setStatus(j.message)
    setTimeout(()=> onClose && onClose(), 1200)
  }
  return (
    <div style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:60}}>
      <div style={{width:520}} className="card">
        <h3 style={{margin:0}}>Apple-style Checkout</h3>
        <p style={{color:'#9a9a9a'}}>Choose method</p>
        <div style={{display:'flex',gap:10}}>
          <button className="btn" onClick={()=>setMethod('bank')} style={{flex:1,background:method==='bank'?'#0ea5e9':''}}>Bank UPI</button>
          <button className="btn" onClick={()=>setMethod('paypal')} style={{flex:1,background:method==='paypal'?'#0ea5e9':''}}>PayPal</button>
          <button className="btn" onClick={()=>setMethod('cashfree')} style={{flex:1,background:method==='cashfree'?'#0ea5e9':''}}>Cashfree</button>
        </div>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <button className="btn" onClick={simulate}>Simulate Payment</button>
          <button className="btn" onClick={()=>onClose && onClose()}>Cancel</button>
        </div>
        <div style={{color:'#9a9a9a',marginTop:10}}>{status}</div>
      </div>
    </div>
  )
}
