<template>
  <router-link
    class="card"
    tag="div"
    :to="{ name: ROUTE_SHOW, params: { id: item.id } }"
  >
    <img class="image" :src="item.image.medium" />

    <div class="meta">
      <fa-icon icon="star" />
      {{ item.rating.average || '?' }}
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

import { Show } from '@/api/modules/shows';
import { ROUTE_SHOW } from '@/router';

export default defineComponent({
  props: {
    item: {
      type: Object as () => Show,
      required: true,
    },
  },

  setup() {
    return {
      ROUTE_SHOW,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 0.25rem;
  min-width: 10rem;
  overflow: hidden;
  transition: all 150ms;

  &:hover {
    transform: scale(1.05);
  }
}

.image {
  display: block;
  width: 100%;
}

.meta {
  font-size: 0.825rem;
  margin-left: auto;
  padding: 0.5rem;
  background-color: #333;
  color: #fff;
}
</style>
