import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {styles} from './styles';
import type {NewExpenseT} from './types';

const NewExpense = ({budget, setBudget, handleBudget}: NewExpenseT) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Type your budget</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Example: 300"
        value={budget.toString()}
        onChange={e => setBudget(e.nativeEvent.text)}
      />

      <Pressable style={styles.button} onPress={() => handleBudget(budget)}>
        <Text style={styles.buttonText}>Add Budget</Text>
      </Pressable>
    </View>
  );
};

export default NewExpense;
