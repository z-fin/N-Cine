import type { AccentColor } from './design';

export interface Screening {
  id: string;
  title: string;
  director: string;
  dateTime: string;
  venue: string;
  description: string;
  tags: string[];
  accent: AccentColor;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  accent: AccentColor;
}

export interface SupportTier {
  id: string;
  name: string;
  amount: string;
  description: string;
  perks: string[];
  accent: AccentColor;
}
