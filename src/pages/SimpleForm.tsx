import { IUser } from "../models/models";
import { useState } from "react";
import AreaItem from "../components/AreaItem";

export default function SimpleForm() {
  //   const USTOR_KEY = "uskftp";
  const clearForm = {
    id: null,
    email: '',
    age: null,
    name: '',
    gender: null,
    telegram: '',
    specifyGender: false,
  };

  const [form, setForm] = useState<IUser>(clearForm);

  const [users, setUsers] = useState<IUser[]>([
    {
      id: "123012439",
      email: "example@mail.ru",
      age: 15,
      name: "alex",
      gender: "man",
      telegram: "lattelix",
      specifyGender: true,
    },
    {
      id: "15235442",
      email: "hell@cloud.ru",
      age: 19,
      name: "Helena",
      gender: "woman",
      telegram: '',
      specifyGender: true,
    },
    {
      id: "5342857",
      email: "my@sup.com",
      age: 22,
      name: "Rufy",
      gender: null,
      telegram: '',
      specifyGender: false,
    },
  ]);

  function handleUserAdd() {
    if (!form.name || !form.email || !form.age) {
      alert("Заполни имя, email и возраст!");
      return;
    }
    // Проверка возраста
    if (form.age <= 0) {
      alert("Возраст должен быть больше 0!");
      return;
    }
    // Проверка email (простая)
    if (!form.email.includes("@") || !form.email.includes(".")) {
      alert("Email должен содержать @ и точку!");
      return;
    }

    if (form.id) {
      setUsers(users.map((u) => (u.id === form.id ? form : u)));
      setForm(clearForm);
    } else {
      setUsers([
        ...users,
        { ...form, id: (Math.random() * 1000000000).toFixed() },
      ]);
      setForm(clearForm);
    }
  }

  function handleUserDelete(id: string | null) {
    if (!id) return;
    setUsers(users.filter((u) => u.id !== id));
    setForm(clearForm);
  }

  function handleUserChange(id: string | null) {
    if (id === null) {
      return;
    }

    const user = users.find((user) => user.id === id)!;
    setForm(user);
  }

  return (
    <div className="container mx-auto pt-20">
      <h3 className="text-5xl mb-4">Forms</h3>

      <form>
        <p className="text-lg mb-3">Форма управления пользователями</p>

        <AreaItem
          name="Имя"
          forTag="name"
          required
          holder="Jhonie"
          value={form.name}
          form={form}
          setForm={setForm}
          type="text"
        />
        <AreaItem
          name="Возраст"
          forTag="age"
          required
          holder="18"
          value={form.age || ''}
          form={form}
          setForm={setForm}
          type="number"
        />
        <AreaItem
          name="Почта"
          forTag="email"
          required
          holder="tony@stark.mr"
          value={form.email}
          form={form}
          setForm={setForm}
          type="text"
        />
        <AreaItem
          name="Телеграм"
          forTag="telegram"
          holder="user"
          value={form.telegram}
          form={form}
          setForm={setForm}
          type="text"
        />

        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="gender" className="mr-3">
            Пол
          </label>
          <label>
            <input
              type="checkbox"
              name="gender_check"
              className="mr-0.5"
              checked={form.specifyGender || false}
              onChange={(e) =>
                setForm({ ...form, specifyGender: e.target.checked })
              }
            />
            Указать
          </label>
          {form.specifyGender && (
            <>
              <label>
                <input
                  type="radio"
                  name="gender"
                  checked={form.gender === "man"}
                  onChange={() => setForm({ ...form, gender: "man" })}
                  className="mr-0.5"
                />
                Муж
              </label>
              <label className="ml-3">
                <input
                  type="radio"
                  name="gender"
                  checked={form.gender === "woman"}
                  onChange={() => setForm({ ...form, gender: "woman" })}
                  className="mr-1"
                />
                Жен
              </label>
            </>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleUserAdd();
          }}
          className="bg-blue-500 cursor-pointer text-white rounded-md text-center px-3 py-2 mr-2 hover:bg-blue-400 active:shadow-blue-200 active:shadow-sm transition-all"
        >
          Сохранить
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleUserDelete(form?.id);
          }}
          disabled={!form?.id}
          className="text-red-600 cursor-pointer disabled:text-gray-500 hover:text-red-400"
        >
          Удалить
        </button>
      </form>

      <ul className="flex flex-col mt-10">
        {users &&
          users.map((user, index) => (
            <li
              className="flex w-[500px] border-1 border-gray-400 transition-all cursor-pointer rounded-[6px] py-1 px-3 hover:shadow-gray-400 hover:shadow-md mb-3"
              key={index}
              onClick={() => handleUserChange(user.id)}
            >
              Пользователь: {user.id}, имя: {user.name}{" "}
              {user?.gender === "man" ? ", ему " : ", ей "}
              {user.age} лет, {user.email}
              {user?.telegram && ", tg:" + user.telegram}
            </li>
          ))}
        {users.length === 0 && <p>No items...</p>}
      </ul>
    </div>
  );
}
