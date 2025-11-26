import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { UserProvider, useUser } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CustomOrder from './components/CustomOrder'; 
import Artisans from './pages/Artisans';
// import CustomOrder from './components/CustomOrder';
import Login from "./pages/Login";
import ArtisanDashboard from "./pages/ArtisanDashboard";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser();
  if (!user || user.userType !== "artisan") {
    return <Navigate to="/login" />;
  }
  return children;
};

const ArtisanHomeRedirect = () => {
  const { user } = useUser();
  if (user && user.userType === "artisan") {
    return <Navigate to="/artisan-dashboard" />;
  }
  return <Home />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <UserProvider>
          <Toaster />
          <Sonner />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<ArtisanHomeRedirect />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/artisan-dashboard"
                  element={
                    <ProtectedRoute>
                      <ArtisanDashboard />
                    </ProtectedRoute>
                  }
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
                <Route path="/custom-order" element={<CustomOrder />} />
                <Route path="/artisans" element={<Artisans />} />    
              </Routes>
            </main>
            <Footer />
          </div>
        </UserProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
