import { useState } from "react";
import MonasteryCard from "./MonasteryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Mountain, Plus } from "lucide-react";
import prayerFlagsImage from "@/assets/prayer-flags.jpg";
import monasteryEntranceImage from "@/assets/monastery-entrance.jpg";

const MonasteriesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Sample monastery data - in real app this would come from database
  const monasteries = [
    {
      name: "Rumtek Monastery",
      description: "The largest monastery in Sikkim, known as the 'Dharmachakra Centre'. Home to the Karmapa and center of the Karma Kagyu lineage.",
      location: "Gangtok, East Sikkim",
      founded: "1966",
      image: monasteryEntranceImage,
      significance: "Seat of the 16th Karmapa, houses sacred relics and traditional artifacts. Important center for Buddhist learning and meditation.",
      features: ["Sacred Relics", "Golden Stupa", "Prayer Wheels", "Traditional Art", "Meditation Hall"],
      rating: 4.8,
      visitTime: "April to June, September to November"
    },
    {
      name: "Pemayangtse Monastery",
      description: "One of the oldest and most prestigious monasteries in Sikkim, meaning 'Perfect Sublime Lotus'. A three-story structure with intricate woodwork.",
      location: "Pelling, West Sikkim",
      founded: "1705",
      image: prayerFlagsImage,
      significance: "Head monastery of the Nyingma order in Sikkim. Famous for its wooden sculpture depicting the Sangdopalri (heavenly abode of Guru Rinpoche).",
      features: ["Wooden Sculptures", "Ancient Manuscripts", "Mountain Views", "Traditional Architecture", "Sacred Statues"],
      rating: 4.7,
      visitTime: "March to May, October to December"
    },
    {
      name: "Tashiding Monastery",
      description: "Sacred monastery built on a hilltop between the Rathong and Rangeet rivers. Known for the holy festival of Bhumchu.",
      location: "Tashiding, West Sikkim",
      founded: "1717",
      image: monasteryEntranceImage,
      significance: "Most sacred monastery in Sikkim. The annual Bhumchu festival predicts the year's fortune based on water level in a sacred vase.",
      features: ["Sacred Vase", "River Confluence", "Festival Site", "Hilltop Location", "Prayer Flags"],
      rating: 4.6,
      visitTime: "February to April, October to December"
    },
    {
      name: "Enchey Monastery",
      description: "Beautiful monastery with stunning views of Kanchenjunga. Known for its peaceful atmosphere and traditional architecture.",
      location: "Gangtok, East Sikkim",
      founded: "1909",
      image: prayerFlagsImage,
      significance: "Built on a site blessed by Lama Drupthob Karpo. Famous for its Cham dance during annual festivals.",
      features: ["Kanchenjunga Views", "Cham Dance", "Peaceful Gardens", "Traditional Murals", "Sacred Grove"],
      rating: 4.5,
      visitTime: "April to June, September to November"
    }
  ];

  const filteredMonasteries = monasteries.filter(monastery =>
    monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monastery.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="monasteries" className="py-20 bg-gradient-mountain">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-monastery rounded-full flex items-center justify-center shadow-monastery">
              <Mountain className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sacred Monasteries of <span className="bg-gradient-monastery bg-clip-text text-transparent">Sikkim</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover the spiritual heart of the Himalayas through ancient monasteries that have preserved Buddhist traditions for centuries. Each monastery tells a unique story of faith, art, and cultural heritage.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search monasteries by name or location..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Monasteries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {filteredMonasteries.map((monastery, index) => (
        <MonasteryCard 
          key={index} 
          {...monastery}
          history={`This ancient monastery stands as a testament to Sikkim's rich Buddhist heritage. Built centuries ago by devoted monks, it has served as a spiritual sanctuary for generations of pilgrims and locals alike. The monastery has witnessed the rise and fall of kingdoms, the changing seasons of the Himalayas, and continues to preserve the sacred teachings and traditions that have been passed down through time. ${monastery.significance}`}
          specialty={`Known for its unique architectural style that blends traditional Tibetan and local Sikkimese elements. The monastery houses rare manuscripts, ancient thangka paintings, and serves as a center for meditation and spiritual learning. Visitors are often amazed by the peaceful ambiance and the intricate details of the prayer wheels and stupas found throughout the complex.`}
          localFood={["Momos", "Thukpa", "Gundruk", "Yak Cheese", "Chhurpi", "Sel Roti"]}
          shopping={["Prayer Flags", "Singing Bowls", "Incense Sticks", "Buddhist Books", "Thangka Paintings", "Woolen Handicrafts"]}
          events={[
            {
              name: "Annual Puja Ceremony",
              date: "Full Moon Day",
              description: "Sacred prayer ceremony with traditional chants, butter lamp lighting, and community feast shared among devotees."
            },
            {
              name: "Monastery Festival",
              date: "Winter Solstice",
              description: "Three-day celebration featuring masked dances, cultural performances, and spiritual teachings by senior monks."
            }
          ]}
        />
          ))}
        </div>

        {/* Add More Section */}
        <div className="text-center">
          <div className="bg-card rounded-lg p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Add More Monasteries</h3>
            <p className="text-muted-foreground mb-6">
              Help us expand our collection of sacred sites. Only authorized administrators can add monasteries after proper authentication.
            </p>
            <Button 
              variant="monastery" 
              onClick={() => setShowAddForm(!showAddForm)}
              className="mb-4"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Monastery
            </Button>
            {showAddForm && (
              <div className="text-sm text-muted-foreground bg-muted p-4 rounded-md">
                <p>Monastery addition form would appear here. Features would include:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Name, location, and founding date</li>
                  <li>Historical significance and description</li>
                  <li>Photo uploads and 360° view integration</li>
                  <li>Festival calendar and visiting hours</li>
                  <li>AR/VR model uploads</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Monasteries Listed", value: "25", growth: "+5 this month" },
            { label: "Years of History", value: "300+", growth: "Ancient heritage" },
            { label: "Virtual Tours", value: "360°", growth: "Immersive experience" },
            { label: "Visitors Guided", value: "10K+", growth: "Growing community" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.growth}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonasteriesSection;