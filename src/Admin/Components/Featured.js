import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-Top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const FeaturedItem = styled.div`
  flex: 1;
  padding: 20px;
  margin: 0 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-weight: bold;
`;
const FeatuerdContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;
const FeaturedPrice = styled.span`
  font-weight: 500;
  font-size: 24px;
`;

const FeaturedRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Icon = styled.div`
  color: ${props => props.type === "negative"? "red": "green"};
`;

const FeaturedText = styled.p`
  font-weight: 500;
`;

export const Featured = () => {
  return (
    <Container>
      <FeaturedItem>
        <Title>Sales </Title>
        <FeatuerdContainer>
          <FeaturedPrice>$2,415</FeaturedPrice>
          <FeaturedRate >
            -11.4
            <Icon type="negative">
              <ArrowDownwardOutlined fontSize="small" />
            </Icon>
          </FeaturedRate>
        </FeatuerdContainer>
        <FeaturedText> Compare to last month</FeaturedText>
      </FeaturedItem>
      <FeaturedItem>
        <Title>Revenew </Title>
        <FeatuerdContainer>
          <FeaturedPrice>$4,415</FeaturedPrice>
          <FeaturedRate >
            -11.4
            <Icon type="negative">
              <ArrowDownwardOutlined fontSize="small" />
            </Icon>
          </FeaturedRate>
        </FeatuerdContainer>
        <FeaturedText> Compare to last month</FeaturedText>
      </FeaturedItem>
      <FeaturedItem>
        <Title>Cost </Title>
        <FeatuerdContainer>
          <FeaturedPrice>$2,415</FeaturedPrice>
          <FeaturedRate >
            +2.4
            <Icon type="positive">
              <ArrowUpwardOutlined fontSize="small" />
            </Icon>
          </FeaturedRate>
        </FeatuerdContainer>
        <FeaturedText> Compare to last month</FeaturedText>
      </FeaturedItem>
    </Container>
  );
};
