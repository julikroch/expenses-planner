import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  category: {
    color: '#94a3b8',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    color: '#64748b',
    marginBottom: 5,
  },
  quaniity: {
    fontSize: 20,
    fontWeight: '700',
  },
  date: {
    fontWeight: '700',
    color: '#db2777',
  },
});
