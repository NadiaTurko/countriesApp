const ACTOIN_COUNTRY_DELETE = `ACTOIN_COUNTRY_DELETE`;
const SET_COUNTRIES = `SET_COUNTRIES`;
const SELECT_COUNTRY = `SET_COUNTRY`;

const actionCountryDelete = (countryId) => ({
  type: ACTOIN_COUNTRY_DELETE,
  payload: countryId,
});

export { ACTOIN_COUNTRY_DELETE, SET_COUNTRIES, SELECT_COUNTRY };

export { actionCountryDelete };
