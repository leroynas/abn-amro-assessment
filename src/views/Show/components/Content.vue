<template>
  <div class="content" v-if="item">
    <img class="image" :src="item.image.medium" />

    <div>
      <span class="title">{{ item.name }}</span>
      <div class="summary" v-html="item.summary" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Show } from '@/api/modules/shows';

export default defineComponent({
  props: {
    item: {
      type: Object as () => Show,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
}

.image {
  width: 13rem;
  height: auto;
  margin: 0 auto 2rem;

  @media only screen and (min-width: 640px) {
    margin-right: 2rem;
  }
}

.title {
  font-size: 3rem;
  font-weight: bold;
}
</style>
