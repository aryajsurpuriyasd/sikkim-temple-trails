import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mountain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-monastery rounded-lg flex items-center justify-center">
                <Mountain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Sikkim Monasteries</h3>
                <p className="text-xs text-white/70">Cultural Heritage Portal</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Preserving and showcasing the sacred monasteries of Sikkim for cultural heritage and sustainable tourism.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <button key={index} className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                "All Monasteries",
                "Festival Calendar",
                "Virtual Tours",
                "Trip Planner",
                "Cultural Guides",
                "Photo Gallery"
              ].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Hotel Booking",
                "Transport Booking",
                "AI Trip Planner",
                "Cultural Tours",
                "Download Guides",
                "SMS Booking"
              ].map((service, index) => (
                <li key={index}>
                  <a href={`#${service.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Mail className="h-4 w-4" />
                <span>info@sikkimmonasteries.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Phone className="h-4 w-4" />
                <span>+91 3592 123456</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <MapPin className="h-4 w-4" />
                <span>Gangtok, Sikkim, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-medium text-white mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button variant="monastery" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-white/60 mt-2">
                Get updates on festivals, new monasteries, and travel tips.
              </p>
            </div>
          </div>
        </div>

        {/* Language Options */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="font-semibold text-white mb-3">Available Languages</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { code: "en", name: "English" },
                  { code: "hi", name: "हिंदी" },
                  { code: "si", name: "སིཀིམ་སྐད" },
                  { code: "mr", name: "मराठी" }
                ].map((lang, index) => (
                  <Button key={index} variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-foreground">
                    {lang.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-white/70 mb-2">Download our app (Coming Soon)</p>
              <div className="flex gap-2">
                <div className="bg-white/10 rounded-lg px-4 py-2 text-xs text-white/70">
                  PWA Offline Support
                </div>
                <div className="bg-monastery-gold/20 rounded-lg px-4 py-2 text-xs text-monastery-gold">
                  AI Powered
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Sikkim Monasteries Cultural Portal. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;