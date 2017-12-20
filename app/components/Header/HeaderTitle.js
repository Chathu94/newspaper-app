import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #41ADDD;
  font-weight: bold;

  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
