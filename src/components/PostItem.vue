<template>
  <div
    class="post-item-container bg-white rounded shadow-md flex flex-row justify-center px-4 py-4 mb-6"
  >
    <div class="post-item-title text-gray-700 flex-grow flex items-center">{{ postTitle }}</div>
    <div class="flex flex-col" :class=" arrows === 'both' ? 'justify-between' : 'justify-center'">
      <div
        class="arrow-container up-arrow-container"
        v-if="arrows !== 'down'"
        @click="$emit('moveUp')"
      >
        <font-awesome-icon
          icon="chevron-up"
          class="block cursor-pointer text-indigo-800 hover:text-indigo-600"
        />
      </div>
      <div
        class="arrow-container down-arrow-container"
        v-if="arrows !== 'up'"
        @click="$emit('moveDown')"
      >
        <font-awesome-icon
          icon="chevron-down"
          class="block cursor-pointer text-indigo-800 hover:text-indigo-600"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    arrows: {
      default: 'both',
      type: String,
    },
  },
  computed: {
    postTitle() {
      return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    },
  },
};
</script>
