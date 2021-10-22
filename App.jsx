import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEdisScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';



export default function App() {
  return (
    <MemoListScreen />
    );
}


