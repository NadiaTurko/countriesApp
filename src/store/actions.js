// action types
const ACTION_COUNTRY_DELETE = `ACTION_COUNTRY_DELETE`;
const ACTION_COUNTRY_SET = `ACTION_COUNTRY_SET`;

// actions
const actionCountryDelete = (payload) => ({
  type: ACTION_COUNTRY_DELETE,
  payload,
});

const actionCountrySet = (list) => {
  return { type: ACTION_COUNTRY_SET, payload: list };
};

export { ACTION_COUNTRY_DELETE, ACTION_COUNTRY_SET };
export { actionCountryDelete, actionCountrySet };
