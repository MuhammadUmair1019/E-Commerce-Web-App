import styled from "styled-components";


const Container = styled.div`
  padding: 20px;
  margin: 30px 20px;
`;
const NewUserContainer = styled.div`
    padding: 20px 20px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const NewUserTitle = styled.h1`
    margin-bottom: 20px;
`;
const NewUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const NewUserItem = styled.div`
    width: 500px;
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
    margin: ${props => props.type==="radio" && "0px 10px"};
    cursor: ${props => props.type==="radio" && "pointer"};
`;

const NewUserGender = styled.div`
    display: flex;
    margin: 20px 0;

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


const NewUser = () => {
    return (
        <Container>
            <NewUserContainer>
                <NewUserTitle> New User</NewUserTitle>
                <NewUserForm>
                    <NewUserItem>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" placeholder="umiar" />
                    </NewUserItem>
                    <NewUserItem>
                        <Label for="fullName">Full Name</Label>
                        <Input type="text" name="fullName" placeholder="Muhammad Umair" />
                    </NewUserItem>
                    <NewUserItem>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" placeholder="muhammadumair1019@gmail.com" />
                    </NewUserItem>
                    <NewUserItem>
                        <Label for="password">Password</Label>
                        <Input type="text" name="password" placeholder="password" />
                    </NewUserItem>
                    <NewUserItem>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" placeholder="+92-3117821612" />
                    </NewUserItem>
                    <NewUserItem>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" placeholder="Krachi | Pakistan" />
                    </NewUserItem>
                    <NewUserItem>
                        <Label >Gender</Label>
                        <NewUserGender>
                            <Input type="radio" name="gender" value="male" />
                            <Label for="male"> Male</Label>
                            <Input type="radio" name="gender" value="female" />
                            <Label for="female"> Female</Label>
                            <Input type="radio" name="gender" value="other" />
                            <Label for="other"> Other</Label>
                        </NewUserGender>
                    </NewUserItem>
                    <NewUserItem>
                        <Label> Active</Label>
                        <NewUserSelect>
                            <Select name="active">
                                <Option value="yes">Yes</Option>
                                <Option value="no"> No</Option>
                            </Select>
                        </NewUserSelect>
                    </NewUserItem>
                </NewUserForm>
                <Button> Create </Button>
            </NewUserContainer>
        </Container>
    )
}

export default NewUser;