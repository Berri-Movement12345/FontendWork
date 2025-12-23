import { useState, useEffect } from "react";
import { Button, Form, Alert, InputGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:2468/login", {
        email,
        password,
      });
      // Store token in localStorage
      localStorage.setItem("token", res.data.token);
      // Redirect to home page
      navigate("/");
    } catch (err) {
      setError("Login failed");
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className='signup-container'>
      <div className='form-wrapper'>
        <h2 className='form-title'>Login</h2>

        {error && <Alert variant="danger" className='form-alert'>{error}</Alert>}

        <Form onSubmit={handleSubmit} className='signup-form'>
          <Form.Group controlId="loginEmail" className="mb-3">
            <Form.Label className='form-label'>Email</Form.Label>
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
                className='form-input'
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="loginPassword" className="mb-3">
            <Form.Label className='form-label'>Password</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form-input'
              />
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit" className='submit-btn'>
            Login
          </Button>

          <div className='form-footer'>
            <span>Don't have an account? </span>
            <NavLink to="/signup" className='form-link'>Signup</NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
