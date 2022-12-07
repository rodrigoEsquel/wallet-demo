import { useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import { PlaidLink, LinkSuccess } from 'react-native-plaid-link-sdk';

const IP = process.env.IP || '192.168.0.25';
const PORT = process.env.PORT || '5000';

export default function PlaidModal() {
  const [linkToken, setLinkToken] = useState('empty token');
  const [steps, setSteps] = useState<{ message: string }[]>([]);

  const addStep = (newStep: string) => {
    setSteps((prev) => [...prev, { message: newStep }]);
  };

  const createLinkToken = async (userDetails: { userId: string }) => {
    addStep('Fetch Link Token from ' + IP + ':' + PORT);
    try {
      const response = await fetch(
        `http://${IP}:${PORT}/api/token/create-link-token`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        },
      );
      const responseJSON = await response.json();
      addStep('token recieved: ' + responseJSON.link_token);
      setLinkToken(responseJSON.link_token);
    } catch (error) {
      addStep('error fetchnig the backend');
    }
    //return responseJSON.link_token;
  };

  const createProcesorToken = async (successResponse: LinkSuccess) => {
    addStep('Fetch Processor Token');
    try {
      fetch(`http://${IP}:${PORT}/api/token/create-processor-token`, {
        method: 'POST',
        body: JSON.stringify({
          publicToken: successResponse.publicToken,
          institution: successResponse.metadata.institution,
        }),
      });
      addStep('Processor Token sended');
    } catch (error) {
      addStep('error fetchnig the backend');
    }
  };
  /*
  useEffect(() => {
    if (linkToken == null) {
      createLinkToken({ userId: '1' });
      console.log('link_token', linkToken);
    }
  }, []);*/

  return (
    <View>
      <Button
        title="Get Token"
        onPress={async () => await createLinkToken({ userId: '1' })}
      />
      <Button title="Clear Log" onPress={() => setSteps([])} />
      <Text>{linkToken}</Text>
      <PlaidLink
        tokenConfig={{
          token: linkToken,
          noLoadingState: false,
        }}
        onPress={() => addStep('Link Pressed')}
        onSuccess={(success: LinkSuccess) => {
          createProcesorToken(success);
        }}
        onExit={(exit) => {
          setLinkToken('empty token');
          addStep('Link Exited');
        }}>
        <Text
          style={{
            backgroundColor: 'red',
            textAlign: 'center',
          }}>
          Select Account
        </Text>
      </PlaidLink>
      <FlatList
        data={steps}
        renderItem={({ item }) => <Text>{item.message} </Text>}
      />
    </View>
  );
}
