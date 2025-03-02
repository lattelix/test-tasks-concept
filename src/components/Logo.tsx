import reactLogo from "../assets/react.svg";

export default function Logo() {
  return (
    <div className="flex gap-[15px]">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="animate-[spin_2s_linear_infinite] h-8 w-8" alt="Логотип библиотеки Реакт" />
      </a>
      <span className="font-bold font-inter text-2xl">Logo</span>
    </div>
  );
}
