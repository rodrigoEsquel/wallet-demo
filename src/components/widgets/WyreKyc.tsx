import { FunctionComponent, useState } from 'react';
import { Linking, Button, Text, View } from 'react-native';
import { IWyreKyc } from './types';
import { getKycUrl } from '../../services/getKycUrl';
import InAppBrowser from '../InAppBrowser';

const WyreKyc: FunctionComponent<IWyreKyc> = ({ user, ...prop }) => {
  const [urlKyc, setUrlKyc] = useState('');

  const handleMakeKyc = async () => {
    if (user) setUrlKyc(await getKycUrl(user));
  };

  return (
    <View style={{ margin: 3 }}>
      <Button title="Load user KYC URL" onPress={handleMakeKyc} />
      <Text>{JSON.stringify(urlKyc)}</Text>
      <Button
        title="KYC"
        onPress={() => {
          InAppBrowser.openURL(urlKyc);
        }}
      />
    </View>
  );
};

export default WyreKyc;

