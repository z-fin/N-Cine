import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Example API functions
export const getHealth = async () => {
  const response = await apiClient.get('/api/health')
  return response.data
}

export default apiClient