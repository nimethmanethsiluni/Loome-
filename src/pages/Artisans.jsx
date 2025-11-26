import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Brush, CheckCircle, Handshake, Leaf, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Artisans = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    specialty: "",
    story: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to the backend
    console.log("Artisan application submitted:", formData);
    toast.success("Thank you for applying! Our team will be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      specialty: "",
      story: "",
    });
  };

  const benefits = [
    {
      icon: <Brush className="h-6 w-6 text-primary" />,
      title: "Showcase Your Craft",
      description: "Feature your handcrafted pieces alongside other leading Sri Lankan artisans.",
    },
    {
      icon: <Handshake className="h-6 w-6 text-primary" />,
      title: "Fair Partnerships",
      description: "Transparent pricing and reliable payouts for every piece sold through Loome.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Sustainable Practices",
      description: "Access to eco-friendly materials and guidance on responsible production.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Growing Audience",
      description: "Join our campaigns, pop-ups, and online drops to reach global customers.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
          Artisan Network
        </p>
        <h1 className="text-5xl font-bold text-foreground mb-4">Partner with Loome</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We collaborate with skilled makers to bring authentic, small-batch batik to customers who
          value craft and culture. Tell us about your work and let&apos;s grow together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8 animate-slide-up">
          <Card className="shadow-medium bg-gradient-subtle">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Why join the Loome collective?
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We champion artisans who preserve batik heritage while innovating with fresh designs.
                Here is what you can expect when you partner with us.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-white/70 border border-border p-4 shadow-soft flex items-start gap-3"
                  >
                    <div className="rounded-full bg-primary/10 p-2">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="rounded-2xl border border-dashed border-primary/40 p-6 shadow-soft animate-scale-in">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">What we look for</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>- Skilled batik artisans with a focus on quality and originality</li>
              <li>- Ethical production practices and mindful sourcing</li>
              <li>- Small-batch or bespoke capabilities for limited collections</li>
              <li>- Willingness to collaborate on design drops and storytelling</li>
            </ul>
          </div>
        </div>

        <Card className="shadow-medium animate-slide-up">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Apply to join</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="+94 7X XXX XXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="City / Town"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="specialty">Craft specialty</Label>
                <Input
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  placeholder="E.g. hand-drawn batik sarongs, natural dyes, custom motifs"
                />
              </div>

              <div>
                <Label htmlFor="story">Tell us about your craft</Label>
                <Textarea
                  id="story"
                  name="story"
                  value={formData.story}
                  onChange={handleChange}
                  required
                  className="mt-2 min-h-[140px]"
                  placeholder="Your experience, process, inspiration, and any links to your work."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Artisans;
