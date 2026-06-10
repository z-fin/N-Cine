export interface Funcion {
  id: string;
  title: string;
  director: string;
  dateTime: string;
  location: string;
  posterUrl: string;
  genres: string[];
  ticketUrl?: string;
  totalTickets: number;
  availableTickets: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
}

export interface SupportTier {
  id: string;
  name: string;
  price: number;
  interval: 'monthly' | 'one-time';
  benefits: string[];
}
