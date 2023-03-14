import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import type {ExpenseListT} from './types';

const ExpenseList = ({expenses}: ExpenseListT) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>
      {!expenses.length ? (
        <Text style={styles.noExpenses}>No expenses yet</Text>
      ) : (
        expenses.map(expense => (
          <View key={expense.id}>
            <Text>
              {expense.expenseName}, ${expense.expenseQuantity}
            </Text>
          </View>
        ))
      )}
    </View>
  );
};

export default ExpenseList;
