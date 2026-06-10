import axios from 'axios';

const DEFAULT_API_URL = 'http://localhost:8000';
const configuredApiUrl = import.meta.env.VITE_API_URL ?? DEFAULT_API_URL;

function normalizeBaseUrl(url: string): string {
  return url.replace(/\/+$/, '').replace(/\/api$/, '');
}

export const apiClient = axios.create({
  baseURL: normalizeBaseUrl(configuredApiUrl),
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
});
