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
    <Cards />
    <PriceCalculator />
    <DocumentsByType />
    <CustomOrderForm />
   </div>
  );
}
