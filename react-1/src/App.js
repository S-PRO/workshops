import React, { Component } from 'react';

import { ListItem, TextForm } from './components';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [
        { name: 'foo' },
        { name: 'bar' }
      ]
    };
  }

  handleDeleteClick = index => this.setState({
    list: this.state.list.filter((l, i) => i !== index)
  });

  handleSubmit = name => this.setState({
    list: [...this.state.list, { name }]
  });

  render() {
    const { list } = this.state;

    return (
      <div>
        <ul>
          {list.map((l, i) => (
            <ListItem
              key={i}
              text={l.name}
              onRemoveClick={this.handleDeleteClick.bind(this, i)}
            />
          ))}
        </ul>
        <TextForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
