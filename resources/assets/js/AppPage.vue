<style>
.app {
  background-color: #eee;
  max-width: 640px;
  margin: 0 auto;
  padding: 1em;
}
.calc {
  width: 15em;
  background-color: lightgray;
  padding: 1em;
  margin: 0 auto;
  border-radius: .5em;
  border: 2px outset white;
  text-align: center;
}
.calc input[type=number] {width: 5em}
.tab>a {margin-right: 2em}
.page {text-align: center}
</style>
<template>
  <div class="app">
    <div class="calc">
      <div style="height: 1.5em">{{result}}</div>
      a: <input type="number" v-model="a">
      b: <input type="number" v-model="b"><br>
      <button @click.prevent="operate('+')">+</button> <button @click.prevent="operate('-')">-</button><br>
    </div>
    子窗口<br>
    <div class="tab">
      <a href="#/page1">page1</a> <a href="#/page2">page2</a>
      <router-view class="page"></router-view>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json'
}
export default {
  data() {
    return {
      a: Math.round(Math.random() * 10),
      b: Math.round(Math.random() * 10),
      result: null
    }
  },
  methods: {
    operate(op) {
      axios.post('/calc', {a: this.a, b: this.b, op}).then(res => {
        this.result = `${this.a} ${op} ${this.b} = ${res.data.result}`
      }).catch(res => {
        alert('发送失败')
      })
    }
  }
}
</script>
