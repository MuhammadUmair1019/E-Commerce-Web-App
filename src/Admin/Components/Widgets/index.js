import styled from "styled-components";
import Grid from "@mui/material/Grid";
import SmWidgets from "./SmWidgets";
import LgWidgets from "./LgWidgets";

const Container = styled.div`
  margin: 30px 20px;
`;

const Widgets = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={4}>
          <SmWidgets />
        </Grid>
        <Grid item md={8}>
          <LgWidgets />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Widgets;
