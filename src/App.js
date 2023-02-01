import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Accordion from 'react-bootstrap/Accordion';
function App() {
  return (
    <div className="d-flex text-center align-items-center">
      <Form className="container-sm  mx-auto ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Introduce Yourself</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Profile Picture</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-primary">Save</Button>

        <Button variant="outline-danger">Remove</Button>
        <Button variant="text-danger" type="reset">
          Reset
        </Button>
        <br></br>
        <br></br>
          <Button variant="primary" disabled>
            <Spinner as="span" animation="grow" size="sm"role="status"aria-hidden="true" />  Loading...</Button>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> one</Accordion.Header>
        <Accordion.Body>
          Register
           </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> two</Accordion.Header>
        <Accordion.Body>
        Have fun </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Form>
      
    </div>
  );
}

export default App;
