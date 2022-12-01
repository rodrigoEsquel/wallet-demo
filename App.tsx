import { StyleSheet, Text, View } from 'react-native';
import PlaidModal from './src/components/PlaidModal';
import SumsubButton from './src/components/SumsubButton';

export default function App() {
  return (
    <View style={styles.container}>
      <SumsubButton />
      <PlaidModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
