const IP = process.env.IP || '192.168.0.25';
const PORT = process.env.PORT || '5000';

export const getKycUrl = async (userId: string): Promise<string> => {
  const api = `http://${IP}:${PORT}/api/wyre/onboarding`;
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
      }),
    });
    const url = await response.json();
    return url.onboardingUrl;
  } catch (error) {
    throw new Error('Fetch failed to ' + IP + ':' + PORT);
  }
};
