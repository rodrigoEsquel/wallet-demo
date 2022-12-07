import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { createUser } from '../../services/createUser';
import WyreCheckout from './WyreCheckout';
import WyreKyc from './WyreKyc';

export default function WyreWidget() {
  const [user, setUser] = useState('');
  const handleCreateUser = async () => {
    setUser(await createUser());
  };

  return (
    <View style={{ margin: 3 }}>
      <View style={{ margin: 3 }}>
        <Button title="Create User" onPress={handleCreateUser} />
      </View>
      <TextInput value={user} onChangeText={setUser} />
      <WyreKyc user={user} />
      <WyreCheckout user={user} />
    </View>
  );
}
