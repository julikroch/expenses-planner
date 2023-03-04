import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import CheckBudget from './src/components/CheckBudget';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

function App() {
  const [budget, setBudget] = useState('0');
  const [validBudget, setValidBudget] = useState(false);

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
          <CheckBudget budget={budget} />
        )}
      </View>
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
});

export default App;
