const grid = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_COLUMN_SIZE':
      var html = document.getElementsByTagName('html')[0];
      html.style.setProperty("--gridMinSize", `${action.size}vw`);

      return Object.assign({}, state, {
        size: action.size
      })
    default:
      return state
  }
}

export default grid