import { createStore } from 'vuex';

import shows, { ShowState } from './shows';

export type RootState = {
  shows: ShowState;
};

export default createStore({
  modules: {
    shows,
  },
});
