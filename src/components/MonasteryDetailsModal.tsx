import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, MapPin, Calendar, Utensils, ShoppingBag, Sparkles, Camera, Star } from "lucide-react";

interface MonasteryDetailsModalProps {
  name: string;
  image: string;
  location: string;
  founded: string;
  rating: number;
  history: string;
  specialty: string;
  localFood: string[];
  shopping: string[];
  events: {
    name: string;
    date: string;
    description: string;
  }[];
  children: React.ReactNode;
}

const MonasteryDetailsModal = ({
  name,
  image,
  location,
  founded,
  rating,
  history,
  specialty,
  localFood,
  shopping,
  events,
  children
}: MonasteryDetailsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-monastery bg-clip-text text-transparent">
            {name}
          </DialogTitle>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative h-64 rounded-lg overflow-hidden mb-6">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <Badge className="absolute top-4 right-4 bg-monastery-gold text-foreground">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {rating}
          </Badge>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Founded: {founded}</span>
          </div>
        </div>

        {/* History Section */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-monastery-red flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            History & Heritage
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {history}
          </p>
        </section>

        <Separator className="my-6" />

        {/* Specialty Section */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-monastery-red flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            Special Features
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {specialty}
          </p>
        </section>

        <Separator className="my-6" />

        {/* Local Food Section */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-monastery-red flex items-center">
            <Utensils className="w-5 h-5 mr-2" />
            Local Cuisine
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {(localFood || []).map((food, index) => (
              <Badge key={index} variant="secondary" className="text-xs justify-center">
                {food}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="my-6" />

        {/* Shopping Section */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-monastery-red flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Local Specialties
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {(shopping || []).map((item, index) => (
              <Badge key={index} variant="outline" className="text-xs justify-center">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="my-6" />

        {/* Events Section */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-monastery-red flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Annual Events
          </h3>
          <div className="space-y-3">
            {(events || []).map((event, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{event.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {event.date}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Button variant="monastery" className="flex items-center">
            <Camera className="w-4 h-4 mr-2" />
            360° Virtual Tour
          </Button>
          <Button variant="outline" className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MonasteryDetailsModal;