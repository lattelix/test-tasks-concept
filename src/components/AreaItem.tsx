import { IUser } from "../models/models";
interface AreaItemProps {
    name: string;
    forTag: string;
    required?: boolean; // Опционально
    value: string | number | undefined;
    holder: string;
    form: IUser;
    setForm: (form: IUser) => void;
    type: "text" | "number"; // Тип инпута
  }

  function AreaItem({ name, forTag, required, value, holder, form, setForm, type }: AreaItemProps) {
    return (
      <div className="flex mb-3 justify-between max-w-[400px]">
        <label htmlFor={forTag} className="mr-3">{name}</label>
        <input
          required={required}
          placeholder={holder}
          value={value || ""}
          onChange={(e) => setForm({
            ...form,
            [forTag]: type === "number" ? Number(e.target.value) : e.target.value
          })}
          type={type}
          id={forTag}
          className="py-0.2 px-2 border-2 border-gray-400 rounded-md"
        />
      </div>
    );
  }

  export default AreaItem;
