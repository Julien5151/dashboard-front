import { Rating } from '../enums/rating.enum';

export class Ticket {
  constructor(
    public id: string,
    public ownerShortName: string,
    public creationDate: Date,
    public inputDataDate: Date,
    public deadline: Date,
    public comments: string,
    public rating: Rating
  ) { }
}
