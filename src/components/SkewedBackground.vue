<template>
  <div
    class="skewed-background z-0 absolute bg-indigo-700 w-full h-screen shadow-2xl skewed-container"
  />
</template>

<script>
const ANIMATION_DURATION = 500;
export default {
  mounted() {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.$emit('animationEnd');
    }, ANIMATION_DURATION);
  },
};
</script>
