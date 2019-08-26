<template>
  <div
    class="flex flex-row items-center p-2"
    :class="showBottomBorder ? 'border-b border-gray-300' : ''"
  >
    <div
      class="flex-grow text-sm text-gray-700"
    >Moved post {{ postNumber }} from index {{ fromIndex }} to index {{ toIndex }}</div>
    <div>
      <button
        @click="handleButtonClick"
        class="time-travel-btn text-grey font-semibold py-3 px-10 rounded text-sm sm:text-xs"
      >Time travel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postNumber: {
      type: Number,
      required: true,
    },
    fromIndex: {
      type: Number,
      required: true,
    },
    toIndex: {
      type: Number,
      required: true,
    },
    showBottomBorder: {
      type: Boolean,
      default: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleButtonClick() {
      this.$emit('buttonClicked', this.index);
    },
  },
};
</script>

<style lang="scss" scopped>
.time-travel-btn {
  background-color: #25fa8f;
  transition: background ease-in-out 0.3s;
  &:hover {
    background-color: darken(#25fa8f, 10%);
  }
  &:focus {
    outline: 0;
  }
}
</style>
