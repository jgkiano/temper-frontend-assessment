// TODO: find a more effective way of implementing chevron icons
<template>
  <div
    class="post-item-container bg-white rounded shadow-md flex flex-row justify-center px-4 py-4 mb-6"
  >
    <div class="text-gray-700 flex-grow flex items-center">{{ postTitle }}</div>
    <div class="flex flex-col" :class=" arrows === 'both' ? 'justify-between' : 'justify-center'">
      <font-awesome-icon
        v-if="arrows !== 'down'"
        icon="chevron-up"
        class="block cursor-pointer text-indigo-800 hover:text-indigo-600"
        @click="handleMoveUp"
      />
      <font-awesome-icon
        v-if="arrows !== 'up'"
        icon="chevron-down"
        class="block cursor-pointer text-indigo-800 hover:text-indigo-600"
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
  computed: {
    postTitle() {
      return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    },
  },
};
</script>
