import { Visibility } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  margin: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
`;
const Wrapper = styled.div`
  padding: 20px 18px;
`;

const WidgetContainer = styled.div`
  margin-top: 10px;
`;
const WidgetItem = styled.ul`
  list-style: none;
  padding: 5px;
`;
const WidgetItemList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h3``;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const UserTitle = styled.span`
  font-size: 14px;
  color: lightgray;
`;

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 4px 8px;
  background-color: lightgray;
  font-weight: 500;
  cursor: pointer;
`;

const SmWidgets = () => {
  return (
    <Container>
      <Wrapper>
        <Title> New Join Members</Title>
        <WidgetContainer>
          <WidgetItem>
            <WidgetItemList>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <WidgetDetails>
                <UserName>Amna Keller </UserName>
                <UserTitle> Software Engineer</UserTitle>
              </WidgetDetails>
              <Button>
                <Visibility style={{ marginRight: "6px" }} />
                Display
              </Button>
            </WidgetItemList>
            <WidgetItemList>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <WidgetDetails>
                <UserName>Amna Keller </UserName>
                <UserTitle> Software Engineer</UserTitle>
              </WidgetDetails>
              <Button>
                <Visibility style={{ marginRight: "6px" }} />
                Display
              </Button>
            </WidgetItemList>
            <WidgetItemList>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <WidgetDetails>
                <UserName>Amna Keller </UserName>
                <UserTitle> Software Engineer</UserTitle>
              </WidgetDetails>
              <Button>
                <Visibility style={{ marginRight: "6px" }} />
                Display
              </Button>
            </WidgetItemList>
            <WidgetItemList>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <WidgetDetails>
                <UserName>Amna Keller </UserName>
                <UserTitle> Software Engineer</UserTitle>
              </WidgetDetails>
              <Button>
                <Visibility style={{ marginRight: "6px" }} />
                Display
              </Button>
            </WidgetItemList>
            <WidgetItemList>
              <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <WidgetDetails>
                <UserName>Amna Keller </UserName>
                <UserTitle> Software Engineer</UserTitle>
              </WidgetDetails>
              <Button>
                <Visibility style={{ marginRight: "6px" }} />
                Display
              </Button>
            </WidgetItemList>
          </WidgetItem>
        </WidgetContainer>
      </Wrapper>
    </Container>
  );
};

export default SmWidgets;
