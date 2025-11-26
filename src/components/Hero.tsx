import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-batik.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Loomé
        </h1>
        {/* <p className="text-2xl md:text-3xl mb-8 font-light">
          Handcrafted Batik, Made With Love
        </p> */}
        {/* <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Discover the beauty of traditional Sri Lankan batik clothing. Each piece is a work of art,
          crafted with passion and centuries-old techniques.
        </p> */}
        <Link to="/products">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 shadow-strong animate-scale-in"
          >
            Shop Now
          </Button>
        </Link>
      </div>

      {/* Decorative Pattern Overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" /> */}
    </section>
  );
};

export default Hero;
