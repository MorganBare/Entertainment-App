import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Container = styled.div`
  width: 400px;
  height: 418px;
  background-color: #161d2f;
  border-radius: 15px;
  padding: 32px;
`;

export const Input_Container = styled.div``;

export const Form = styled.form`
  margin-top: 28px;
`;

export const Header = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
  color: #fff;
`;

export const Form_Label = styled.label`
  color: #8b8e97;
`;

export const Form_Input = styled.input`
  background-color: #161d2f;
  border: none;
  border-bottom: 1px solid #8b8e97;
  padding: 3px 8px 6px;
  margin: 0.75rem 0;
  color: #fff;
  width: 100%;

  &::placeholder {
    color: #8b8e97;
    font-weight: 300;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }
  // If you have name and password saved into your browser, it will auto populate the inout fields. The problem I found was when it auto populated, the background color changed to white. To see it in action, comment out the code below.
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #161d2f inset !important;
    -webkit-text-fill-color: #fff !important;
  }

  &:active {
    background-color: #161d2f;
  }
`;

export const Form_Button = styled.button`
  background-color: #fc4747;
  color: #fff;
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  padding: 10px 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 1em 0;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const Form_Text = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  text-align: center;

  a {
    color: #fc4747;
    padding-left: 4px;
  }
`;
