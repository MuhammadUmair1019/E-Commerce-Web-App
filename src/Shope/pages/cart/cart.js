import Annocument from "../../component/annocument";
import Navbar from "../../component/navbar";
import NewsLetter from "../../component/newsletter";
import Footer from "../../component/footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../../responsive/responsive";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 30px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TopButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  border: ${(props) => props.type === "filled" && "none"};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
`;

const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const ShoppingItems = styled.span`
  text-decoration: underline;
  margin-right: 20px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column", marginBottom: "20px" })}
`;
const ProductDetails = styled.div`
  display: flex;
  flex: 2;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Image = styled.img`
  height: 200px;
`;

const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AmountDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Amount = styled.span`
  font-size: 24px;
  margin: 5px;
`;
const Price = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

const Summary = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-transform: uppercase;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.p``;
const SummaryItemPrice = styled.p``;
const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: #000;
  color: #ffff;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

const HR = styled.div`
  border-bottom: 0.5px solid gray;
`;

export default function Cart() {
  return (
    <Container>
      <Navbar />
      <Annocument />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <TopButton> Continue shopping </TopButton>
          </Link>
          <ShoppingContainer>
            <ShoppingItems>Shopping Bag(2)</ShoppingItems>
            <ShoppingItems> Your Whishlist (0)</ShoppingItems>
          </ShoppingContainer>
          <TopButton type="filled"> Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product: </b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 93813718293
                  </ProductID>
                  <ProductColor />
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <AmountDetails>
                  <Add />
                  <Amount>1</Amount>
                  <Remove />
                </AmountDetails>
                <Price> $ 30</Price>
              </PriceDetail>
            </Product>
            <HR />
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product: </b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 93813718293
                  </ProductID>
                  <ProductColor />
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <AmountDetails>
                  <Add />
                  <Amount>1</Amount>
                  <Remove />
                </AmountDetails>
                <Price> $ 30</Price>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <CheckoutButton> Chekout Now</CheckoutButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
