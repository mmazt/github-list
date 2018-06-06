import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, List } from 'semantic-ui-react';
import { getCommits } from '../actions/searchActions';
import { formatDate } from '../services/Date';

class Repo extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.props.dispatch(getCommits('mmazt', this.props.match.params.repo));
  }

  public transformResults(results: any) {
    if (results && results.length > 0) {
      const transform = results.map((item: any) => {
        return (
          <List.Item key={item.sha}>
            <List.Content>
              <List.Header>
                <a href={item.html_url}>{item.sha}</a>
              </List.Header>
              <List.Description>
                <strong>Description:</strong> {item.commit.message}
                <br />
                <strong>Author:</strong> {item.commit.author.name}
                <br />
                <strong>Created:</strong> {formatDate(item.commit.author.date)}
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
      <Grid container={true} centered={true} padded={true}>
        <List relaxed={true} size="medium" divided={true}>
          {this.transformResults(this.props.results)}{' '}
        </List>
      </Grid>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(Repo);
