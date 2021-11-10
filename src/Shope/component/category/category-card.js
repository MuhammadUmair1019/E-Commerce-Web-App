import styled from "styled-components";
import { mobile } from "../../responsive/responsive";

const Container = styled.div`
  flex: 1;
  margin: 6px;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({height: "25vh"})}
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  text-transform: uppercase;
`;

export default function CategoryCard(props) {
  const { title, img } = props;

  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title} </Title>
        <Button>Shope Now</Button>
      </Info>
    </Container>
  );
}
