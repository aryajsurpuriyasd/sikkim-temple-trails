import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Camera, Star, ExternalLink, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import MonasteryDetailsModal from "./MonasteryDetailsModal";

interface MonasteryCardProps {
  name: string;
  description: string;
  location: string;
  founded: string;
  image: string;
  significance: string;
  features: string[];
  rating: number;
  visitTime: string;
  history: string;
  specialty: string;
  localFood: string[];
  shopping: string[];
  events: {
    name: string;
    date: string;
    description: string;
  }[];
  className?: string;
}

const MonasteryCard = ({
  name,
  description,
  location,
  founded,
  image,
  significance,
  features,
  rating,
  visitTime,
  history,
  specialty,
  localFood,
  shopping,
  events,
  className
}: MonasteryCardProps) => {
  return (
    <Card className={cn("monastery-card overflow-hidden group", className)}>
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Rating Badge */}
        <Badge className="absolute top-4 right-4 bg-monastery-gold text-foreground">
          <Star className="w-3 h-3 mr-1 fill-current" />
          {rating}
        </Badge>
        
        {/* Prayer Flags Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 prayer-flags opacity-60"></div>
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            <CardDescription className="flex items-center text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            {founded}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardHeader>

      <CardContent>
        {/* Significance */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-monastery-red">Cultural Significance</h4>
          <p className="text-xs text-muted-foreground">{significance}</p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2">Features</h4>
          <div className="flex flex-wrap gap-1">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Visit Info */}
        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Clock className="w-3 h-3 mr-1" />
          Best time to visit: {visitTime}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button variant="monastery" size="sm" className="text-xs">
            <Camera className="w-3 h-3 mr-1" />
            360° View
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            Get Directions
          </Button>
        </div>

        <MonasteryDetailsModal
          name={name}
          image={image}
          location={location}
          founded={founded}
          rating={rating}
          history={history}
          specialty={specialty}
          localFood={localFood}
          shopping={shopping}
          events={events}
        >
          <Button variant="prayer" className="w-full mt-2 text-xs">
            <ExternalLink className="w-3 h-3 mr-1" />
            Explore Details
          </Button>
        </MonasteryDetailsModal>
      </CardContent>
    </Card>
  );
};

export default MonasteryCard;