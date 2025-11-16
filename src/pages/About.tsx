import aboutImage from "@/assets/about-crafting.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold text-foreground mb-4">About Batik Bliss</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the story behind our beautiful batik creations
        </p>
      </div>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-12 mb-16 animate-slide-up">
        <div>
          <img
            src={aboutImage}
            alt="Batik crafting process"
            className="w-full rounded-lg shadow-medium"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Batik Bliss was founded with a passion for preserving and celebrating the rich tradition
            of Sri Lankan batik art. Our journey began with a simple mission: to bring the beauty
            of handcrafted batik clothing to the world while supporting local artisan communities.
          </p>
          <p className="text-muted-foreground mb-4">
            Every piece in our collection is meticulously handcrafted by skilled artisans who have
            mastered the ancient art of batik making. The process involves applying wax to fabric,
            dyeing it, and then removing the wax to reveal intricate patterns that tell stories of
            Sri Lankan culture and heritage.
          </p>
          <p className="text-muted-foreground">
            We take pride in offering authentic, high-quality batik products that not only look
            beautiful but also carry the soul of traditional craftsmanship.
          </p>
        </div>
      </section>

      {/* Batik Tradition Section */}
      <section className="bg-gradient-subtle rounded-lg p-12 mb-16 batik-pattern animate-scale-in">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
          The Art of Sri Lankan Batik
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-4">
            Batik is a traditional textile art form that has been practiced in Sri Lanka for
            centuries. The word "batik" comes from the Javanese word "ambatik," which means "to
            write" or "to draw."
          </p>
          <p className="text-muted-foreground mb-4">
            The process begins with high-quality cotton or silk fabric. Artisans use a special tool
            called a "canting" to apply hot wax to the fabric in intricate patterns. The waxed
            areas resist the dye, creating beautiful designs. This process can be repeated multiple
            times with different colors to create complex, multi-layered patterns.
          </p>
          <p className="text-muted-foreground mb-4">
            Each piece is truly unique, as the hand-application of wax and natural variations in the
            dyeing process ensure that no two items are exactly alike. This is what makes batik so
            special – you're not just wearing clothing, you're wearing a piece of art.
          </p>
          <p className="text-muted-foreground">
            Our artisans have inherited these skills from their ancestors, and they continue to
            perfect their craft while incorporating contemporary designs that appeal to modern
            tastes.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-medium transition-shadow">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold text-foreground mb-2">Authentic Craftsmanship</h3>
          <p className="text-muted-foreground">
            Every piece is handmade using traditional techniques passed down through generations
          </p>
        </div>
        <div className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-medium transition-shadow">
          <div className="text-4xl mb-4">🌿</div>
          <h3 className="text-xl font-bold text-foreground mb-2">Sustainable Practices</h3>
          <p className="text-muted-foreground">
            We use natural dyes and eco-friendly materials to create our beautiful batik pieces
          </p>
        </div>
        <div className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-medium transition-shadow">
          <div className="text-4xl mb-4">❤️</div>
          <h3 className="text-xl font-bold text-foreground mb-2">Community Support</h3>
          <p className="text-muted-foreground">
            We empower local artisan communities by providing fair wages and sustainable livelihoods
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
