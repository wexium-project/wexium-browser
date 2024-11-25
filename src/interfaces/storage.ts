/* Copyright (c) 2025 Wexium Browser Project */

export interface IOperation {
  scope: string;
}

export interface IFindOperation extends IOperation {
  query: any;
}

export interface IInsertOperation extends IOperation {
  item: any;
}

export interface IRemoveOperation extends IFindOperation {
  multi?: boolean;
}

export interface IUpdateOperation extends IFindOperation, IRemoveOperation {
  value: any;
}
