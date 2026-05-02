import { useLanguage } from "../../../../context/LanguageContext";

export const MapSection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full overflow-hidden bg-[#e8eaed]">
      {/* Embedded Google Maps iframe */}
      <div className="relative w-full" style={{ paddingBottom: "35%" }}>
        <iframe
          title="NataWest location"
          src="https://maps.google.com/maps?q=Kawaleryjska+17A,+Bialystok,+Poland&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ minHeight: "260px" }}
        />
        {/* Address overlay */}
        <address className="absolute bottom-4 left-4 sm:left-6 md:left-10 not-italic z-10 bg-white/85 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
          <p className="[font-family:'Montserrat',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-snug tracking-[0] text-[#011938]">
            {t.map.addressLine1}
          </p>
          <p className="[font-family:'Montserrat',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-snug tracking-[0] text-[#011938]">
            {t.map.addressLine2}
          </p>
        </address>
      </div>
    </div>
  );
};
