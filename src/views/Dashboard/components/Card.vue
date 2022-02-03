<template>
  <div class="card">
    <img class="image" :src="image" />

    <div class="meta">
      <fa-icon icon="star" />
      {{ rating }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    console.log(props.image);
  },
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 0.25rem;
  min-width: 10rem;
  overflow: hidden;
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
