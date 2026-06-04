import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

interface Message {
  message: string
}

function App() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Message>(
          `${import.meta.env.VITE_API_URL}/`
        )
        setMessage(response.data.message)
      } catch (error) {
        console.error('Error fetching data:', error)
        setMessage('Failed to connect to backend')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Backend says: {message}</p>
            <button onClick={() => window.location.reload()}>
              Refresh
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App