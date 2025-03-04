export interface IUser {
  id: string | null;
  email: string;
  name: string;
  age: number | null;
  telegram: string;
  gender: "man" | "woman" | null;
  specifyGender: boolean;
}
