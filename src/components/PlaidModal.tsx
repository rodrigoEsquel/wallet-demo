import { useState, useEffect, useCallback } from 'react';
import { View, Button, Text } from 'react-native';
import { PlaidLink, LinkExit, LinkSuccess } from 'react-native-plaid-link-sdk';

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '5000';

export default function PlaidModal() {
  const [linkToken, setLinkToken] = useState('');

  const createLinkToken = async (userDetails: { userId: string }) => {
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
    console.log('response', responseJSON.link_token);
    setLinkToken(responseJSON.link_token);
    //return responseJSON.link_token;
  };

  const createProcesorToken = useCallback(
    async (successResponse: LinkSuccess) => {
      fetch(`http://${IP}:${PORT}/api/token/create-processor-token`, {
        method: 'POST',
        body: JSON.stringify({
          publicToken: successResponse.publicToken,
          institution: successResponse.metadata.institution,
        }),
      });
    },
    [linkToken],
  );
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
        onPress={() => createLinkToken({ userId: '1' })}
      />
      <Text>{linkToken}</Text>
      <PlaidLink
        tokenConfig={{
          token: linkToken,
          noLoadingState: false,
        }}
        onPress={() => console.log(linkToken)}
        onSuccess={(success: LinkSuccess) => {
          console.log(success);
          createProcesorToken(success);
        }}
        onExit={(exit) => {
          setLinkToken('');
          console.log(exit);
        }}>
        <Text>Select Account</Text>
      </PlaidLink>
    </View>
  );
}

