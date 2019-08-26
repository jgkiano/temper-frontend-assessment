<template>
  <div class="home-component-container relative">
    <SkewedBackground />
    <div class="container mx-auto relative z-10 lg:p-8 lg:flex flex-wrap">
      <PostList />
      <TimeTravel />
    </div>
  </div>
</template>

<script>
import SkewedBackground from '../components/SkewedBackground.vue';
import PostList from '../components/PostList.vue';
import TimeTravel from '../components/TimeTravel.vue';

export default {
  name: 'Home',
  components: {
    SkewedBackground,
    PostList,
    TimeTravel,
  },
};
</script>
