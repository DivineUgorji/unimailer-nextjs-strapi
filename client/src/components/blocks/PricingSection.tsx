import type { PricingSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import { Button } from "../ui/Button";
import Check from "@/components/icons/Check";

export function PricingSection({
  heading,
  theme,
  plans,
}: Readonly<PricingSectionProps>) {
  const sectionThemeClasses = getThemeClasses(theme?.variant);

  return (
    <section
      className={`${sectionThemeClasses.background} ${sectionThemeClasses.text}`}
    >
      <div className="container px-4 md:px-8 lg:px-33 py-12 md:py-14">
        <h2 className="text-center max-w-[30ch] mx-auto mb-12">{heading}</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans?.map((plan) => {
            const planThemeClasses = getThemeClasses(
              plan.themeVariant?.variant ?? theme?.variant,
            );

            return (
              <li
                key={plan.id}
                className={`p-6 flex flex-col shadow-[0px_8px_12px_rgba(0,0,0,0.25)] rounded-lg 
                  ${planThemeClasses.background} 
                  ${planThemeClasses.text}`}
              >
                <h3 className="text-xl text-center font-semibold mb-4">
                  {plan.planName}
                </h3>
                <div className="flex items-center justify-center text-center">
                  <p className="text-xl font-medium">{plan.currencySymbol}</p>

                  <h4 className="text-[38px] font-semibold leading-tight">
                    {plan.price}
                    <span className="text-[24px] leading-[1.35]">
                      {plan.billingPeriod}
                    </span>
                  </h4>
                </div>
                <p className="text-center my-2">{plan.note}</p>
                <div
                  className={`mb-4 h-px w-full ${planThemeClasses.divider}`}
                />

                <ul className="mb-8 space-y-4">
                  {plan.features?.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <Check />
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.pricingCta && (
                  <Button
                    {...plan.pricingCta}
                    className="mt-auto w-full text-[18px] font-semibold py-3 px-13 rounded-lg"
                  >
                    {plan.pricingCta.text}
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
