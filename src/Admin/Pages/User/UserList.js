import styled from "styled-components";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from "@mui/material";
import { userRows } from "../../Data/Data";
import { DeleteOutlineOutlined, ModeEditOutlineOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  margin: 30px 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
 height: 60vh;
`;



const User = (params) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
                sx={{ width: 26, height: 26, marginRight: 2, cursor: "pointer" }} fontSize="small"
                src="./images/user.jpg"
            />
            {params.row.username}
        </Box>
    );
};


const Action = (params) => {
    return (
        <div>
            <Link to={`/users/${params.row.id}`}>
                <ModeEditOutlineOutlined sx={{ color: "lightblue", marginRight: 2, cursor: "pointer" }} fontSize="small" />
            </Link>
            <DeleteOutlineOutlined sx={{ color: "red", cursor: "pointer" }} fontSize="small" />
        </div>
    )
}


const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => (e) => {
        setData(data.filter(item => item.id !== id));
    }

    const column = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "username", headerName: "User", width: 200,
            renderCell: (params) => User(params)
        },
        { field: "email", headerName: "Email", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
        { field: "transaction", headerName: "Transaction", width: 200 },
        {
            field: "active", headerName: "Active", width: 200,
            renderCell: (params) => (
                <div>
                    <Link to={`/users/${params.row.id}`}>
                        <ModeEditOutlineOutlined sx={{ color: "lightblue", marginRight: 2, cursor: "pointer" }} fontSize="small" />
                    </Link>
                    <DeleteOutlineOutlined sx={{ color: "red", cursor: "pointer" }} fontSize="small" onClick={handleDelete(params.row.id)} />
                </div>
            )
        },
    ];


    return (
        <Container>
            <DataGrid columns={column} rows={data} checkboxSelection pageSize={8} />
        </Container>
    )
}

export default UserList;