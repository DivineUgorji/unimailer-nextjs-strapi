import { getThemeClasses } from "@/utils/theme";
import type { ProcessSectionProps } from "@/types";

export function ProcessSection({ heading, theme, steps }: ProcessSectionProps) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container px-4 md:px-8 lg:px-33 pb-14 md:pb-18">
        <h2 className="max-w-[25ch] mx-auto  mb-12 text-center">{heading}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <li key={step.id} className="text-left">
              <div className="bg-neutral-300 w-16 h-16 border rounded-full border-neutral-800/10 hover:border-none hover:bg-accent-400  text-neutral-900 hover:text-neutral-400 mb-4 flex items-center justify-center p-4">
                {step.stepCount && (
                  <span className="text-[30px] leading-[1.30] font-semibold">
                    {step.stepCount}
                  </span>
                )}
              </div>
              <h4 className="mb-4">{step.subheading}</h4>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
