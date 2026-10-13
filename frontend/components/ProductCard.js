import ImageWithFallback from './ImageWithFallback';

export default function ProductCard({ product }) {
  const message = encodeURIComponent(`Hello, I would like to enquire about ${product.title} from Kanak Building and Materials.`);
  return <article className="product-card">
    <div className="product-image">
      <ImageWithFallback src={product.image} alt={product.alt} fallbackLabel={product.fallbackLabel} position={product.position} />
      {product.brand && <span className="jk-badge" aria-label="JK Cement product">JK <small>CEMENT</small></span>}
      <span className="product-tag">{product.tag}</span>
    </div>
    <div className="product-content">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <a className="product-link" href={`https://wa.me/919799857998?text=${message}`} target="_blank" rel="noreferrer">Enquire now <span>↗</span></a>
    </div>
  </article>;
}
