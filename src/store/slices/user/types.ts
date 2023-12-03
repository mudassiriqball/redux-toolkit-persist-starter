import { USER_STATUS_E } from "../../../helpers/enums";

export interface UserReducerI {
  user: UserI | null;
};

export interface UserI {
  // Add/Remove fields according to your schema
  token: string;
  id: string;
  status: USER_STATUS_E;
  email: string;
  firstName: string;
  lastName: string;
};