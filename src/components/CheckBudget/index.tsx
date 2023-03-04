import React from 'react';
import {Image, Text, View} from 'react-native';
import {formatQuantity} from '../../helpers';
import {styles} from './styles';

export type CheckBudgetT = {
  budget: string;
};

const CheckBudget = ({budget}: CheckBudgetT) => {
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
          {formatQuantity(budget)}
        </Text>
        <Text style={styles.budgetValue}>
          <Text style={styles.budgetLabel}>Spent: </Text>
          {formatQuantity(budget)}
        </Text>
      </View>
    </View>
  );
};

export default CheckBudget;
