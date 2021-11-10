import Annocument from "../../component/annocument";
import Navbar from "../../component/navbar";
import NewsLetter from "../../component/newsletter";
import Footer from "../../component/footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../../responsive/responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "0px" })};
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 100;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  margin-bottom: 20px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const Select = styled.select`
  padding: 6px;
  margin-left: 6px;
  cursor: pointer;
`;
const Option = styled.option``;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
`;

const ButtonGroup = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  margin: 0 5px;
  padding: 0 10px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  outline: 1px solid teal;
  border: 1px solid teal;
  background-color: transparent;
  color: #000;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${"" /* outline: 2px solid teal; */}
    ${"" /* outline-offset: 2px; */}
    background-color: teal;
    color: #fff;
  }
`;

export default function PorductDetails() {
  return (
    <Container>
      <Navbar />
      <Annocument />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price> $ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterText> Color </FilterText>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterText> Size </FilterText>
              <Select>
                {["XS", "S", "M", "L", "XL"].map((option) => (
                  <Option>{option}</Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>
          <FilterContainer>
            <ButtonGroup>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </ButtonGroup>
            <Button> Add to cart</Button>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}
