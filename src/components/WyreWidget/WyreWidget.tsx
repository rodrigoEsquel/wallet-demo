import { useState } from 'react';
import { Linking, Button, Text, TextInput } from 'react-native';
import { createUser } from '../../services/createUser/createUser';
import { getKycUrl } from '../../services/getKycUrl/getKycUrl';
import InAppBrowser from '../InAppBrowser';

const IP = process.env.IP || '192.168.0.25';
const PORT = process.env.PORT || '5000';

export default function WireWidget() {
  const [user, setUser] = useState('');
  const [urlKyc, setUrlKyc] = useState('');

  const handleCreateUser = async () => {
    setUser(await createUser());
  };

  const handleMakeKyc = async () => {
    if (user) setUrlKyc(await getKycUrl(user));
  };

  return (
    <>
      <Button title="Create User" onPress={handleCreateUser} />
      <TextInput value={user} onChangeText={setUser} />
      <Button title="Load user KYC URL" onPress={handleMakeKyc} />
      <Text>{JSON.stringify(urlKyc)}</Text>
      <Button
        title="KYC"
        onPress={() => {
          Linking.openURL(urlKyc);
        }}
      />
    </>
  );
}

