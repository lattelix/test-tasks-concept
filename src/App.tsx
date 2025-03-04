import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Forms from "./pages/Forms";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/forms/*" element={<Forms />} />
        </Routes>
      </main>
    </>
  );
}
