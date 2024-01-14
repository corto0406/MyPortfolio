import { Container, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const IntroView = () => {
  return (
    <>
      <Container className=''>
        <Row className='mt-5'>
          <Col xs={12} lg={4} className='mb-5 mb-lg-0'>
            <Image alt="A portrait of me" src={require('../../img/portret.jpg')} roundedCircle fluid />
          </Col>
          <Col xs={12} lg={8} className='d-flex flex-column justify-content-center ps-5'>
            <h1>Hello</h1>
            <h3>My name is Nemanja Banicevic. I am a Maritime Engineer turned Web Developer from Sweden. </h3>
          </Col>
        </Row>
      </Container>
      {/* <Navbar sticky='bottom'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Nemanja Banicevic
        </Navbar.Brand>
      </Container>
    </Navbar> */}
      {/* <Container>
      <Row className='d-flex justify-content-center'><h3 className='d-flex justify-content-center'>Find me on:</h3></Row>
      <Row className='d-flex justify-content-center'>
        <Col xs={1}>
          <a href="" target="_blank"><img id="gh_logo" className="social-media--icon" src={require("")} alt="Github icon" /></a>
         </Col>  
        </Row>
    </Container> */}
    </>
  );
};