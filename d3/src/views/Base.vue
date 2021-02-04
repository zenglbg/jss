<template>
  <div id="line" ref="wrapper"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as d3 from "d3";

export default defineComponent({
  setup() {
    interface InterData {
      [index: number]: number;
    }
    const wrapper = ref<HTMLElementTagNameMap["div"]>();
    const line = () => {
      if (wrapper.value) {
        // 候選人票數
        const vote = ["30", "50", "100", "20"];

        // 繪製SVG
        d3.select(wrapper.value)
          .selectAll("li")
          .data(vote)
          .enter()
          .append("li")
          .text(function(d) {
            return d;
          });
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
