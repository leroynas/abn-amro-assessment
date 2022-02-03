<template>
  <span class="title">{{ title.replace('-', ' ') }}</span>

  <div class="row">
    <ShowCard v-for="item in sorted" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';

import { Show } from '@/api/modules/shows';

import ShowCard from './ShowCard.vue';

export default defineComponent({
  components: {
    ShowCard,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array as () => Show[],
      required: true,
    },
  },

  setup(props) {
    const sorted = computed(() =>
      [...props.items].sort((a, b) => b.rating.average - a.rating.average),
    );

    return {
      sorted,
    };
  },
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  overflow-y: auto;
  padding: 0.5rem 0;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  .card:not(:last-child) {
    margin-right: 1rem;
  }
}

.title {
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
