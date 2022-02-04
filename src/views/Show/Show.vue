<template>
  <div class="show">
    <router-link class="back" :to="{ name: ROUTE_DASHBOARD }">
      <fa-icon icon="arrow-left" />
    </router-link>

    <Content :item="item" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import { ROUTE_DASHBOARD } from '@/router';
import { RootState } from '@/store';

import Content from './components/Content.vue';

export default defineComponent({
  components: {
    Content,
  },

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
      ROUTE_DASHBOARD,
      item,
    };
  },
});
</script>

<style lang="scss" scoped>
.show {
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.back {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

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
