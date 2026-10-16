'use client';

import { useSitePreferences } from './SitePreferences';

function WhatsAppLogo() {
  return <svg className="whatsapp-logo" viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="currentColor" />
    <path fill="#fff" d="M23.3 8.6A10.25 10.25 0 0 0 16 5.58c-5.7 0-10.34 4.64-10.34 10.34 0 1.82.48 3.6 1.4 5.17L5.57 26.4l5.43-1.43a10.34 10.34 0 0 0 5 1.28h.01c5.7 0 10.34-4.64 10.34-10.34 0-2.76-1.08-5.35-3.05-7.31Zm-7.3 15.88h-.01a8.6 8.6 0 0 1-4.38-1.2l-.31-.18-3.22.84.86-3.14-.2-.32a8.6 8.6 0 1 1 7.26 4Zm4.72-6.44c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.27-1.52-1.42-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.17 1.83 2.8 4.43 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3Z" />
  </svg>;
}

export default function FloatingActions() {
  const { language, t } = useSitePreferences();
  const greeting = language === 'hi'
    ? 'नमस्ते, मैं आपके निर्माण सामग्री और उत्पादों के बारे में पूछताछ करना चाहता/चाहती हूँ।'
    : 'Hello, I would like to enquire about your building materials and products.';
  return <div className="floating-actions">
    <a className="float-button whatsapp-float" href={`https://wa.me/919799857998?text=${encodeURIComponent(greeting)}`} target="_blank" rel="noreferrer" aria-label={t('Chat with Kanak Building and Materials on WhatsApp')}><WhatsAppLogo /><b>{t('WhatsApp')}</b></a>
  </div>;
}