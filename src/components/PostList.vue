<template>
  <div class="lg:w-1/2 px-6">
    <div class="text-3xl font-semibold text-white lg:pb-4 lg:py-0 py-4">Sortable Post List</div>
    <transition name="fade-slide-in" mode="out-in" key="1">
      <transition-group name="posts-list-transition" tag="div" v-if="posts.length">
        <PostItem
          v-for="(post, index) in posts"
          :key="post.id"
          :title="post.title"
          :arrows="generateArrow(index)"
          @moveUp="movePost({ from: index, to: index - 1 })"
          @moveDown="movePost({ from: index, to: index + 1 })"
        />
      </transition-group>
      <Spinner v-else key="2" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PostItem from './PostItem.vue';
import Spinner from './Spinner.vue';

export default {
  name: 'PostList',
  components: {
    PostItem,
    Spinner,
  },
  methods: {
    ...mapActions('post', ['movePost']),
    generateArrow(index) {
      if (index === 0) return 'down';
      if (index === this.posts.length - 1) return 'up';
      return 'both';
    },
  },
  computed: {
    ...mapState('post', ['posts']),
  },
};
</script>
