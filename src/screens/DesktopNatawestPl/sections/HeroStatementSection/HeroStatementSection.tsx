import { Button } from "../../../../components/ui/button";
import { useLanguage } from "../../../../context/LanguageContext";


export const HeroStatementSection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div
      className="relative w-full overflow-hidden text-white"
      style={{
        height: "1080px",
        backgroundImage:
          "url('https://img2.akspic.ru/crops/7/4/8/0/80847/80847-sinij-liniya-atmosfera-angle-svet-3840x2160.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "350px",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
          filter: "blur(20px)"
        }}
      />
      
      <div className="relative mx-auto flex min-h-full w-full max-w-[1920px] items-center px-6 pb-16 pt-20 sm:px-10 md:px-14 lg:px-[44px] z-10">
        <div className="w-full">
          <header className="max-w-[1674px]">
            <h1 className="[font-family:'Montserrat',Helvetica] text-[40px] font-light leading-[1.12] tracking-[0] text-white sm:text-[54px] md:text-[72px] lg:text-[82px] xl:text-[96px]">
              {t.hero.title}
            </h1>
          </header>
          <div className="mt-4 h-px w-full bg-white/70" />
          <div className="grid grid-cols-1 gap-8 pt-3 md:grid-cols-[238px_minmax(320px,423px)] md:items-start md:justify-between">
            <p className="[font-family:'Montserrat',Helvetica] text-[24px] font-light leading-[normal] tracking-[0] text-white sm:text-[30px] md:text-[40px] md:text-center">
              {t.about.brand}
            </p>
            <div className="flex flex-col items-start gap-6 md:pt-0">
              <p className="[font-family:'Montserrat',Helvetica] max-w-[423px] text-[22px] font-normal leading-[1.05] tracking-[0] text-white sm:text-[26px] md:text-[32px]">
                {t.hero.description}
              </p>
              <Button
                type="button"
                className="h-auto rounded-[45px] border-0 px-8 py-4 shadow-[0px_4px_4px_#00000040] [font-family:'Montserrat',Helvetica] text-[16px] font-semibold text-white sm:px-10 sm:py-[18px] sm:text-[22px] bg-[linear-gradient(90deg,rgba(1,25,56,1)_0%,rgba(1,11,212,1)_32%,rgba(1,11,212,1)_53%,rgba(1,11,212,1)_72%,rgba(1,25,56,1)_100%)] hover:opacity-95"
              >
                {t.hero.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};