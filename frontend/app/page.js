'use client';

import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import ImageWithFallback from '../components/ImageWithFallback';
import HeroSlider from '../components/HeroSlider';
import ReviewsSection from '../components/ReviewsSection';
import { products } from '../lib/siteData';
import { useSitePreferences } from '../components/SitePreferences';

export default function HomePage() {
  const { language, t } = useSitePreferences();
  const enquiry = language === 'hi'
    ? 'नमस्ते, मैं आपके निर्माण सामग्री और उत्पादों के बारे में पूछताछ करना चाहता/चाहती हूँ।'
    : 'Hello, I would like to enquire about your building materials and products.';
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{t('Trusted building materials partner')}</span>
            <h1>{t('Build better.')} <span>{t('Build with confidence.')}</span></h1>
            <p className="hero-text">{t('Find cement, paints, roof tiles, waterproofing, plumbing and hardware for your project — with friendly local service and delivery options in Rajasthan.')}</p>
            <div className="button-row">
              <a className="button button-primary" href={`https://wa.me/919799857998?text=${encodeURIComponent(enquiry)}`} target="_blank" rel="noreferrer">{t('Chat on WhatsApp')} <span>↗</span></a>
              <Link className="button button-outline" href="/services">{t('Explore products')}</Link>
            </div>
            <div className="hero-proof"><strong>4+</strong><span>{t('years of')}<br />{t('local experience')}</span><i></i><strong>{t('Tractor & tempo')}</strong><span>{t('site delivery')}<br />{t('available locally')}</span></div>
          </div>
          <HeroSlider />
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-items"><div><span className="trust-symbol">◆</span><strong>{t('Quality products')}</strong><small>{t('Materials you can rely on')}</small></div><div><span className="trust-symbol">◷</span><strong>{t('4+ years of experience')}</strong><small>{t('Local experience and helpful service')}</small></div><div><span className="trust-symbol">⌂</span><strong>{t('Tractor and tempo delivery')}</strong><small>{t('Delivery to your site, availability permitting')}</small></div></div></section>

      <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">{t('What we supply')}</span><h2>{t('Everything you need to')} <em>{t('build')}</em></h2></div><Link className="text-link" href="/services">{t('View all products')} <span>→</span></Link></div><div className="product-grid home-products">{products.filter((product) => product.featured).map((product) => <ProductCard key={product.title} product={product} />)}</div></div></section>

      <section className="story-band"><div className="container story-grid"><div className="story-image"><ImageWithFallback src="/products/patel-pvc-pipes.jpg" alt={t('Patel PVC pipe stock at the Kanak shop')} fallbackLabel={t('Plumbing supplies')} /></div><div className="story-copy"><span className="eyebrow">{t('Why Kanak Building and Materials')}</span><h2>{t('A trusted name for every')} <em>{t('foundation')}</em></h2><p>{t('From a home renovation to a major construction project, we help homeowners, builders and contractors find the right materials with honest guidance and reliable service.')}</p><Link className="button button-dark" href="/about">{t('Our story')} <span>→</span></Link></div></div></section>
      <ReviewsSection />
      <section className="cta-band"><div className="container cta-content"><div><span className="eyebrow light">{t('Have a project in mind?')}</span><h2>{t('Let’s get your materials sorted.')}</h2></div><Link className="button button-light" href="/contact">{t('Send an enquiry')} <span>→</span></Link></div></section>
    </>
  );
}