import { Publish } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
`;

const UserEditContainer = styled.div`
    padding: 20px 22px;
`;

const Title = styled.h2`
    margin-bottom: 30px;
`;

const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const UserUpdateContainer = styled.div`
    width: 50%;
`;

const ImageUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;

`;

const Input = styled.input`
    margin-bottom: 14px;
    border: none;
    outline: none;
    border-bottom: 2px solid #ddd;
    width: 80%;
    height: 20px;
    padding:10px 0px;
    display: ${props => props.type === "file" && "none"};
    margin-left: ${props => props.type === "file" && "30px"};

`;

const Icon = styled.div`
`;

const UserUpdateImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

const Button = styled.button`
    border: none;
    width: 120px;
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


export const UserEdit = () => {
    return (
        <Container>
            <UserEditContainer>
                <Title> Edit </Title>
                <UserContainer>
                    <UserUpdateContainer>
                        <Label > Username </Label>
                        <Input type="text"  placeholder="umair99" />
                        <Label> Full Name </Label>
                        <Input type="text" placeholder="muhammad umair" />
                        <Label> Email </Label>
                        <Input type="text" placeholder="umairdev.@gamil.com" />
                        <Label> Phone </Label>
                        <Input type="text" placeholder="+92-3003778572" />
                        <Label> Address </Label>
                        <Input type="text" placeholder="Karachi | Pakistan" />
                    </UserUpdateContainer>
                    <ImageUploadContainer>
                        <UserUpdateImage>
                            <Icon>
                            <Avatar variant="rounded" sx={{ width: 100, height: 100, marginRight: 1 }} src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            </Icon>
                            <Label htmlFor="file"> <Publish sx={{marginLeft: 2}}/>  </Label>
                            <Input type="file" />
                        </UserUpdateImage>
                        <Button> Update</Button>
                    </ImageUploadContainer>
                </UserContainer>
            </UserEditContainer>
        </Container>
    )
}