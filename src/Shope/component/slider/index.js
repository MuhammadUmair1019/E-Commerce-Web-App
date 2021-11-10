import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { sliderItems } from "../../data/slider-info";
import { mobile } from "../../responsive/responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  ${mobile({display: "none"})};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 3;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.index * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 30px 0;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSlider = (direction) => (e) => {
    direction === "left"
      ? setIndex(index > 0 ? index - 1 : 2)
      : setIndex(index < 2 ? index + 1 : 0);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={handleSlider("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper index={index}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOPE NOW </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={handleSlider("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
