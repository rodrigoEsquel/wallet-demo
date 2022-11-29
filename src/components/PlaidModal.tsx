import { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { PlaidLink, LinkExit, LinkSuccess } from 'react-native-plaid-link-sdk';

const address = 'localhost';
const port = '5000';

export default function PlaidModal() {
  const [linkToken, setLinkToken] = useState('');

  const createLinkToken = useCallback(
    async (userDetails: { userId: string }) => {
      const response = await fetch(
        'http://localhost:5000/api/token/create-link-token',
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
      return responseJSON.link_token;
    },
    [setLinkToken],
  );

  const createProcesorToken = useCallback(
    async (successResponse: LinkSuccess) => {
      fetch('https://yourserver.com/exchange_public_token', {
        method: 'POST',
        body: JSON.stringify({
          publicToken: successResponse.publicToken,
          institution: successResponse.metadata.institution,
        }),
      });
    },
    [linkToken],
  );

  useEffect(() => {
    if (linkToken == null) {
      createLinkToken({ userId: '1' });
    }
  }, [linkToken]);

  return (
    <View style={{ flex: 1 }}>
      <PlaidLink
        tokenConfig={{ token: linkToken, noLoadingState: true }}
        onSuccess={(successResponse: LinkSuccess) =>
          createProcesorToken(successResponse)
        }
        onExit={() => {
          setLinkToken('');
        }}>
        <Text>Open Link</Text>
      </PlaidLink>
    </View>
  );
}

