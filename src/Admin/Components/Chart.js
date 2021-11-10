import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Container = styled.div`
  padding: 20px;
  margin: 30px 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
`;

const ChartTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Chart = ({ data, title, dataKey }) => {
  return (
    <Container>
      <ChartTitle>{title} </ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
