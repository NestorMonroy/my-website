import { en as state } from "../../languages/en";

const initialState = {
  state,
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUES_LANGUAGE": {
      return {
        ...state,
      };
    }
    case "RECEIVE_LANGUAGE": {
      return {
        ...state,
        state: action.content,
      };
    }
    case "RECEIVE_LANGUAGE_ERROR": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
