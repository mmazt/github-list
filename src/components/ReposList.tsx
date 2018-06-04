import * as React from 'react';
import { Link } from 'react-router-dom';
import { get } from '../services/Request';

interface IState {
  data: any;
}

class ReposList extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { data: [] };
  }
  public componentWillMount() {
    get('/users/mmazt/repos').then((res: any) => {
      const result = res.map((item: any) => {
        return (
          <div key={item.id}>
            <Link to={'/' + item.name}>
              <div>
                Name: {item.name} Created: {item.created_at} Language:{' '}
                {item.language}
              </div>
            </Link>
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

export default ReposList;
