import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MonasteriesSection from "@/components/MonasteriesSection";
import FestivalCalendar from "@/components/FestivalCalendar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MonasteriesSection />
      <FestivalCalendar />
      <Footer />
    </div>
  );
};

export default Index;