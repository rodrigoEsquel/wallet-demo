import { IUser } from './user.interface';

const IP = process.env.IP || '192.168.0.25';
const PORT = process.env.PORT || '5000';

export const createUser = async (): Promise<string> => {
  const api = `http://${IP}:${PORT}/api/wyre/create-user`;
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      blockchains: ['XLM'],
    }),
  });
  const user = await response.json();
  return user.id;
};

