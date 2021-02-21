import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Banner from '../banner/banner';
import ImageFeature from '../image-feature/image-feature';

/**
 * Represents the home page.
 *
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Home() {
  return (
    <div>
      <Banner />
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <ImageFeature slot="1" />
          </Col>
          <Col xs={12} sm={4}>
            <ImageFeature slot="2" />
          </Col>
          <Col xs={12} sm={4}>
            <ImageFeature slot="3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(Home);
