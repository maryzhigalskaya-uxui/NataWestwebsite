import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../context/LanguageContext";


const socialLinks = [
  { name: "Whatsapp", src: "/whatsapp.png", href: "#" },
  { name: "Telegram", src: "/telegram.png", href: "#" },
];


export const GlobalFooterSection = (): JSX.Element => {
  const { t } = useLanguage();

  const companyDetails = [
    t.footer.companyName,
    t.footer.email,
    t.footer.address,
    t.footer.copyright,
  ];

  const navigationLinks = [t.nav.home, t.nav.about, t.nav.services, t.nav.contact];

  const legalLinks = [
    t.footer.privacy,
    t.footer.terms,
    t.footer.dataProcessing,
  ];

  return (
    <footer className="relative w-full bg-[#011938] text-white">
      <Card className="w-full rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="mx-auto flex min-h-[200px] w-full max-w-[1920px] flex-col justify-between px-6 py-6 sm:px-10 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <address className="not-italic">
              <div className="flex flex-col text-white">
                <p className="[font-family:'Montserrat',Helvetica] text-lg font-normal leading-[normal] tracking-[0]">
                  {companyDetails[0]}
                </p>
                <p className="mt-2.5 [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[normal] tracking-[0]">
                  {companyDetails[1]}
                </p>
                <p className="mt-[30px] [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[normal] tracking-[0]">
                  {companyDetails[2]}
                </p>
                <p className="mt-2.5 [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[normal] tracking-[0]">
                  {companyDetails[3]}
                </p>
              </div>
            </address>
            <section className="flex flex-col items-start lg:items-center">
              <h2 className="[font-family:'Montserrat',Helvetica] text-lg font-normal leading-[normal] tracking-[0] text-white">
                {t.footer.contactLabel}
              </h2>
              <a
                href="tel:+48513377651"
                className="mt-4 [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[normal] tracking-[0] text-white"
              >
                {t.footer.contactNumber}
              </a>
              <div className="mt-5 flex items-center gap-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    className="inline-flex"
                  >
                    <img
                      className="h-10 w-10 object-cover"
                      alt={link.name}
                      src={link.src}
                    />
                  </a>
                ))}
              </div>
            </section>
            <nav aria-label="Stopka - nawigacja" className="lg:pt-[11px]">
              <ul className="flex flex-col gap-2.5">
                {navigationLinks.map((item) => (
                  <li key={item}>
                    <Button
                      variant="link"
                      className="h-auto p-0 [font-family:'Montserrat',Helvetica] text-lg font-normal leading-[normal] tracking-[0] text-white no-underline hover:text-white hover:no-underline"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-start justify-start lg:justify-end">
              <img
                className="h-20 w-28 object-contain"
                alt="Logo"
                src="/logo-2.png"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:mt-0">
            {legalLinks.map((item, index) => (
              <div key={item} className="flex items-center">
                <Button
                  variant="link"
                  className="h-auto p-0 [font-family:'Montserrat',Helvetica] text-base font-light leading-[normal] tracking-[0] text-white underline hover:text-white"
                >
                  {item}
                </Button>
                {index < legalLinks.length - 1 ? (
                  <img
                    className="ml-2 h-3 w-px"
                    alt="Line"
                    src="/line-2-1.svg"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
