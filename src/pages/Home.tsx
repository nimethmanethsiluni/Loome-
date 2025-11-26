import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import heroTexture from "@/assets/hero-batik.jpg";
import productDress from "@/assets/product-dresses.jpg";
import productShirt from "@/assets/product-shirt.jpg";
import productSarong from "@/assets/product-sarong.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productSaree from "@/assets/product-saree.jpg";
import productBatikShirt from "@/assets/product-batikshirt.jpg";
import productBatikScarf from "@/assets/batik-scarf.jpg";
import productTop from "@/assets/product-top.png";
import ReviewsSection from "@/components/ReviewsSection";

const imageMap: Record<string, string> = {
  "product-dresses.jpg": productDress,
  "product-shirt.jpg": productShirt,
  "product-sarong.jpg": productSarong,
  "product-accessories.jpg": productAccessories,
  "product-saree.jpg": productSaree,
  "product-batikshirt.jpg": productBatikShirt,
  "batik-scarf.jpg": productBatikScarf,
  "product-top.png": productTop,
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LKR",
});

const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-[#f9f6f4] pb-16">
      <section className="container mx-auto px-4 pt-10">
        <div className="relative overflow-hidden rounded-[36px] text-white shadow-[0_35px_120px_rgba(122,3,3,0.35)]">
          <img
            src={heroTexture}
            alt="Handcrafted batik fabric"
            className="absolute inset-0 h-full w-full object-cover blur-sm"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-[#6b0202] via-[#7f0303] to-[#9b1c1c] opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[length:5px_5px] opacity-30" /> */}
          <div className="relative px-8 py-16 md:px-16 md:py-24 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.6em] text-white/80 mb-6">Loome</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Handcrafted Batik, Made With Love
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10">
              Discover unique, artisanal clothing that tells a story of tradition and modern elegance.
            </p>
            <Link to="/products">
              <Button
                size="lg"
                className="rounded-full bg-white text-[#7f0303] hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-lg"
              >
                Explore The Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c86b6b] mb-4">Collection</p>
          <h2 className="text-4xl font-semibold text-[#1c1b1b]">Our Featured Pieces</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[28px] border border-[#f1ddd9] shadow-[0_25px_80px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col"
            >
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={imageMap[product.image] || heroTexture}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold tracking-[0.4em] text-[#c86b6b] uppercase">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-[#1c1b1b] mt-3">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{product.description}</p>
                <div className="mt-6 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-lg font-bold text-[#1c1b1b]">
                    {currencyFormatter.format(product.price)}
                  </span>
                  <div>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="rounded-full bg-[#b10d0d] hover:bg-[#900a0a] text-white px-6"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        {/*Review Section*/}
        <ReviewsSection/>
      </section>
    </div>
  );
};

export default Home;
