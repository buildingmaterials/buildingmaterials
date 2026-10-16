'use client';

import Link from 'next/link';
import { useSitePreferences } from './SitePreferences';

export default function Footer() {
  const { t } = useSitePreferences();
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <Link className="brand footer-brand" href="/">
          <img className="brand-mark" src="/kanak-mark.svg" alt="" />
          <span><strong>KANAK</strong><small>{t('BUILDING & MATERIALS')}</small></span>
        </Link>
        <p className="footer-intro">{t('Your trusted local partner for quality construction materials and dependable service.')}</p>
      </div>
      <div><h4>{t('Explore')}</h4><Link href="/">{t('Home')}</Link><Link href="/services">{t('Products & services')}</Link><Link href="/about">{t('About us')}</Link><Link href="/contact">{t('Contact')}</Link></div>
      <div><h4>{t('Get in touch')}</h4><a href="tel:+919799857998">+91 97998 57998</a><a href="mailto:digvijaysinghrathore5232@gmail.com">{t('Email us')}</a><span>VPO Kunda, Tehsil Semari,<br />Salumber, Rajasthan</span></div>
      <div><h4>{t('Quick enquiry')}</h4><p>{t('Need a quote or product information?')}</p><a className="footer-whatsapp" href="https://wa.me/919799857998" target="_blank" rel="noreferrer">{t('Chat on WhatsApp')} ↗</a></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Kanak Building and Materials. {t('All Rights Reserved.')}</span></div>
  </footer>;
}