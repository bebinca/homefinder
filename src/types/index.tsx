export interface IStoreState {
  data: DataItem[];
  columnStates: ColumnState[];
}

export class ColumnState {
  public name!: string;
  public tag!: boolean;
}

export class DataItem {
  public id!: number;
  public name!: string;
  public content!: Array<number>;
}
