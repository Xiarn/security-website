import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Employment from "./pages/Employment";
import ServiceDetail from "./pages/ServiceDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Route>
    </Routes>
  );
}
