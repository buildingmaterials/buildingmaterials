'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSitePreferences } from './SitePreferences';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, theme, setTheme, t } = useSitePreferences();
  const links = [['Home', '/'], ['Products & Services', '/services'], ['About us', '/about'], ['Contact', '/contact']];
  const enquiry = language === 'hi'
    ? 'नमस्ते, मैं आपके निर्माण सामग्री और उत्पादों के बारे में पूछताछ करना चाहता/चाहती हूँ।'
    : 'Hello, I would like to enquire about your building materials and products.';

  return <header className="site-header">
    <div className="container nav-wrap">
      <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label={t('Kanak Building and Materials home')}>
        <img className="brand-mark" src="/kanak-mark.svg" alt="" />
        <span><strong>KANAK</strong><small>{t('BUILDING & MATERIALS')}</small></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? t('Close navigation') : t('Open navigation')} aria-expanded={open}>☰</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, href]) => <Link className={pathname === href ? 'active' : ''} key={href} href={href} onClick={() => setOpen(false)}>{t(label)}</Link>)}
        <div className="site-controls">
          <div className="language-controls" role="group" aria-label={t('Website language')}>
            <button className={language === 'en' ? 'selected' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <button className={language === 'hi' ? 'selected' : ''} onClick={() => setLanguage('hi')} aria-pressed={language === 'hi'}>हिन्दी</button>
          </div>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? t('Switch to dark mode') : t('Switch to light mode')} title={theme === 'light' ? t('Dark mode') : t('Light mode')}>{theme === 'light' ? '☾' : '☀'}</button>
        </div>
        <a className="nav-cta" href={`https://wa.me/919799857998?text=${encodeURIComponent(enquiry)}`} target="_blank" rel="noreferrer">{t('Enquire now')} <span>↗</span></a>
      </nav>
    </div>
  </header>;
}
