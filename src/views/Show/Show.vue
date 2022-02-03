<template>
  <div class="show" v-if="item">
    <img class="image" :src="item.image.medium" />

    <div class="content">
      <span class="title">{{ item.name }}</span>
      <div class="summary" v-html="item.summary" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import { RootState } from '@/store';

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore<RootState>();

    const item = computed(() =>
      store.state.shows.items.find(
        (item) => item.id === parseInt(route.params.id as string, 10),
      ),
    );

    const fetchItem = () => {
      if (!item.value) {
        store.dispatch('shows/fetchItem', route.params.id);
      }
    };

    onMounted(fetchItem);
    watch(route, fetchItem);

    return {
      item,
    };
  },
});
</script>

<style lang="scss" scoped>
.show {
  display: flex;
  align-items: flex-start;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem 0;
}

.image {
  width: 13rem;
  height: auto;
}

.content {
  margin-left: 2rem;
}

.title {
  font-size: 3rem;
  font-weight: bold;
}
</style>
