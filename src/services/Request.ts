import axios from 'axios';
import { env } from '../envVariables/getEnv';

export const get = (endpoint: string) => {
  const url = env().api + endpoint;
  return new Promise((resolve, reject) => {
    axios.get(url).then(
      res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.status);
        }
      },
      err => {
        reject(err);
      }
    );
  });
};
export const completeGet = (endpoint: string) => {
  const url = env().api + endpoint;
  return new Promise((resolve, reject) => {
    axios({
      headers: { Accept: 'application/vnd.github.cloak-preview' },
      method: 'get',
      url
    }).then(
      res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.status);
        }
      },
      err => {
        reject(err);
      }
    );
  });
};
