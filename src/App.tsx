import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Repo from './components/Repo';
import ReposList from './components/ReposList';
import Search from './components/Search';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={ReposList} />
        <Route>
          <div>
            <Route exact={true} path="/:repo" component={Search} />
            <Route exact={true} path="/:repo" component={Repo} />
          </div>
        </Route>
      </Switch>
    );
  }
}

export default App;
