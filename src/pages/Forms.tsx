import { Routes, Route, Link } from "react-router-dom";
import SimpleForm from "./SimpleForm";
import AdvancedForm from "./AdvancedForm";
import { BASE_ROUTE } from "../routes/base_route";

export default function Forms() {
  return (
    <>
      <nav className="flex justify-center items-center px-5">
        <Link to={BASE_ROUTE + "/forms/simple"} className="mr-2">
          Simple
        </Link>
        <Link to={BASE_ROUTE + "/forms/advanced"}>Advance</Link>
      </nav>
      <main>
        <Routes>
          <Route index element={<SimpleForm />} /> {/* Дефолтный маршрут */}
          <Route path="simple" element={<SimpleForm />} />
          <Route path="advanced" element={<AdvancedForm />} />
        </Routes>
      </main>
    </>
  );
}
