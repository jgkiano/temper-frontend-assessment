<template>
  <div
    class="skewed-background absolute bg-indigo-600 w-full h-screen shadow-2xl skewed-container"
  />
</template>

<style scoped>
.skewed-background {
  transform: skewY(-6deg) translateY(-90vh);
  animation-name: skewedBackgroundAnimation;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
}
@keyframes skewedBackgroundAnimation {
  from {
    opacity: 0;
    transform: skewY(-6deg) translateY(-78px);
  }
  to {
    opacity: 1;
    transform: skewY(-6deg) translateY(-90vh);
  }
}
</style>
