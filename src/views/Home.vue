<template>
  <div class="home-component-container relative">
    <SkewedBackground />
    <div class="container mx-auto relative z-10 p-8">
      <PostList />
    </div>
  </div>
</template>

<script>
import SkewedBackground from '../components/SkewedBackground.vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'Home',
  components: {
    SkewedBackground,
    PostList,
  },
};
</script>
