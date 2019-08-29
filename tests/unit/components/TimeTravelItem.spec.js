import { shallowMount } from '@vue/test-utils';
import TimeTravelItem from '@/components/TimeTravelItem.vue';

describe('tests for the TimeTravelItem component', () => {
  let wrapper;
  const options = {
    propsData: {
      postId: 1,
      from: 0,
      to: 1,
      hideBottomBorder: false,
    },
  };

  beforeEach(() => {
    wrapper = shallowMount(TimeTravelItem, options);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('it renders the correct copy', () => {
    expect(wrapper.find('.time-travel-text').text()).toBe('Moved post 1 from index 0 to index 1');
  });

  test('it emits an event after the button has been clicked', () => {
    wrapper.find('.time-travel-btn').trigger('click');
    expect(wrapper.emitted().buttonClicked).toBeTruthy();
  });

  test('it shows the bottom border by default', () => {
    const { propsData } = options;
    delete propsData.hideBottomBorder;
    wrapper = shallowMount(TimeTravelItem, { propsData });
    expect(wrapper.find('.border-b').exists()).toBe(true);
  });

  test('it hides the bottom border', () => {
    wrapper = shallowMount(TimeTravelItem, {
      propsData: { ...options.propsData, hideBottomBorder: true },
    });
    expect(wrapper.find('.border-b').exists()).toBe(false);
  });
});
