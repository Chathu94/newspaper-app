import React, { Component } from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import { Helmet } from 'react-helmet';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

class CarouselWrapper extends Component {
  render() {
    return (<Container>
      <Carousel showThumbs={false} infiniteLoop autoPlay >
        <div>
          <img src="/carousel_1.jpg" />
        </div>
        <div>
          <img src="/carousel_2.jpg" />
        </div>
        <div>
          <img src="/carousel_3.jpg" />
        </div>
      </Carousel>
    </Container>);
  }
}

export default CarouselWrapper;
