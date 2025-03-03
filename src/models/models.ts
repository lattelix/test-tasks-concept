export interface IUser {
  id: string | null;
  email: string | undefined;
  name: string | undefined;
  age: number | undefined;
  telegram: string | undefined;
  gender: "man" | "woman" | undefined;
  specifyGender: boolean;
}
