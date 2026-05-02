import { Separator } from "../../components/ui/separator";
import { AboutOverviewSection } from "./sections/AboutOverviewSection/AboutOverviewSection";
import { ContactChannelsSection } from "./sections/ContactChannelsSection/ContactChannelsSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection/GlobalFooterSection";
import { HeroStatementSection } from "./sections/HeroStatementSection";
import { InquiryFormSection } from "./sections/InquiryFormSection";
import { MapSection } from "./sections/MapSection/MapSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection/NavigationHeaderSection";
import { ServiceOfferingSection } from "./sections/ServiceOfferingSection/ServiceOfferingSection";

export const DesktopNatawestPl = (): JSX.Element => {
  return (
    <main className="w-full bg-white overflow-x-hidden flex flex-col">
        {/* Hero with nav overlay */}
        <section
          id="glowna"
          aria-label="Hero statement"
          className="relative w-full"
        >
          <NavigationHeaderSection />
          <HeroStatementSection />
        </section>

        {/* About */}
        <section
          id="o-nas"
          aria-label="About overview"
          className="w-full py-8 md:py-12 lg:py-16"
        >
          <AboutOverviewSection />
        </section>
        <Separator className="w-full bg-[#8d8d8d]" />

        {/* Services */}
        <section
          id="nasze-uslugi"
          aria-label="Service offering"
          className="w-full py-8 md:py-12 lg:py-16"
        >
          <ServiceOfferingSection />
        </section>
        <Separator className="w-full bg-[#8d8d8d]" />

        {/* Contact */}
        <section
          id="lacznosc"
          aria-label="Contact channels"
          className="w-full py-8 md:py-12 lg:py-16"
        >
          <ContactChannelsSection />
        </section>
        <Separator className="w-full bg-[#8d8d8d]" />

        {/* Inquiry form */}
        <section aria-label="Inquiry form" className="w-full py-8 md:py-12 lg:py-16">
          <InquiryFormSection />
        </section>

        {/* Map */}
        <section aria-label="Map and address" className="w-full py-8 md:py-12 lg:py-16">
          <MapSection />
        </section>

        {/* Footer */}
        <section aria-label="Global footer" className="w-full">
          <GlobalFooterSection />
        </section>
    </main>
  );
};
