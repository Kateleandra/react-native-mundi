import React from 'react';
import { Text } from 'react-native';

import { Container, Top, Logo, Title } from './styles';

// import logo from '../../assets/Group-142.svg'
import { SvgUri } from 'react-native-svg';

export default function Header(){
    return(
        <Container>
          <Top>
            <SvgUri width="200" height="200" source={require('../../assets/Group-142.svg')} />
            <Title>
            </Title>
          </Top>
        </Container>
    )
}