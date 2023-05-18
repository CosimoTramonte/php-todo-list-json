const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: "server.php",
      list: [],
      newTask:"",
    }
  },
  methods:{

    getApi(){
      axios.get(this.apiUrl)
        .then(result => {
          this.list = result.data
        })
    },

    addNewTask(){
      const data = new FormData()
      data.append("taskText",this.newTask)
      data.append("isDone", false)

      axios.post(this.apiUrl, data)
        .then(result =>{
          this.newTask = "",
          this.list = result.data
          console.log("ecco la nuova lista");
        })
    },

    removeTask(){
      console.log("rimosso");
    }

  },
  mounted(){
    this.getApi()
  }


}).mount('#app')