import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>99.99% uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span>50M+ users</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Power your
            </span>
            <br />
            <span className="text-foreground">
              business with smart payments
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Accept payments, automate payouts, and manage your entire financial workflow with CloudPay's comprehensive payment infrastructure.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="premium" size="lg" className="min-w-[200px]">
              Start accepting payments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" className="min-w-[200px]">
              <Play className="mr-2 h-5 w-5" />
              Watch demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by 8M+ businesses worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {["Stripe", "Shopify", "Amazon", "Netflix", "Uber", "Airbnb"].map((company) => (
                <div key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-card rounded-2xl shadow-elegant border border-border/50 overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-border/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-muted-foreground">dashboard.cloudpay.com</div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-background rounded-lg p-6 shadow-card">
                    <div className="text-2xl font-bold text-foreground mb-2">₹2,45,67,890</div>
                    <div className="text-sm text-muted-foreground">Total volume</div>
                    <div className="text-xs text-green-600 mt-1">+12.5% from last month</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 shadow-card">
                    <div className="text-2xl font-bold text-foreground mb-2">98.7%</div>
                    <div className="text-sm text-muted-foreground">Success rate</div>
                    <div className="text-xs text-green-600 mt-1">+0.2% from last month</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 shadow-card">
                    <div className="text-2xl font-bold text-foreground mb-2">12,847</div>
                    <div className="text-sm text-muted-foreground">Transactions</div>
                    <div className="text-xs text-green-600 mt-1">+8.1% from last month</div>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-card">
                  <div className="h-48 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-muted-foreground">Transaction Analytics Chart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;