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

<style scoped>
.fade-slide-in-enter-active,
.fade-slide-in-leave-active {
  transition: all 0.5s;
}
.fade-slide-in-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100px);
  opacity: 0;
}
</style>
