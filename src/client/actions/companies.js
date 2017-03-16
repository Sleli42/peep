<<<<<<< HEAD
export const LOAD_COMPANIES = 'EVTX:SERVER:COMPANIES:LOAD';
export const COMPANIES_LOADED = 'COMPANIES:LOADED';

export const loadCompanies = () => (dispatch, getState) => {
  const { companies } = getState();
  console.log('getState: ', getState());
  if (!companies.length) {
=======
import R from 'ramda';

export const LOAD_COMPANIES = 'EvtX:Server:companies:load';
export const COMPANIES_LOADED = 'companies:loaded';
export const ADD_COMPANY = 'EvtX:Server:companies:add';
export const COMPANY_ADDED = 'company:added';
export const COMPANY_UPDATED = 'company:updated';
export const FILTER_COMPANY_LIST = 'filter:company:list';
export const TOGGLE_PREFERRED_FILTER = 'toggle:preferred:companies';
export const SET_PREFERRED_COMPANY = 'EvtX:Server:companies:setPreferred';
export const SORT_COMPANY_LIST = 'sort:company:list';

export const loadCompanies = () => (dispatch, getState) => {
  const { companies } = getState();
  if (R.isEmpty(companies.data)) {
>>>>>>> 8ef54d62051025f327de964e173074dd5e393cbf
    dispatch({
      type: LOAD_COMPANIES,
      replyTo: COMPANIES_LOADED,
    });
  }
};
<<<<<<< HEAD
=======

export const addCompany = company => (dispatch) => {
  dispatch({
    type: ADD_COMPANY,
    payload: company,
    replyTo: COMPANY_ADDED,
  });
};

export const togglePreferred = company => (dispatch) => {
  const { _id, preferred } = company;
  dispatch({
    type: SET_PREFERRED_COMPANY,
    replyTo: COMPANY_UPDATED,
    payload: { _id, preferred: !preferred },
  });
};

export const togglePreferredFilter = () => ({ type: TOGGLE_PREFERRED_FILTER });

export const filterCompanyList = filter => ({
  type: FILTER_COMPANY_LIST,
  filter,
});

export const sortCompanyList = sortBy => ({
  type: SORT_COMPANY_LIST,
  sortBy,
});

export default { loadCompanies, addCompany };
>>>>>>> 8ef54d62051025f327de964e173074dd5e393cbf
