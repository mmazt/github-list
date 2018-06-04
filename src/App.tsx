import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Repo from './components/Repo';
import ReposList from './components/ReposList';
import Search from './components/Search';

import { get } from './services/Request';

class App extends React.Component {
  public componentWillMount() {
    get('/repos/mmazt/github-list/commits').then(res => {
      console.log(res);
    });
  }
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={ReposList} />
        <Route>
          <div>
            <Route exact={true} path="/:repo" component={Repo} />
            <Route exact={true} path="/:repo" component={Search} />
          </div>
        </Route>
      </Switch>

      //  <div className="App">
      //     <Repos />
      //   </div>
    );
  }
}

export default App;
