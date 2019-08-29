import posts from '../../test_data/posts';
import postModule from '@/store/post.module';
import moveArrayItem from '@/functions/moveArrayItem';

describe('tests fot the post global store module', () => {
  let commit;
  let state;
  beforeEach(() => {
    state = {
      posts: [],
      history: [],
    };
    commit = jest.fn();
  });

  afterEach(() => {});

  test('fetchPosts action calls commit with correct arguments', async () => {
    const {
      actions: { fetchPosts },
    } = postModule;
    await fetchPosts({ commit });
    expect(commit).toBeCalledWith('setPosts', posts);
  });

  test('movePost action calls commit with correct arguments', () => {
    const {
      actions: { movePost },
    } = postModule;
    const sortedArray = moveArrayItem(posts, 0, 1);
    movePost({ commit, state: { posts } }, { from: 0, to: 1 });
    expect(commit).toBeCalledTimes(2);
    expect(commit).toHaveBeenNthCalledWith(1, 'setPosts', sortedArray);
    expect(commit).toHaveBeenNthCalledWith(2, 'addHistory', {
      postId: 1,
      from: 0,
      to: 1,
      posts: sortedArray,
    });
  });

  test('setPosts mutation updates state correctly', () => {
    const {
      mutations: { setPosts },
    } = postModule;
    setPosts(state, posts);
    expect(state.posts).toBe(posts);
  });

  test('addHistory mutation updates state correctly', () => {
    const {
      mutations: { addHistory },
    } = postModule;
    const sortedArray = moveArrayItem(posts, 0, 1);
    addHistory(state, {
      postId: 1,
      from: 0,
      to: 1,
      posts: sortedArray,
    });
    expect(state.history.length).toBe(1);
    expect(state.history[0].id).toBeDefined();
  });
});
