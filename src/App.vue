<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <NavBar/>
    <Detail/>
    <FootBar/>
  </div>
</template>

<script>
import NavBar from './components/nav.vue'
import Detail from './components/detail.vue'
import FootBar from './components/footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Detail,
    FootBar,
  },
  data() {
    return {
      // image: "@/images/RSQ/Article.png"
      // image: "@/assets/logo.png"
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aa2a31; /* #2c3e50 */
}

.container {
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
