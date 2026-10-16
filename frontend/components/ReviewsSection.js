'use client';

import { useSitePreferences } from './SitePreferences';

export default function ReviewsSection() {
  const { language, t } = useSitePreferences();
  const reviewMessage = language === 'hi'
    ? 'नमस्ते, मैं कानक बिल्डिंग एंड मटेरियल्स के साथ अपना अनुभव साझा करना चाहता/चाहती हूँ। कृपया मेरा नाम, क्षेत्र और समीक्षा प्रकाशित करने की अनुमति भी पूछें।'
    : 'Hello, I would like to share my experience with Kanak Building and Materials. Please ask me for my name, area and permission before publishing my review.';
  return <section className="section reviews-section"><div className="container reviews-layout"><div><span className="eyebrow">{t('Customer reviews')}</span><h2>{t('Have you purchased from us?')}</h2><p className="review-intro">{t('We only publish genuine customer feedback with permission. Share what you bought and how we did.')}</p><a className="button button-outline-dark" href={`https://wa.me/919799857998?text=${encodeURIComponent(reviewMessage)}`} target="_blank" rel="noreferrer">{t('Leave a review on WhatsApp')} ↗</a></div><div className="review-placeholder"><div className="quote-mark">“</div><p>{t('Customer reviews will be added here after customers share their feedback.')}</p><small>{t('Send your review and tell us whether you give permission to publish it.')}</small></div></div></section>;
}