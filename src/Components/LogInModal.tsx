import React, { useState } from 'react';
import { Modal, Nav, Tab, Form, Button, Tabs } from 'react-bootstrap';

interface LoginModalProps {
  show: boolean;
  onHide: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onHide }) => {
  const [key, setKey] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button clicked');
    onHide(); // Close the modal after login
  };

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup button clicked');
    onHide(); // Close the modal after signup
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login / Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k || 'login')} >
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="signup">Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
          <hr/>
          <Tab.Content>
            <Tab.Pane eventKey="login">
              <Form>
                <Form.Group controlId="formLoginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>
                  Log In
                </Button>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="signup">
              <Form>
                <Form.Group controlId="formSignupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formSignupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleSignup}>
                  Sign Up
                </Button>
              </Form>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
