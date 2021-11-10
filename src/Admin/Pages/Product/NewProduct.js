import styled from "styled-components";

const Container = styled.div`
    margin: 30px 20px;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
`;

const NewProductContainer = styled.div`
    border-radius: 10px;
`;
const NewProductTitle = styled.h1`
    margin-bottom: 20px;
`;
const NewProductForm = styled.form`
    width: 600px;
`;
const NewProductItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

const Label = styled.label`
    color: gray;
    font-weight: 500;
    margin-bottom: 10px;
`;

const Input = styled.input`
    height: 20px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    margin-bottom: 20px;
    margin: ${props => props.type === "radio" && "0px 10px"};
    cursor: ${props => props.type === "radio" && "pointer"};
`;

const NewUserSelect = styled.div`
`;

const Select = styled.select`
    width: 100%;
    height: 40px;
    padding:5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    margin-bottom: 10px;
    cursor: pointer;

`;
const Option = styled.option``;

const Button = styled.button`
    border: none;
    width: 160px;
    margin: 10px 0;
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



const NewProduct = () => {
    return (
        <Container>
            <NewProductContainer>
                <NewProductTitle> New Uer</NewProductTitle>
                <NewProductForm>
                    <NewProductItem>
                        <Label for="file">Image</Label>
                        <Input type="file" name="file" placeholder="" />
                    </NewProductItem>
                    <NewProductItem>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" placeholder="Apple Airpods" />
                    </NewProductItem>
                    <NewProductItem>
                        <Label for="stock">Stock</Label>
                        <Input type="text" name="stock" placeholder="123" />
                    </NewProductItem>
                    <NewProductItem>
                        <Label> Active</Label>
                        <NewUserSelect>
                            <Select name="active">
                                <Option value="yes">Yes</Option>
                                <Option value="no"> No</Option>
                            </Select>
                        </NewUserSelect>
                    </NewProductItem>
                </NewProductForm>
                <Button> Create </Button>
            </NewProductContainer>
        </Container>

    )
}

export default NewProduct;