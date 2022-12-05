import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Linking } from 'react-native';
import PlaidModal from './src/components/PlaidModal';
import WireWidget from './src/components/WyreWidget/WyreWidget';
import InAppBrowser from './src/components/InAppBrowser';

export default function App() {
  return (
    <View style={styles.container}>
      <WireWidget />
      <PlaidModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
