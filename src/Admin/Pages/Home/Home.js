import React from 'react'
import styled from "styled-components";
import Widgets from '../../Components/Widgets';
import { userData } from '../../Data/Data';
import { Featured } from '../../Components/Featured';
import {Chart} from "../../Components/Chart";

const Container = styled.div`
    padding: 10px;
`;

const Home = () => {
    return (
        <Container>
            <Featured />
            <Chart data={userData} title="User Analytics" dataKey="Active User"/>
            <Widgets/>
        </Container>
    )
}

export default Home;