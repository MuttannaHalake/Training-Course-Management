import { Fragment, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, Container, Button } from "reactstrap";

const AddCourse = () => {
  useEffect(()=>{
    document.title="Add course || Braincode"
  },[]);
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Detail</h1>
      <Form>
        <FormGroup row>
          <Label for="userid" sm={2}>
            Course Id
          </Label>
          <Col sm={10}>
            <Input type="text" placeholder="Enter here" name="userid" id="userid" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="title" sm={2}>
            Course Title
          </Label>
          <Col sm={10}>
            <Input type="text" placeholder="Enter title here" id="title" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="description" sm={2}>
            Course description
          </Label>
          <Col sm={10}>
            <Input type="textarea" placeholder="Enter Description here" id="description" style={{height:130}} />
            
          </Col>
        </FormGroup>
        <Container className="text-center" style={{marginTop:'1rem'}}>
            <Button color="success">Add Course</Button>
            <Button color="warning" style={{marginLeft:'1rem'}}>Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
