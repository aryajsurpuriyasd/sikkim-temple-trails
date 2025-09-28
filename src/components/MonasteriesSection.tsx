import { useState } from "react";
import MonasteryCard from "./MonasteryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Mountain, Plus } from "lucide-react";
import rumtekImage from "@/assets/rumtek-monastery.jpg";
import pemayangtseImage from "@/assets/pemayangtse-monastery.jpg";
import tashidingImage from "@/assets/tashiding-monastery.jpg";
import encheyImage from "@/assets/enchey-monastery.jpg";
import gonjangImage from "@/assets/gonjang-monastery.jpg";

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
      image: rumtekImage,
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
      image: pemayangtseImage,
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
      image: tashidingImage,
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
      image: encheyImage,
      significance: "Built on a site blessed by Lama Drupthob Karpo. Famous for its Cham dance during annual festivals.",
      features: ["Kanchenjunga Views", "Cham Dance", "Peaceful Gardens", "Traditional Murals", "Sacred Grove"],
      rating: 4.5,
      visitTime: "April to June, September to November"
    },
    {
      name: "Gonjang Monastery",
      description: "Ancient monastery perched on a scenic hillside, renowned for its spiritual teachings and meditation retreats. A center of Buddhist learning with rich cultural heritage.",
      location: "Gonjang, West Sikkim",
      founded: "1692",
      image: gonjangImage,
      significance: "One of the oldest monasteries in Sikkim, serving as a spiritual retreat center for centuries. Known for its ancient library and meditation caves.",
      features: ["Ancient Library", "Meditation Caves", "Sacred Relics", "Traditional Art", "Himalayan Views"],
      rating: 4.7,
      visitTime: "March to June, September to November"
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
          {filteredMonasteries.map((monastery, index) => {
            let history = "";
            
            switch(monastery.name) {
              case "Rumtek Monastery":
                history = "Rumtek Monastery, also called the Dharma Chakra Centre, is one of the most important Buddhist monasteries in Sikkim. It stands on a hill about 23 km from Gangtok and is the main seat of the Kagyu sect of Tibetan Buddhism in India. The monastery's story goes back to the 12th century, when the first Karma Kagyu monastery was built in Tibet. In the mid-18th century, the 12th Karmapa chose Rumtek as the place to build a new monastery in Sikkim. For many years it served as a spiritual centre for local Buddhists, but over time the original building fell into disrepair. In the early 1960s, the 16th Karmapa, Rangjung Rigpe Dorje, fled Tibet after the Chinese invasion and came to Sikkim. He selected Rumtek as his headquarters and rebuilt the monastery with the help of the Sikkim government and devotees. The new Rumtek Monastery was completed in 1966 and designed to resemble the Kagyu monastery in Tsurphu, Tibet. It houses many sacred objects, rare manuscripts, and beautiful murals that reflect the teachings of the Kagyu lineage. Today, Rumtek is not only a place of worship but also a centre for learning, meditation, and festivals. Pilgrims and tourists visit to see its golden stupa, prayer wheels, and to experience the peaceful atmosphere of this historic monastery.";
                break;
              case "Tashiding Monastery":
                history = "Tashiding Monastery is one of the most sacred and important Buddhist monasteries in Sikkim, located on a hilltop in the West District. Its name \"Tashiding\" means \"The Devoted to Religion\" in the local language, reflecting its spiritual significance. The monastery was founded in 1717 by Ngadak Sempa Chempo Phunshok Rigzing, a prominent religious figure from Tibet. This monastery belongs to the Nyingma sect, which is the oldest school of Tibetan Buddhism. Tashiding has played a central role in the spiritual life of Sikkimese people and is known for its peaceful atmosphere and beautiful architecture. It is surrounded by lush green hills, rivers, and forests, making it a perfect place for meditation and prayer. Tashiding Monastery is also famous for hosting important festivals, such as the Bumchu Festival, celebrated once every year. During this festival, a sacred water vase is opened, and its level is believed to predict the fortune of Sikkim for the year. Pilgrims from all over Sikkim and nearby states come to participate in prayers and rituals during this festival. Over the years, Tashiding Monastery has remained a center of learning, culture, and devotion. It is not only a place of worship but also a symbol of Sikkim's rich Buddhist heritage. Visitors often come here to experience the serene environment, learn about Buddhist practices, and enjoy panoramic views of the surrounding valleys and hills.";
                break;
              case "Gonjang Monastery":
                history = "Gonjang Monastery is a beautiful Buddhist monastery located near Tashi View Point, just a few kilometers from Gangtok in East Sikkim. It was established in 1981 by H.E. Tingkye Gonjang Rinpoche, who is believed to be the reincarnation of Yolmo Tulku of Nepal. The monastery was built with the vision of preserving the teachings of Buddha and promoting the Nyingma and Kagyu traditions of Tibetan Buddhism. The founder, Rinpoche, was born in Sikkim and recognized as a tulku (reincarnated lama) at a young age. He travelled to Tibet and Nepal to receive advanced Buddhist teachings before returning to Sikkim to establish Gonjang Monastery. His aim was to create a center where monks could study Buddhist philosophy, meditation, and rituals while keeping ancient Himalayan culture alive. The monastery follows a unique lineage of Tibetan Buddhism and also provides education to young monks, including teachings on philosophy, literature, and traditional arts. The building is known for its colorful paintings, murals of Buddhist deities, and statues of Guru Padmasambhava and Lord Buddha. Today, Gonjang Monastery stands as a peaceful spiritual retreat for visitors and devotees. It continues to serve as a center of learning, meditation, and cultural preservation, welcoming travelers who wish to experience Sikkim's rich Buddhist heritage.";
                break;
              case "Pemayangtse Monastery":
                history = "Pemayangtse Monastery, one of the oldest and most important monasteries in Sikkim, is located near Pelling in West Sikkim. Built in 1705, it belongs to the Nyingma order, the oldest school of Tibetan Buddhism. The name \"Pemayangtse\" means \"Perfect Sublime Lotus,\" reflecting the monastery's spiritual significance. The monastery was established by Lhatsun Chempo, a highly respected lama who played a key role in unifying Sikkim in the 17th century. It served as a center for spiritual learning, meditation, and monastic education. Over the centuries, Pemayangtse has been a place where monks study Buddhist philosophy, rituals, and art, preserving ancient traditions and manuscripts. Pemayangtse Monastery is famous for its beautiful architecture and intricate murals that depict stories of Lord Buddha, tantric deities, and Tibetan Buddhist saints. The monastery also holds an important festival called Cham Dance, performed by masked monks during the Sikkimese New Year and special occasions, which attracts visitors from across the region. Surrounded by dense pine forests and offering stunning views of the Khangchendzonga mountain range, the monastery not only provides spiritual guidance but also a peaceful retreat for visitors. Its combination of history, culture, and scenic beauty makes Pemayangtse one of Sikkim's must-visit monasteries for pilgrims, tourists, and anyone interested in Tibetan Buddhism.";
                break;
              case "Enchey Monastery":
                history = "Enchey Monastery is a beautiful Buddhist monastery located on a hilltop near Gangtok, the capital of Sikkim. It belongs to the Nyingma order, one of the oldest schools of Tibetan Buddhism. The monastery was built in 1909 under the guidance of Lama Druptop Gyatso. Its name, \"Enchey,\" means \"Solitary Monastery,\" because it was built in a quiet, peaceful area away from the town. The monastery is known for its unique architecture, featuring brightly painted walls, traditional Tibetan designs, and prayer flags fluttering in the wind. Inside, it houses sacred Buddhist scriptures, statues, and thangkas (religious scroll paintings). Monks live here and follow strict daily routines, including meditation, prayers, and rituals. Enchey Monastery is famous for its annual Chaam dance festival, usually held in December or January. During this festival, monks wear colorful masks and perform ritual dances to drive away evil spirits and bless the community. The monastery is not only a place of worship but also a center of learning and meditation. Visitors are welcome to experience the peaceful surroundings, observe the monks' rituals, and enjoy panoramic views of Gangtok and the surrounding mountains. Enchey Monastery continues to be an important part of Sikkim's cultural and spiritual heritage, attracting both pilgrims and tourists from all over the world.";
                break;
              default:
                history = `This ancient monastery stands as a testament to Sikkim's rich Buddhist heritage. Built centuries ago by devoted monks, it has served as a spiritual sanctuary for generations of pilgrims and locals alike. The monastery has witnessed the rise and fall of kingdoms, the changing seasons of the Himalayas, and continues to preserve the sacred teachings and traditions that have been passed down through time. ${monastery.significance}`;
            }

            return (
              <MonasteryCard 
                key={index} 
                {...monastery}
                history={history}
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
            );
          })}
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