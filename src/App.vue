<template>
  <Header />

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from '@/components/layout/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>
