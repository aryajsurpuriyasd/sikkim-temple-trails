import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, Train, Bus, MapPin } from 'lucide-react';

interface TransportInfoProps {
  monasteryName: string;
}

const TransportInfo = ({ monasteryName }: TransportInfoProps) => {
  const getTransportInfo = (monastery: string) => {
    const transportData: { [key: string]: any } = {
      'Rumtek Monastery': {
        airports: [
          { name: 'Bagdogra Airport', distance: '124 km', time: '3.5 hours' },
          { name: 'Pakyong Airport', distance: '35 km', time: '1 hour' }
        ],
        railways: [
          { name: 'New Jalpaiguri Station', distance: '148 km', time: '4 hours' },
          { name: 'Siliguri Junction', distance: '114 km', time: '3 hours' }
        ],
        buses: [
          { name: 'SNT Bus Stand Gangtok', distance: '24 km', time: '45 minutes' },
          { name: 'Private Bus Stand', distance: '23 km', time: '40 minutes' }
        ]
      },
      'Enchey Monastery': {
        airports: [
          { name: 'Bagdogra Airport', distance: '120 km', time: '3 hours' },
          { name: 'Pakyong Airport', distance: '32 km', time: '45 minutes' }
        ],
        railways: [
          { name: 'New Jalpaiguri Station', distance: '144 km', time: '3.5 hours' },
          { name: 'Siliguri Junction', distance: '110 km', time: '2.5 hours' }
        ],
        buses: [
          { name: 'SNT Bus Stand Gangtok', distance: '3 km', time: '10 minutes' },
          { name: 'Private Bus Stand', distance: '2.5 km', time: '8 minutes' }
        ]
      },
      'Gonjang Monastery': {
        airports: [
          { name: 'Bagdogra Airport', distance: '118 km', time: '3 hours' },
          { name: 'Pakyong Airport', distance: '30 km', time: '40 minutes' }
        ],
        railways: [
          { name: 'New Jalpaiguri Station', distance: '142 km', time: '3.5 hours' },
          { name: 'Siliguri Junction', distance: '108 km', time: '2.5 hours' }
        ],
        buses: [
          { name: 'SNT Bus Stand Gangtok', distance: '5 km', time: '15 minutes' },
          { name: 'Private Bus Stand', distance: '4.5 km', time: '12 minutes' }
        ]
      },
      'Pemayangtse Monastery': {
        airports: [
          { name: 'Bagdogra Airport', distance: '115 km', time: '3 hours' },
          { name: 'Pakyong Airport', distance: '135 km', time: '3.5 hours' }
        ],
        railways: [
          { name: 'New Jalpaiguri Station', distance: '110 km', time: '3 hours' },
          { name: 'Siliguri Junction', distance: '105 km', time: '2.5 hours' }
        ],
        buses: [
          { name: 'Pelling Bus Stand', distance: '2 km', time: '5 minutes' },
          { name: 'Gezing Bus Stand', distance: '10 km', time: '20 minutes' }
        ]
      },
      'Tashiding Monastery': {
        airports: [
          { name: 'Bagdogra Airport', distance: '140 km', time: '4 hours' },
          { name: 'Pakyong Airport', distance: '120 km', time: '3 hours' }
        ],
        railways: [
          { name: 'New Jalpaiguri Station', distance: '135 km', time: '3.5 hours' },
          { name: 'Siliguri Junction', distance: '130 km', time: '3 hours' }
        ],
        buses: [
          { name: 'Yuksom Bus Stand', distance: '25 km', time: '45 minutes' },
          { name: 'Pelling Bus Stand', distance: '30 km', time: '50 minutes' }
        ]
      }
    };

    return transportData[monastery] || transportData['Rumtek Monastery'];
  };

  const transport = getTransportInfo(monasteryName);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Plane className="w-5 h-5 text-monastery-red" />
            Nearest Airports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {transport.airports.map((airport: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-2 border border-border rounded-lg">
                <div>
                  <div className="font-medium text-sm">{airport.name}</div>
                  <div className="text-xs text-muted-foreground">{airport.distance} away</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {airport.time}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Train className="w-5 h-5 text-monastery-red" />
            Nearest Railway Stations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {transport.railways.map((railway: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-2 border border-border rounded-lg">
                <div>
                  <div className="font-medium text-sm">{railway.name}</div>
                  <div className="text-xs text-muted-foreground">{railway.distance} away</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {railway.time}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bus className="w-5 h-5 text-monastery-red" />
            Nearest Bus Stops
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {transport.buses.map((bus: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-2 border border-border rounded-lg">
                <div>
                  <div className="font-medium text-sm">{bus.name}</div>
                  <div className="text-xs text-muted-foreground">{bus.distance} away</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {bus.time}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransportInfo;