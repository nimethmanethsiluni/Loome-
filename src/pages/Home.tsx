import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReviewsSection from "@/components/ReviewsSection";


const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of beautiful batik pieces, each telling a unique story
            of Sri Lankan craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-gradient-subtle py-16 batik-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Loome brings you authentic Sri Lankan batik clothing, handcrafted by skilled
              artisans using traditional techniques passed down through generations. Each piece is
              unique, reflecting the rich cultural heritage of Sri Lanka.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* ⭐ Reviews Section */}
      <ReviewsSection />
    </div>

  );
};

export default Home;
