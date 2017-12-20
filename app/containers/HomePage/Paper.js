import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  max-width: 20em;
`;

const Title = styled.span`
  font-size: 1.5em;
  margin: 1em;
`;

class Paper extends Component {
  render() {
    return (
      <Container className="col-xs-12 col-lg-4">
        {this.props.image && <Image src={this.props.image} />}
        <Title>{this.props.title}</Title>
        <div style={{ width: '100%' }}>
          <button className="btn btn-success"><i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Order</button>
          <button style={{ float: 'right' }} className="btn btn-info"><i className="fas fa-list-ul"></i>&nbsp;&nbsp;View Distributers</button>
        </div>
      </Container>
    );
  }

}

export default Paper;
