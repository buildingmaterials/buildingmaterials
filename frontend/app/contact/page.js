'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import { useSitePreferences } from '../../components/SitePreferences';

const whatsappBase = 'https://wa.me/919799857998';

export default function ContactPage() {
  const { language, t } = useSitePreferences();
  const greeting = language === 'hi'
    ? 'नमस्ते, मैं आपके निर्माण सामग्री और उत्पादों के बारे में पूछताछ करना चाहता/चाहती हूँ।'
    : 'Hello, I would like to enquire about your building materials and products.';
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' });
  const [error, setError] = useState('');

  function updateField(event) { setForm({ ...form, [event.target.name]: event.target.value }); }
  function submitEnquiry(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.product.trim() || !form.message.trim()) { setError('Please complete all fields before sending your enquiry.'); return; }
    setError('');
    const text = language === 'hi'
      ? `नमस्ते, मैं निर्माण सामग्री के बारे में पूछताछ करना चाहता/चाहती हूँ।%0A%0Aनाम: ${encodeURIComponent(form.name)}%0Aफ़ोन: ${encodeURIComponent(form.phone)}%0Aउत्पाद/सेवा: ${encodeURIComponent(form.product)}%0Aसंदेश: ${encodeURIComponent(form.message)}`
      : `Hello, I would like to enquire about building materials.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AProduct/service: ${encodeURIComponent(form.product)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`${whatsappBase}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  return <>
    <PageHero
      className="contact-hero"
      eyebrow={t('Get in touch')}
      title={<>{t('Let’s talk about your')} <em>{t('project.')}</em></>}
      description={t('Ask for pricing, availability, delivery information or help selecting the right materials.')}
      image="/delivery/tempo-loaded-stock.png"
      imageAlt={t('Building materials loaded for local delivery')}
    />
    <section className="section"><div className="container contact-grid"><div className="contact-info"><span className="eyebrow">{t('Contact details')}</span><h2>{t('We’re here to')} <em>{t('help.')}</em></h2><p>{t('Reach out through your preferred channel and our team will get back to you.')}</p><div className="detail-list"><div><span className="detail-icon">⌂</span><div><small>{t('Visit us')}</small><strong>VPO Kunda, Tehsil Semari,<br />District Salumber, Rajasthan, India</strong></div></div><div><span className="detail-icon">◉</span><div><small>{t('Call us')}</small><a href="tel:+919799857998">+91 97998 57998</a></div></div><div><span className="detail-icon">@</span><div><small>{t('Email us')}</small><a href="mailto:digvijaysinghrathore5232@gmail.com?subject=Product%20Enquiry%20%E2%80%93%20Kanak%20Building%20and%20Materials">digvijaysinghrathore5232@gmail.com</a></div></div></div><div className="contact-actions"><a className="button button-dark" href="mailto:digvijaysinghrathore5232@gmail.com?subject=Product%20Enquiry%20%E2%80%93%20Kanak%20Building%20and%20Materials">{t('Send an email')} ↗</a><a className="button button-whatsapp" href={`${whatsappBase}?text=${encodeURIComponent(greeting)}`} target="_blank" rel="noreferrer">{t('Chat on WhatsApp')} ↗</a></div></div><form className="enquiry-form" onSubmit={submitEnquiry}><span className="eyebrow">{t('Quick enquiry')}</span><h2>{t('Tell us what you')} <em>{t('need.')}</em></h2><label>{t('Full name')}<input name="name" value={form.name} onChange={updateField} placeholder={t('Your name')} /></label><label>{t('Phone number')}<input name="phone" value={form.phone} onChange={updateField} placeholder={t('Your phone number')} type="tel" /></label><label>{t('Product or service required')}<input name="product" value={form.product} onChange={updateField} placeholder={t('e.g. Cement, paint, sand')} /></label><label>{t('Message')}<textarea name="message" value={form.message} onChange={updateField} placeholder={t('Tell us a little about your requirement')} rows="4" /></label>{error && <p className="form-error">{t(error)}</p>}<button className="button button-primary" type="submit">{t('Send enquiry on WhatsApp')} <span>↗</span></button><small className="form-note">{t('Your enquiry opens directly in WhatsApp.')}</small></form></div></section>
  </>;
}