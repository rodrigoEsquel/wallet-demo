const IP = '192.168.0.191';
const PORT = '5000';

export const getCheckoutUrl = async (userId: string): Promise<string> => {
  const api = `http://${IP}:${PORT}/api/wyre/checkout`;
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner: userId,
      }),
    });
    const data = await response.json();
    return data.url;
  } catch (error) {
    throw new Error('Fetch failed to ' + IP + ':' + PORT);
  }
};
