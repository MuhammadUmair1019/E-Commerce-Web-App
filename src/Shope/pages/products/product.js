import React from "react";
import Annocument from "../../component/annocument";
import Navbar from "../../component/navbar";
import Products from "../../component/products";
import NewsLetter from "../../component/newsletter";
import Footer from "../../component/footer";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { mobile } from "../../responsive/responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 22px;
`;
const Title = styled.h1`
    margin-bottom: 30px;
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const FilterMenu = styled.div`
  ${mobile({display: "flex", flexDirection: "column",})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const Select = styled.select`
  margin-left: 20px;
  padding: 10px;
  cursor: pointer;
  ${mobile({margin: "10px 0px 10px 2px"})}
`;
const Option = styled.option``;

export default function Product() {
  return (
    <React.Fragment>
      <Navbar />
      <Annocument />
      <Wrapper>
        <Title>Dresses</Title>
        <Filter>
          <FilterMenu>
            <FilterText>Filter Products: </FilterText>
            <Select>
              {[
                "Color",
                "White",
                "Black",
                "Blue",
                "Red",
                "Yellow",
                "Green"
              ].map((option) => (
                <Option>{option}</Option>
              ))}
            </Select>
            <Select>
              {["Size", "XS", "S", "M", "L", "XL"].map((option) => (
                <Option>{option}</Option>
              ))}
            </Select>
          </FilterMenu>
          <FilterMenu>
            <FilterText>Sort Products: </FilterText>
            <Select>
              {["Newest", "Price (asc)", "Price (desc)"].map((option) => (
                <Option>{option}</Option>
              ))}
            </Select>
          </FilterMenu>
        </Filter>
      </Wrapper>
      <Products />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}
