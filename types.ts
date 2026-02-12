
export interface TranslatedString {
  ar: string;
  en: string;
}

export interface Feature {
  title: TranslatedString;
  icon: string;
}

export interface Project {
  id: string;
  title: TranslatedString;
  description: TranslatedString;
  fullDescription: TranslatedString;
  features: Feature[];
  tech: string[];
  imageUrl: string;
  screenshots?: string[]; // New field for app inner screens
  link?: string;
  primaryColor: string;
}

export type Language = 'ar' | 'en';
