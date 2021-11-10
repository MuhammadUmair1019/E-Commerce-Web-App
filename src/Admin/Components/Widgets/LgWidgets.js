import { Avatar } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  margin: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  padding: 20px 20px;
`;

const WidgetContainer = styled.div``;
const Title = styled.h3``;

const TableContainer = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
`;
const TableHead = styled.th`
  text-align: start;
  padding-bottom: 20px;
`;
const TableRow = styled.tr``;

const TableCell = styled.td`
  padding-bottom: 20px;
  display: ${(props) => props.type === "avatar" && "flex"};
  align-items: ${(props) => props.type === "avatar" && "center"};
  font-weight: ${(props) => props.type === "avatar" && "500"};
  color: ${(props) => props.type === "approve" && "green"};
  color: ${(props) => props.type === "decline" && "pink"};
  color: ${(props) => props.type === "pending" && "blue"};
`;

const LgWidgets = () => {
  return (
    <Container>
      <Wrapper>
        <WidgetContainer>
          <Title> Latest Transications</Title>
          <TableContainer aria-label="simple table">
            <Table>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
              <TableRow>
                <TableCell type="avatar">
                  <Avatar
                    sx={{ width: 30, height: 30, marginRight: 1 }}
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  />
                  Sausn Coral
                </TableCell>
                <TableCell> 2 Jun 2021</TableCell>
                <TableCell> $22.34</TableCell>
                <TableCell type="approve"> Approved</TableCell>
              </TableRow>
              <TableRow>
                <TableCell type="avatar">
                  <Avatar
                    sx={{ width: 30, height: 30, marginRight: 1 }}
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  />
                  Sausn Coral
                </TableCell>
                <TableCell> 2 Jun 2021</TableCell>
                <TableCell> $22.34</TableCell>
                <TableCell type="decline"> Decline</TableCell>
              </TableRow>
              <TableRow>
                <TableCell type="avatar">
                  <Avatar
                    sx={{ width: 30, height: 30, marginRight: 1 }}
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  />
                  Sausn Coral
                </TableCell>
                <TableCell> 2 Jun 2021</TableCell>
                <TableCell> $22.34</TableCell>
                <TableCell type="pending"> Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell type="avatar">
                  <Avatar
                    sx={{ width: 30, height: 30, marginRight: 1 }}
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  />
                  Sausn Coral
                </TableCell>
                <TableCell> 2 Jun 2021</TableCell>
                <TableCell> $22.34</TableCell>
                <TableCell type="pending"> Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell type="avatar">
                  <Avatar
                    sx={{ width: 30, height: 30, marginRight: 1 }}
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  />
                  Sausn Coral
                </TableCell>
                <TableCell> 2 Jun 2021</TableCell>
                <TableCell> $22.34</TableCell>
                <TableCell type="approve"> Pending</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </WidgetContainer>
      </Wrapper>
    </Container>
  );
};

export default LgWidgets;
