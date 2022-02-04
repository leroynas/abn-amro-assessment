import { mount } from '@vue/test-utils';

import show from '@/mocks/show.json';
import componentDefaults from '@/tests/componentDefaults';

import ShowRow from '../ShowRow.vue';

const TITLE = 'Comedy';
const ITEMS = [show, show, show];

describe('Views - Dashboard - ShowRow', () => {
  const wrapper = mount(ShowRow, {
    props: { title: TITLE, items: ITEMS },
    global: componentDefaults,
  });

  const title = wrapper.find('.title');
  const row = wrapper.find('.row');

  it('title contains correct text', () => {
    expect(title.text()).toBe(TITLE);
  });

  it('row does render', () => {
    expect(row.exists()).toBe(true);
  });

  it('row shows all cards', () => {
    expect(row.findAll('.card').length).toBe(ITEMS.length);
  });
});
