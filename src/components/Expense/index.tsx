import React from 'react';
import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';
import {formatDate, formatQuantity} from '../../helpers';
import type {ExpenseComponentT, IconDictionaryT} from './types';
import {styles} from './styles';

const iconDictionary: IconDictionaryT = {
  savings: require('../../assets/icono_ahorro.png'),
  food: require('../../assets/icono_comida.png'),
  home: require('../../assets/icono_casa.png'),
  others: require('../../assets/icono_gastos.png'),
  fun: require('../../assets/icono_ocio.png'),
  health: require('../../assets/icono_salud.png'),
  subscriptions: require('../../assets/icono_suscripciones.png'),
};

const Expense = ({
  expense,
  setModal,
  modal,
  setUpdateExpense,
}: ExpenseComponentT) => {
  const {expenseName, expenseCategory, expenseQuantity, expenseDate} = expense;

  const handleActions = () => {
    setModal(!modal);
    setUpdateExpense(expense);
  };

  return (
    <Pressable onLongPress={handleActions}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={
                iconDictionary[
                  expenseCategory as keyof IconDictionaryT
                ] as ImageSourcePropType
              }
            />
            <View style={styles.textContainer}>
              <Text style={styles.category}>{expenseCategory}</Text>
              <Text style={styles.name}>{expenseName}</Text>
              <Text style={styles.date}>{formatDate(expenseDate)}</Text>
            </View>
          </View>
          <Text style={styles.quaniity}>{formatQuantity(expenseQuantity)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Expense;
