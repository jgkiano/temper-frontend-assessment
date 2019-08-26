<template>
  <div class="w-1/2 px-6">
    <div class="bg-white rounded shadow-md overflow-hidden">
      <div class="font-semibold bg-white p-4 text-gray-800 text-xl">List of actions commited</div>
      <div class="actions-container p-4">
        <div class="bg-white rounded border border-gray-300 overflow-hidden shadow-md">
          <TimeTravelItem
            @buttonClicked="onButtonClicked"
            :index="0"
            :postNumber="1"
            :fromIndex="0"
            :toIndex="1"
          />
          <TimeTravelItem
            @buttonClicked="onButtonClicked"
            :index="1"
            :postNumber="2"
            :fromIndex="1"
            :toIndex="2"
            :showBottomBorder="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeTravelItem from './TimeTravelItem.vue';

export default {
  name: 'TimeTravel',
  components: {
    TimeTravelItem,
  },
  methods: {
    onButtonClicked(index) {
      console.log(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.actions-container {
  background-color: #eeeeee;
}
</style>
