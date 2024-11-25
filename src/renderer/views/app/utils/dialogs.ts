/* Copyright (c) 2025 Wexium Browser Project */

import { ipcRenderer } from 'electron';
import store from '../store';

export const isDialogVisible = async (dialog: string) =>
  await ipcRenderer.invoke(`is-dialog-visible-${store.windowId}`, dialog);
