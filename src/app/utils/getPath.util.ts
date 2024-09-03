import { environment } from '../../environments/environment';

export const getPath = () => {
  return environment.DEV
    ? `http://${document.location.hostname}:3000`
    : // ? `https://rem-backend-two.vercel.app`
      'https://rem-backend-two.vercel.app';
};
