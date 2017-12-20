import styled from 'styled-components';

export default styled.input`
  background-color: #FFF;
  padding: 0em 1em;
  padding-left: 3em;
  border-radius: 1.5em;
  outline: none;
  width: 10em;
  -webkit-transition: 0.2s all;
  -moz-transition: 0.2s all;
  -ms-transition: 0.2s all;
  -o-transition: 0.2s all;
  transition: 0.2s all;

  &:focus, &:hover {
    width: 20em;
  }
`;
