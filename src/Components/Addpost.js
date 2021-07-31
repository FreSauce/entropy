import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
const Addpost = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>ADD POST</h1>
            <hr />
            <br />
            <Form className="">
                <FloatingLabel controlId="floatingTextarea1" label="Title*">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a Title"
                        style={{ height: "50px", width: "50%" }}
                        required
                    />
                </FloatingLabel>
                <br />
                <FloatingLabel controlId="floatingTextarea2" label="Comments*">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px", width: "80%" }}
                        required
                    />
                </FloatingLabel>
                <br />
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Attach Img/Video </Form.Label>
                    <br />
                    <Form.Control type="file" />
                </Form.Group>
                <br />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Addpost;
