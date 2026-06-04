import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { products } from "../data/products";

const Products = () => {
    return (
        <section id="products" className="section-block">
            <div className="site-shell">
                <Reveal>
                    <div className="section-heading">
                        <p className="section-label">What We&apos;ve Built</p>
                        <h2>Seven products. Five chains. All live or in flight.</h2>
                    </div>
                </Reveal>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <Reveal key={product.name} delay={index * 60}>
                            <ProductCard product={product} />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={120}>
                    <div className="traction-band">
                        <span>Tweetle alone</span>
                        <strong>
                            16,595 on-chain interactions · 2,811 games created · ~98 transactions
                            per user
                        </strong>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Products;
