'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [['Home', '/'], ['Products & Services', '/services'], ['About us', '/about'], ['Contact', '/contact']];
  return <header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/" onClick={() => setOpen(false)}><span className="brand-mark">K</span><span><strong>KANAK</strong><small>BUILDING &amp; MATERIALS</small></span></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <Link className={pathname === href ? 'active' : ''} key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="nav-cta" href="https://wa.me/919799857998?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20building%20materials%20and%20products." target="_blank" rel="noreferrer">Enquire now <span>↗</span></a></nav></div></header>;
}