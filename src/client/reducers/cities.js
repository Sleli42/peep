import R from 'ramda';

import { CITIES_LOADED } from '../actions/cities';
import { COMPANY_ADDED } from '../actions/companies';

const addCity = (city, cities) =>
  R.compose(R.sortBy(R.toLower), R.uniq, R.concat(cities))([city]);

const cities = (state = { data: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CITIES_LOADED:
      return { ...state, data: R.concat(state.data, payload) };
    case COMPANY_ADDED: {
      const { city } = payload.address;
      return (city) ? { ...state, data: addCity(city, state.data) } : state;
    }
    default:
      return state;
  }
};

export default cities;
