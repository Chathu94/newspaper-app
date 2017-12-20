import React, { Component } from 'react';
import styled from 'styled-components';

import SearchInput from './SearchInput';

const Container = styled.div`
  position: relative;
  displat: flex;
  margin: 0.5em 0em;
`;

const Icon = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Search extends Component {
  render() {
    return (<Container>
      <Icon>
        <i className="fas fa-search"></i>
      </Icon>
      <SearchInput />
    </Container>);
  }
}

export default Search;
