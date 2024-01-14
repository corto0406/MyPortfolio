import { Button, Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const PortfolioView = () => {
  return (
    <Container className='mb-5'>
      <Row className='d-flex justify-content-center'>
        <Col className='mb-5' md={10} xs={12}>
          <Card>
            <Card.Img variant='top' src={require('../../img/meet.png')} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-end me-4 mb-3' as='h1'>Meet App</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                Meet App is a serverless, progressive web application which was built using React with a Test-Driven Development (TDD) Technique. It uses the Google Calendar API to fetch upcoming events.
                Users can filter events by city, and view the data for their search update in real time.
              </Card.Text>
              <Container>
                <Row className='d-flex justify-content-center my-3'>
                  <Col xs={12} md={6} className='d-flex justify-content-end'>
                    <a class="btn btn-primary" href="https://github.com/corto0406/meet" role="button" target='_blank'>
                      Repository: Meet Repository
                    </a>
                  </Col>
                  <Col xs={12} md={6} className='d-flex justify-content-start'>
                    <a class="btn btn-primary" href=" https://corto0406.github.io/meet/" role="button" target='_blank'>
                      Live Demo: See it deployed
                    </a>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
            <Card.Footer>
              Built using React with Recharts Library, Google Calendar API, and Test-Driven Development Techniques
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' md={10} xs={12}>
          <Card>
            <Card.Img variant='top' src={require('../../img/chat.png')} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-end me-4 mb-3' as='h1'>Chat App</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                Chat app was built using React Native and tested using an iOS Emulator. The app provides users with a chat interface and options to share their location and/or images. Images may be shared either from the devices media library, or directly from the camera within the app.
              </Card.Text>
              <Container>
                <Row className='d-flex justify-content-center my-3'>
                  <Col xs={12} md={6} className='d-flex justify-content-center'>
                    <a class="btn btn-primary" href="https://github.com/corto0406/chat-app" role="button" target='_blank'>
                      Repository: ChatApp Repository
                    </a>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
            <Card.Footer>
              Built using Google Firestore Database with Firebase Authentication, Expo, React Native with Gifted Chat Library
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' md={10} xs={12}>
          <Card>
            <Card.Img variant='top' src={require('../../img/movier.png')} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-end me-4 mb-3' as='h1'> Movies (React)</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                Movies is a single page application that pulls data about movies from a database using a REST API that I built. Users can  click to learn more about each movie in the database.
              </Card.Text>
              <Container>
                <Row className='d-flex justify-content-center my-3'>
                  <Col xs={12} md={6} className='d-flex justify-content-end'>
                    <a class="btn btn-primary" href="https://github.com/corto0406/movieApi-client" role="button" target='_blank'>
                      Repository: MovieApi-Client Repository
                    </a>
                  </Col>
                  <Col xs={12} md={6} className='d-flex justify-content-start'>
                    <a class="btn btn-primary" href="https://movie-table.netlify.app/" role="button" target='_blank'>
                      Live Demo: See it deployed
                    </a>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
            <Card.Footer>
              Built using the MERN stack (MongoDB, Express, React, Node.js), along with Parcel as the build tool
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' md={10} xs={12}>
          <Card>
            <Card.Img variant='top' src={require('../../img/movia.png')} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-end me-4 mb-3' as='h1'> Movies (Angular)</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                Welcome to myFlix-Angular-client, a powerful Angular application developed by Nemanja Banicevic. This project serves as a feature-rich client for the myFlix API, delivering an immersive movie-watching experience.
              </Card.Text>
              <Container>
                <Row className='d-flex justify-content-center my-3'>
                  <Col xs={12} md={6} className='d-flex justify-content-center'>
                    <a class="btn btn-primary" href="https://github.com/corto0406/myFlix-Angular-client" role="button" target='_blank'>
                      Repository: MyFlix-Angular-Client Repository
                    </a>
                  </Col>
                  <Col xs={12} md={6} className='d-flex justify-content-start'>
                    <a class="btn btn-primary" href=" https://corto0406.github.io/test/" role="button" target='_blank'>
                      Live Demo: See it deployed
                    </a>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
            <Card.Footer>
              Built using the MEAN stack (MongoDB, Express, Angular, Node.js)
            </Card.Footer>
          </Card>
        </Col>
        <Col className='my-5' md={10} xs={12}>
          <Card>
            <Card.Img variant='top' src={require('../../img/pokemon.png')} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-end me-4 mb-3' as='h1'>Pokemon App</Card.Title>
              <Card.Text className='mb-3 portfolio-main-font'>
                This app uses the PokeAPI to pull information about pokemon and display them to the user. The user can click on a pokemon to see additional information.
              </Card.Text>
              <Container>
                <Row className='d-flex justify-content-center my-3'>
                  <Col xs={12} md={6} className='d-flex justify-content-end'>
                    <a class="btn btn-primary" href="https://github.com/corto0406/simple-js-app" role="button" target='_blank'>
                      Repository: PokemonApp Repository
                    </a>
                  </Col>
                  <Col xs={12} md={6} className='d-flex justify-content-start'>
                    <a class="btn btn-primary" href="https://corto0406.github.io/pokemon-app/" role="button" target='_blank'>
                      Live Demo: See it deployed
                    </a>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
            <Card.Footer>
              Built using HTML, CSS, Javascript, Bootstrap, and external API's (PokeAPI)
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>





  );
};