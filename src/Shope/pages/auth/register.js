import styled from "styled-components";
import { mobile } from "../../responsive/responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  border: none;
  width: 40%;
  padding: 15px 20px;
  background-color: teal;
  text-transform: uppercase;
  font-weight: 500;
  color: #ffff;
  cursor: pointer;

`;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b> PRIVACY POLICY </b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
