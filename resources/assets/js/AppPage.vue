<template>
  <div>
    <ul>
      <li v-for="(l, i) in items" :key="i">{{i + ': ' + l}}</li>
    </ul>
    <form @submit.prevent="send">
      <input type="text" v-model="text"> <button @click.prevent="addItem">增加</button><br>
      <input type="submit" value="发送">
    </form>
    子窗口<br>
    <a href="#/page1">page1</a> <a href="#/page2">page2</a>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      text: '',
      items: ['abc', 'def', 'xyz']
    }
  },
  methods: {
    addItem() {
      if(this.text)
        this.items.push(this.text)
    },
    send() {
      axios.post('/items', this.items).then(res => {
        alert('发送成功')
      }).catch(res => {
        alert('发送失败')
      })
    }
  }
}
</script>
