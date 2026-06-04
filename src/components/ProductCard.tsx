import type { Product } from "../data/products";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className="product-card">
            <div className="product-card-top">
                <span className={`status-badge status-${product.status.toLowerCase()}`}>
                    {product.status}
                </span>
                <span className="chain-badge">{product.chain}</span>
            </div>

            <div className="product-copy">
                <p className="card-label">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-differentiator">{product.differentiator}</p>
            </div>

            {product.status === "LIVE" && product.url ? (
                <a href={product.url} target="_blank" rel="noreferrer" className="product-link">
                    Visit
                </a>
            ) : (
                <span className="product-meta">Status tracked in whitepaper</span>
            )}
        </article>
    );
};

export default ProductCard;
