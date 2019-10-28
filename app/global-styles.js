import { createGlobalStyle } from 'styled-components';
import Background from './images/background.jpg';

const GlobalStyle = createGlobalStyle`

  @import "~react-image-gallery/styles/css/image-gallery.css";

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
