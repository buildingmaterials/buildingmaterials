'use client';

import ProductCard from '../../components/ProductCard';
import ImageWithFallback from '../../components/ImageWithFallback';
import PageHero from '../../components/PageHero';
import { products } from '../../lib/siteData';
import { useSitePreferences } from '../../components/SitePreferences';

export default function ServicesPage() {
  const { language, t } = useSitePreferences();
  const enquiry = language === 'hi'
    ? 'नमस्ते, मुझे निर्माण सामग्री चुनने में मदद चाहिए।'
    : 'Hello, I need help choosing building materials.';
  return <>
    <PageHero
      eyebrow={t('Our range')}
      title={<>{t('Materials for every stage of your')} <em>{t('build.')}</em></>}
      description={t('Explore dependable products for construction, renovation and home improvement. Ask us about availability, pricing and delivery.')}
      image="/products/jk-lakshmi-cement.jpg"
      imageAlt={t('Bag of JK Lakshmi Green+ Cement')}
    />
    <section className="section"><div className="container"><div className="product-grid all-products">{products.map((product) => <ProductCard key={product.title} product={product} />)}</div></div></section>
    <section className="delivery-note"><div className="container delivery-showcase">
      <div className="delivery-vehicle"><img src="/delivery/tractor.svg" alt="" /><span>{t('Tractor delivery')}</span></div>
      <div className="delivery-vehicle"><img src="/delivery/tempo.svg" alt="" /><span>{t('Tempo delivery')}</span></div>
      <div className="delivery-real-photo"><ImageWithFallback src="/delivery/tempo-loaded-stock.png" alt={t('Local tempo loading building materials for delivery')} fallbackLabel={t('Local material delivery')} /></div>
      <div className="delivery-copy"><h3>{t('Site delivery by tractor or tempo')}</h3><p>{t('We can arrange delivery to your site by tractor or tempo, depending on your load, location and vehicle availability. Contact us to confirm.')}</p><a className="button button-primary" href={`https://wa.me/919799857998?text=${encodeURIComponent(enquiry)}`} target="_blank" rel="noreferrer">{t('Ask on WhatsApp')} ↗</a></div>
    </div></section>
  </>;
}