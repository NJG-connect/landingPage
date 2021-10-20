import { ImageDevisType } from "../assets/images/devis";
import { ImageProjectDevisType } from "../assets/images/devis/services";

export enum OptionDevisType {
  dev = "dev",
  design = "design",
  conseil = "conseil",
}

interface ProjectDevisType {
  title: string;
  description: string;
  image: ImageProjectDevisType;
}

export interface DevisServiceType {
  [OptionDevisType.dev]: {
    title: string;
    description: string;
    images: ImageDevisType[];
    projects: ProjectDevisType[];
  };
  [OptionDevisType.design]: {
    title: string;
    description: string;
    images: ImageDevisType[];
    projects: ProjectDevisType[];
  };
  [OptionDevisType.conseil]: {
    title: string;
    description: string;
    images: ImageDevisType[];
    projects: ProjectDevisType[];
  };
}

const devisService: DevisServiceType = {
  [OptionDevisType.dev]: {
    title: "Developpement",
    description:
      "Application (Android/Apple), Système de facturation en ligne, Intranet, ERP, CRM",
    images: ["paint", "flyer", "carteDeVisite"],
    projects: [
      {
        title: "Application",
        description: "Android / Apple",
        image: "application",
      },
      { title: "Site Vitrine", description: "Page Web", image: "webPage" },
      {
        title: "Intranet",
        description: "Plateforme pour vos salariés",
        image: "intranet",
      },
      {
        title: "Facturation en ligne",
        description: "Paypal / Cartes",
        image: "facturation",
      },
      {
        title: "ERP / Appli métier",
        description: "Optiomisez vos process",
        image: "erp",
      },
    ],
  },
  [OptionDevisType.design]: {
    title: "Graphisme",
    description:
      "Images, Charte graphique, documents prints (flyers/Carte de visite), logo...",
    images: ["tel", "code", "screen"],
    projects: [
      { title: "Logo", description: "Création / MAJ", image: "logo" },
      {
        title: "Charte Graphique",
        description: "Entreprise / Evènements",
        image: "charteGraphique",
      },
      {
        title: "Images",
        description: "Carrousel / Emailing",
        image: "emailing",
      },
      { title: "Print", description: "Flyer / Plaquettes", image: "print" },
      {
        title: "QR Codes",
        description: " Optimisez la saisie",
        image: "qrcode",
      },
      {
        title: "Carte de visite",
        description: "Création",
        image: "carteDeVisite",
      },
      {
        title: "Désign Evenementiel",
        description: "Stand / Kakemono",
        image: "stand",
      },
    ],
  },
  [OptionDevisType.conseil]: {
    title: "Conseils / Expertises",
    description: "Laissez nous faire, on s'occupe de tout !",
    images: ["synthese", "erp", "graph"],
    projects: [
      {
        title: "Analytics",
        description: "Obtenez des stats de votre site",
        image: "analytics",
      },
      {
        title: "Google Business",
        description: "Création de votre fiche Google",
        image: "googleBusiness",
      },
      {
        title: "Adworks",
        description: "Campagne de publicité ciblée",
        image: "adworks",
      },
      {
        title: "Diagnostic digital",
        description: "Nos experts chez vous 🧐",
        image: "diag",
      },
    ],
  },
};

export interface SupportProjetDevisType {
  title: string;
  image: ImageDevisType;
}

export const supportProjetDevis: SupportProjetDevisType[] = [
  {
    title: "Ordinateur",
    image: "ordi",
  },
  {
    title: "PC",
    image: "pc",
  },
  {
    title: "Tablette",
    image: "tab",
  },
  {
    title: "Mobile",
    image: "tel2",
  },
];

export const budgetValue = [
  { value: 10, label: "Non défini" },
  { value: 20, label: "léger" },
  { value: 30, label: "moyen" },
  { value: 40, label: "correct" },
  { value: 50, label: "illimité" },
];

export default devisService;
