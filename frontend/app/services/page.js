import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/siteData';

export const metadata = { title: 'Products & Services | Kanak Building and Materials' };

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container narrow"><span className="eyebrow">Our range</span><h1>Materials for every stage of your <em>build.</em></h1><p>Explore dependable products for construction, renovation and home improvement. Ask us about availability, pricing and delivery.</p></div></section>
    <section className="section"><div className="container"><div className="product-grid all-products">{products.map((product) => <ProductCard key={product.title} product={product} />)}</div></div></section>
    <section className="delivery-note"><div className="container delivery-inner"><div className="delivery-icon">⌂</div><div><h3>Need help choosing?</h3><p>Tell us what you are building and our team will help you find the right materials.</p></div><a className="button button-primary" href="https://wa.me/919799857998?text=Hello%2C%20I%20need%20help%20choosing%20building%20materials." target="_blank" rel="noreferrer">Ask on WhatsApp ↗</a></div></section>
  </>;
}