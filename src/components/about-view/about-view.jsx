import { Col, Container, Row, Image } from "react-bootstrap"

export const AboutView = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center" xs={6}>
            <h1 className="mb-4">"Who is this guy, anyway?"</h1>
            <p>Software Engineer by profession, nature enthusiast by choice. When I'm not crafting code, you'll find me exploring the great outdoors with my family and two canine companions. </p>
            <p>In the realm of physical pursuits, I channel my energy into the art of Muay Thai. This ancient martial art not only sharpens my body but also fuels my passion for discipline and resilience.</p>
            <p>Join me on this journey where technology meets nature, and algorithms coexist with the untamed beauty of the wild.</p>
           
          </Col>
          {/* Maybe put in a carousel of pictures here? Maybe make it a little smaller? */}
          <Col xs={6}>
            <Image className="about-picture mx-3" src={require("../../img/nemanja.jpg")} rounded />
          </Col>
        </Row>
        <Row className="my-4">
          <h1>Skills</h1>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-start">
            <h3 className="mb-4">Front-End Development</h3>
            <p>React / React Redux</p>
            <p>Angular.js</p>
            <p>Javascript ES6 / Node.js</p>
            <p>Typescript</p>
            <p>HTML5</p>
            <p>CSS / Sass</p>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h3 className="mb-4">Testing</h3>
            <p>Test-Driven Development</p>
            <p>Behavior-Driven Development</p>
            <p>React Testing Library</p>
            <p>Postman</p>
            <p>Puppeter</p>
            <p>Jest-Cucumber</p>
          </Col>
          <Col className="d-flex flex-column align-items-end">
            <h3 className="mb-4">Back-End Development</h3>
            <p>REST API's</p>
            <p>MongoDB / PostgreSQL</p>
            <p>Express</p>
            <p>CORS / Passport</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}