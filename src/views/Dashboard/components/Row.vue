<template>
  <span class="title">{{ title }}</span>

  <div class="row">
    <Card
      v-for="item in sorted"
      :key="item.id"
      :image="item.image.medium"
      :rating="item.rating.average"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';

import { Show } from '@/api/modules/shows';

import Card from '../components/Card.vue';

export default defineComponent({
  components: {
    Card,
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

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  .card:not(:last-child) {
    margin-right: 1rem;
  }
}

.title {
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
