'use client';

import { useEffect, useRef, useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '', fallbackLabel = 'Image unavailable', position }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  // The browser may report a load error before React attaches onError,
  // so also check the image after mount.
  useEffect(() => {
    setFailed(false);
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed) {
    return <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
      <span>{fallbackLabel}</span>
    </div>;
  }

  return <img ref={ref} className={className} src={src} alt={alt} loading="lazy" style={position ? { objectPosition: position } : undefined} onError={() => setFailed(true)} />;
}
