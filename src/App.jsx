import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import detectLanguage from './core/util/detectLanguage';
import { useDispatch } from 'react-redux';
import { setLanguageAction } from './components/MenuComponent/MenuComponentActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const loadLanguage = () => {
    const lang = detectLanguage();
    dispatch(setLanguageAction(lang));
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    loadLanguage();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PortfolioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
