import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{ fontFamily: "'Oswald', 'Inter', sans-serif" }}
      className="bg-[#9d0000] text-primary-foreground mt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Loomé</h3>
            <p className="text-primary-foreground/90">
              Handcrafted Sri Lankan batik clothing, made with love and tradition. Each piece tells
              a story of cultural heritage and artisan craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-primary-foreground/20 p-2 rounded-full hover:bg-primary-foreground/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/20 p-2 rounded-full hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/20 p-2 rounded-full hover:bg-primary-foreground/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@loome.com"
                className="bg-primary-foreground/20 p-2 rounded-full hover:bg-primary-foreground/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-primary-foreground/90">info@loomé.com</p>
            <p className="text-primary-foreground/90">+94 123 456 789</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Loomé. All rights reserved. Handcrafted with love in Sri Lanka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
