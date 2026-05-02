import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../context/LanguageContext";


export const AboutOverviewSection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full px-6 md:px-10 lg:px-16 xl:px-[114px]">
      <div className="mx-auto flex w-full max-w-[1665px] flex-col gap-8 lg:gap-12 xl:gap-16">
        <header className="flex justify-center">
          <h2 className="[font-family:'Montserrat',Helvetica] text-2xl font-semibold leading-normal tracking-[0] text-black md:text-3xl xl:text-4xl">
            {t.about.heading}
          </h2>
        </header>
        <Card className="h-auto w-full border-0 bg-transparent shadow-none">
          <CardContent className="grid gap-6 p-0 md:gap-8 lg:grid-cols-[minmax(220px,346px)_minmax(0,1151px)] lg:gap-16 xl:gap-[164px]">
            <div className="flex items-start justify-center lg:justify-start">
              <p className="bg-[linear-gradient(90deg,rgba(1,25,56,1)_0%,rgba(59,109,145,1)_100%)] bg-clip-text text-center [font-family:'Montserrat',Helvetica] text-[40px] font-semibold italic leading-none tracking-[0] text-transparent [-webkit-text-fill-color:transparent] [text-fill-color:transparent] md:text-[52px] lg:text-left xl:text-[64px]">
                {t.about.brand}
              </p>
            </div>
            <div className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-normal tracking-[0] text-black md:text-xl lg:text-2xl xl:text-[28px]">
              {t.about.paragraphs.map((paragraph, index) => (
                <p
                  key={`about-paragraph-${index}`}
                  className={index > 0 ? "mt-2" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
