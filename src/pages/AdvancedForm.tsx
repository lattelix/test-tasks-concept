import { useForm } from "react-hook-form";
import { IUser } from "../models/models";
import { useState } from "react";

export default function AdvancedForm() {
  const clearForm: IUser = {
    id: null,
    name: '',
    age: null,
    email: '',
    telegram: '',
    specifyGender: false,
    gender: null,
  };

  const { register, handleSubmit, reset, watch } = useForm<IUser>({
    defaultValues: { ...clearForm },
  });
  //   const USTOR_KEY = "uskftp";

  const [users, setUsers] = useState<IUser[]>([
    {
      id: "15235442",
      email: "hell@cloud.ru",
      age: 19,
      name: "Helena",
      gender: "woman",
      telegram: "userHell",
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

  function handleUserDelete(id: string | null) {
    setUsers(users.filter((u) => u.id !== id));
    reset({ ...clearForm });
  }

  function handleUserChange(id: string | null) {
    const user = users.find((user) => user.id === id);
    if (user) reset(user);
  }

  const onSubmit = (data: IUser) => {
    if (data.id) {
      setUsers(users.map((u) => (u.id === data.id ? data : u)));
    } else {
      setUsers([...users, { ...data, id: (Math.random() * 10e9).toFixed() }]);
    }
    reset({ ...clearForm });
  };

  return (
    <div className="container mx-auto pt-20">
      <h3 className="text-5xl mb-4">Advanced Form</h3>
      <p className="text-lg mb-3">С применением react-hook-form и zod</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="name" className="mr-3">
            Имя
          </label>
          <input
            {...register("name")}
            placeholder="Имя"
            className="py-0.2 px-2 border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="age" className="mr-3">
            Возраст
          </label>
          <input
            {...register("age")}
            placeholder="Мне 18, честно"
            type="number"
            className="py-0.2 px-2 border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="email" className="mr-3">
            Почта
          </label>
          <input
            {...register("email")}
            placeholder="agent@dot.com"
            className="py-0.2 px-2 border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="telegram" className="mr-3">
            Телеграм
          </label>
          <input
            {...register("telegram")}
            placeholder="username"
            className="py-0.2 px-2 border-2 border-gray-400 rounded-md"
          />
        </div>

        <div className="flex mb-3 justify-between max-w-[400px]">
          <label htmlFor="gender" className="mr-3">
            Пол
          </label>
          <label>
            <input
              {...register("specifyGender")}
              type="checkbox"
              className="mr-0.5"
            />
            Указать
          </label>
          {watch("specifyGender") && (
            <>
              <label>
                <input
                  {...register("gender")}
                  type="radio"
                  value="man"
                  className="mr-0.5"
                />
                Муж
              </label>
              <label className="ml-3">
                <input
                  {...register("gender")}
                  type="radio"
                  value="woman"
                  className="mr-1"
                />
                Жен
              </label>
            </>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 cursor-pointer text-white rounded-md text-center px-3 py-2 mr-2 hover:bg-blue-400 active:shadow-blue-200 active:shadow-sm transition-all"
        >
          Сохранить
        </button>
        <button
          type="button"
          disabled={watch("id") === null}
          onClick={() => handleUserDelete(watch("id"))}
          className="text-red-600 cursor-pointer disabled:text-gray-500 hover:text-red-400"
        >
          Удалить
        </button>
      </form>

      <ul className="flex flex-col mt-10">
        {users.map((user) => (
          <li
            className="flex w-[500px] border-1 border-gray-400 transition-all cursor-pointer rounded-[6px] py-1 px-3 hover:shadow-gray-400 hover:shadow-md mb-3"
            onClick={() => handleUserChange(user.id)}
            key={user.id}
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
