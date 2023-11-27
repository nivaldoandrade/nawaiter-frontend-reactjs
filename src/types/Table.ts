export interface ITable {
  id: string;
  name: string;
  username: string;
}

export interface ITableWithPassword extends ITable {
  password: string;
}
