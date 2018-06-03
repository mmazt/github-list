import { devEnv } from './dev';
import { prodEnv } from './prod';

export const env = () => {
  if (process.env.NODE_ENV === 'prod') {
    return prodEnv();
  } else {
    return devEnv();
  }
};
