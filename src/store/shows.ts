import { ActionContext } from 'vuex';

import api from '@/api';
import { Show } from '@/api/modules/shows';

import { State as RootState } from './';

export interface State {
  items: Show[];
}

export default {
  namespaced: true,

  state: {
    items: [],
  },

  mutations: {
    setItems(state: State, items: Show[]): void {
      state.items = items;
    },
  },

  actions: {
    async fetchItems({
      commit,
    }: ActionContext<State, RootState>): Promise<void> {
      const items = await api.shows.index();
      commit('setItems', items);
    },
  },

  getters: {},
};
