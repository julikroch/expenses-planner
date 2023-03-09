import React, {useState} from 'react';
import {Alert, Image, Modal, Pressable, StyleSheet, View} from 'react-native';
import CheckBudget from './src/components/CheckBudget';
import ExpenseForm from './src/components/ExpenseForm';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

function App() {
  const [budget, setBudget] = useState('0');
  const [validBudget, setValidBudget] = useState(false);
  const [expenses] = useState([]);
  const [modal, setModal] = useState(false);

  const handleBudget = (submittedBudget: string) => {
    if (Number(submittedBudget)) {
      setValidBudget(true);
    } else {
      Alert.alert('Error', 'Budget can not be 0 or less');
    }
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

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <ExpenseForm setModal={setModal} modal={modal} />
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
    top: 120,
    right: 20,
  },
});

export default App;
