import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';

const NewExpense = () => {
  return (
    <View style={styles.container}>
      <Text>Type your budget</Text>

      <Pressable>
        <Text>Add Budget</Text>
      </Pressable>
    </View>
  );
};

export default NewExpense;
