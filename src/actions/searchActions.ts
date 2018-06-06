import { Dispatch } from 'react-redux';

import { completeGet, get } from '../services/Request';
import { REPOS, SEARCH_OPTIONS, SEARCH_TERM } from './actionTypes';

function results(payload: [any]) {
  return {
    payload,
    type: SEARCH_TERM
  };
}

function repos(payload: [any]) {
  return {
    payload,
    type: REPOS
  };
}

function searchOptions(payload: { total: number; incomplete: boolean }) {
  return {
    payload,
    type: SEARCH_OPTIONS
  };
}

export function searchAction(term: string, repo: string) {
  return (dispatch: Dispatch) => {
    if (term) {
      completeGet('/search/commits?q=repo:mmazt/' + repo + '+' + term)
        .then((res: any) => {
          dispatch(
            searchOptions({
              incomplete: res.incomplete_results,
              total: res.total_count
            })
          );
          dispatch(results(res.items));
        })
        .catch(error => {
          throw error;
        });
    } else {
      get('/repos/' + 'mmazt' + '/' + repo + '/commits').then((res: any) => {
        dispatch(results(res.slice(0, 20)));
      });
    }
  };
}
export function getRepos(user: string) {
  return (dispatch: Dispatch) => {
    get('/users/' + user + '/repos').then((res: any) => {
      dispatch(repos(res));
    });
  };
}

export function getCommits(user: string, repo: string) {
  return (dispatch: Dispatch) => {
    get('/repos/' + user + '/' + repo + '/commits').then((res: any) => {
      dispatch(results(res.slice(0, 20)));
    });
  };
}
