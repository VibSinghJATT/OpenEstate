import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useEffect, useState} from 'react'
export default function Dashboard(){
  const [tx,setTx]=useState([]); const [bc,setBc]=useState([])
  useEffect(()=>{
    fetch('/api/data/transactions').then(r=>r.json()).then(setTx)
    fetch('/api/data/blockchain').then(r=>r.json()).then(setBc)
  },[])
  return (<>
    <Navbar/>
    <div className="container">
      <h1>Your Dashboard</h1>
      <div className="card" style={{marginTop:16}}>
        <h3>Recent Transactions</h3>
        {tx.length===0?<p>No transactions yet.</p>:
          <ul>{tx.map(t=>(<li key={t.id}>{t.time} • {t.user} • {t.method} • ₹{t.amount}</li>))}</ul>}
      </div>
      <div className="card" style={{marginTop:16}}>
        <h3>Blockchain Explorer (Simulated)</h3>
        <table className="table"><thead><tr><th>Hash</th><th>Action</th><th>Tokens</th><th>Status</th></tr></thead>
          <tbody>{bc.map(b=>(<tr key={b.hash}><td>{b.hash}</td><td>{b.action}</td><td>{b.tokens}</td><td>{b.status}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
    <Footer/>
  </>)
}
