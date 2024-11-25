/* Copyright (c) 2025 Wexium Browser Project */

import { ipcRenderer, ipcMain } from 'electron';
import { makeObservable, observable } from 'mobx';
import { DialogStore } from '~/models/dialog-store';

export class Store extends DialogStore {
  public constructor() {
    super();
  }
}

export default new Store();
