import React, {useState} from 'react';
import {Alert, Image, Modal, Pressable, StyleSheet, View} from 'react-native';
import CheckBudget from './src/components/CheckBudget';
import ExpenseForm from './src/components/ExpenseForm';
import ExpenseList from './src/components/ExpenseList';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import {generateId} from './src/helpers';
import type {Expense} from './src/types';

function App() {
  const [budget, setBudget] = useState('0');
  const [validBudget, setValidBudget] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [modal, setModal] = useState(false);

  const handleBudget = (submittedBudget: string) => {
    if (Number(submittedBudget)) {
      setValidBudget(true);
    } else {
      Alert.alert('Error', 'Budget can not be 0 or less');
    }
  };

  const handleExpense = (expense: Expense) => {
    if (Object.values(expense).includes('')) {
      return Alert.alert('Error', 'All fields are mandatory');
    }

    expense.id = generateId();
    setExpenses([...expenses, expense]);
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {!validBudget ? (
          <NewBudget
            budget={budget}
            setBudget={setBudget}
            handleBudget={handleBudget}
          />
        ) : (
          <CheckBudget budget={budget} expenses={expenses} />
        )}
      </View>

      {validBudget && <ExpenseList expenses={expenses} />}

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <ExpenseForm
            setModal={setModal}
            modal={modal}
            handleExpense={handleExpense}
          />
        </Modal>
      )}

      {validBudget && (
        <Pressable onPress={() => setModal(!modal)}>
          <Image
            style={styles.image}
            source={require('./src/assets/nuevo-gasto.png')}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3b82f6',
  },
  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default App;
