import { Avatar } from "@mui/material";
import styled from "styled-components";
import { Chart } from "../../Components/Chart";
import { productData } from "../../Data/Data";
import { Grid } from "@mui/material";


const Container = styled.div` `;
const ProductInfoContainer = styled.div`
`;
const ProductDetail = styled.div`
  height: 200px;
  margin: 30px 20px;
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
`;
const ProductTop = styled.div`
    display: flex;
    align-items: center;
`;
const ProductName = styled.h4``;

const ProductBottom = styled.div`
    margin-top: 20px;
`;
const ProductItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
`;
const ProductItem = styled.span`
    margin: 5px 10px;
    font-weight: ${props => props.type === "title" && "700"}
`;


export const ProductInfo = () => {
    return (
        <Container>
            <ProductInfoContainer>
                <Grid container>
                    <Grid item md={7}>
                        <Chart data={productData} title="Sales Performance" dataKey="Active Product" />
                    </Grid>
                    <Grid item md={5}>
                        <ProductDetail>
                            <ProductTop>
                                <Avatar sx={{ width: 40, height: 40, marginRight: 1 }} src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                <ProductName> Apple Airpods </ProductName>
                            </ProductTop>
                            <ProductBottom>
                                <ProductItems>
                                    <ProductItem type="title">id:</ProductItem>
                                    <ProductItem> 123</ProductItem>
                                </ProductItems>
                                <ProductItems>
                                    <ProductItem type="title">sales:</ProductItem>
                                    <ProductItem> 512</ProductItem>
                                </ProductItems>
                                <ProductItems>
                                    <ProductItem type="title"> active:</ProductItem>
                                    <ProductItem> yes</ProductItem>
                                </ProductItems>
                                <ProductItems>
                                    <ProductItem type="title">in stock:</ProductItem>
                                    <ProductItem> no</ProductItem>
                                </ProductItems>
                            </ProductBottom>
                        </ProductDetail>
                    </Grid>
                </Grid>
            </ProductInfoContainer>
        </Container>
    )
}