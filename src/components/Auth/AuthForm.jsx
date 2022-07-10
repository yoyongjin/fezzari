import React, { useState } from "react";
import styled from "styled-components";

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <Form>
      <h1>{isLoggedIn ? "로그인" : "회원가입"}</h1>
      <form>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" required />
        </InputContainer>
        <ButtonContainer>
          <Button type="button">{isLoggedIn ? "로그인" : "회원가입"}</Button>
          <Button type="button" onClick={switchAuthModeHandler}>
            {isLoggedIn ? "새 계정 만들기" : "기존 이메일로 로그인"}
          </Button>
        </ButtonContainer>
      </form>
    </Form>
  );
};

const Form = styled.section`
  margin: 3rem auto;
  width: 95%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  color: white;
`;

const InputContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: block;
  color: white;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  font-style: inherit;
  background-color: #f1e1fc;
  color: #38015c;
  border-radius: 4px;
  border: 1px solid white;
  width: 100%;
  text-align: left;
  padding: 0.25rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;
  font: inherit;
  color: white;
  background-color: #9f5ccc;
  border: 1px solid #9f5ccc;
  border-radius: 4px;
  padding: 0.5rem 2.5rem;
`;

export default AuthForm;
