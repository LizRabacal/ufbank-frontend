import { Text } from "@/components/landing-page/Text";
import { StickyScrollRevealDemo } from "@/components/landing-page/StickyScroll";
import PlanosETarifas from "@/components/landing-page/Planos";
import FaqSection from "@/components/landing-page/Faq";
import { Suspense } from "react";
import { FaqLoading } from "@/components/landing-page/FaqLoading";
import TestimonialsSection from "@/components/landing-page/TestimonialsSection";


export default async function Home() {
  return (
    <div className="w-full min-h-screen  pt-10 flex flex-col bg-cover bg-no-repeat bg-gradient-to-br"

    >
      <Text />
      <StickyScrollRevealDemo />
      <PlanosETarifas />
      <TestimonialsSection />
      <Suspense fallback={<FaqLoading />}>
        <FaqSection />
      </Suspense>
    </div>
  );
}
