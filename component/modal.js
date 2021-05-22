import {
  Button,
  InputGroup,
  FormControl,
  Modal,
  Row,
  Container,
  Card,
  Col,
  Form,
} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Table from "../component/table";
// import Code from "./codeMirrow";
import gender from "../pages/api/faker/gender";

export default function ModalComponent(props) {
  const [levelOne, setLevelOne] = useState(true);
  const [list, setList] = useState(false);
  const [JSON, setJSON] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [data, setData] = useState([]);

  const genderRef = useRef();
  const numberOfData = useRef();

  const generateData = () => {
    const getData = axios.post(
      `/api/faker/nigeria?num=${numberOfData.current.value}`
    );
    getData
      .then((res) => {
        setData(res.data);
        setShowTable(true);
      })
      .catch((err) => {
        console.log("error is", err.response);
      });
  };

  const handleContinue = (type) => {
    setLevelOne(false);
    if (type == "list") {
      setList(true);
    } else {
      setJSON(true);
    }

    if (!type) {
      setShowTable(true);
      setList(null);
    }
  };
  const handleRestart = () => {
    setLevelOne(true);
    setList(null);
    setData(null);
    setShowTable(false);
    setJSON(false);
  };
  const handleGenerate = () => {
    generateData();
    setShowTable(true);
    setList(null);
    setJSON(null);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!showTable && !JSON ? (
            "Personalize your data"
          ) : (
            <Button
              className={JSON && "me-3"}
              onClick={handleRestart}
              variant="info"
            >
              Restart
            </Button>
          )}
          {JSON && "How to fetch a JSON data ?"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {levelOne && (
            <Row>
              <Col>
                <div className="cardContainer">
                  <Card className="w-100">
                    <Card.Body>
                      <Card.Title>JSON</Card.Title>
                      <Card.Text>
                         This will return a JSON data. It requires you to fetch
                        the data yourself, Provided you will be given an endpoint.
                      </Card.Text>
                      <div className="position-relative my-5"></div>
                      <Button
                        onClick={() => handleContinue("JSON")}
                        variant="primary"
                      >
                        Continue
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
                <div className="cardContainer">
                  <Card className="w-100">
                    <Card.Body>
                      <Card.Title>List</Card.Title>
                      <Card.Text>
                        This data will be displayed in a table, each information
                        will be display in a row. The amount of data displayed
                        depends on your preference.
                      </Card.Text>
                      <div className="position-relative my-4"></div>

                      <Button
                        onClick={() => handleContinue("list")}
                        variant="primary"
                      >
                        Continue
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          )}
          {JSON && (
            <Row>
              <Col>
                To fetch a JSON data, you'd need to send a GET request to{" "}
                <code>https://faker-ng.herokuapp.com/api/faker/nigeria</code>.
                <h5 className="mt-3">Can Personalize data ?</h5>
                Yes you can set the number of result you want in a seamless way
                by passing a query to the end point. e.g
                <code>
                  {" "}
                  https://faker-ng.herokuapp.com/api/faker/nigeria?num=7
                </code>{" "}
                . This will generate a 7 nigerian data in a JSON format.
                Meanwhile, in the next version of this application, we'll
                support filtering by Name, Email , State and Gender.
              </Col>
            </Row>
          )}
          {list && (
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>How many data do you want ?</Form.Label>
                <Form.Control ref={numberOfData} as="select">
                  <option>10</option>
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                  <option>600</option>
                  <option>700</option>
                  <option>800</option>
                  <option>900</option>
                  <option>1000</option>
                </Form.Control>
              </Form.Group>
              <div className="oerflow-hidden my-4"></div>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select Gender</Form.Label>
                {/* <Form.Control readOnly ref={genderRef} as="select">
                  <option value="both">Both (Male & Female)</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control> */}
                <input
                  title="This feature will be available in the next version"
                  readonly
                  disabled
                  placeholder="Select gender"
                  className="col-12 form-control notAvailable"
                />
              </Form.Group>
            </Form>
          )}

          {console.log(data, "data")}

          {showTable && <Table data={data} />}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        {list && (
          <Button variant="success" onClick={handleGenerate}>
            Generate
          </Button>
        )}

        {JSON && (
          <a
            className="btn btn-success"
            target="_blank"
            href="https://faker-ng.herokuapp.com/api/faker/nigeria?num=7"
          >
            Try it
          </a>
        )}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
