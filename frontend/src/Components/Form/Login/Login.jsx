import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Container,
  Input_Container,
  Form,
  Header,
  Form_Input,
  Form_Button,
  Form_Text,
} from "../Form.styled";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Header>Login</Header>
        <Form>
          <Input_Container>
            <Form_Input placeholder="Email address" type="email" required />
          </Input_Container>

          <Input_Container>
            <Form_Input placeholder="Password" type="password" required />
          </Input_Container>

          <Form_Button type="submit">Create an account </Form_Button>

          <Form_Text>
            Don't have an account? <a to="/sign-in">Sign up</a>
          </Form_Text>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Login;
