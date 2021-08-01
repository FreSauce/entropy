import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory, Redirect } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    if (currentUser) {
        return <Redirect to="/" />;
    } else {
        async function handleSubmit(e) {
            e.preventDefault();

            try {
                setError("");
                setLoading(true);
                await login(emailRef.current.value, passwordRef.current.value);
                history.push("/");
            } catch {
                setError("Failed to log in");
            }

            setLoading(false);
        }

        return (
            <>
                <Card className="join-user">
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-grp" id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    ref={emailRef}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="form-grp" id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={passwordRef}
                                    required
                                />
                            </Form.Group>
                            <div className="temp">
                            <Button
                                className="btnform w-100"
                                disabled={loading}
                                type="submit"
                                >
                                Log In
                            </Button>
                            </div>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Card.Body>
                    <Card.Footer className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </Card.Footer>
                </Card>
            </>
        );
    }
}
