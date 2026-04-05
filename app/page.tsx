import Hero from "@/components/Hero";
import TerritoryMap from "@/components/TerritoryMap";
import PipelineTable from "@/components/PipelineTable";
import ProductGallery from "@/components/ProductGallery";
import Thesis from "@/components/Thesis";
import MarketExpansion from "@/components/MarketExpansion";
import SalesProof from "@/components/SalesProof";
import OperatorStory from "@/components/OperatorStory";
import First90Days from "@/components/First90Days";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TerritoryMap />
      <PipelineTable />
      <ProductGallery />
      <Thesis />
      <MarketExpansion />
      <SalesProof />
      <OperatorStory />
      <First90Days />
      <ContactCTA />
    </main>
  );
}
