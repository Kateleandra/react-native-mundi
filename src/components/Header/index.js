import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import logo from './../../assests/Group-142.svg'
export default function Header(){
    return(
        <Container>
          <Top>
            <Logo source={logo} />
            <Title></Title>
          </Top>
        </Container>
    )
}