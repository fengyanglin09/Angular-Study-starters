export class ExpenseModel {
  id: number;
  name: string;
  amount: number;
  date?: Date;

  constructor(id: number, name: string, amount: number, date: Date = new Date()) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.date = date;
  }

}
