import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Forms from "./pages/Forms";
import "./App.css";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/forms/*" element={<Forms />} />
          <Route path="*" element={<NotFound />} /> {/* Ловит все 404 */}
        </Routes>
      </main>
    </>
  );
}
