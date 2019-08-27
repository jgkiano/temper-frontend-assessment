import axios from 'axios';
import moveArrayItem from '../functions/moveArrayItem';

const MAX_POSTS = 5;

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=';

const initialState = {
  posts: [],
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
    commit('setPosts', moveArrayItem(posts, postIndex, postIndex + 1));
  },
  decrementPostIndexPosition: ({ commit, state: { posts } }, postIndex) => {
    commit('setPosts', moveArrayItem(posts, postIndex, postIndex - 1));
  },
};

const mutations = {
  setPosts: (state, posts) => {
    state.posts = posts;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
