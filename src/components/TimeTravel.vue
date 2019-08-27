<template>
  <div class="lg:w-1/2 px-6">
    <div class="bg-white rounded shadow-md overflow-hidden">
      <div class="font-semibold bg-white p-4 text-gray-800 text-xl">List of actions commited</div>
      <div class="actions-container p-4">
        <div
          class="bg-white rounded border border-gray-300 overflow-hidden shadow-md"
          v-if="history.length"
        >
          <transition-group name="time-travel">
            <TimeTravelItem
              v-for="(action, index) in history"
              :key="index"
              :id="action.id"
              :from="action.from"
              :to="action.to"
              :hideBottomBorder="index === (history.length - 1)"
              class="time-travel-item"
              @buttonClicked="timeTravel(index)"
            />
          </transition-group>
        </div>
        <div class="bg-white p-4 rounded shadow-md flex items-center text-gray-500" v-else>
          <div>No actions commited yet</div>
          <font-awesome-icon icon="sad-cry" class="ml-2 text-4xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TimeTravelItem from './TimeTravelItem.vue';

export default {
  name: 'TimeTravel',
  components: {
    TimeTravelItem,
  },
  methods: {
    ...mapActions('post', ['timeTravel']),
  },
  computed: {
    ...mapState('post', ['history']),
  },
};
</script>

<style lang="scss" scoped>
.actions-container {
  background-color: #eeeeee;
}
</style>
