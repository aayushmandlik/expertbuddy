import Image from "next/image";
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import DocumentsByType from "./components/DocumentType";
import PriceCalculator from "./components/PriceCalculator";
import CustomOrderForm from "./components/CustomOrderForm";
export default function Home() {
  return (
   <div>
    <Hero />
    <div className="px-24">
    <Cards />
    <PriceCalculator />
    <DocumentsByType />
    <CustomOrderForm />
    </div>
   </div>
  );
}
