'use client';

import ImageWithFallback from './ImageWithFallback';
import { useSitePreferences } from './SitePreferences';

export default function ProductCard({ product }) {
  const { language, t } = useSitePreferences();
  const productTitle = t(product.title);
  const message = encodeURIComponent(language === 'hi'
    ? `नमस्ते, मैं कानक बिल्डिंग एंड मटेरियल्स से ${productTitle} के बारे में पूछताछ करना चाहता/चाहती हूँ।`
    : `Hello, I would like to enquire about ${product.title} from Kanak Building and Materials.`);
  return <article className="product-card">
    <div className="product-image">
      <ImageWithFallback src={product.image} alt={t(product.alt)} fallbackLabel={t(product.fallbackLabel)} />
      {product.brand && <span className="jk-badge" aria-label={t('JK Cement product')}>JK <small>CEMENT</small></span>}
      <span className="product-tag">{t(product.tag)}</span>
    </div>
    <div className="product-content">
      <h3>{productTitle}</h3>
      <p>{t(product.description)}</p>
      <a className="product-link" href={`https://wa.me/919799857998?text=${message}`} target="_blank" rel="noreferrer">{t('Enquire now')} <span>↗</span></a>
    </div>
  </article>;
}