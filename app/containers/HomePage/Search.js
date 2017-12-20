import React, { Component } from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import Paper from './Paper';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 2em;
  padding-bottom: 5em;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TabSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0em;
`;

const Title = styled.span`
  font-size: 1.3em;
  margin-bottom: 1em;
`;

const Newspaper = styled.input`

`;

class Search extends Component {
  render() {
    return (<Container className="container">
      <Container className="row">
        <Tab className="col-lg-3 col-sm-6 col-xs-12">
          <Title>Newspaper</Title>
          <Newspaper className="form-control form-control-lg" />
        </Tab>
        <Tab className="col-lg-3 col-sm-6 col-xs-12">
          <Title>Distributer</Title>
          <select className="form-control form-control-lg">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </Tab>
        <Tab className="col-lg-3 col-sm-6 col-xs-12">
          <Title>Date</Title>
          <DatePicker />
        </Tab>
        <TabSubmit className="col-lg-3 col-sm-6 col-xs-12">
          <button className="btn btn-info">
            Search
          </button>
        </TabSubmit>
      </Container>
      <Container className="row">
        {[{
          title: 'Sunday Observer',
          image: "http://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2016/11/19/z_p01-Sunday--Observer.jpg?itok=Bt9XWDdv"
        }, { title: 'Daily News', image: "http://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2016/11/19/z_p01-Sunday--Observer.jpg?itok=Bt9XWDdv" },
        { title: 'Daily Mirror', image: "http://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2016/11/19/z_p01-Sunday--Observer.jpg?itok=Bt9XWDdv" }].map((v, k) => <Paper {...v} key={k} />)}
      </Container>
    </Container>);
  }
}

export default Search;
