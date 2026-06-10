import type { NewsArticle, Screening, SupportTier } from '../types/content';

export const screenings: Screening[] = [
  {
    id: 'teorema',
    title: 'Teorema',
    director: 'Pier Paolo Pasolini',
    dateTime: 'Jueves 18 de julio, 20:30',
    venue: 'Sala Comunidad, Almagro',
    description:
      'Una noche de deseo, clase y disrupcion familiar con debate abierto despues de la funcion.',
    tags: ['Clasico', 'Cine debate', 'Disidencias'],
    accent: 'red',
    posterUrl: '/mock/posters/teorema.jpg',
  },
  {
    id: 'lingua-franca',
    title: 'Lingua Franca',
    director: 'Isabel Sandoval',
    dateTime: 'Sabado 27 de julio, 19:00',
    venue: 'Centro Cultural Rojas',
    description:
      'Drama intimo sobre migracion, cuidado y vida trans contemporanea.',
    tags: ['Trans Cinema', 'Drama', 'Contemporaneo'],
    accent: 'orange',
    posterUrl: '/mock/posters/lingua-franca.jpg',
  },
  {
    id: 'cortos-rio',
    title: 'Cortos del Rio',
    director: 'Programacion colectiva',
    dateTime: 'Viernes 9 de agosto, 21:00',
    venue: 'Cine York, Olivos',
    description:
      'Bloque de cortometrajes locales con directoras invitadas y brindis comunitario.',
    tags: ['Local Short', 'Estrenos', 'Argentina'],
    accent: 'green',
    posterUrl: '/mock/posters/cortos-del-rio.jpg',
  },
  {
    id: 'born-in-flames',
    title: 'Born in Flames',
    director: 'Lizzie Borden',
    dateTime: 'Domingo 18 de agosto, 18:30',
    venue: 'Espacio Cultural San Jose',
    description:
      'Ciencia ficcion punk feminista para pensar imagenes, archivo y organizacion politica.',
    tags: ['Culto', 'Feminismos', 'Archivo'],
    accent: 'violet',
    posterUrl: '/mock/posters/born-in-flames.jpg',
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'nuestro-cine',
    title: 'Como armamos la comunidad',
    excerpt:
      'Notas de programacion, hallazgos y preguntas para que cada funcion deje materiales disponibles para la comunidad.',
    imageUrl: '/mock/news/archivo-vivo.jpg',
    category: 'Archivo',
    date: '12 Jun 2026',
    readTime: '5 min',
    accent: 'yellow',
  },
  {
    id: 'critica-moonlight',
    title: 'Moonlight y la delicadeza como forma de resistencia',
    excerpt:
      'Una lectura colectiva sobre silencios, tacto y deseo despues de nuestra ultima funcion aniversario.',
    imageUrl: '/mock/news/moonlight.jpg',
    category: 'Critica',
    date: '21 May 2026',
    readTime: '7 min',
    accent: 'indigo',
  },
];

export const supportTiers: SupportTier[] = [
  {
    id: 'entrada',
    name: 'Entrada amiga',
    amount: '$2.000',
    description: 'Ayuda a cubrir subtitulado, traslados y materiales de sala.',
    perks: ['Agradecimiento mensual', 'Voto en encuestas de programacion'],
    accent: 'red',
    donationUrl: 'https://cafecito.app/nuestrociclo?tier=entrada&amount=2000',
  },
  {
    id: 'butaca',
    name: 'Butaca sostenida',
    amount: '$10.000',
    description: 'Hace posible cupos gratuitos para personas de la comunidad.',
    perks: ['Reserva prioritaria', 'Encuentro trimestral de programacion'],
    accent: 'orange',
    donationUrl: 'https://cafecito.app/nuestrociclo?tier=butaca&amount=10000',
  },
  {
    id: 'proyector',
    name: 'Proyector colectivo',
    amount: '$15.000',
    description: 'Financia derechos(?), invitades y registro audiovisual.',
    perks: ['Mencion en sala', 'Invitacion doble a funciones especiales'],
    accent: 'violet',
    donationUrl: 'https://cafecito.app/nuestrociclo?tier=proyector&amount=15000',
  },
];
