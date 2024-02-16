import { actionCountryDelete } from "../store/actions";

const countryDeleteThunk = (name) => {
  return async (dispatch) => {
    try {
      await actionCountryDelete(name);
      dispatch(actionCountryDelete(name));
    } catch (err) {
      console.log(err);
    }
  };
};

export { countryDeleteThunk };
