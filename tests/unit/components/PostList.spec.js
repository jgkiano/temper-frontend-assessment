import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import postModule from '@/store/post.module';
import PostList from '@/components/PostList.vue';

describe('tests for the PostList component', () => {
  const posts = [
    { id: 1, title: 'This is post 1' },
    { id: 2, title: 'This is post 2' },
    { id: 3, title: 'This is post 3' },
  ];

  test('it renders a spinner if theres no posts', () => {
    const wrapper = shallowMount(PostList, {
      stubs: {
        Spinner: '<div class="spinner"></div>',
      },
      computed: {
        posts: () => [],
      },
    });
    expect(wrapper.find('.spinner').exists()).toBe(true);
    wrapper.destroy();
  });

  test('it renders the correct number of posts', () => {
    const wrapper = shallowMount(PostList, {
      stubs: {
        PostItem: '<div class="post-item"></div>',
      },
      computed: {
        posts: () => posts,
      },
    });
    expect(wrapper.findAll('.post-item').length).toBe(3);
    wrapper.destroy();
  });

  test('it provides the correct arrow types to post items', () => {
    const wrapper = shallowMount(PostList, {
      computed: {
        posts: () => posts,
      },
    });
    expect(wrapper.vm.generateArrow(0)).toBe('down');
    expect(wrapper.vm.generateArrow(1)).toBe('both');
    expect(wrapper.vm.generateArrow(2)).toBe('up');
    wrapper.destroy();
  });

  test('it calls moveDown with correct parameters', () => {
    const movePost = jest.fn();
    const wrapper = mount(PostList, {
      stubs: ['font-awesome-icon'],
      computed: {
        posts: () => posts,
      },
      methods: {
        movePost,
      },
    });
    wrapper.find('.down-arrow-container').trigger('click');
    expect(movePost).toBeCalledWith({ from: 0, to: 1 });
    wrapper.destroy();
  });

  test('it calls moveUp with correct parameters', () => {
    const movePost = jest.fn();
    const wrapper = mount(PostList, {
      stubs: ['font-awesome-icon'],
      computed: {
        posts: () => posts,
      },
      methods: {
        movePost,
      },
    });
    wrapper.find('.up-arrow-container').trigger('click');
    expect(movePost).toBeCalledWith({ from: 1, to: 0 });
    wrapper.destroy();
  });

  test('it shifts posts correctly when arrows are clicked', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      modules: { post: { ...postModule, state: { posts, history: [] } } },
    });

    const wrapper = mount(PostList, {
      stubs: ['font-awesome-icon'],
      store,
      localVue,
    });

    // trigger down click

    wrapper.find('.down-arrow-container').trigger('click');

    expect(
      wrapper
        .findAll('.post-item-title')
        .at(0)
        .text(),
    ).toBe(posts[1].title);
    expect(
      wrapper
        .findAll('.post-item-title')
        .at(1)
        .text(),
    ).toBe(posts[0].title);

    // trigger up click

    wrapper.find('.up-arrow-container').trigger('click');

    expect(
      wrapper
        .findAll('.post-item-title')
        .at(0)
        .text(),
    ).toBe(posts[0].title);
    expect(
      wrapper
        .findAll('.post-item-title')
        .at(1)
        .text(),
    ).toBe(posts[1].title);

    wrapper.destroy();
  });
});
