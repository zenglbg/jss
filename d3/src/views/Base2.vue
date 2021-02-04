<template>
  <div id="line" ref="wrapper"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import dayjs from "dayjs";
import * as d3 from "d3";
import dataset from "../assets/json/data.json";
export default defineComponent({
  setup() {
    const wrapper = ref<HTMLElementTagNameMap["div"]>();
    interface InterData {
      date: string;
      value: number;
    }
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const initSvg = () => {};

    onMounted(() => {
      line();
    });

    return { wrapper };
  }
});
</script>

<style scoped>
#line {
  border: 1px solid black;
}
</style>
