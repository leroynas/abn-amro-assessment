<template>
  <router-link
    class="item"
    :to="{ name: ROUTE_SHOW, params: { id: item.show.id } }"
    @click="handleClick"
  >
    {{ item.show.name }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { SearchResult } from '@/api/modules/shows';
import { ROUTE_SHOW } from '@/router';

export default defineComponent({
  props: {
    item: {
      type: Object as () => SearchResult,
      required: true,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    const handleClick = () => emit('click');

    return {
      ROUTE_SHOW,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
</style>
