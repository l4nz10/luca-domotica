import groups from '../groups.json';

// Initial state will contain arrays of groups grouped by name
const initialState = {};

Object.values(groups).forEach((item, index) => {
  let group = initialState[item.groupName];
  if (!group) {
    group = [];
    initialState[item.groupName] = group;
  }
  group.push({
    ...item,
    id: index,
    active: false
  });
});

export const groupNames = Object.keys(initialState);

export default initialState;
