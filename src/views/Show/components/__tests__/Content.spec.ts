import { mount } from '@vue/test-utils';

import show from '@/mocks/show.json';
import componentDefaults from '@/tests/componentDefaults';

import Content from '../Content.vue';

const ITEM = show;

describe('Views - Show - Content', () => {
  const wrapper = mount(Content, {
    props: { item: ITEM },
    global: componentDefaults,
  });

  const content = wrapper.find('.content');
  const image = wrapper.find('.image');
  const title = wrapper.find('.title');
  const summary = wrapper.find('.summary');

  it('content does render', () => {
    expect(content.exists()).toBe(true);
  });

  it('image does render', () => {
    expect(image.exists()).toBe(true);
  });

  it('title contains correct text', () => {
    expect(title.text()).toBe(ITEM.name);
  });

  it('summary contains correct text', () => {
    expect(summary.html()).toContain(ITEM.summary);
  });
});
