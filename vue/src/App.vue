<template>
  <div id="app">
    <!-- 设置一个添加按钮 -->
    <button v-on:click="add">Add</button>
    <!-- 设置一个删除按钮 -->
    <button v-on:click="remove">Remove</button>
    <!-- 使用tag指定包括的元素为P标签，命名为list  -->
    <transition-group name="list" tag="p" appear>
      <span v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</span>
    </transition-group>


    <p>fajfklqjifoq;</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      // 通过获取items列表中的随机下标
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      // 在列表items随机位置下标，设置0为不删除数据，添加this.nextNum++的数据
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      // 随机删除列表中的其中一个数据
      this.items.splice(this.randomIndex(), 1)
    },
  }
}
</script>
<style>
@font-face {
  font-family: 'hello';
  src: url('./assets/fonts/sunnday/Sunnday.ttf') format('truetype');
}

* {
  font-family: 'hello' !important;
}
</style>
<style lang="css" scoped>
/*设置列表的样式*/
.list-item {
  display: inline-block;
  margin-right: 10px;
}
/*设置列表transition-group的name为list的入场以及离场动画效果*/
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
            /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地移动过来的效果 */
.list-move {
  transition: all 0.6s ease;
}
.list-leave-active {
  position: absolute;
}
</style>