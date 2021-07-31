import React from "react";
import { Form, FloatingLabel, Button, Alert } from "react-bootstrap";
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
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <h1 style={{ textAlign: "center" }}>ADD POST</h1>
      <hr />
      <br />
      <Form className="" onSubmit={submitHandler}>
        <FloatingLabel controlId="floatingTextarea1" label="Title*">
          <Form.Control
            as="textarea"
            ref={titleRef}
            placeholder="Leave a Title"
            style={{ height: "50px", width: "50%" }}
            required
          />
        </FloatingLabel>
        <br />
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Attach Img/Video </Form.Label>
          <br />
          <Form.Control type="file" onChange={fileChangeHandler} />
        </Form.Group>
        <br />
        {formValid && (
          <ProgressBar
            file={file}
            title={titleRef.current.value}
            setFormValid={setFormValid}
            setFile={setFile}
          />
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Addpost;