/* Copyright (c) 2025 Wexium Browser Project */

export interface IDownloadItem {
  paused: any;
  canceled: any;
  fileName?: string;
  receivedBytes?: number;
  totalBytes?: number;
  savePath?: string;
  id?: string;
  completed?: boolean;
}
