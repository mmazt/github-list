import * as React from 'react';
import { completeGet } from '../services/Request';

interface IState {
  repo: string;
  term: string;
}

class Search extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { repo: this.props.match.params.repo, term: '' };
  }
  public componentWillMount() {
    // get('/repos/mmazt/' + this.state.repo + '/commits').then((res: any) => {
    //   const result = res.map((item: any) => {
    //     return (
    //       <div key={item.sha}>
    //         Author: {item.commit.author.name}
    //         Description: {item.commit.message} Created:{' '}
    //         {item.commit.author.date}
    //       </div>
    //     );
    //   });
    //   this.setState({ data: result });
    // });
  }
  public handleTerm = (e: any) => {
    this.setState({ term: e.currentTarget.value });
  };
  public search = () => {
    completeGet(
      '/search/commits?q=repo:mmazt/' + this.state.repo + '+' + this.state.term
    ).then((res: any) => {
      console.log(res);
    });
  };
  public render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.handleTerm} />
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}

export default Search;
