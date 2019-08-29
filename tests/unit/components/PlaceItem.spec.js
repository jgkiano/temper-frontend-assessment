import { shallowMount } from '@vue/test-utils';
import PostItem from '@/components/PostItem.vue';

describe('tests for the PostItem component', () => {
  const stubs = ['font-awesome-icon'];

  test('it capitalizes the first letter of the sentence', () => {
    const wrapper = shallowMount(PostItem, {
      stubs,
      propsData: {
        title: 'hello world',
      },
    });
    expect(wrapper.find('.post-item-title').text()).toBe('Hello world');
    wrapper.destroy();
  });

  test('it renders both arrows by default', () => {
    const wrapper = shallowMount(PostItem, {
      stubs,
    });
    expect(wrapper.findAll('.arrow-container').length).toBe(2);
    wrapper.destroy();
  });

  test('it renders up arrow', () => {
    const wrapper = shallowMount(PostItem, {
      stubs,
      propsData: {
        arrows: 'up',
      },
    });
    expect(wrapper.find('.up-arrow-container').exists()).toBe(true);
    expect(wrapper.find('.down-arrow-container').exists()).toBe(false);
    wrapper.destroy();
  });

  test('it renders down arrow', () => {
    const wrapper = shallowMount(PostItem, {
      stubs,
      propsData: {
        arrows: 'down',
      },
    });
    expect(wrapper.find('.up-arrow-container').exists()).toBe(false);
    expect(wrapper.find('.down-arrow-container').exists()).toBe(true);
    wrapper.destroy();
  });

  test('it emits an event when arrows are clicked', () => {
    const wrapper = shallowMount(PostItem, {
      stubs,
    });
    wrapper.find('.up-arrow-container').trigger('click');
    expect(wrapper.emitted().moveUp).toBeTruthy();
    wrapper.find('.down-arrow-container').trigger('click');
    expect(wrapper.emitted().moveDown).toBeTruthy();
    wrapper.destroy();
  });
});
