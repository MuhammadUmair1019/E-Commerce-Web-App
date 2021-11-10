import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive/responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  ${mobile({ padding: "10px 0" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-szie: 12px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SerchContainer = styled.div`
  border: 0.5px solid #d3d3d3;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0 6px;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  text-align: center;
  ${mobile({ fontSize: "24px", marginLeft: "5px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN</Language>
          <SerchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon
              style={{ color: "lightgray", fontSize: "16px" }}
            />
          </SerchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo> LAMA.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration : "none" }}>
            <MenuItem> REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem> SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none",  color: "black" }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
