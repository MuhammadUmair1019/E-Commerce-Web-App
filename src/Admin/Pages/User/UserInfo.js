import { DateRangeOutlined, EmailOutlined, LocationSearchingOutlined, PersonOutlineOutlined, PhoneAndroidOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
        border-radius: 10px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const UserInfoContainer = styled.div`
    padding: 20px 22px;
`;

const UserTopContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
const UserTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px
`;
const UserName = styled.span`
    font-weight: 700;
`;
const UserTitle = styled.span`
    font-weight: 500;
    opacity: 0.5;

`;
const UserBottomContainer = styled.div`
`;

const UserDetails = styled.div`
    padding: 20px 0;
`;

const UserDetailTitle = styled.p`
    font-weight: 700;
    opacity: 0.3;

`;
const UserDetail = styled.p`
    display: flex;
    align-items: center;
    
    margin: 20px 0;
`;


export const UserInfo = () => {
    return (
        <Container>
            <UserInfoContainer>
                <UserTopContainer>
                    <Avatar sx={{ width: 36, height: 36 }} src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    <UserTitleContainer>
                        <UserName>Anna Beaker</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </UserTitleContainer>
                </UserTopContainer>
                <UserBottomContainer>
                    <UserDetails>
                        <UserDetailTitle> Amount Details</UserDetailTitle>
                        <UserDetail>
                            <PersonOutlineOutlined fontSize="small" sx={{ marginRight: 2 }} />
                            amber
                        </UserDetail>
                        <UserDetail>
                            <DateRangeOutlined fontSize="small" sx={{ marginRight: 2 }} />
                            10.12.199
                        </UserDetail>
                        <UserDetailTitle> Contact Details</UserDetailTitle>
                        <UserDetail>
                            <PhoneAndroidOutlined fontSize="small" sx={{ marginRight: 2 }} />
                            +92-3003778572
                        </UserDetail>
                        <UserDetail>
                            <EmailOutlined fontSize="small" sx={{ marginRight: 2 }} />
                            umiardev99@gmail.com
                        </UserDetail>
                        <UserDetail>
                            <LocationSearchingOutlined fontSize="small" sx={{ marginRight: 2 }} />
                            Krachi | Pakistan
                        </UserDetail>
                    </UserDetails>
                </UserBottomContainer>
            </UserInfoContainer>
        </Container>
    )
}