import { mount } from '@vue/test-utils';

import show from '@/mocks/show.json';
import componentDefaults from '@/tests/componentDefaults';

import SearchItem from '../SearchItem.vue';

const ITEM = {
  score: 0.9,
  show: show,
};

describe('Components - Layout - SearchItem', () => {
  const wrapper = mount(SearchItem, {
    props: { item: ITEM },
    global: componentDefaults,
  });

  const item = wrapper.find('.item');

  it('item does render', () => {
    expect(item.exists()).toBe(true);
  });

  it('item shows correct name', () => {
    expect(item.text()).toBe(ITEM.show.name);
  });
});
