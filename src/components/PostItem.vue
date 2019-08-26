<template>
  <div
    class="bg-white rounded shadow-md flex flex-row items-center justify-center h-20 px-6 py-4 mb-6"
  >
    <div class="text-gray-700 flex-grow">{{ title }}</div>
    <div
      class="h-full flex flex-col"
      :class=" arrows === 'both' ? 'justify-between' : 'justify-center'"
    >
      <i
        class="block fas fa-chevron-up text-sm cursor-pointer text-indigo-800"
        v-if="arrows !== 'down'"
        @click="handleMoveUp"
      />
      <i
        class="block fas fa-chevron-down text-sm cursor-pointer text-indigo-800"
        v-if="arrows !== 'up'"
        @click="handleMoveDown"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    index: Number,
    title: String,
    arrows: {
      default: 'both',
      type: String,
    },
  },
  methods: {
    handleMoveDown() {
      this.$emit('moveDown', this.index);
    },
    handleMoveUp() {
      this.$emit('moveUp', this.index);
    },
  },
};
</script>
