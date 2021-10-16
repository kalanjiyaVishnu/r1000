export default function loginReducer(state = false, action) {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
}
