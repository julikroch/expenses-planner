import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './styles';

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Expenses Planner</Text>
    </SafeAreaView>
  );
};

export default Header;
