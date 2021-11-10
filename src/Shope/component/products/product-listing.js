import styled from "styled-components";
import { popularProducts as products } from "../../data/products";
import ProductCard from "./product-card";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function ProductListing() {
  return (
    <Container>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </Container>
  );
}
