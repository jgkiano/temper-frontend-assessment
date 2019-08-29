import { shallowMount, mount } from '@vue/test-utils';
import TimeTravel from '@/components/TimeTravel.vue';

describe('tests for the TimeTravel component', () => {
  let wrapper;

  const history = [
    {
      id: 1,
      postId: 1,
      from: 0,
      to: 1,
    },
    {
      id: 2,
      postId: 1,
      from: 1,
      to: 2,
    },
    {
      id: 3,
      postId: 1,
      from: 2,
      to: 3,
    },
  ];

  const options = {
    stubs: ['font-awesome-icon'],
    computed: {
      history: () => [],
    },
  };

  beforeEach(() => {
    wrapper = shallowMount(TimeTravel, options);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('it shows a default message if theres no history items', () => {
    expect(wrapper.find('.default-timetravel-message').exists()).toBe(true);
    expect(wrapper.find('.time-travel-items-container').exists()).toBe(false);
  });

  test('it renders the correct number of actions commited', () => {
    wrapper = shallowMount(TimeTravel, {
      stubs: ['font-awesome-icon'],
      computed: {
        history: () => history,
      },
    });
    expect(wrapper.findAll('.time-travel-item').length).toBe(3);
  });

  test('it calls timeTravel with the correct index', () => {
    const timeTravel = jest.fn();
    wrapper = mount(TimeTravel, {
      stubs: ['font-awesome-icon'],
      computed: {
        history: () => history,
      },
      methods: {
        timeTravel,
      },
    });

    wrapper
      .findAll('.time-travel-btn')
      .at(1)
      .trigger('click');
    expect(timeTravel).toBeCalledWith(1);
  });
});
