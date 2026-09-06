import { PackagePricing, Pkg } from "./PackagePricing";

const packages: Pkg[] = [
  {
    name: "Grow+",
    price: "$1,550",
    features: [
      { en: "Total Annual Sales: $2M+", fr: "Ventes annuelles totales : 2M $ +" },
      { en: "Dedicated Bookkeeper", fr: "Teneur de livres dédié" },
      { en: "Sales Tax Filing: Annual", fr: "Production des taxes de vente : annuelle" },
      { en: "Cash Flow Projection: Annual", fr: "Projection de trésorerie : annuelle" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
  {
    name: "Thrive+",
    price: "$2,050",
    features: [
      { en: "Total Annual Sales: $3M+", fr: "Ventes annuelles totales : 3M $ +" },
      { en: "Bookkeeping: Bi-Weekly", fr: "Tenue de livres : bimensuelle" },
      { en: "Liaison with Auditor", fr: "Liaison avec l'auditeur" },
      { en: "Financial Health Review: Annual", fr: "Revue de santé financière : annuelle" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
  {
    name: "Elite+",
    price: "$2,550",
    features: [
      { en: "Total Annual Sales: $4M+", fr: "Ventes annuelles totales : 4M $ +" },
      { en: "Bookkeeping: Weekly", fr: "Tenue de livres : hebdomadaire" },
      { en: "Dedicated CPA Partner", fr: "Associé CPA dédié" },
      { en: "Financial Health Review: Bi-Annual", fr: "Revue de santé financière : semestrielle" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
];

const MediumBusiness = () => (
  <PackagePricing
    titleEn="Medium Business Packages"
    titleFr="Forfaits moyennes entreprises"
    subEn="Advisory-led monthly packages for established companies."
    subFr="Forfaits mensuels axés sur le conseil pour les entreprises établies."
    packages={packages}
  />
);

export default MediumBusiness;
