import { mount } from '@vue/test-utils';

import show from '@/mocks/show.json';
import componentDefaults from '@/tests/componentDefaults';

import ShowCard from '../ShowCard.vue';

const ITEM = show;

describe('Views - Dashboard - ShowCard', () => {
  const wrapper = mount(ShowCard, {
    props: { item: ITEM },
    global: componentDefaults,
  });

  const card = wrapper.find('.card');
  const image = wrapper.find('.image');
  const meta = wrapper.find('.meta');

  it('card does render', () => {
    expect(card.exists()).toBe(true);
  });

  it('image does render', () => {
    expect(image.exists()).toBe(true);
  });

  it('meta shows correct rating', () => {
    expect(meta.text()).toContain(ITEM.rating.average);
  });
});
