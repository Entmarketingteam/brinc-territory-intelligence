import Hero from "@/components/Hero";
import TerritoryMap from "@/components/TerritoryMap";
import PipelineTable from "@/components/PipelineTable";
import Thesis from "@/components/Thesis";
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
      <Thesis />
      <SalesProof />
      <OperatorStory />
      <First90Days />
      <ContactCTA />
    </main>
  );
}
