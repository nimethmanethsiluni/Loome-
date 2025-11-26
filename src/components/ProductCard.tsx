import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import productDress from "@/assets/product-dresses.jpg";
import productShirt from "@/assets/product-shirt.jpg";
import productSarong from "@/assets/product-sarong.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

import productSaree from "@/assets/product-saree.jpg";
import productbatikshirt from "@/assets/product-batikshirt.jpg";
import productbatikscarf from "@/assets/batik-scarf.jpg";
import productTop from "@/assets/product-top.png";

const imageMap: Record<string, string> = {
  "product-dresses.jpg": productDress,
  "product-shirt.jpg": productShirt,
  "product-sarong.jpg": productSarong,
  "product-accessories.jpg": productAccessories,

  "product-saree.jpg": productSaree,
  "product-batikshirt.jpg": productbatikshirt,
  "batik-scarf.jpg": productbatikscarf,

  "product-top.png": productTop,
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LKR",
});

const ProductCard = ({ product, onAddToCart }: { product: Product; onAddToCart?: (product: Product) => void }) => (
  <div className="group rounded-[32px] bg-white border border-[#f4e5e0] shadow-[0_25px_70px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.12)] flex flex-col">
    <div className="relative h-80 overflow-hidden">
      <img
        src={imageMap[product.image]}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4 flex flex-col flex-grow">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-[#2a1a17] h-14">{product.name}</h3>
        <p className="mt-1 text-sm text-[#8c6d64] h-5">{product.category}</p>
        <div className="mt-3 text-lg font-semibold text-[#4b1f17]">
          {currencyFormatter.format(product.price)}
        </div>
      </div>
      {onAddToCart && (
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full rounded-2xl bg-[#7f0303] text-white hover:bg-[#5a0202] transition-colors"
        >
          Add to Cart
        </Button>
      )}
    </div>
  </div>
);

export default ProductCard;
