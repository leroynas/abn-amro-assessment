import { createStore } from 'vuex';

import shows, { State as ShowState } from './shows';

export interface State {
  shows: ShowState;
}

export default createStore({
  modules: {
    shows,
  },
});
