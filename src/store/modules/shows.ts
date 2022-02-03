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

    setItem(state: ShowState, item: Show): void {
      const index = state.items.findIndex((i) => i.id === item.id);

      if (index === -1) {
        state.items.push(item);
      } else {
        state.items[index] = item;
      }
    },
  },

  actions: {
    async fetchItem(
      { commit }: ActionContext<ShowState, RootState>,
      id: number,
    ): Promise<void> {
      const item = await api.shows.show(id);
      commit('setItem', item);
    },

    async fetchItems({
      commit,
    }: ActionContext<ShowState, RootState>): Promise<void> {
      const items = await api.shows.index();
      commit('setItems', items);
    },
  },
};
