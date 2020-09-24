import * as d from "../actions/actions";
import _ from "lodash";

export const defaultState = {
  username: null,
  name: null,
  address: null,
  phoneno: null,
  role: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case d.UPDATE_FIELDS: {
        if(action.target === 'username'){
            state = {...state, ...{username: action.value}}
        }
        return state;
    }
    default:
      return state;
  }
};

export default reducer;