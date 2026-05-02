import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { useLanguage } from "../../../../context/LanguageContext";

export const NavigationHeaderSection = (): JSX.Element => {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    {
      label: t.nav.home,
      href: "#glowna",
    },
    {
      label: t.nav.about,
      href: "#o-nas",
    },
    {
      label: t.nav.services,
      href: "#nasze-uslugi",
    },
    {
      label: t.nav.contact,
      href: "#lacznosc",
    },
  ];

  return (
    <>
      <header className="w-full bg-transparent px-4 pt-4 sm:px-6 lg:px-10 lg:pt-10">
        <div className="flex w-full items-center gap-4">
          <a
            href="#glowna"
            aria-label="Strona główna"
            className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <img
              className="h-[54px] w-auto object-contain sm:h-[64px] lg:h-[78px]"
              alt="Logo"
              src="/logo-1.png"
            />
          </a>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-3 lg:gap-6">
            <nav
              aria-label="Główna nawigacja"
              className="flex h-10 min-w-0 items-center rounded-full bg-[#011938] px-4 sm:h-12 sm:px-6 lg:h-20 lg:px-[60px]"
            >
              <ul className="flex items-center gap-4 sm:gap-6 lg:gap-[38px]">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="[font-family:'Montserrat',Helvetica] whitespace-nowrap text-xs font-semibold leading-none tracking-[0] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:text-sm lg:text-2xl"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ToggleGroup
              type="single"
              value={language}
              onValueChange={(value) => value && setLanguage(value as "pl" | "en")}
              aria-label="Wybór języka"
              className="flex h-10 shrink-0 items-center rounded-full bg-[#011938] p-1 sm:h-12 lg:h-[72px] lg:w-[158px] lg:rounded-[45px]"
            >
              <ToggleGroupItem
                value="en"
                aria-label="English"
                className="[font-family:'Montserrat',Helvetica] h-8 rounded-full border-0 px-3 text-xs font-semibold text-white data-[state=on]:bg-white data-[state=on]:text-black sm:h-10 sm:px-4 sm:text-sm lg:h-[42px] lg:min-w-[62px] lg:px-5 lg:text-2xl"
              >
                EN
              </ToggleGroupItem>

              <ToggleGroupItem
                value="pl"
                aria-label="Polski"
                className="[font-family:'Montserrat',Helvetica] h-8 rounded-full border-0 px-3 text-xs font-semibold text-white data-[state=on]:bg-white data-[state=on]:text-black sm:h-10 sm:px-4 sm:text-sm lg:h-[42px] lg:min-w-[62px] lg:px-5 lg:text-2xl"
              >
                PL
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </header>
    </>
  );
};