'use client';

import { useEffect, useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import { useSitePreferences } from './SitePreferences';

const slides = [
  {
    category: 'Paints & colours',
    image: '/products/nerolac-paints.jpg',
    alt: 'Nerolac interior and exterior paint buckets',
    className: 'paint'
  },
  {
    category: 'Cement',
    image: '/products/jk-lakshmi-cement.jpg',
    alt: 'Bag of JK Lakshmi Green+ Cement',
    className: 'cement'
  },
  {
    category: 'Plumbing',
    image: '/products/patel-pvc-pipes.jpg',
    alt: 'Patel PVC pipes in assorted colours',
    className: 'plumbing'
  },
  {
    category: 'Roofing',
    image: '/products/clay-roof-tiles.png',
    alt: 'Terracotta clay roof tiles',
    className: 'roofing'
  }
];

export default function HeroSlider() {
  const { t } = useSitePreferences();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slide = slides[activeSlide];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isHovered || isFocused || prefersReducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isHovered, isFocused, prefersReducedMotion]);

  function showSlide(index) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <div
      className={`hero-visual hero-slide--${slide.className}`}
      role="region"
      aria-label={t('Featured product categories')}
      aria-roledescription={t('carousel')}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
    >
      <div className="hero-image-wrap hero-slider-frame">
        <ImageWithFallback
          key={slide.image}
          className="hero-slider-image"
          src={slide.image}
          alt={t(slide.alt)}
          fallbackLabel={t(slide.category)}
        />
        <div className="hero-slide-label" aria-live="polite">
          <span>{t('Featured category')}</span>
          <strong>{t(slide.category)}</strong>
        </div>
      </div>
      <div className="hero-badge"><span className="badge-icon">✓</span><div><strong>{t('Local delivery')}</strong><small>{t('Tractor and tempo options')}</small></div></div>
      <div className="hero-slider-controls" aria-label={t('Choose a product category')}>
        {slides.map((item, index) => (
          <button
            key={item.category}
            type="button"
            className={index === activeSlide ? 'active' : ''}
            aria-label={`${t('Show')} ${t(item.category)}`}
            aria-pressed={index === activeSlide}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
      <div className="orange-slash"></div>
    </div>
  );
}
