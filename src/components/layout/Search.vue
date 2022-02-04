<template>
  <teleport to="body">
    <div class="search" ref="root" @click="handleHide">
      <div class="content" @click.stop>
        <fa-icon class="close" icon="times" @click="handleHide" />

        <input
          class="input"
          :class="{ 'has-items': items.length }"
          ref="input"
          v-model="query"
          @update:modelValue="handleSearch"
        />

        <div class="results" v-if="items.length">
          <SearchItem
            v-for="item in items"
            :key="item.show.id"
            :item="item"
            @click="handleHide"
          />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import debounce from 'lodash.debounce';
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

import api from '@/api';
import { SearchResult } from '@/api/modules/shows';

import SearchItem from './SearchItem.vue';

export default defineComponent({
  components: {
    SearchItem,
  },

  emits: ['hide'],

  setup(props, { emit }) {
    const root = ref<HTMLDivElement>();
    const input = ref<HTMLInputElement>();
    const query = ref('');
    const items = ref<SearchResult[]>([]);

    const handleHide = () => emit('hide');

    const handleSearch = debounce(async () => {
      items.value = await api.shows.search(query.value);
    }, 200);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleHide();
    };

    onMounted(() => {
      disableBodyScroll(root.value as HTMLDivElement);
      document.addEventListener('keydown', handleKeyDown);
      input.value?.focus();
    });

    onBeforeUnmount(() => {
      enableBodyScroll(root.value as HTMLDivElement);
      document.removeEventListener('keydown', handleKeyDown);
    });

    return {
      root,
      input,
      query,
      items,
      handleHide,
      handleSearch,
    };
  },
});
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
}

.content {
  margin: 4rem auto 0;
  max-width: 500px;
  padding: 0 1rem;
}

.close {
  display: block;
  margin-left: auto;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #fff;
}

.input {
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  font-size: 1.5rem;

  &.has-items {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
}

.results {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
