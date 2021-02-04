<template>
  <div id="line" ref="wrapper"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import dayjs from "dayjs";
import * as d3 from "d3";
import dataset from "@/assets/json/data.json";
import { select } from "d3";
export default defineComponent({
  setup() {
    const wrapper = ref<HTMLElementTagNameMap["div"]>();
    const line = () => {
      if (wrapper.value) {
        console.log("🚀 ~ file: Base1.vue ~ line 12 ~ data", dataset);

        const rectStep = 35;
        const rectWidth = 30;
        const width = 35 * dataset.length + 35;
        const height = 400;
        const svg = select(wrapper.value)
          .append("svg")
          .attr("height", height)
          .attr("width", width);
        const padding = { top: 20, right: 20, bottom: 20, left: 20 };

        svg
          .selectAll("rect")
          .data(dataset.map(r => r.value))
          .enter()
          .append("rect")
          .attr("fill", "pink")
          .attr("x", (d, i) => padding.left + i * rectStep)
          .attr("y", (d, i) => height - padding.bottom - d)
          .attr("width", rectWidth)
          .attr("height", d => d);

        const text = svg
          .selectAll("text")
          .data(dataset.map(r => r.value))
          .enter()
          .append("text")
          .attr("fill", "#fff")
          .attr("font-size", "14px")
          .attr("text-anchor", "middle")
          .attr("x", (d, i) => padding.left + i * rectStep)
          .attr("y", (d, i) => height - padding.bottom - d)
          .text(d => d)
          .attr("dx", rectWidth / 2)
          .attr("dy", "1em");
      }
    };

    onMounted(() => {
      line();
    });

    return { wrapper };
  }
});
</script>

<style scoped></style>
