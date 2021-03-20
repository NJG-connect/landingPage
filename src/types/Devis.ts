import { ImageDevisType } from "../assets/images/devis";

export enum OptionDevisType {
  dev = "dev",
  design = "design",
  conseil = "conseil",
};

export interface DevisServiceType {
  [OptionDevisType.dev]: {
    title: string;
    description: string;
    images: ImageDevisType[];
  }
  [OptionDevisType.design]: {
    title: string;
    description: string;
    images: ImageDevisType[];
  }
  [OptionDevisType.conseil]: {
    title: string;
    description: string;
    images: ImageDevisType[];
  }
}


const devisService: DevisServiceType = {
  [OptionDevisType.dev]: {
    title: "Developpement",
    description: "Application (Android/Apple), Système de facturation en ligne, Intranet, ERP, CRM",
    images: ['paint', 'flyer', 'carteDeVisite']
  },
  [OptionDevisType.design]: {
    title: "Graphisme",
    description: "Images, Charte graphique, documents prints (flyers/Carte de visite), logo...",
    images: ['tel', 'code', 'screen']
  },
  [OptionDevisType.conseil]: {
    title: "Conseils / Expertises",
    description: "Laissez nous faire, on s'occupe de tout !",
    images: ['synthese', 'erp', 'graph']
  },
}

export default devisService;