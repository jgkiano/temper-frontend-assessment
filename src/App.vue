<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions('post', ['fetchPosts']),
  },
};
</script>
