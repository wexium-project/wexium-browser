import * as React from 'react';
import { observer } from 'mobx-react-lite';
import styled, { ThemeProvider } from 'styled-components';
import store from '../../store';
import { Wrapper, Content, IconItem, Menu, Image, RightBar } from './style';
import { TopSites } from '../TopSites';
import { News } from '../News';
import { Preferences } from '../Preferences';
import {
  ICON_PAGE,
  ICON_TUNE,
  ICON_SETTINGS,
  ICON_HISTORY,
  ICON_BOOKMARKS,
  ICON_DOWNLOAD,
  ICON_EXTENSIONS,
} from '~/renderer/constants/icons';
import { WebUIStyle } from '~/renderer/mixins/default-styles';
import { getWebUIURL } from '~/common/webui';

// Define custom props for each component
interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  fullSize?: boolean;
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
}

interface IconItemProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSet?: boolean;
  title: string;
  icon: any;
  onClick: () => void;
}

// Styled components with extended props
const StyledWrapper = styled(Wrapper)<WrapperProps>``;
const StyledImage = styled(Image)<ImageProps>``;
const StyledIconItem = styled(IconItem)<IconItemProps>``;

window.addEventListener('mousedown', () => {
  store.dashboardSettingsVisible = false;
});

const onIconClick = (name: string) => () => {
  window.location.href = getWebUIURL(name);
};

const onTuneClick = () => {
  store.dashboardSettingsVisible = !store.dashboardSettingsVisible;
};

const onRefreshClick = () => {
  store.image = '';
  setTimeout(() => {
    localStorage.setItem('imageDate', '');
    store.loadImage();
  }, 50);
};

export default observer(() => {
  return (
    <ThemeProvider theme={{ ...store.theme }}>
      <div>
        <WebUIStyle />

        <Preferences />

        <StyledWrapper fullSize={store.fullSizeImage}>
          <StyledImage src={store.imageVisible ? store.image : ''} />
          <Content>{store.topSitesVisible && <TopSites />}</Content>

          <RightBar>
            <StyledIconItem
              imageSet={store.imageVisible}
              title="Dashboard settings"
              icon={ICON_TUNE}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={onTuneClick}
            />
          </RightBar>
          {store.quickMenuVisible && (
            <Menu>
              <StyledIconItem
                imageSet={store.imageVisible}
                title="Browser Settings"
                icon={ICON_SETTINGS}
                onClick={onIconClick('settings')}
              />
              <StyledIconItem
                imageSet={store.imageVisible}
                title="History"
                icon={ICON_HISTORY}
                onClick={onIconClick('history')}
              />
              <StyledIconItem
                imageSet={store.imageVisible}
                title="Bookmarks"
                icon={ICON_BOOKMARKS}
                onClick={onIconClick('bookmarks')}
              />
              {/* <StyledIconItem
                imageSet={store.imageVisible}
                title="Downloads"
                icon={ICON_DOWNLOAD}
                onClick={onIconClick('downloads')}
              />
              <StyledIconItem
                imageSet={store.imageVisible}
                title="Extensions"
                icon={ICON_EXTENSIONS}
                onClick={onIconClick('extensions')}
              /> */}
            </Menu>
          )}
        </StyledWrapper>
        {/* {store.newsBehavior !== 'hidden' && (
          <Content>
            <News />
          </Content>
        )} */}
      </div>
    </ThemeProvider>
  );
});
