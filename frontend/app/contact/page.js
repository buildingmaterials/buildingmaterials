'use client';

import { useState } from 'react';

const whatsappBase = 'https://wa.me/919799857998';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' });
  const [error, setError] = useState('');

  function updateField(event) { setForm({ ...form, [event.target.name]: event.target.value }); }
  function submitEnquiry(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.product.trim() || !form.message.trim()) { setError('Please complete all fields before sending your enquiry.'); return; }
    setError('');
    const text = `Hello, I would like to enquire about building materials.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AProduct/service: ${encodeURIComponent(form.product)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`${whatsappBase}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  return <>
    <section className="page-hero contact-hero"><div className="container narrow"><span className="eyebrow">Get in touch</span><h1>Let’s talk about your <em>project.</em></h1><p>Ask for pricing, availability, delivery information or help selecting the right materials.</p></div></section>
    <section className="section"><div className="container contact-grid"><div className="contact-info"><span className="eyebrow">Contact details</span><h2>We’re here to <em>help.</em></h2><p>Reach out through your preferred channel and our team will get back to you.</p><div className="detail-list"><div><span className="detail-icon">⌂</span><div><small>Visit us</small><strong>VPO Kunda, Tehsil Semari,<br />District Salumber, Rajasthan, India</strong></div></div><div><span className="detail-icon">◉</span><div><small>Call us</small><a href="tel:+919799857998">+91 97998 57998</a></div></div><div><span className="detail-icon">@</span><div><small>Email us</small><a href="mailto:digvijaysinghrathore5232@gmail.com?subject=Product%20Enquiry%20%E2%80%93%20Kanak%20Building%20and%20Materials">digvijaysinghrathore5232@gmail.com</a></div></div></div><div className="contact-actions"><a className="button button-dark" href="mailto:digvijaysinghrathore5232@gmail.com?subject=Product%20Enquiry%20%E2%80%93%20Kanak%20Building%20and%20Materials">Send an email ↗</a><a className="button button-whatsapp" href={`${whatsappBase}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20building%20materials%20and%20products.`} target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a></div></div><form className="enquiry-form" onSubmit={submitEnquiry}><span className="eyebrow">Quick enquiry</span><h2>Tell us what you <em>need.</em></h2><label>Full name<input name="name" value={form.name} onChange={updateField} placeholder="Your name" /></label><label>Phone number<input name="phone" value={form.phone} onChange={updateField} placeholder="Your phone number" type="tel" /></label><label>Product or service required<input name="product" value={form.product} onChange={updateField} placeholder="e.g. Cement, paint, sand" /></label><label>Message<textarea name="message" value={form.message} onChange={updateField} placeholder="Tell us a little about your requirement" rows="4" /></label>{error && <p className="form-error">{error}</p>}<button className="button button-primary" type="submit">Send enquiry on WhatsApp <span>↗</span></button><small className="form-note">Your enquiry opens directly in WhatsApp.</small></form></div></section>
  </>;
}