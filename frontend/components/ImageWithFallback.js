'use client';

import { useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '', fallbackLabel = 'Image unavailable' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
      <span>{fallbackLabel}</span>
    </div>;
  }

  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}