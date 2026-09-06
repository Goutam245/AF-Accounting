import { Check, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn } from "@/components/ui-bits";
import { BOOKING_URL } from "@/lib/links";

export type Pkg = {
  name: string;
  price: string;
  features: { en: string; fr: string; check?: boolean }[];
};

type Props = {
  titleEn: string;
  titleFr: string;
  subEn: string;
  subFr: string;
  packages: Pkg[];
};

export const PackagePricing = ({ titleEn, titleFr, subEn, subFr, packages }: Props) => {
  const { t } = useLang();
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-x">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-navy">
            {t(titleEn, titleFr)}
          </h1>
          <p className="text-body mt-4">{t(subEn, subFr)}</p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((p, idx) => (
            <FadeIn key={p.name} delay={idx * 0.08}>
              <div className="h-full flex flex-col bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 text-center" style={{ background: "#3D0066" }}>
                  <div className="font-display font-bold text-2xl text-white">{p.name}</div>
                  <div className="mt-2 text-white/90 text-sm">
                    {t("Starting from", "À partir de")}
                  </div>
                  <div className="font-display font-extrabold text-3xl text-white mt-1">
                    {p.price}
                  </div>
                  <div className="text-white/80 text-xs mt-1">{t("per month", "par mois")}</div>
                </div>
                <ul className="p-6 space-y-3 flex-1">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-body">
                      <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{t(f.en, f.fr)}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-6 pt-0">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    {t("Get Started", "Commencer")} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
