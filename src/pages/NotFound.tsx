import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../routes/base_route";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404", { replace: true }); // Редирект на кастомный 404
  }, [navigate]);

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl">404 - Страница не найдена</h1>
      <p>Ой, заблудился! <a href={BASE_ROUTE + "/"}>На главную</a>.</p>
    </div>
  );
}
