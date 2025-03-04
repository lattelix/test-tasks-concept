import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl">404 - Страница не найдена</h1>
      <p>Ой, кажется, ты заблудился! Вернись на <Link to="/">главную</Link>.</p>
    </div>
  );
}
