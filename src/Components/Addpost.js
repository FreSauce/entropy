import React from "react";
import { Form, FloatingLabel, Button, Alert, FormGroup } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

const Addpost = () => {
  const titleRef = React.useRef();
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [formValid, setFormValid] = React.useState(false);

  const typeAllowed = ["video/mp4", "image/jpeg", "image/png"];
  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && typeAllowed.includes(selected.type)) {
      setError(null);
      setFile(selected);
      console.log(selected);
    } else if (selected) {
      setFile(null);
      setError(
        "Please selct a file of this format video/mp4,image/jpeg,image/png"
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!titleRef.current.value) {
      setError("Please enter the title");
    }
    setFormValid(true);

  };

  return (
    <div className="card">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="addpost-form" onSubmit={submitHandler}>
        <h1 className="addpost-header">ADD POST</h1>
        <FormGroup controlId="floatingTextarea1" label="Add a Caption*">
          <Form.Control
            className="addpost-input"
            as="textarea"
            ref={titleRef}
            placeholder="Leave a Caption"
            rows={3}
            required
          />
        </FormGroup>
        <Form.Group controlId="formFile" className="mb-3 attach">
          <Form.Label>Attach Img/Video </Form.Label>
          <Form.Control className="fileinp" type="file" onChange={fileChangeHandler} required />
        </Form.Group>
        {formValid && (
          <ProgressBar
            file={file}
            title={titleRef.current.value}
            setFormValid={setFormValid}
            setFile={setFile}
          />
        )}
        <Button className="addpost-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Addpost;