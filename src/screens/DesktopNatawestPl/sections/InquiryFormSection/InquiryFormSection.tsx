import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { useLanguage } from "../../../../context/LanguageContext";


export const InquiryFormSection = (): JSX.Element => {
  const { t } = useLanguage();

  const inquiryFields = [
    {
      id: "name",
      type: "text",
      placeholder: t.form.namePlaceholder,
    },
    {
      id: "email",
      type: "email",
      placeholder: t.form.emailPlaceholder,
    },
    {
      id: "phone",
      type: "tel",
      placeholder: t.form.phonePlaceholder,
    },
    {
      id: "service",
      type: "text",
      placeholder: t.form.servicePlaceholder,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-[1462px] flex-col justify-between gap-10 px-4 md:px-6 lg:flex-row lg:gap-[clamp(48px,10vw,238px)]">
        <header className="max-w-[622px] pt-0 lg:pt-[65px]">
          <p className="[font-family:'Montserrat',Helvetica] text-[22px] font-medium leading-[1.35] tracking-[0] text-black md:text-[28px]">
            {t.form.heading}
            <br />
            {t.form.subheading}
          </p>
        </header>
        <Card className="w-full max-w-[600px] rounded-[36px] border-0 bg-[#1e1e1e] shadow-none md:rounded-[60px]">
          <CardContent className="flex min-h-[660px] flex-col items-center px-6 pb-[60px] pt-10 md:px-[100px]">
            <h2 className="[font-family:'Montserrat',Helvetica] text-center text-xl font-semibold leading-[normal] tracking-[0] text-white md:text-2xl">
              {t.form.formTitle}
            </h2>
            <form className="mt-[92px] flex w-full flex-col gap-[22px]">
              {inquiryFields.map((field) => (
                <label key={field.id} htmlFor={field.id} className="sr-only">
                  {field.placeholder}
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-[52px] rounded-[45px] border-0 bg-white px-5 [font-family:'Montserrat',Helvetica] text-base font-normal tracking-[0] text-black placeholder:text-[#8b8b8b] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </label>
              ))}
            </form>
            <Button
              type="submit"
              className="mt-[86px] h-auto min-h-[60px] w-full max-w-[260px] rounded-[45px] bg-white px-6 py-4 [font-family:'Montserrat',Helvetica] text-xl font-semibold tracking-[0] text-black hover:bg-white/90"
            >
              {t.form.submit}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
