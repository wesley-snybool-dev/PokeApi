import React from 'react';
import Routes from './src/pages/routes'
import { StatusBar } from 'react-native';


export default function App() {
   return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="red"> </StatusBar>
    <Routes/>
  </>
    
   );

}