import * as styled from 'styled-components';

import GeneralSansLightTtf from '../assets/fonts/GeneralSans-Light.ttf';
import GeneralSansLightWoff from '../assets/fonts/GeneralSans-Light.woff';
import GeneralSansLightWoff2 from '../assets/fonts/GeneralSans-Light.woff2';
import GeneralSansMediumTtf from '../assets/fonts/GeneralSans-Medium.ttf';
import GeneralSansMediumWoff from '../assets/fonts/GeneralSans-Medium.woff';
import GeneralSansMediumWoff2 from '../assets/fonts/GeneralSans-Medium.woff2';
import GeneralSansRegularTtf from '../assets/fonts/GeneralSans-Regular.ttf';
import GeneralSansRegularWoff from '../assets/fonts/GeneralSans-Regular.woff';
import GeneralSansRegularWoff2 from '../assets/fonts/GeneralSans-Regular.woff2';
import GeneralSansSemiboldTtf from '../assets/fonts/GeneralSans-Semibold.ttf';
import GeneralSansSemiboldWoff from '../assets/fonts/GeneralSans-Semibold.woff';
import GeneralSansSemiboldWoff2 from '../assets/fonts/GeneralSans-Semibold.woff2';

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'GeneralSans';
    font-weight: 300;
    font-display: 'swap';
    font-style: 'normal';
    src:
      url('${GeneralSansLightWoff2}') format('woff2'),
      url('${GeneralSansLightWoff}') format('woff'),
      url('${GeneralSansLightTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src:
      url('${GeneralSansRegularWoff2}') format('woff2'),
      url('${GeneralSansRegularWoff}') format('woff'),
      url('${GeneralSansRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src:
      url('${GeneralSansMediumWoff2}') format('woff2'),
      url('${GeneralSansMediumWoff}') format('woff'),
      url('${GeneralSansMediumTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src:
      url('${GeneralSansSemiboldWoff2}') format('woff2'),
      url('${GeneralSansSemiboldWoff}') format('woff'),
      url('${GeneralSansSemiboldTtf}') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 753px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  body,
  button {
    font:
      400 1rem GeneralSans,
      sans-serif;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 120%;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.gray[100]};
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 8px;
    border: 4px solid rgba(0, 0, 0, 0);
  }
`;
