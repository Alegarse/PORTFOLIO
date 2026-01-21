import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ChallengesPage from "./pages/ChallengesPage/ChallengesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PortfolioPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
