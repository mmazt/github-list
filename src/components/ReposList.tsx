import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, List } from 'semantic-ui-react';

import { getRepos } from '../actions/searchActions';
import { formatDate } from '../services/Date';

class ReposList extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.props.dispatch(getRepos('mmazt'));
  }

  public selectRepo = (e: any, d: any) => {
    this.props.history.push('/' + d.value);
  };

  public transformResults(results: any) {
    if (results && results.length > 0) {
      const transform = results.map((item: any) => {
        return (
          <List.Item key={item.id} value={item.name} onClick={this.selectRepo}>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{item.name}</List.Header>
              <List.Description as="a">
                <span className="container">
                  <strong>Language:</strong>{' '}
                  {item.language ? item.language : 'unknown'}
                  <br />
                  <strong>Created:</strong>
                  {formatDate(item.created_at)}
                </span>
              </List.Description>
            </List.Content>
          </List.Item>
        );
      });
      return transform;
    } else {
      return '';
    }
  }
  public render() {
    return (
      <Grid padded={true} container={true} centered={true}>
        <Grid.Row>
          <Header>Lista de Repositórios (mmazt)</Header>
        </Grid.Row>
        <Grid.Row>
          <List relaxed={true} selection={true} size="large">
            {this.transformResults(this.props.results)}
          </List>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { results: state.reposReducer.list };
};

export default connect(mapStateToProps)(ReposList);
