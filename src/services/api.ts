import { apiClient } from './apiClient';
import type { Article, Funcion, SupportTier } from '../types/api';

export async function getScreenings(): Promise<Funcion[]> {
  const response = await apiClient.get<Funcion[]>('/api/screenings');
  return response.data;
}

export async function getScreeningById(id: string): Promise<Funcion> {
  const response = await apiClient.get<Funcion>(`/api/screenings/${id}`);
  return response.data;
}

export async function getNews(): Promise<Article[]> {
  const response = await apiClient.get<Article[]>('/api/news');
  return response.data;
}

export async function getSupportTiers(): Promise<SupportTier[]> {
  const response = await apiClient.get<SupportTier[]>('/api/support-tiers');
  return response.data;
}
