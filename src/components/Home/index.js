import React from 'react';

import { groupNames } from '../../redux/initialState';

import GroupList from '../GroupList';

class Home extends React.Component {
  state = {
    selected: groupNames[0]
  };

  handleGroupSelection = event =>
    this.setState({ selected: event.target.value });

  render() {
    const { selected } = this.state;
    return (
      <div className="home">
        <select
          className="group-select"
          value={selected}
          onChange={this.handleGroupSelection}
        >
          {groupNames.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <GroupList group={selected} />
      </div>
    );
  }
}

export default Home;
