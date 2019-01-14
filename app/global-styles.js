import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .button {
    font: bold 1.2em 'Open Sans';
    // line-height: 3em;
  }
  .background {
    z-index: 999;
    top:0;
    left:0;
    bottom:0;
    right:0;
    height:400%;
    width:100%;
    position: absolute;
  }
  .gradient {
    height: 25%;
    background: rgba(0,0,0,.4);
    z-index: 9;
    position: relative;
  }
  .landing {
    height: 25%;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 6fr 6fr;
    position: absolute;
    background-color: black;
    top:0;
    bottom:0;
    left:0;
    right:0;
    
  }
`;

export default GlobalStyle;
