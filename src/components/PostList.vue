<template>
  <div>
    <div class="text-3xl font-semibold text-white pb-8">Sortable Post List</div>
    <PostItem :index="0" title="Post 1" @moveUp="onMoveUp" @moveDown="onMoveDown" arrows="up" />
    <PostItem :index="1" title="Post 2" @moveUp="onMoveUp" @moveDown="onMoveDown" />
    <PostItem :index="2" title="Post 3" @moveUp="onMoveUp" @moveDown="onMoveDown" arrows="down" />
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
