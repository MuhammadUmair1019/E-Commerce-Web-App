import styled from "styled-components";
import { ProductInfo } from "./ProductInfo";
import { ProductEdit } from "./ProductEdit";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Container = styled.div`
  padding: 20px;
  margin: 30px 20px;
`;

const UserTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const UserTitle = styled.h1`
    font-weight: bold;
`;

const CreateButton = styled.button`
    width: 100px;
    border: none;
    padding: 10px 20px;
    background-color: teal;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: teal;
        outline: 1px solid teal;
    }
`;


const Products = () => {
    const {id} = useParams();

    return (
        <Container>
            <UserTitleContainer>
                <UserTitle> Product</UserTitle>
                <Link to={`/newProduct/${id}`}>
                    <CreateButton> Create</CreateButton>
                </Link>
            </UserTitleContainer>
            <Grid container spacing={1}>
                <Grid item md={12}>
                    <ProductInfo />
                </Grid>
                <Grid item md={12}>
                    <ProductEdit />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Products;