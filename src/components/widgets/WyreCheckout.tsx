import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { FunctionComponent, useState, ReactHTML } from 'react';
import { Linking, Button, Text, View } from 'react-native';
import { getCheckoutUrl } from '../../services/getCheckoutUrl';
import InAppBrowser from '../InAppBrowser';
import { IWyreCheckout } from './types';

const WyreCheckout: FunctionComponent<IWyreCheckout> = ({ user, ...prop }) => {
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const handleGetCheckout = async () => {
    if (user) setCheckoutUrl(await getCheckoutUrl(user));
  };

  return (
    <View style={{ margin: 3 }}>
      <Button title="Load Checkout URL" onPress={handleGetCheckout} />
      <Text>{JSON.stringify(checkoutUrl)}</Text>
      <Button
        title="Checkout"
        onPress={() => {
          Linking.openURL(checkoutUrl);
        }}
      />
    </View>
  );
};

export default WyreCheckout;

