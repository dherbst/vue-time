<template>
  <div class="timedisplay">
    <h1>Time difference</h1>
    <h2>Localtime {{localtime}}</h2>
    <h2>Servertime {{servertime}}</h2>
    <h3>Difference {{diff}}</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TimeDisplay',
  data () {
    return {
      localtime: new Date(),
      servertime: 'initializing...',
      diff: 0
    }
  },
  methods: {
    getServertime () {
      var self = this
      this.localtime = new Date()

      axios.get('/')
        .then(function (response) {
          self.servertime = new Date(response.headers.date)
          self.diff = (self.servertime.getTime() - self.localtime.getTime()) / 1000.0
        })
    }
  },
  created: function () {
    this.getServertime()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
