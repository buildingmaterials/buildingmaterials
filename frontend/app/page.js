import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import ImageWithFallback from '../components/ImageWithFallback';
import ReviewsSection from '../components/ReviewsSection';
import { products } from '../lib/siteData';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Trusted building materials partner</span>
            <h1>Build better. <span>Build with confidence.</span></h1>
            <p className="hero-text">Quality cement, colours, sand, plumbing supplies and construction essentials — delivered with dependable local service in Rajasthan.</p>
            <div className="button-row">
              <a className="button button-primary" href="https://wa.me/919799857998?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20building%20materials%20and%20products." target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a>
              <Link className="button button-outline" href="/services">Explore products</Link>
            </div>
            <div className="hero-proof"><strong>22+</strong><span>years of<br />trusted service</span><i></i><strong>Local</strong><span>support &amp;<br />home delivery</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><ImageWithFallback src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85" alt="Modern building under construction" fallbackLabel="Kanak Building Materials" /></div>
            <div className="hero-badge"><span className="badge-icon">✓</span><div><strong>Reliable quality</strong><small>For every project</small></div></div>
            <div className="orange-slash"></div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-items"><div><span className="trust-symbol">◆</span><strong>Quality products</strong><small>Materials you can rely on</small></div><div><span className="trust-symbol">◷</span><strong>22+ years experience</strong><small>Knowledge that makes a difference</small></div><div><span className="trust-symbol">⌂</span><strong>Local convenience</strong><small>Easy enquiries and delivery</small></div></div></section>

      <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">What we supply</span><h2>Everything you need to <em>build</em></h2></div><Link className="text-link" href="/services">View all products <span>→</span></Link></div><div className="product-grid home-products">{products.slice(0, 4).map((product) => <ProductCard key={product.title} product={product} />)}</div></div></section>

      <section className="story-band"><div className="container story-grid"><div className="story-image"><ImageWithFallback src="https://images.unsplash.com/photo-1590644365607-1c5a9c5c8a8d?auto=format&fit=crop&w=1000&q=85" alt="Construction professional reviewing building plans" fallbackLabel="Project planning" /></div><div className="story-copy"><span className="eyebrow">Why Kanak Building and Materials</span><h2>A trusted name for every <em>foundation</em></h2><p>From a home renovation to a major construction project, we help homeowners, builders and contractors find the right materials with honest guidance and reliable service.</p><Link className="button button-dark" href="/about">Our story <span>→</span></Link></div></div></section>
      <ReviewsSection />
      <section className="cta-band"><div className="container cta-content"><div><span className="eyebrow light">Have a project in mind?</span><h2>Let’s get your materials sorted.</h2></div><Link className="button button-light" href="/contact">Send an enquiry <span>→</span></Link></div></section>
    </>
  );
}