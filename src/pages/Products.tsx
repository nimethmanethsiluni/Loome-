import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q") ?? "";
  const searchQuery = searchValue.trim().toLowerCase();

  const categories = ["All", "Dresses", "Shirts", "Sarongs", "Tops", "Accessories"];

  const categoryFiltered =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const filteredProducts = categoryFiltered.filter((product) => {
    if (!searchQuery) return true;
    return (
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    );
  });

  const hasSearch = Boolean(searchQuery);

  const filterClasses = (category: string) =>
    `px-5 py-2 rounded-full text-sm font-semibold transition-all ${
      selectedCategory === category
        ? "bg-[#4b1f17] text-white shadow-[0_10px_25px_rgba(75,31,23,0.25)]"
        : "bg-white text-[#4b1f17] border border-[#f1dad2] hover:border-[#4b1f17]/40"
    }`;

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#faf5f2] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.5em] text-[#b37c68] mb-4">Collections</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2b1a17] mb-4">Handcrafted Batik Wear</h1>
          <p className="text-lg text-[#7a5b53]">
            Discover unique, handcrafted batik pieces that blend traditional Sri Lankan art with modern style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={filterClasses(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#7a5b53]">
              {hasSearch
                ? `No products match "${searchValue.trim()}".`
                : "No products found in this category."}
            </p>
          </div>
        )}

        {/* Pagination mockup */}
        <div className="flex items-center justify-center gap-4 mt-12 text-[#4b1f17]">
          <button className="text-sm text-[#b37c68] hover:text-[#4b1f17] transition">&lt;</button>
          {[1, 2, 3, 4].map((num) => (
            <span
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                num === 1 ? "bg-[#7f0303] text-white" : "text-[#4b1f17]"
              }`}
            >
              {num}
            </span>
          ))}
          <span className="text-sm text-[#b37c68]">...</span>
          <span className="text-sm">8</span>
          <button className="text-sm text-[#b37c68] hover:text-[#4b1f17] transition">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
