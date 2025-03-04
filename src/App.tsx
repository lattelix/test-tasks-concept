import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Forms from "./pages/Forms";
import "./App.css";
import NotFound from "./pages/NotFound";
import { BASE_ROUTE } from "./routes/base_route";

export default function App() {
  return (
    <>
      {location.pathname !== "/404" && <Header />}
      <main>
        <Routes>
          <Route path={BASE_ROUTE} element={<Hero />} />
          <Route path={BASE_ROUTE + "/forms/*"} element={<Forms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
