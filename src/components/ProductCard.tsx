import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import productDress from "@/assets/product-dress.jpg";
import productShirt from "@/assets/product-shirt.jpg";
import productSarong from "@/assets/product-sarong.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productSaree from "@/assets/product-saree.jpg";
import productbatikshirt from "@/assets/product-batikshirt.jpg";


const imageMap: Record<string, string> = {
  "product-dress.jpg": productDress,
  "product-shirt.jpg": productShirt,
  "product-sarong.jpg": productSarong,
  "product-accessories.jpg": productAccessories,
  "product-saree.jpg": productSaree,
  "product-batikshirt.jpg":productbatikshirt,
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in bg-gradient-card">
      <div className="relative overflow-hidden">
        <img
          src={imageMap[product.image]}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
        <div className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
