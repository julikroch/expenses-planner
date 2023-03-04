import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  graphic: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  budgetContainer: {
    marginTop: 50,
  },
  budgetValue: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  budgetLabel: {
    fontWeight: '700',
    color: '#3b82f6',
  },
});
