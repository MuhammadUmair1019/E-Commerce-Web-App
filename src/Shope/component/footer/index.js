import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive/responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
  flex: 1;
  ${mobile({marginBottom: "22px"})}
`;

const Logo = styled.h1`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin-bottom: 20px;
`;
const SocialIcons = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding-left: 20px;
  ${mobile({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 32px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: lightgray;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialIcons>
          <Icon color="3B5999">
            <Facebook />
          </Icon>
          <Icon color="E4405F">
            <Instagram />
          </Icon>
          <Icon color="55ACEE">
            <Twitter />
          </Icon>
          <Icon color="E60023">
            <Pinterest />
          </Icon>
        </SocialIcons>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          {[
            "Home",
            "Man Fashion",
            "Accessories",
            "Order Tracking",
            "Whish List",
            "Cart",
            "Woman Fashon",
            "My Account",
            "Whishlist",
            "Terms"
          ].map((item) => (
            <ListItem key={item} >{item}</ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title> Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@umair.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
