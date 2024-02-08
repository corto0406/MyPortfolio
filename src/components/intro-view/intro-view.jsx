import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const IntroView = () => {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <Col xs={12} lg={4} className='mb-5 mb-lg-0'>
            <Image alt="A portrait of me" src={require('../../img/portret.jpg')} roundedCircle fluid />
          </Col>
          <Col xs={12} lg={8} className='d-flex flex-column justify-content-center ps-5'>
            <h1>Hello</h1>
            <h3>My name is Nemanja Banicevic. I am a Maritime Engineer turned Web Developer from Sweden. </h3>
            <div className="d-flex mt-3">
              <Link to="/portfolio" className="btn btn-primary btn-lg me-3" role="button">
                My Work
              </Link>
              <a className="btn btn-primary btn-lg" href="https://github.com/corto0406/MyPortfolio" role="button" target='_blank'>
                My Portfolio Repo
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
