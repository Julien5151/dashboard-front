import { UserAccess } from '../enums/user-access.enum';

export class User {
  constructor(
    public id: string,
    public shortName: string,
    public email: string,
    public token: string,
    public access: UserAccess
  ) { }
}
