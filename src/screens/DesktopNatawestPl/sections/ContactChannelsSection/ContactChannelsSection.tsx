import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../context/LanguageContext";


export const ContactChannelsSection = (): JSX.Element => {
  const { t } = useLanguage();

  const contactItems = [
    t.contact.email,
    t.contact.telegram,
    t.contact.whatsapp,
    t.contact.hours,
  ];

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-3">
        <header className="flex justify-center">
          <h2 className="[font-family:'Montserrat',Helvetica] text-center text-4xl font-semibold tracking-[0] leading-[normal] text-black">
            {t.contact.heading}
          </h2>
        </header>
        <Card className="w-full overflow-hidden rounded-none border-0 shadow-none">
          <CardContent className="relative p-0">
            <img
              className="h-[128px] w-full object-cover md:h-[160px] lg:h-[300px]"
              alt="Contacts base"
              src="/contacts-base.png"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 sm:px-8 md:px-12 lg:pl-[210px] lg:pr-12">
                <address className="not-italic">
                  <ul className="flex flex-col gap-2 md:gap-3">
                    {contactItems.map((item) => (
                      <li
                        key={item}
                        className="[font-family:'Montserrat',Helvetica] text-base font-normal tracking-[0] leading-[normal] text-white sm:text-lg md:text-xl lg:text-[28px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </address>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
