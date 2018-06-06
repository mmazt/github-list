import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Input } from 'semantic-ui-react';
import { searchAction } from '../actions/searchActions';

interface IState {
  repo: string;
  term: string;
}

class Search extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { repo: this.props.match.params.repo, term: '' };
  }

  public handleTerm = (e: any) => {
    this.setState({ term: e.currentTarget.value });
  };
  public search = () => {
    this.props.dispatch(searchAction(this.state.term, this.state.repo));
  };
  public handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      this.props.dispatch(searchAction(this.state.term, this.state.repo));
    }
  };

  public back = () => {
    this.props.history.push('/');
  };

  public render() {
    return (
      <Grid container={true} centered={true} padded={true}>
        <Grid.Row>
          <Button onClick={this.back} icon="arrow left" />
          <Input
            value={this.state.term}
            onChange={this.handleTerm}
            onKeyDown={this.handleEnter}
          />
          <Button onClick={this.search}>Search</Button>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect()(Search);
