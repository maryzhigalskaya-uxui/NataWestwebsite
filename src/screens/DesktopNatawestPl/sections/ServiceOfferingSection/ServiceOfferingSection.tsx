import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../context/LanguageContext";

export const ServiceOfferingSection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-[1421px] flex-col gap-[18px]">
        <header className="pl-0 md:pl-[68px] lg:pl-[200px]">
          <h2 className="w-fit [font-family:'Montserrat',Helvetica] text-4xl font-semibold leading-[normal] tracking-[0] text-black">
            {t.services.heading}
          </h2>
        </header>
        <Card className="w-full rounded-[32px] border-0 bg-[#0119384c] shadow-none sm:rounded-[40px] lg:rounded-[60px]">
          <CardContent className="px-5 py-5 sm:px-8 sm:py-6 md:px-12 lg:px-[56px] lg:py-[30px] xl:px-[200px]">
            <ul className="m-0 list-none p-0">
              {t.services.items.map((item, index) => (
                <li
                  key={`service-item-${index}`}
                  className="border-b border-black/30 last:border-b-0"
                >
                  <div
                    className={`[font-family:'Montserrat',Helvetica] text-black tracking-[0] leading-[normal] ${
                      index === 0 ? "font-medium" : "font-normal"
                    } whitespace-normal py-[14px] text-[14px] sm:text-[18px] md:text-[22px] lg:whitespace-nowrap lg:py-[17px] lg:text-[28px]`}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};