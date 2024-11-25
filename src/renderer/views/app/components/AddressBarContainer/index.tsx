/* Copyright (c) 2025 Wexium Browser Project */

import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { AddressBar } from '../AddressBar';
import { StyledAddressBarContainer } from './style';
import store from '../../store';

export const AddressBarContainer = observer(() => {
  if (!store.addressbarFocused && !store.addressbarEditing) return null;

  return (
    <StyledAddressBarContainer onMouseDown={() => store.inputRef.blur()}>
      <AddressBar />
    </StyledAddressBarContainer>
  );
});
