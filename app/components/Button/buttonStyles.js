import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 2px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  outline: none;
  background: #ff3255;
  background: -moz-linear-gradient(top, #ff3255 0%, #ed1e7b 100%);
  background: -webkit-linear-gradient(top, #ff3255 0%,#ed1e7b 100%);
  background: linear-gradient(to bottom, #ff3255 0%,#ed1e7b 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3255', endColorstr='#ed1e7b',GradientType=0 );
  color: #fff;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-transition: 0.2s all;
  -moz-transition: 0.2s all;
  -ms-transition: 0.2s all;
  -o-transition: 0.2s all;
  transition: 0.2s all;

  &:active, &:hover {
    transform: scale(1.1);
  }
`;

export default buttonStyles;
