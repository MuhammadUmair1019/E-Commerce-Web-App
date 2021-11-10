import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import styled from "styled-components";
import { Settings } from '@mui/icons-material';
import { Avatar, Badge } from '@mui/material';

const Container = styled.div`
    height: 60px;
    background-color: #ffff;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    position: sticky;
    top: 0;
    z-index: 999;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: blue;
`;

const Right = styled.div`
    flex: 1;
`;

const MenuItems = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Icon = styled.div`
    margin-left: 10px;   
    cursor: pointer; 
`;

export const TopBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Admin</Logo>
                </Left>
                <Right>
                    <MenuItems>
                        <Icon>
                        <Badge badgeContent={4} color="primary">
                            <NotificationsOutlinedIcon/>
                        </Badge>
                        </Icon>
                        <Icon>
                        <Badge badgeContent={3} color="primary">
                            <LanguageOutlinedIcon/>
                        </Badge>
                        </Icon>
                        <Icon>
                            <Settings/>
                        </Icon>
                        <Icon type="avatar">
                            <Avatar  src="./images/user.jpg" />
                        </Icon>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default TopBar;