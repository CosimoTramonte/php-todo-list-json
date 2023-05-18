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

    removeTask(index){
        const data = new FormData()
        data.append("indexTaskRemove",index)
  
        axios.post(this.apiUrl, data)
          .then(result =>{
            this.newTask = "",
            this.list = result.data
            console.log("ecco la nuova lista");
          })
    },

    isDone(index){
      this.list[index].isDone
      console.log(this.list[index].isDone)
      console.log(index);

      const data = new FormData()
      data.append("isDoneOrNot",this.list[index].isDone)
      data.append("indexTask",index)

      axios.post(this.apiUrl, data)
      .then(result =>{
        this.newTask = "",
        this.list = result.data
        console.log("ecco la nuova lista");
      })
    }
  },
  mounted(){
    this.getApi()
  }


}).mount('#app')