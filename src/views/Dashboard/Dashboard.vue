<template>
  <div class="dashboard">
    <Row
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

import { Show, SHOW_GENRES } from '@/api/modules/shows';
import { RootState } from '@/store';

import Row from './components/Row.vue';

type Grouped = {
  [key in SHOW_GENRES]?: Show[];
};

export default defineComponent({
  components: {
    Row,
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
