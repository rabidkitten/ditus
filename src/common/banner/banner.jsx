import React from 'react';
import {
  Col,
  Container,
  Row,
  Carousel
} from 'react-bootstrap';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';
import Markdown from '../markdown/markdown';
import './banner.css';

/**
 * Represents the banner at the top of the home page.
 *
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Banner() {
  const basename = process.env.PUBLIC_URL;

  return (
    <>
      <section className="banner">
        <Container className="banner-content pt-4 pt-md-5 pt-lg-0">
          <Row>
            <Col xs={12} sm={4} className="text-center text-lg-left align-self-center">
              <Markdown match={{ params: { id: 'banner/banner' }}} hideEditButton />
            </Col>
            <Col xs={12} sm={{ span: 7, offset: 1 }} className="align-self-center">
              <Carousel interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block rounded"
                    src={`${basename}/images/banner/slide01.png`}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    First slide label
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block rounded"
                    src={`${basename}/images/banner/slide02.png`}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    Second slide label
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block rounded"
                    src={`${basename}/images/banner/slide03.png`}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    Third slide label
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <section className="banner-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
            <path fill="currentColor" d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path>
          </svg>
        </section>
      </section>
    </>
  );
}

export default Banner;
