import { mount } from '@vue/test-utils';

import componentDefaults from '@/tests/componentDefaults';

import Header from '../Header.vue';

describe('Components - Layout - Header', () => {
  const wrapper = mount(Header, {
    global: componentDefaults,
  });

  const title = wrapper.find('.title');
  const actions = wrapper.find('.actions');

  it('title does render', () => {
    expect(title.exists()).toBe(true);
  });

  it('actions does render', () => {
    expect(actions.exists()).toBe(true);
  });
});
