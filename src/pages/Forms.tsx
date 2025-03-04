import { Routes, Route, Link } from "react-router-dom";
import SimpleForm from "./SimpleForm";
import AdvancedForm from "./AdvancedForm";

export default function Forms() {
  return (
    <>
      <nav className="flex justify-center items-center px-5">
        <Link to="/forms/simple" className="mr-2">
          Simple
        </Link>
        <Link to="/forms/advanced">Advance</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/forms/simple" element={<SimpleForm />} />
          <Route path="/forms/advanced" element={<AdvancedForm />} />
        </Routes>
      </main>
    </>
  );
}
