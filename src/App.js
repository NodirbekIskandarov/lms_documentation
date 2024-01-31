import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./layouts/Index";
import Home from "./pages/home/Home";
import TeamPage from "./pages/team/TeamPage";
import UniversitiesPage from "./pages/universities/UniversitiesPage";
import FaqsPage from "./pages/faqs/FaqsPage";
import DocumentationPage from "./pages/documentation/DocumentationPage";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />}>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
          </Route>
          <Route path="/documentation:id" element={<DocumentationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
