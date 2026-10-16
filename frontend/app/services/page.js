'use client';

import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/siteData';
import { useSitePreferences } from '../../components/SitePreferences';

export default function ServicesPage() {
  const { language, t } = useSitePreferences();
  const enquiry = language === 'hi'
    ? 'नमस्ते, मुझे निर्माण सामग्री चुनने में मदद चाहिए।'
    : 'Hello, I need help choosing building materials.';
  return <>
    <section className="page-hero"><div className="container narrow"><span className="eyebrow">{t('Our range')}</span><h1>{t('Materials for every stage of your')} <em>{t('build.')}</em></h1><p>{t('Explore dependable products for construction, renovation and home improvement. Ask us about availability, pricing and delivery.')}</p></div></section>
    <section className="section"><div className="container"><div className="product-grid all-products">{products.map((product) => <ProductCard key={product.title} product={product} />)}</div></div></section>
    <section className="delivery-note"><div className="container delivery-inner"><div className="delivery-icon">⌂</div><div><h3>{t('Need help choosing?')}</h3><p>{t('Tell us what you are building and our team will help you find the right materials.')}</p></div><a className="button button-primary" href={`https://wa.me/919799857998?text=${encodeURIComponent(enquiry)}`} target="_blank" rel="noreferrer">{t('Ask on WhatsApp')} ↗</a></div></section>
  </>;
}