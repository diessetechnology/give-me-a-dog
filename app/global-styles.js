import { createGlobalStyle } from 'styled-components';
import Background from './images/background.jpg';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  @font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Fredoka One';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local('Fredoka One'), local('FredokaOne-Regular'), url(https://fonts.gstatic.com/s/fredokaone/v7/k3kUo8kEI-tA1RRcTZGmTlHGCaen8wf-.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  body {
    font-family: 'Raleway', Arial, sans-serif;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
  }

  body.fontLoaded {
    font-family: 'Fredoka One', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    height: 90%;
    width: 90%;
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    background-color:  rgba(255, 255, 255, 0.7);
    border-radius: 15px
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
