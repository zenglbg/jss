const s = []

/**
 * 按位置替换
 * @param {[]} c 数组
 */
function run (c = []) {
  // const c = [...Array(3).keys()].map(_ => Math.floor(Math.random() * 10))
  console.log("🚀 ~ file: Scenarios-pool.vue ~ line 142 ~ getPrizePool ~ c", c)
  c.forEach((v, k) => {
    if (s[k] !== v) {
      s.splice(k, 1, v)
    }
  })

}

run([1, 3, 4])
run([1, 4, 2, 3])
run([1, 4, 2, 2])
run([1, 4, 2, 7])
run([1, 4, 2, 9])
run([])
console.log(s)
