import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import productDress from "@/assets/product-dress.jpg";
import productShirt from "@/assets/product-shirt.jpg";
import productSarong from "@/assets/product-sarong.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productbatikShirt from "@/assets/product-batikshirt.jpg";
import productDresses from "@/assets/product-dresses.jpg";
import productTop from "@/assets/product-top.png";
import productScarf from "@/assets/batik-scarf.jpg"

//I'm Moda Dinithi

const imageMap: Record<string, string> = {
  "product-dress.jpg": productDress,
  "product-shirt.jpg": productShirt,
  "product-sarong.jpg": productSarong,
  "product-accessories.jpg": productAccessories,
  "product-batikshirt.jpg": productbatikShirt,
  "product-dresses.jpg" : productDresses,
  "product-top.png" : productTop,
  "batik-scarf.jpg" :productScarf,
};

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleRemove = (productId: number, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  const handleCheckout = () => {
    toast.success("Checkout functionality coming soon!");
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold text-foreground mb-4">Shopping Cart</h1>
        <p className="text-lg text-muted-foreground">
          Review your items and proceed to checkout
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="shadow-soft animate-slide-up">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <img
                    src={imageMap[item.image]}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                    <p className="text-muted-foreground mb-4">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => handleRemove(item.id, item.name)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="shadow-medium sticky top-24 animate-scale-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-2xl font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-4"
                size="lg"
              >
                Proceed to Checkout
              </Button>
              <Button
                onClick={() => {
                  clearCart();
                  toast.success("Cart cleared");
                }}
                variant="outline"
                className="w-full"
              >
                Clear Cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
