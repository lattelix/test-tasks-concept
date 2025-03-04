import Logo from "./Logo";
import { Link } from "react-router-dom";
import { BASE_ROUTE } from "../routes/base_route";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <Logo />
      <nav className="flex justify-center items-center px-5">
        <span>
          <Link to={BASE_ROUTE} className="mr-2">
            Hero
          </Link>
          <Link to={BASE_ROUTE + "/forms"} className="mr-2">
            Forms
          </Link>
        </span>
      </nav>
    </header>
  );
}
