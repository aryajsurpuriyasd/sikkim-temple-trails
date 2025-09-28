import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, MapPin, Calendar, Utensils, ShoppingBag, Sparkles, Camera, Star } from "lucide-react";
import InteractiveMap from "./InteractiveMap";
import WeatherWidget from "./WeatherWidget";
import TransportInfo from "./TransportInfo";

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
  
  // Get monastery coordinates and Google Maps links
  const getMonasteryData = (monasteryName: string) => {
    const monasteryData: { [key: string]: { coordinates: [number, number], googleMapsLink: string } } = {
      'Rumtek Monastery': {
        coordinates: [27.3389, 88.5583],
        googleMapsLink: 'https://maps.app.goo.gl/9csc2PfkpiWSAwe26?g_st=awb'
      },
      'Enchey Monastery': {
        coordinates: [27.3389, 88.6167],  
        googleMapsLink: 'https://maps.app.goo.gl/ksoVDU5SinNwrdC1A?g_st=awb'
      },
      'Gonjang Monastery': {
        coordinates: [27.3500, 88.6000],
        googleMapsLink: 'https://maps.app.goo.gl/PTJPKZT3iHuHWRue7?g_st=awb'
      },
      'Pemayangtse Monastery': {
        coordinates: [27.2833, 88.2167],
        googleMapsLink: 'https://maps.app.goo.gl/gqCjAgXXp3pcCK3e7?g_st=awb'
      },
      'Tashiding Monastery': {
        coordinates: [27.3167, 88.1500],
        googleMapsLink: 'https://maps.app.goo.gl/JScMuqaSXQUpTzQX7?g_st=awb'
      }
    };

    return monasteryData[monasteryName] || monasteryData['Rumtek Monastery'];
  };

  const monasteryData = getMonasteryData(name);
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

        {/* Navigation Tabs */}
        <Tabs defaultValue="directions" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="directions" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Directions
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Weather
            </TabsTrigger>
            <TabsTrigger value="transport" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Transport
            </TabsTrigger>
          </TabsList>

          <TabsContent value="directions" className="mt-4 space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-monastery-red">Interactive Map & Directions</h3>
              <InteractiveMap 
                monastery={name}
                coordinates={monasteryData.coordinates}
                googleMapsLink={monasteryData.googleMapsLink}
              />
              <div className="text-sm text-muted-foreground text-center">
                📍 Click the map marker for details • Use zoom controls • Click external link icon for Google Maps
              </div>
            </div>
          </TabsContent>

          <TabsContent value="weather" className="mt-4">
            <WeatherWidget />
          </TabsContent>

          <TabsContent value="transport" className="mt-4">
            <TransportInfo monasteryName={name} />
          </TabsContent>
        </Tabs>

        {/* Action Button */}
        <div className="mt-6">
          <Button variant="monastery" className="w-full flex items-center justify-center">
            <Camera className="w-4 h-4 mr-2" />
            360° Virtual Tour
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MonasteryDetailsModal;