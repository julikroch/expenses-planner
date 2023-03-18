import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CheckBudget from './src/components/CheckBudget';
import ExpenseForm from './src/components/ExpenseForm';
import ExpenseList from './src/components/ExpenseList';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import {generateId} from './src/helpers';
import type {ExpenseT} from './src/types';

function App() {
  const [budget, setBudget] = useState('0');
  const [validBudget, setValidBudget] = useState(false);
  const [expenses, setExpenses] = useState<ExpenseT[]>([]);
  const [modal, setModal] = useState(false);
  const [updateExpense, setUpdateExpense] = useState<ExpenseT | undefined>();

  const handleBudget = (submittedBudget: string) => {
    if (Number(submittedBudget)) {
      setValidBudget(true);
    } else {
      Alert.alert('Error', 'Budget can not be 0 or less');
    }
  };

  const handleExpense = (expense: ExpenseT) => {
    if (
      [
        expense.expenseCategory,
        expense.expenseName,
        expense.expenseQuantity,
      ].includes('')
    ) {
      return Alert.alert('Error', 'All fields are mandatory');
    }

    if (expense.id) {
      const updateExpenses = expenses.map(expenseState =>
        expenseState.id === expense.id ? expense : expenseState,
      );
      setExpenses(updateExpenses);
    } else {
      expense.id = generateId();
      expense.expenseDate = Date.now();
      setExpenses([...expenses, expense]);
    }
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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

        {validBudget && (
          <ExpenseList
            expenses={expenses}
            setModal={setModal}
            modal={modal}
            setUpdateExpense={setUpdateExpense}
          />
        )}
      </ScrollView>

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
            setUpdateExpense={setUpdateExpense}
            updateExpense={updateExpense}
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
    minHeight: 400,
  },
  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});

export default App;
