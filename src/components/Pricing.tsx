import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "2.5%",
      description: "Perfect for small businesses and startups",
      popular: false,
      features: [
        "Payment Gateway",
        "Payment Links",
        "Basic Analytics",
        "Email Support",
        "Standard Settlement",
        "Basic API Access"
      ],
      limitation: "Up to ₹5L monthly volume"
    },
    {
      name: "Growth",
      price: "2.0%",
      description: "Ideal for growing businesses",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced Analytics",
        "Webhooks",
        "Priority Support",
        "Instant Settlement",
        "Custom Branding",
        "Team Management",
        "Advanced API Access"
      ],
      limitation: "Up to ₹50L monthly volume"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      popular: false,
      features: [
        "Everything in Growth",
        "Dedicated Account Manager",
        "Custom Integration",
        "24/7 Phone Support",
        "SLA Guarantee",
        "White-label Solution",
        "Advanced Security",
        "Custom Reports"
      ],
      limitation: "Unlimited volume"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">Simple, transparent</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No setup fees, no monthly fees. Pay only for successful transactions with our competitive rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-background rounded-2xl p-8 shadow-card transition-all duration-500 border animate-fade-in ${
                plan.popular 
                  ? 'border-primary shadow-glow transform scale-105' 
                  : 'border-border hover:shadow-glow hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground ml-1">per transaction</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="text-sm text-primary font-medium mt-2">{plan.limitation}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 shadow-card border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Volume-based discounts available</h3>
            <p className="text-muted-foreground mb-6">
              Process more, pay less. Our tiered pricing structure offers better rates as your transaction volume grows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold text-foreground">₹1L - ₹10L</div>
                <div className="text-sm text-muted-foreground">Standard rates apply</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">₹10L - ₹1Cr</div>
                <div className="text-sm text-muted-foreground">Up to 10% discount</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">₹1Cr+</div>
                <div className="text-sm text-muted-foreground">Custom enterprise rates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;