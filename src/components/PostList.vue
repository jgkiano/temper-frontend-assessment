<template>
  <div class="lg:w-1/2 px-6">
    <div class="text-3xl font-semibold text-white lg:pb-4 lg:py-0 py-4">Sortable Post List</div>
    <PostItem :index="0" title="Post 1" @moveUp="onMoveUp" @moveDown="onMoveDown" arrows="down" />
    <PostItem :index="1" title="Post 2" @moveUp="onMoveUp" @moveDown="onMoveDown" />
    <PostItem :index="2" title="Post 3" @moveUp="onMoveUp" @moveDown="onMoveDown" arrows="up" />
  </div>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  name: 'PostList',
  components: {
    PostItem,
  },
  methods: {
    onMoveDown(index) {
      console.log(index);
    },
    onMoveUp(index) {
      console.log(index);
    },
  },
};
</script>
