export class ExpenseModel {
  constructor(
    public description: string,
    public amountExclVat: number,
    public vatPercentage: number,
    public date: string,
    public tags: string[]
  ) {}
}
