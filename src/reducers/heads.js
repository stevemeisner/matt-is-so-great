const todos = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_HEAD_COUNT':
      return [
        ...state,
        {
          count: action.count
        }
      ]
    default:
      return state
  }
}

export default todos