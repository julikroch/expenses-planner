import React from 'react';
import {Image, Text, View} from 'react-native';
import {formatQuantity} from '../../helpers';
import {ExpenseT} from '../../types';
import {styles} from './styles';

type ExpenseComponentT = {
  expense: ExpenseT;
};

const iconDictionary: {
  savings: string;
  food: string;
  home: string;
  others: string;
  fun: string;
  health: string;
  subscriptions: string;
} = {
  savings: require('../../assets/icono_ahorro.png'),
  food: require('../../assets/icono_comida.png'),
  home: require('../../assets/icono_casa.png'),
  others: require('../../assets/icono_gastos.png'),
  fun: require('../../assets/icono_ocio.png'),
  health: require('../../assets/icono_salud.png'),
  subscriptions: require('../../assets/icono_suscripciones.png'),
};

const Expense = ({expense}: ExpenseComponentT) => {
  const {expenseName, expenseCategory, expenseQuantity} = expense;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={iconDictionary[expenseCategory]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.category}>{expenseCategory}</Text>
            <Text style={styles.name}>{expenseName}</Text>
          </View>
        </View>
        <Text style={styles.quaniity}>{formatQuantity(expenseQuantity)}</Text>
      </View>
    </View>
  );
};

export default Expense;
