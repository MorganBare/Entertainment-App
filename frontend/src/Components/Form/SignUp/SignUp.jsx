import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
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

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:5000/auth/register",
      user
    );

    if (data.success) {
      navigate("/login");
    }
  };
  return (
    <Wrapper>
      <Container>
        <Header>Sign Up</Header>
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

          <Input_Container>
            <Form_Input
              value={user.password2}
              onChange={(e) => setUser({ ...user, password2: e.target.value })}
              placeholder="Repeat Password"
              required
            />
          </Input_Container>

          <Form_Button type="submit">Create an account </Form_Button>

          <Form_Text>
            Already have an account? <a to="/sign-in">Sign In</a>
          </Form_Text>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
