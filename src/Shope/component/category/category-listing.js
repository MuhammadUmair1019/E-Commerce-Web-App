import { categories } from "../../data/category";
import styled from "styled-components";
import Category from "./category-card";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive/responsive";

const Container = styled.div`
  display: flex;
  margin: 20px;
  ${mobile({ flexDirection: "column", margin: "4px" })};
`;

export default function CategoryListing() {
  return (
    <Link to="/products" style={{ textDecoration: "none" }}>
      <Container>
        {categories.map((item) => (
          <Category key={item.id} {...item} />
        ))}
      </Container>
    </Link>
  );
}
