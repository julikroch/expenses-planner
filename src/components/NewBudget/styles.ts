import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3b82f6',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1048a4',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
