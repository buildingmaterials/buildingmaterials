'use client';

import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { useSitePreferences } from '../../components/SitePreferences';

export default function AboutPage() {
  const { t } = useSitePreferences();
  return <>
    <PageHero
      className="about-hero"
      eyebrow={t('Our story')}
      title={<>{t('Building trust, one project at a')} <em>{t('time.')}</em></>}
      description={t('Kanak Building and Materials is your trusted local destination for quality construction materials and building essentials.')}
      image="/owner-photo.jpg"
      imageAlt={t('Photo of Digvijay Singh Rathore, owner of Kanak Building and Materials')}
    />
    <section className="section"><div className="container about-grid"><div className="about-photo"><img src="/owner-photo.jpg" alt={t('Photo of Digvijay Singh Rathore, owner of Kanak Building and Materials')} /><span className="owner-photo-label">{t('Our owner')}</span><span className="owner-name-label">Digvijay Singh Rathore</span><div className="experience-card"><strong>4+</strong><span>{t('years of')}<br />{t('local experience')}</span></div></div><div className="about-copy"><span className="eyebrow">{t('Who we are')}</span><h2>{t('Materials you can trust.')} <em>{t('Service you can count on.')}</em></h2><p>{t('With 4+ years of local experience, Kanak Building and Materials helps customers source quality construction materials with helpful service.')}</p><p>{t('We serve homeowners, builders and contractors with everyday building materials, including roofing, waterproofing, plumbing and hardware products.')}</p><p>{t('Ask our team about delivery by tractor or tempo. Vehicle options depend on your load, location and availability.')}</p><Link className="button button-dark" href="/contact">{t('Talk to our team')} →</Link></div></div></section>
    <section className="values-section"><div className="container"><div className="section-heading centered"><div><span className="eyebrow">{t('What guides us')}</span><h2>{t('Our promise to')} <em>{t('you')}</em></h2></div></div><div className="values-grid"><div><b>01</b><h3>{t('Quality first')}</h3><p>{t('We focus on dependable products that help your work last.')}</p></div><div><b>02</b><h3>{t('Helpful service')}</h3><p>{t('Clear guidance and easy communication at every step.')}</p></div><div><b>03</b><h3>{t('Local trust')}</h3><p>{t('A familiar, reliable partner for customers across the region.')}</p></div></div></div></section>
  </>;
}