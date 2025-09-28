import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, ZoomIn, ZoomOut, MapPin } from 'lucide-react';

interface InteractiveMapProps {
  monastery: string;
  coordinates: [number, number];
  googleMapsLink: string;
}

const InteractiveMap = ({ monastery, coordinates, googleMapsLink }: InteractiveMapProps) => {
  const [lat, lng] = coordinates;
  
  // Create embedded Google Maps URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD-your-key&q=${lat},${lng}&zoom=15&maptype=roadmap`;
  
  // Fallback to OpenStreetMap-based iframe
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border bg-gray-100">
      {/* Interactive Map Preview */}
      <div className="w-full h-full relative">
        <iframe
          src={openStreetMapUrl}
          className="w-full h-full border-0"
          title={`Map of ${monastery}`}
          loading="lazy"
        />
        
        {/* Overlay with monastery info */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-monastery-red" />
            <div>
              <div className="font-semibold text-sm">{monastery}</div>
              <div className="text-xs text-muted-foreground">{lat.toFixed(4)}, {lng.toFixed(4)}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-2 right-2 flex flex-col gap-1 z-[1000]">
        <Button
          size="icon"
          variant="outline"
          className="bg-white hover:bg-gray-50 w-8 h-8 shadow-lg"
          onClick={() => window.open(`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=16`, '_blank')}
          title="View in OpenStreetMap"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="monastery"
          className="w-8 h-8 shadow-lg"
          onClick={() => window.open(googleMapsLink, '_blank')}
          title="Open in Google Maps"
        >
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default InteractiveMap;