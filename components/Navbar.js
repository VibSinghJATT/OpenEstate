import Link from 'next/link'
export default function Navbar(){
  return (
    <header className="nav">
      <div className="logo"><Link href="/">OpenEstate</Link></div>
      <nav style={{display:'flex',gap:12}}>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <a className="btn" href="#buy">Invest</a>
      </nav>
    </header>
  )
}
