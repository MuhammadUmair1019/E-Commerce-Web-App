import styled from "styled-components";

import { UserEdit } from "./UserEdit";
import { UserInfo } from "./UserInfo";
import { Grid, Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";


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


const Users = () => {
    const {id} = useParams();

    return (
        <Container>
            <UserTitleContainer>
                <UserTitle> Edit User</UserTitle>
                <Link to={`/newUser/${id}`}>
                    <CreateButton> Create</CreateButton>
                </Link>
            </UserTitleContainer>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <UserInfo />
                </Grid>
                <Grid item md={8}>
                    <UserEdit />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Users;