import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Camera, Plane } from "lucide-react";
import heroImage from "@/assets/hero-monastery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Prayer Flags Decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 prayer-flags opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Discover the Sacred</span>
            <span className="block bg-gradient-monastery bg-clip-text text-transparent">
              Monasteries of Sikkim
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Journey through ancient Buddhist heritage, explore magnificent monasteries, 
            and immerse yourself in the spiritual heart of the Himalayas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="shadow-sacred">
              <MapPin className="mr-2 h-5 w-5" />
              Explore Monasteries
            </Button>
            <Button variant="prayer" size="xl">
              <Calendar className="mr-2 h-5 w-5" />
              Festival Calendar
            </Button>
            <Button variant="sacred" size="xl">
              <Plane className="mr-2 h-5 w-5" />
              Plan Your Trip
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Camera,
                title: "360° Virtual Tours",
                description: "Experience monasteries in immersive detail"
              },
              {
                icon: MapPin,
                title: "Interactive Maps",
                description: "Navigate to sacred destinations easily"
              },
              {
                icon: Calendar,
                title: "Cultural Festivals",
                description: "Join traditional celebrations and events"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-monastery-gold mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;