import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import PrivacyPolicy from "./app/PrivacyPolicy.tsx";
import FAQ from "./app/faq.tsx";
import Terms from "./app/terms.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
    </Routes>
  </BrowserRouter>
);