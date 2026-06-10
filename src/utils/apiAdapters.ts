import type { Article, Funcion, SupportTier as ApiSupportTier } from '../types/api';
import type {
  NewsArticle,
  Screening,
  SupportTier as UiSupportTier,
} from '../types/content';
import type { AccentColor } from '../types/design';

const accents: AccentColor[] = ['red', 'orange', 'yellow', 'green', 'indigo', 'violet'];

export function toScreening(funcion: Funcion, index: number): Screening {
  return {
    id: funcion.id,
    title: funcion.title,
    director: funcion.director,
    dateTime: formatScreeningDateTime(funcion.dateTime),
    venue: funcion.location,
    description: `${funcion.availableTickets} de ${funcion.totalTickets} entradas disponibles.`,
    tags: funcion.genres,
    accent: accents[index % accents.length],
    posterUrl: funcion.posterUrl,
    ticketUrl: funcion.ticketUrl,
  };
}

export function toNewsArticle(article: Article, index: number): NewsArticle {
  return {
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    imageUrl: article.imageUrl,
    category: article.category,
    date: formatPublishedDate(article.publishedAt),
    readTime: estimateReadTime(article.content),
    accent: accents[index % accents.length],
  };
}

export function toSupportTier(tier: ApiSupportTier, index: number): UiSupportTier {
  return {
    id: tier.id,
    name: tier.name,
    amount: formatCurrency(tier.price),
    description: tier.interval === 'monthly' ? 'Aporte mensual para sostener el ciclo.' : 'Aporte unico para esta temporada.',
    perks: tier.benefits,
    accent: accents[index % accents.length],
    donationUrl: tier.donationUrl,
  };
}

function formatScreeningDateTime(dateTime: string): string {
  return new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateTime));
}

function formatPublishedDate(publishedAt: string): string {
  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(publishedAt));
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min`;
}

function formatCurrency(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    currency: 'ARS',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(price);
}
