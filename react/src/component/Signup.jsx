import { useState, useEffect } from "react";
import { Button, Form, Alert, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!email || !password) {
      setErrorMsg("Email and password are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:2468/signup", {
        email,
        password,
      });
      setSuccessMsg("User registered: " + res.data.email);
      // maybe redirect to login or clear form...
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMsg("Signup failed. Please try again.");
    }
  };

  useEffect(() => {
    document.title = "Signup";
  }, []);

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h2 className="form-title">Signup</h2>

        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}

        <Form onSubmit={handleSubmit} className="signup-form">
          <Form.Group controlId="signupEmail" className="mb-3">
            <Form.Label className="form-label">Email</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="signupPassword" className="mb-3">
            <Form.Label className="form-label">Password</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-btn">
            Sign Up
          </Button>

          <div className="form-footer">
            <span>Already have an account? </span>
            <NavLink to="/login" className="form-link">
              Login
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
