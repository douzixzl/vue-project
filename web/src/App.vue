<template>
  <div id="app">
  	<transition>
      <router-view></router-view> 
  	</transition>	
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

