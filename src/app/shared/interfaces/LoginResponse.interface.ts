import { UserAccess } from '../enums/user-access.enum';

export interface LoginResponse {
  userId: string;
  userEmail: string;
  userAccess: UserAccess;
  userToken: string;
}
