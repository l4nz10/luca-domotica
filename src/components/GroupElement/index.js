import React from 'react';

import { connect } from 'react-redux';
import { setActive } from '../../redux/actions';

class GroupElement extends React.Component {
  render() {
    const { item } = this.props;
    const checkboxId = `checkbox-${item.id}`;
    return (
      <div className="group-element">
        <label htmlFor={checkboxId}>{item.description}</label>
        <input
          type="checkbox"
          id={checkboxId}
          name="active"
          checked={item.active}
          onChange={this.props.toggleActive}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleActive: () =>
    dispatch(
      setActive(
        ownProps.item.groupName,
        ownProps.item.description,
        !ownProps.item.active
      )
    )
});

export default connect(
  null,
  mapDispatchToProps
)(GroupElement);
