import { environment } from '../../environments/environment';

export const getPath = () => {
  return environment.DEV
    ? `http://${document.location.hostname}:3000`
    : 'http://localhost:3000';
};
