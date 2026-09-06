import { PackagePricing, Pkg } from "./PackagePricing";

const packages: Pkg[] = [
  {
    name: "Grow",
    price: "$650",
    features: [
      { en: "Total Annual Sales: > $100K", fr: "Ventes annuelles totales : > 100K $" },
      { en: "Bookkeeping: Monthly", fr: "Tenue de livres : mensuelle" },
      { en: "Accounts: 1-5", fr: "Comptes : 1-5" },
      { en: "Sales Tax Filing: Annual", fr: "Production des taxes de vente : annuelle" },
      { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés" },
      { en: "Government Correspondence", fr: "Correspondance gouvernementale" },
      { en: "Employees: —", fr: "Employés : —" },
      { en: "Personal Tax Return: 1 Free", fr: "Déclaration personnelle : 1 gratuite" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
  {
    name: "Thrive",
    price: "$850",
    features: [
      { en: "Total Annual Sales: > $500K", fr: "Ventes annuelles totales : > 500K $" },
      { en: "Bookkeeping: Monthly", fr: "Tenue de livres : mensuelle" },
      { en: "Accounts: 7", fr: "Comptes : 7" },
      { en: "Sales Tax Filing: Annual", fr: "Production des taxes de vente : annuelle" },
      { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés" },
      { en: "Payroll Support", fr: "Soutien à la paie" },
      { en: "Employees: < 5", fr: "Employés : < 5" },
      { en: "Personal Tax Return: 2 Free", fr: "Déclaration personnelle : 2 gratuites" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
  {
    name: "Elite",
    price: "$1,050",
    features: [
      { en: "Total Annual Sales: > $1M", fr: "Ventes annuelles totales : > 1M $" },
      { en: "Bookkeeping: Monthly", fr: "Tenue de livres : mensuelle" },
      { en: "Accounts: 7", fr: "Comptes : 7" },
      { en: "Sales Tax Filing: Annual", fr: "Production des taxes de vente : annuelle" },
      { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés" },
      { en: "Payroll Support", fr: "Soutien à la paie" },
      { en: "Employees: < 10", fr: "Employés : < 10" },
      { en: "Personal Tax Return: 2 Free", fr: "Déclaration personnelle : 2 gratuites" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
];

const SmallBusiness = () => (
  <PackagePricing
    titleEn="Small Business Packages"
    titleFr="Forfaits petites entreprises"
    subEn="Transparent monthly pricing for growing small businesses."
    subFr="Tarifs mensuels transparents pour les petites entreprises en croissance."
    packages={packages}
  />
);

export default SmallBusiness;
