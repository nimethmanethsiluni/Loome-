import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useEffect, useState, FormEvent } from "react";
import { useCart } from "@/contexts/CartContext";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { getCartCount } = useCart();
  const { user, logout } = useUser();
  const cartCount = getCartCount();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchTerm(params.get("q") ?? "");
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Artisans", path: "/artisans" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Custom Order", path: "/custom-order" },
  ];

  const artisanNavLinks = [
    { name: "Dashboard", path: "/artisan-dashboard" },
  ]

  const linkClasses = (path: string) =>
    `text-sm font-bold tracking-wide transition-colors ${
      location.pathname === path ? "text-[#7f0303]" : "text-muted-foreground hover:text-foreground"
    }`;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = searchTerm.trim();
    const path = trimmed ? `/products?q=${encodeURIComponent(trimmed)}` : "/products";
    navigate(path);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const currentNavLinks = user && user.userType === "artisan" ? artisanNavLinks : navLinks;

  return (
    <nav
      style={{ fontFamily: "'Oswald', 'Inter', sans-serif" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#f4e5e0] shadow-[0_8px_30px_rgba(12,15,20,0.05)]"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center gap-6">
          {/* Logo */}
          <Link to={user && user.userType === "artisan" ? "/artisan-dashboard" : "/"} className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Loome logo"
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex flex-1 items-center gap-6 justify-end ml-auto">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-10">
              {currentNavLinks.map((link) => (
                <Link key={link.path} to={link.path} className={linkClasses(link.path)}>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search */}
            {!(user && user.userType === "artisan") && (
              <form onSubmit={handleSearch} className="flex-1 max-w-sm">
                <div className="flex items-center gap-3 rounded-full border border-[#f1ddd9] bg-white/80 px-4 py-2 shadow-inner focus-within:border-[#7f0303]">
                  <Search className="h-4 w-4 text-[#c08d7c]" />
                  <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#4b1f17] placeholder:text-[#c7a6a0] focus:outline-none"
                  />
                </div>
              </form>
            )}
          </div>

          {/* Cart and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {!(user && user.userType === "artisan") && (
              <Link to="/cart" className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-[#fdf1f0] text-[#7f0303] hover:bg-[#f9dbd7]"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#7f0303] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
            )}
            {user ? (
              <Button onClick={handleLogout} variant="ghost" className="text-sm font-bold">
                Logout
              </Button>
            ) : (
              <Link to="/login?resetLogin=true">
                <Button variant="ghost" className="text-sm font-bold">
                  Login
                </Button>
              </Link>
            )}
          </div>


          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-3">
            {!(user && user.userType === "artisan") && (
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="rounded-full bg-[#fdf1f0] text-[#7f0303]">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#7f0303] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
            )}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f1ddd9] text-[#7f0303]"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="mt-4 rounded-2xl border border-[#f4e5e0] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-6 space-y-4 animate-slide-up">
              {!(user && user.userType === "artisan") && (
                <form onSubmit={handleSearch}>
                  <div className="flex items-center gap-3 rounded-full border border-[#f1ddd9] bg-white/80 px-4 py-2 shadow-inner focus-within:border-[#7f0303]">
                    <Search className="h-4 w-4 text-[#c08d7c]" />
                    <input
                      type="search"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-transparent text-sm text-[#4b1f17] placeholder:text-[#c7a6a0] focus:outline-none"
                    />
                  </div>
                </form>
              )}

              {currentNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-base font-bold text-[#1b1a1a]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4">
                {user ? (
                  <Button onClick={handleLogout} variant="ghost" className="w-full text-left font-bold">
                    Logout
                  </Button>
                ) : (
                  <Link to="/login?resetLogin=true">
                    <Button variant="ghost" className="w-full text-left font-bold">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

