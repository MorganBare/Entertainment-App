import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

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
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/login",
        user
      );

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        const decodedToken = decodeToken(data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Container>
        <Header>Login</Header>
        <Form onSubmit={handleSubmit}>
          <Input_Container>
            <Form_Input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email address"
              type="email"
              required
            />
          </Input_Container>

          <Input_Container>
            <Form_Input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
              type="password"
              required
            />
          </Input_Container>

          <Form_Button type="submit">Login to your account </Form_Button>

          <Form_Text>
            Don't have an account? <a to="/sign-in">Sign up</a>
          </Form_Text>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Login;
