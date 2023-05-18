const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods:{
    getApi(){
      console.log("getApi");
    }
  },
  mounted(){
    this.getApi()
  }


}).mount('#app')