<template>
  <td class="seat" style="padding: 0 5px">
    <div class="" style="height: 50px">
      <svg
        fill="none"
        style="width: 35px; height: 50px"
        @click="handleClick({ row, ticket })"
      >
        <rect
          :class="{ active: ticket?.ticketId }"
          x="3"
          y="3"
          width="29"
          height="44"
          rx="2"
          fill="#FFF"
          stroke="#B8B8B8"
          stroke-width="1.5"
          stroke-linejoin="round"
        ></rect>
        <text x="6" y="20" font-size="14" fill="#707070">
          {{ ticket?.seatName }}
        </text>
        <rect
          x="6"
          y="28"
          width="23"
          height="7"
          rx="2"
          fill="#FFF"
          stroke="#B8B8B8"
          stroke-width="1.5"
          stroke-linejoin="round"
        ></rect>
      </svg>
    </div>
  </td>
  <br v-if="row % 3 == 2" />
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    handleClick: {
      type: Function,
    },
    ticket: {
      type: Object,
    },
    row: {
      type: Number,
    },
  },
  methods: {},
  created() {
    console.log("seatItem");
  },
};
</script>

<style>
.active {
  fill: rgb(224, 224, 224);
}
.selectNow {
  stroke: rgb(39, 174, 96);
  fill: rgb(139, 229, 176);
}
.seat:hover {
  cursor: pointer;
}
</style>