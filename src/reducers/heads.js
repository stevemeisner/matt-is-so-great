const heads = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_HEAD_COUNT':
      return Object.assign({}, state, {
        count: action.count
      })
    default:
      return state
  }
}

export default heads