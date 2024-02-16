import { ACTION_COUNTRY_DELETE, ACTION_COUNTRY_SET } from "./actions";

import { INITIAL_STATE } from "./data";

// const INITIAL_STATE = {
//   countries: [],
// };
const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_COUNTRY_DELETE:
      return {
        ...state,
        countries: state.countries.filter(
          (item) => item.name.official !== payload
        ),
      };
    case ACTION_COUNTRY_SET:
      return { ...state, countries: payload };
    default:
      return state;
  }
};

export default reducer;
