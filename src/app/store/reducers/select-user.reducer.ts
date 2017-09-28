import { SELECT_USER } from '../actions';

const updateApiSettings = (state, action) => {

}

export const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_USER:
    const selectedUser = action.selectedUser;
    return selectedUser;
    default:
    return { ...state };
  }
}