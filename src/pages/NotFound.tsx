import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404", { replace: true }); // Редирект на кастомный 404
  }, [navigate]);

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl">404 - Страница не найдена</h1>
      <p>Ой, заблудился! <a href="/test-tasks-concept/">На главную</a>.</p>
    </div>
  );
}
