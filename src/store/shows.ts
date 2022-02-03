import { ActionContext } from 'vuex';

import api from '@/api';
import { Show } from '@/api/modules/shows';
import { RootState } from '@/store';

export type ShowState = {
  items: Show[];
};

export default {
  namespaced: true,

  state: {
    items: [],
  },

  mutations: {
    setItems(state: ShowState, items: Show[]): void {
      state.items = items;
    },
  },

  actions: {
    async fetchItems({
      commit,
    }: ActionContext<ShowState, RootState>): Promise<void> {
      const items = await api.shows.index();
      commit('setItems', items);
    },
  },
};
