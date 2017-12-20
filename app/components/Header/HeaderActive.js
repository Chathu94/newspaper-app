import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75em 1em;
  text-decoration: none !important;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #FFF;
  background: #111;
  color: #FFF;
  -webkit-transition: 0.4s all;
  -moz-transition: 0.4s all;
  -ms-transition: 0.4s all;
  -o-transition: 0.4s all;
  transition: 0.4s all;
`;
