/* Copyright (c) 2025 Wexium Browser Project */

import store from '../store';

export const loadURL = (url: string) => {
  const tab = store.tabs.selectedTab;

  if (!tab) {
    store.tabs.addTab({ url, active: true });
  } else {
    tab.url = url;
    try {
      tab.callViewMethod('loadURL', url);
    } catch (e) {
      console.error(e);
    }
  }
};
