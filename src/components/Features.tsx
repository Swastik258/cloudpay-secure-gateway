import { 
  CreditCard, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  BarChart3,
  Link,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const mainFeatures = [
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Accept payments across 100+ payment methods including cards, wallets, UPI, and net banking.",
      features: ["Multi-currency support", "Instant settlements", "Smart routing"]
    },
    {
      icon: Smartphone,
      title: "Mobile SDKs",
      description: "Native mobile payment experience with our iOS and Android SDKs for seamless integration.",
      features: ["Native UI components", "Biometric authentication", "Offline support"]
    },
    {
      icon: Globe,
      title: "Global Payments",
      description: "Expand globally with support for international cards and local payment methods.",
      features: ["190+ countries", "Multi-currency", "Local compliance"]
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: "Advanced Security", description: "PCI DSS Level 1 certified with fraud detection" },
    { icon: Zap, title: "Instant Settlements", description: "Get your money in 24 hours with instant settlements" },
    { icon: BarChart3, title: "Real-time Analytics", description: "Detailed insights and reporting for your business" },
    { icon: Link, title: "Payment Links", description: "Share payment links via SMS, email, or social media" },
    { icon: Users, title: "Team Management", description: "Role-based access control for your team members" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical and business support" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everything you need
            </span>
            <br />
            <span className="text-foreground">to accept payments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From payment processing to financial management, CloudPay provides a complete suite of tools to power your business growth.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-2 mb-6">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center text-sm text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="w-full">
                Learn more
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Explore all features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;