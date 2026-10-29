import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { FeatureTabs } from "@/components/sections/FeatureTabs";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { OnboardingProcess } from "@/components/sections/OnboardingProcess";
import { TwoTrack } from "@/components/sections/TwoTrack";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Reveal>
        <TwoTrack />
      </Reveal>
      <Reveal>
        <FeatureTabs />
      </Reveal>
      <Reveal>
        <Industries />
      </Reveal>
      <Reveal>
        <OnboardingProcess />
      </Reveal>
      <Reveal>
        <ConsultationForm />
      </Reveal>
    </main>
  );
}
