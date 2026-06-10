import axios from 'axios';
import type { Article, Funcion, SupportTier } from '../types/api';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const NETWORK_DELAY_MS = 500;

const mockScreenings: Funcion[] = [
  {
    id: 'teorema',
    title: 'Teorema',
    director: 'Pier Paolo Pasolini',
    dateTime: '2026-07-18T20:30:00-03:00',
    location: 'Sala Comunidad, Almagro',
    posterUrl: '/mock/posters/teorema.jpg',
    genres: ['Clasico', 'Cine debate', 'Disidencias'],
    ticketUrl: 'https://tickets.nuestrociclo.org/teorema',
    totalTickets: 120,
    availableTickets: 38,
  },
  {
    id: 'lingua-franca',
    title: 'Lingua Franca',
    director: 'Isabel Sandoval',
    dateTime: '2026-07-27T19:00:00-03:00',
    location: 'Centro Cultural Rojas',
    posterUrl: '/mock/posters/lingua-franca.jpg',
    genres: ['Trans Cinema', 'Drama', 'Contemporaneo'],
    ticketUrl: 'https://tickets.nuestrociclo.org/lingua-franca',
    totalTickets: 90,
    availableTickets: 21,
  },
  {
    id: 'cortos-rio',
    title: 'Cortos del Rio',
    director: 'Programacion colectiva',
    dateTime: '2026-08-09T21:00:00-03:00',
    location: 'Cine York, Olivos',
    posterUrl: '/mock/posters/cortos-del-rio.jpg',
    genres: ['Local Short', 'Estrenos', 'Argentina'],
    totalTickets: 80,
    availableTickets: 44,
  },
  {
    id: 'born-in-flames',
    title: 'Born in Flames',
    director: 'Lizzie Borden',
    dateTime: '2026-08-18T18:30:00-03:00',
    location: 'Espacio Cultural San Jose',
    posterUrl: '/mock/posters/born-in-flames.jpg',
    genres: ['Culto', 'Feminismos', 'Archivo'],
    ticketUrl: 'https://tickets.nuestrociclo.org/born-in-flames',
    totalTickets: 110,
    availableTickets: 57,
  },
];

const mockArticles: Article[] = [
  {
    id: 'archivo-vivo',
    title: 'Como armamos un archivo vivo de cine queer latinoamericano',
    excerpt:
      'Notas de programacion, hallazgos y preguntas para que cada funcion deje materiales disponibles para la comunidad.',
    content:
      'Nuestro archivo reune programas de mano, lecturas, registros de conversatorios y materiales enviados por la comunidad.',
    imageUrl: '/mock/news/archivo-vivo.jpg',
    publishedAt: '2026-06-12T10:00:00-03:00',
    category: 'Archivo',
  },
  {
    id: 'voluntariado',
    title: 'Abrimos convocatoria para voluntariado de sala',
    excerpt:
      'Buscamos personas para recibir publicos, coordinar accesibilidad y sostener conversaciones despues de cada pelicula.',
    content:
      'El equipo de sala acompana ingresos, reservas, accesibilidad y cierre de cada encuentro comunitario.',
    imageUrl: '/mock/news/voluntariado.jpg',
    publishedAt: '2026-06-04T12:30:00-03:00',
    category: 'Comunidad',
  },
];

const mockSupportTiers: SupportTier[] = [
  {
    id: 'entrada',
    name: 'Entrada amiga',
    price: 2000,
    interval: 'one-time',
    benefits: ['Agradecimiento mensual', 'Voto en encuestas de programacion'],
  },
  {
    id: 'butaca',
    name: 'Butaca sostenida',
    price: 10000,
    interval: 'monthly',
    benefits: ['Reserva prioritaria', 'Encuentro trimestral de programacion'],
  },
  {
    id: 'proyector',
    name: 'Proyector colectivo',
    price: 15000,
    interval: 'monthly',
    benefits: ['Mencion en sala', 'Invitacion doble a funciones especiales'],
  },
];

function delay<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(data), NETWORK_DELAY_MS);
  });
}

export async function getScreenings(): Promise<Funcion[]> {
  return delay(mockScreenings);
}

export async function getScreeningById(id: string): Promise<Funcion> {
  const screening = mockScreenings.find((item) => item.id === id);

  if (!screening) {
    throw new Error(`Screening not found: ${id}`);
  }

  return delay(screening);
}

export async function getNews(): Promise<Article[]> {
  return delay(mockArticles);
}

export async function getSupportTiers(): Promise<SupportTier[]> {
  return delay(mockSupportTiers);
}
