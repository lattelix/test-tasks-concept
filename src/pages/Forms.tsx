import { IUser } from "../models/models";
import AreaItem from "../components/AreaItem";

export default function Forms() {

  const users: IUser[] = [
    {
      name: "Jhone",
      age: 18,
      email: "jhone@iuser.com",
      notifyTg: '',

    },
    {
      name: "Maxim",
      age: 25,
      email: "max@iuser.com",
    },
  ];

  return (
    <div className="container mx-auto pt-20">
      <h3 className="text-5xl mb-4">Forms</h3>

      <form>
        <p className="text-lg mb-3">Форма управления пользователями</p>
        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="name" className="mr-3">
            Имя
          </label>
          <input type="text" id="name" className="border-2 border-gray-80" />
        </div>
        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="age" className="mr-3">
            Возраст
          </label>
          <input type="text" id="age" className="border-2 border-gray-80" />
        </div>
        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="mail" className="mr-3">
            Почта
          </label>
          <input type="text" id="mail" className="border-2 border-gray-80" />
        </div>
        <button>Добавить</button>
        <button>Удалить</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li className="flex" key={index}>
            {user.name} - {user.age} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
