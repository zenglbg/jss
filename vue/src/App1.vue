<template>
  <div id="list-demo" class="demo">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in moneyArr" v-bind:key="item" class="list-item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>

export default {
  name: 'App',
  el: '#list-demo',
  data () {
    return {
      moneyArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      // this.items.splice(this.randomIndex(), 0, this.nextNum++)
      const c = [...Array(3).keys()].map(() => Math.floor(Math.random() * 10))

      c.forEach((v, k) => {
        if (this.moneyArr[k] !== v) {
          this.moneyArr.splice(k, 1, v)
        }
      })
    },
    remove: function () {
      this.moneyArr.splice(this.randomIndex(), 1)
    },
  }
}
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter 
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
