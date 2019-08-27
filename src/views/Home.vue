<template>
  <div class="home-component-container relative">
    <SkewedBackground @animationEnd="onBackgroundAnimationEnd" />
    <transition name="fade-slide-in">
      <div
        class="container mx-auto relative z-10 lg:p-8 lg:flex flex-wrap"
        v-if="!isBackgroundAnimating"
      >
        <PostList />
        <TimeTravel />
      </div>
    </transition>
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
  data() {
    return {
      isBackgroundAnimating: true,
    };
  },
  methods: {
    onBackgroundAnimationEnd() {
      this.isBackgroundAnimating = false;
    },
  },
};
</script>
