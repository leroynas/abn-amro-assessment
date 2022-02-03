<template>
  <div class="dashboard">
    <ShowRow
      v-for="category in categories"
      :key="category"
      :title="category"
      :items="grouped[category]"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

import { Show } from '@/api/modules/shows';
import { RootState } from '@/store';

import ShowRow from './components/ShowRow.vue';

type Grouped = {
  [key: string]: Show[];
};

export default defineComponent({
  components: {
    ShowRow,
  },

  setup() {
    const store = useStore<RootState>();

    const grouped = computed(() => {
      const items: Grouped = {};

      store.state.shows.items.forEach((item) => {
        item.genres.forEach((genre) => {
          const current = items[genre] || [];
          items[genre] = [...current, item];
        });
      });

      return items;
    });

    const categories = computed(() => Object.keys(grouped.value));

    onMounted(() => {
      store.dispatch('shows/fetchItems');
    });

    return {
      grouped,
      categories,
    };
  },
});
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 1rem;
}
</style>
