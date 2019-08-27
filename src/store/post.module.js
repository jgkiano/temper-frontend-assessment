import axios from 'axios';
import moveArrayItem from '../functions/moveArrayItem';

const MAX_POSTS = 5;

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=';

const initialState = {
  posts: [],
  history: [],
};

const actions = {
  fetchPosts: async ({ commit }, limit = MAX_POSTS) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${limit}`);
      commit('setPosts', data);
    } catch (error) {
      // TODO: handle errors
      console.error(error);
    }
  },
  incrementPostIndexPosition: ({ commit, state: { posts } }, postIndex) => {
    const from = postIndex;
    const to = postIndex + 1;
    const sortedPosts = moveArrayItem(posts, from, to);
    const { id } = posts[postIndex];
    commit('setPosts', sortedPosts);
    commit('addHistory', {
      id,
      from,
      to,
      posts: sortedPosts,
    });
  },
  decrementPostIndexPosition: ({ commit, state: { posts } }, postIndex) => {
    const from = postIndex;
    const to = postIndex - 1;
    const sortedPosts = moveArrayItem(posts, from, to);
    const { id } = posts[postIndex];
    commit('setPosts', sortedPosts);
    commit('addHistory', {
      id,
      from,
      to,
      posts: sortedPosts,
    });
  },
  timeTravel: ({ commit, state: { history } }, historyIndex) => {
    const { posts } = history[historyIndex];
    commit('setPosts', posts);
  },
};

const mutations = {
  setPosts: (state, posts) => {
    state.posts = posts;
  },
  addHistory: (state, history) => {
    state.history.push(history);
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
