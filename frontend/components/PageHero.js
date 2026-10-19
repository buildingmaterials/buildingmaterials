'use client';

import ImageWithFallback from './ImageWithFallback';

export default function PageHero({ eyebrow, title, description, image, imageAlt, className = '' }) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="page-hero-image">
          <ImageWithFallback src={image} alt={imageAlt} fallbackLabel={eyebrow} />
        </div>
      </div>
    </section>
  );
}
