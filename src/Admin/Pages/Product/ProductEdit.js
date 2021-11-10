import { Publish } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "styled-components";


const Container = styled.div`
    margin: 30px 20px;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
`;

const ProductEditContainer = styled.div``;
const ProductTitle = styled.h4``;
const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`;

const ProductLeft = styled.div`
    width: 500px;
`;

const ProductItem = styled.div`
    margin: 16px 0px;
    display: ${props => props.type === "upload" && "flex"};
    align-items: ${props => props.type === "upload" && "center"}
`;

const Label = styled.label`
    padding-top: 10px;
`;
const Input = styled.input`
    width: 50%;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
    padding: 8px 5px;
    display: ${props => props.type === "file" && "none"}
`;
const ProductSelect = styled.div`
    margin-Top: 10px;
`;
const Select = styled.select`
    width: 50%;
    height: 30px;
    padding: 5px;
    border-radius: 5px;

`;
const Option = styled.option``;
const ProductRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ImageUpload = styled.div``;
const Button = styled.button`
    border: none;
    width: 160px;
    padding: 10px 20px;
    background-color: teal;
    color: #fff;
    border-radius: 10px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        outline: 1px solid teal;
        offset: 5px;
    }
`;


export const ProductEdit = () => {
    return (
        <Container>
            <ProductEditContainer>
                <ProductTitle> Product Name</ProductTitle>
                <ProductForm>
                    <ProductLeft>
                        <ProductItem>
                            <Input type="text" placeholder="Apple Airpods" />
                        </ProductItem>
                        <ProductItem>
                            <Label>In stock</Label>
                            <ProductSelect>
                                <Select>
                                    <Option value="yes">Yes</Option>
                                    <Option value="no"> No</Option>
                                </Select>
                            </ProductSelect>
                        </ProductItem>
                        <ProductItem>
                            <Label>Active</Label>
                            <ProductSelect>
                                <Select>
                                    <Option value="yes">Yes</Option>
                                    <Option value="no"> No</Option>
                                </Select>
                            </ProductSelect>
                        </ProductItem>
                    </ProductLeft>
                    <ProductRight>
                        <ProductItem type="upload">
                            <Avatar variant="rounded"
                                sx={{ width: 100, height: 100, borderRadius: 5, marginRight: 1 }}
                                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            />
                            <Label> <Publish /></Label>
                            <Input type="file" />
                        </ProductItem>
                        <Button> Upload </Button>
                    </ProductRight>
                </ProductForm>
            </ProductEditContainer>
        </Container>
    )
}