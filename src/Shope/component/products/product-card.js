import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5d5;
    transform: scale(1.1);
  }
`;

export default function ProductCard(props) {
  const { img } = props;
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Link to="/details" style={{ textDecoration: "none" }}>
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Link>
    </Container>
  );
}
