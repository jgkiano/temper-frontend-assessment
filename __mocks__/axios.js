import posts from '../tests/test_data/posts';

export default {
  get: () => Promise.resolve({ data: posts }),
};
