import styled from "styled-components";
import { mobile } from "../../responsive/responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  ${mobile({width: "75%"})}
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
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
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #000;
  font-size: 12px;
  display: block;
  margin: 8px 0;
  text-decoration: underline;
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
        </Form>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
}
