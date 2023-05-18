const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: "server.php",
      list: [],
      newTask:"",
      message: "",
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

      if(this.newTask.length < 4){
        this.message = `Mi dispiace, devi inserire un testo di almeno 5 caratteri`

        setTimeout(() => {
            this.message= ""
        }, 3000)

      } else {
        const data = new FormData()
        data.append("taskText",this.newTask)
        data.append("isDone", false)

        axios.post(this.apiUrl, data)
          .then(result =>{
            this.newTask = "",
            this.list = result.data
            console.log("ecco la nuova lista");
          })
      }
    },

    removeTask(index){

      if(this.list[index].isDone === true){
        const data = new FormData()
        data.append("indexTaskRemove",index)
  
        axios.post(this.apiUrl, data)
          .then(result =>{
            this.newTask = "",
            this.list = result.data
          })
      } else {
        this.message = `Mi dispiace, devi completare prima la task per poterla eliminare`

        setTimeout(() => {
            this.message= ""
        }, 3000)
      }
    },

    isDone(index){
      this.list[index].isDone = !this.list[index].isDone


      const data = new FormData()
      data.append("isDoneOrNot",this.list[index].isDone)
      data.append("indexTask",index)

      axios.post(this.apiUrl, data)
      .then(result =>{
        this.list = result.data
      })
    }
  },
  mounted(){
    this.getApi()
  }


}).mount('#app')