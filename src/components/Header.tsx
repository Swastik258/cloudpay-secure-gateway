import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "Products",
      items: ["Payment Gateway", "Payment Links", "Payment Pages", "Subscriptions", "Smart Collect"]
    },
    {
      name: "Solutions",
      items: ["E-commerce", "SaaS", "Education", "Healthcare", "Marketplace"]
    },
    {
      name: "Developers",
      items: ["API Documentation", "SDKs", "Webhooks", "Testing", "Support"]
    },
    { name: "Pricing", items: [] },
    { name: "Resources", items: ["Blog", "Case Studies", "Guides", "Webinars"] }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CloudPay
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-colors duration-200">
                  {item.name}
                  {item.items.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                
                {item.items.length > 0 && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-elegant animate-scale-in">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Log in</Button>
            <Button variant="hero">Sign up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors duration-200">
                    {item.name}
                  </button>
                  {item.items.length > 0 && (
                    <div className="pl-6 space-y-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full">Log in</Button>
                <Button variant="hero" className="w-full">Sign up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;