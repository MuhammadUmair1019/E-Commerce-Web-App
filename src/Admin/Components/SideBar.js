import { AssessmentOutlined, AttachMoneyOutlined, ChatBubbleOutlineOutlined, DynamicFeedOutlined, LineStyle, MailOutlined, PersonOutlineOutlined, Report, StorefrontOutlined, Timeline, TrendingUp, Work } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: calc(100vh - 60px) ;
    background-color: rgba(251, 251, 255);
    position: sticky;
    top: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    color: black;  
`;

const SidebarMenu = styled.div``;
const Title = styled.h3`
    font-size: 16px;
    margin-bottom: 10px;
`;

const SidebarList = styled.ul`
    list-style: none;
    padding-left: 5px;
`;

const SidebarListItem = styled.li`
    display: flex;
    margin-bottom: 6px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.type === "active" && "rgba(220, 240, 255)"};

    &:hover {
        background-color: rgba(240, 240, 255);
    }
`;

const Icon = styled.div`
    margin-right: 10px;
`;


export const SideBar = () => {
    return (
        <Container>
            <Wrapper>
                <SidebarMenu>
                    <Title>Dashboard</Title>
                    <SidebarList >
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem type="active">
                                <Icon>
                                    <LineStyle fontSize="small" />
                                </Icon>
                                Home
                            </SidebarListItem>
                        </Link>

                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <Timeline fontSize="small" />
                            </Icon>
                            Analytics
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <TrendingUp fontSize="small" />
                            </Icon>
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Quick Menu</Title>
                    <SidebarList>
                        <Link to="/users" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <Icon>
                                    <PersonOutlineOutlined fontSize="small" />
                                </Icon>
                                User
                            </SidebarListItem>
                        </Link>
                    </SidebarList>
                    <SidebarList>
                        <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
                            <SidebarListItem>
                                <Icon>
                                    <StorefrontOutlined fontSize="small" />
                                </Icon>
                                Products
                            </SidebarListItem>
                        </Link>
                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <AttachMoneyOutlined fontSize="small" />
                            </Icon>
                            Transactions
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <AssessmentOutlined fontSize="small" />
                            </Icon>
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Notifications</Title>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <MailOutlined fontSize="small" />
                            </Icon>
                            Mail
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <DynamicFeedOutlined fontSize="small" />
                            </Icon>
                            Feedback
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <ChatBubbleOutlineOutlined fontSize="small" />
                            </Icon>
                            Messages
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Staff</Title>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <Work fontSize="small" />
                            </Icon>
                            Manage
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <Timeline fontSize="small" />
                            </Icon>
                            Analytics
                        </SidebarListItem>
                    </SidebarList>
                    <SidebarList>
                        <SidebarListItem>
                            <Icon>
                                <Report fontSize="small" />
                            </Icon>
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </Wrapper>
        </Container>
    )
}


export default SideBar;
