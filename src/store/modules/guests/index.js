import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  totalGuests: 0,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
