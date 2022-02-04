<template>
  <div class="header">
    <span class="title">TV Shows</span>

    <div class="actions">
      <fa-icon class="search" icon="search" @click="toggleSearch" />
    </div>
  </div>

  <Search v-if="showSearch" @hide="toggleSearch" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Search from './Search.vue';

export default defineComponent({
  components: {
    Search,
  },

  setup() {
    const showSearch = ref();

    const toggleSearch = () => {
      showSearch.value = !showSearch.value;
    };

    return {
      showSearch,
      toggleSearch,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 1.4rem;
  font-weight: bold;
}

.actions {
  font-size: 1.2rem;

  .search {
    cursor: pointer;
  }
}
</style>
