export interface OfferSubCategory {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  additionalInfo: string;
  autonomousHeadline: string;
  benefitsHeadline: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}