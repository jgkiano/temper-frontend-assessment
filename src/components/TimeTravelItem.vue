<template>
  <div
    class="flex flex-row items-center p-2 items-center justify-center"
    :class="hideBottomBorder ? '' : 'border-b border-gray-300'"
  >
    <div
      class="flex-grow text-sm text-gray-700 lg:p-0 p-2"
    >Moved post {{ postId }} from index {{ from }} to index {{ to }}</div>
    <div>
      <button
        @click="$emit('buttonClicked')"
        class="time-travel-btn text-grey font-semibold lg:py-3 lg:px-10 py-2 px-4 rounded text-sm"
      >Time travel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postId: {
      type: Number,
      required: true,
    },
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
    hideBottomBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
