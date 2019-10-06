import React from 'react';
import { connect } from 'react-redux';
import GroupElement from '../GroupElement';

const GroupList = ({ items }) => (
  <div className="group-list">
    {items.map(item => (
      <GroupElement key={item.id} item={item} />
    ))}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  items: state.groups[ownProps.group]
});

export default connect(mapStateToProps)(GroupList);
