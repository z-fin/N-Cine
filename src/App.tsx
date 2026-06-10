import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLayout } from './components/common/PageLayout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ScreeningsPage from './pages/ScreeningsPage';
import SupportPage from './pages/SupportPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/funciones" element={<ScreeningsPage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/apoyar" element={<SupportPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
