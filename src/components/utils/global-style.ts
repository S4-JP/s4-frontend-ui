import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import Color from '../../const/color'

const GlobalStyle = createGlobalStyle`
  ${normalize() as any}
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans JP", sans-serif;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${Color.TEXT.GRAY};
  }

  /* TODO: custom globalstyle eg. font-family */
  body {
    overscroll-behavior-y: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Color.TEXT.BLACK};
    overflow: hidden;
  }

  p {
    font-size: 16px;
  }

  ul, li {
    list-style-type: none;
  }

  img {
    vertical-align: middle;
  }

  input {
    border-radius: 0;
  }

  button {
    border: none;
  }

  a {
    color: ${Color.TEXT.LINK};
    text-decoration: none;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  #nprogress {
    z-index: 1000 !important;
    background: #000;
  }
`

export default GlobalStyle
