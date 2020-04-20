import React from 'react';

import Routes from './routes';
import { StatusBar } from 'react-native';

const App = () =>  (

  <>
    <StatusBar barStyle="light-content" backgroundColor="#01b5e8" />
    <Routes />
  </>
)
export default App;