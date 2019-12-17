import { Rating } from '../enums/rating.enum';

export class Ticket {
  constructor(
    public id: string = '',
    public ownerShortName: string = '',
    public creationDate: Date = null,
    public inputDataDate: Date = null,
    public deadline: Date = null,
    public comments: string = '',
    public rating: Rating = null
  ) { }
}
