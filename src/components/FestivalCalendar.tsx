import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";

const FestivalCalendar = () => {
  const festivals = [
    {
      name: "Losar (Tibetan New Year)",
      date: "February 2024",
      location: "All Monasteries",
      description: "The most important festival celebrating the Tibetan New Year with traditional dances, prayers, and feasts.",
      significance: "Religious",
      attendees: "5000+",
      duration: "3 days",
      highlights: ["Cham Dance", "Traditional Food", "Prayer Ceremonies", "Cultural Programs"]
    },
    {
      name: "Saga Dawa",
      date: "May 2024",
      location: "Rumtek, Pemayangtse",
      description: "Celebrates the birth, enlightenment, and death of Buddha. Sacred month for pilgrimages and merit-making.",
      significance: "Highly Sacred",
      attendees: "3000+",
      duration: "1 month",
      highlights: ["Pilgrimage", "Merit Making", "Butter Lamp Lighting", "Sutra Recitation"]
    },
    {
      name: "Hemis Festival",
      date: "June 2024",
      location: "Enchey Monastery",
      description: "Colorful festival featuring masked dances and traditional music celebrating Guru Padmasambhava.",
      significance: "Cultural",
      attendees: "2000+",
      duration: "2 days",
      highlights: ["Masked Dances", "Traditional Music", "Handicraft Fair", "Local Cuisine"]
    },
    {
      name: "Bhumchu Festival",
      date: "February 2024",
      location: "Tashiding Monastery",
      description: "Sacred water ceremony predicting the year's fortune. Most important festival at Tashiding.",
      significance: "Prophetic",
      attendees: "8000+",
      duration: "1 day",
      highlights: ["Sacred Water Ceremony", "Fortune Prediction", "Mass Gathering", "Ritual Prayers"]
    }
  ];

  return (
    <section id="festivals" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-monastery rounded-full flex items-center justify-center shadow-monastery">
              <Calendar className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Festival <span className="bg-gradient-monastery bg-clip-text text-transparent">Calendar</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant cultural celebrations and sacred festivals that bring Sikkim's monasteries to life throughout the year.
          </p>
        </div>

        {/* Festival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {festivals.map((festival, index) => (
            <Card key={index} className="monastery-card overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{festival.name}</CardTitle>
                    <CardDescription className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {festival.date}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={festival.significance === "Highly Sacred" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {festival.significance}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {festival.description}
                </p>

                {/* Festival Info */}
                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {festival.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {festival.attendees}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {festival.duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Festival Highlights</h4>
                  <div className="flex flex-wrap gap-1">
                    {festival.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="monastery" size="sm" className="flex-1">
                    Add to Calendar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Festival Planning CTA */}
        <div className="bg-gradient-monastery rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Plan Your Festival Visit</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Don't miss these incredible cultural celebrations. Plan your trip around these sacred festivals 
            and experience the authentic spiritual traditions of Sikkim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              View Full Calendar
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Festival Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalCalendar;