import React from 'react';
import {Text, View} from 'react-native';
import Expense from '../Expense';
import {styles} from './styles';
import type {ExpenseListT} from './types';

const ExpenseList = ({expenses}: ExpenseListT) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>
      {!expenses.length ? (
        <Text style={styles.noExpenses}>No expenses yet</Text>
      ) : (
        expenses.map(expense => <Expense key={expense.id} expense={expense} />)
      )}
    </View>
  );
};

export default ExpenseList;
