import styled from "styled-components";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { mobile } from "../../responsive/responsive";


const Container = styled.div`
    height: 50vh;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({height: "40vh"})};
`

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 10px;
    ${mobile({fontSize: "45px"})}

`
const Desc = styled.p`
    font-size: 22px;
    margin-bottom: 20px;
    ${mobile({fontSize: "20px", textAlign: "center"})}
`

const InputContainer = styled.div`
    width: 50%;   
    height: 40px;
    display: flex;
    ${mobile({width: "80%"})}
`

const Input = styled.input`
    flex: 8;
    padding-left: 20px;
    outline: none;
`

const Button = styled.button`
    flex: 1;
    border: none;
    color: #fff;
    background-color: teal;
    text-align: center;
    cursor: pointer;
`


export default function NewsLetter() {
    return (
        <Container>
            <Title> Newsletter</Title>
            <Desc>Get timely updates from your favorite products </Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendOutlinedIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}