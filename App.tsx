import { StyleSheet, View } from 'react-native';

import WyreWidget from './src/components/widgets/WyreWidget';
import PlaidModal from './src/components/widgets/PlaidModal';

export default function App() {
  return (
    <View style={styles.container}>
      <WyreWidget />
      <PlaidModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#effeff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
