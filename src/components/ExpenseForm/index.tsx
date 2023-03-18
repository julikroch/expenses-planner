import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import type {ExpenseFormT} from './types';

const ExpenseForm = ({
  modal,
  setModal,
  handleExpense,
  setUpdateExpense,
  updateExpense,
}: ExpenseFormT) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseQuantity, setExpenseQuantity] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState(0);

  useEffect(() => {
    if (updateExpense?.expenseName) {
      setExpenseName(updateExpense.expenseName);
      setExpenseQuantity(updateExpense.expenseQuantity);
      setExpenseCategory(updateExpense.expenseCategory);
      setId(updateExpense.id!);
      setDate(updateExpense.expenseDate);
    }
  }, [updateExpense]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          style={styles.cancelBtn}
          onPress={() => {
            setModal(!modal);
            setUpdateExpense(undefined);
          }}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>
          {updateExpense?.expenseName ? 'Edit Expense' : ' New Expense'}
        </Text>
        <View style={styles.field}>
          <Text style={styles.label}>Expense Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Expense name. ex. food"
            value={expenseName}
            onChangeText={setExpenseName}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Expense Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="Expense quantity. ex. 300"
            keyboardType="numeric"
            value={expenseQuantity}
            onChangeText={setExpenseQuantity}
          />
        </View>
        <View>
          <Text style={styles.label}>Expense type</Text>
          <Picker
            style={styles.picker}
            selectedValue={expenseCategory}
            onValueChange={val => {
              setExpenseCategory(val);
            }}>
            <Picker.Item label="Select" value={''} />
            <Picker.Item label="Savings" value={'savings'} />
            <Picker.Item label="Home" value={'home'} />
            <Picker.Item label="Food" value={'food'} />
            <Picker.Item label="Others" value={'others'} />
            <Picker.Item label="Fun" value={'fun'} />
            <Picker.Item label="Health" value={'health'} />
            <Picker.Item label="Subscriptions" value={'subscriptions'} />
          </Picker>
        </View>
        <Pressable
          style={styles.submitBtn}
          onPress={() =>
            handleExpense({
              expenseName,
              expenseQuantity,
              expenseCategory,
              id,
              date,
            })
          }>
          <Text style={styles.submitBtnText}>
            {updateExpense?.expenseName ? 'Save Expense' : 'Add expense'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ExpenseForm;
