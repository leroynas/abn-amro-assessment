import { createStore } from 'vuex';

import shows, { ShowState } from './modules/shows';

export type RootState = {
  shows: ShowState;
};

export default createStore({
  modules: {
    shows,
  },
});
