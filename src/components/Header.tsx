import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mountain, Calendar, MessageCircle, BookOpen, FileText, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Monasteries", href: "#monasteries", icon: Mountain },
    { name: "Festivals", href: "#festivals", icon: Calendar },
    { name: "Trip Planner", href: "#planner", icon: MapPin },
    { name: "Blog", href: "#blog", icon: BookOpen },
    { name: "Guides", href: "#guides", icon: FileText },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top Language Bar */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-8 items-center justify-end">
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-monastery rounded-lg flex items-center justify-center shadow-monastery">
              <Mountain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-monastery bg-clip-text text-transparent">
                Sikkim Monasteries
              </h1>
              <p className="text-xs text-muted-foreground">Cultural Heritage Portal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-sm font-medium hover:text-primary"
                  asChild
                >
                  <a href={item.href} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                </Button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button variant="monastery" size="sm">
              Plan Your Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden border-t border-border bg-background",
          isMenuOpen ? "block" : "hidden"
        )}>
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <div className="px-4 pt-4 border-t border-border">
              <Button variant="monastery" className="w-full">
                Plan Your Visit
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;