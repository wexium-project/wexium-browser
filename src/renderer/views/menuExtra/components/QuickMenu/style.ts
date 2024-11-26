/* Copyright (c) 2025 Wexium Browser Project */

import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces';
import { centerIcon } from '~/renderer/mixins';
import { ICON_ARROW_RIGHT } from '~/renderer/constants/icons';

// Extend DefaultTheme to include ITheme properties
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    background-color: ${theme['dialog.separator.color']};
  `};
`;

export const MenuItem = styled.div<{ arrow?: boolean; disabled?: boolean }>`
  height: 36px;
  align-items: center;
  display: flex;
  position: relative;
  padding: 0 12px;
  font-size: 12px;

  ${({ arrow, theme }) =>
    arrow &&
    css`
      &:after {
        content: '';
        position: absolute;
        right: 4px;
        width: 24px;
        height: 100%;
        opacity: 0.54;
        ${centerIcon(20)};
        background-image: url(${ICON_ARROW_RIGHT});
        filter: ${theme['dialog.lightForeground'] ? 'invert(100%)' : 'none'};
      }
    `};

  ${({ disabled }) =>
    css`
      pointer-events: ${disabled ? 'none' : 'inherit'};
      opacity: ${disabled ? 0.54 : 1};
    `};

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme['dialog.lightForeground']
        ? 'rgba(255, 255, 255, 0.06)'
        : 'rgba(0, 0, 0, 0.03)'};
    `};
  }
`;

export const MenuItemTitle = styled.div`
  flex: 1;
`;

export const MenuItems = styled.div`
  flex: 1;
  overflow: hidden;
  padding-top: 4px;
  padding-bottom: 4px;

  ${({ theme }) => css`
    background-color: ${theme['dialog.backgroundColor']};
    color: ${theme['dialog.textColor']};
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const Icon = styled.div<{ icon?: string }>`
  margin-right: 12px;
  width: 20px;
  height: 20px;
  ${centerIcon()};
  opacity: 0.8;

  ${({ icon, theme }) => css`
    background-image: url(${icon});
    filter: ${theme['dialog.lightForeground'] ? 'invert(100%)' : 'none'};
  `};
`;

export const RightControl = styled.div`
  margin-right: 18px;
`;

export const Shortcut = styled(RightControl)`
  opacity: 0.54;
`;
