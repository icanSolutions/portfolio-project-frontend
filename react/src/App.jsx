import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Products from "./products";
import OpeningPage from "./opening_page";
import DashContent from "./dash_content";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Dashboard />}>
          <Route index element={<OpeningPage />} />
          <Route path="dashboard" element={<DashContent />} />
          <Route path="products" element={<Products />} />
          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>

        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}