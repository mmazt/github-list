import * as React from 'react';
import { get } from '../services/Request';

interface IState {
  repo: string;
  data: any;
}

class Repo extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { repo: this.props.match.params.repo, data: [] };
  }
  public componentWillMount() {
    get('/repos/mmazt/' + this.state.repo + '/commits').then((res: any) => {
      const result = res.map((item: any) => {
        return (
          <div key={item.sha}>
            Author: {item.commit.author.name}
            Description: {item.commit.message} Created:{' '}
            {item.commit.author.date}
          </div>
        );
      });
      this.setState({ data: result });
    });
  }
  public render() {
    return <div>{this.state.data}</div>;
  }
}

export default Repo;
