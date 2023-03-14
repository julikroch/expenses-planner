import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {formatQuantity} from '../../helpers';
import type {CheckBudgetT} from './types';
import {styles} from './styles';

const CheckBudget = ({budget, expenses}: CheckBudgetT) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => Number(expense.expenseQuantity) + total,
      0,
    );

    const totalAvailable = Number(budget) - totalSpent;

    setSpent(totalSpent);
    setAvailable(totalAvailable);
  }, [budget, expenses]);

  return (
    <View style={styles.container}>
      <View style={styles.graphic}>
        <Image
          style={styles.image}
          source={require('../../assets/grafico.jpg')}
        />
      </View>
      <View style={styles.budgetContainer}>
        <Text style={styles.budgetValue}>
          <Text style={styles.budgetLabel}>Budget: </Text>
          {formatQuantity(budget)}
        </Text>
        <Text style={styles.budgetValue}>
          <Text style={styles.budgetLabel}>Available: </Text>
          {formatQuantity(available)}
        </Text>
        <Text style={styles.budgetValue}>
          <Text style={styles.budgetLabel}>Spent: </Text>
          {formatQuantity(spent)}
        </Text>
      </View>
    </View>
  );
};

export default CheckBudget;
