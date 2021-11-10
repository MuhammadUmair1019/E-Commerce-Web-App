import styled from "styled-components";
import { Route, Routes } from "react-router";
import Home from "./Home/Home";
import UserList from "./User/UserList";
import SideBar from "../Components/SideBar";
import Users from "./User/Users";
import NewUser  from "./User/NewUser";
import Product from "./Product/Product";
import ProductList from "./Product/ProductList";
import NewProduct from "./Product/NewProduct";
import Grid from "@mui/material/Grid";


const Container = styled.div``;

export const AllPages = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={2}>
          <SideBar />
        </Grid>
        <Grid item md={10}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<Users  />} />
            <Route path="/newUser/:id" element={<NewUser />} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/newProduct/:id" element={<NewProduct />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>
  );
};
