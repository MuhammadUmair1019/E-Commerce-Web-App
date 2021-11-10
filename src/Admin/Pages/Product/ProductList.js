import styled from "styled-components";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../Data/Data";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { DeleteOutlineOutlined, ModeEditOutlineOutlined } from "@mui/icons-material";
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
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            {params.row.name}
        </Box>
    );
};



const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => (e) => {
        setData(data.filter(item => item.id !== id));
    }

    const column = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "name", headerName: "Product", width: 200,
            renderCell: (params) => User(params)
        },
        { field: "stock", headerName: "Stock", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
        { field: "price", headerName: "Price", width: 200 },
        {
            field: "active", headerName: "Active", width: 200,
            renderCell: (params) => (
                <div>
                    <Link to={`/products/${params.row.id}`}>
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

export default ProductList;