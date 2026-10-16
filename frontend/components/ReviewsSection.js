'use client';

import { useSitePreferences } from './SitePreferences';

export default function ReviewsSection() {
  const { language, t } = useSitePreferences();
  const reviewMessage = language === 'hi'
    ? 'नमस्ते, मैं कानक बिल्डिंग एंड मटेरियल्स के साथ अपना अनुभव साझा करना चाहता/चाहती हूँ।'
    : 'Hello, I would like to share my experience with Kanak Building and Materials.';
  return <section className="section reviews-section"><div className="container reviews-layout"><div><span className="eyebrow">{t('Customer voice')}</span><h2>{t('Good work starts with')} <em>{t('good trust.')}</em></h2><p className="review-intro">{t('We are collecting genuine customer experiences. Have you purchased from us? We would love to hear how we did.')}</p><a className="button button-outline-dark" href={`https://wa.me/919799857998?text=${encodeURIComponent(reviewMessage)}`} target="_blank" rel="noreferrer">{t('Share your experience')} ↗</a></div><div className="review-placeholder"><div className="quote-mark">“</div><p>{t('Genuine customer reviews will appear here soon.')}</p><small>{t('Be the first to share your experience with Kanak Building and Materials.')}</small></div></div></section>;
}