import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e40af',
    flex: 1,
  },
  form: {
    ...globalStyles.container,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#64748b',
  },
  field: {
    marginVertical: 10,
  },
  label: {
    color: '#64748b',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#3b82f6',
    padding: 10,
    marginTop: 20,
  },
  submitBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  picker: {
    margin: 0,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    flex: 1,
  },
  btnCancel: {
    backgroundColor: '#db2777',
  },
  btnDelete: {
    backgroundColor: 'red',
  },
  btnText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});
