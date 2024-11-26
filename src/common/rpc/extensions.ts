/* Copyright (c) 2025 Wexium Browser Project */

import { RendererToMainChannel } from '@wexium/rpc-electron';

export interface ExtensionMainService {
  uninstall(id: string): void;
  inspectBackgroundPage(id: string): void;
}

export const extensionMainChannel =
  new RendererToMainChannel<ExtensionMainService>('ExtensionMainService');
