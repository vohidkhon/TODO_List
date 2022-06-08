Vue.createApp({
    data() {
      return {
        ValueNewTask: '',
        Tasklist: [
          {
            id: 1,
            title: 'Task #1'
          },
          {
            id: 2,
            title: 'Task #2'
          },
          {
            id: 3,
            title: 'Task #3'
          },
          {
            id: 4,
            title: 'Task #4'
          },
          {
            id: 5,
            title: 'Task #5'
          }
        ],
      };
    },
    //выполнено
    methods: {
      EnTask(event) {
        this.ValueNewTask = event.target.value;
      },
      //выполнено
      add () {
        var clr;
        clr = document.getElementById('color');
        if(this.ValueNewTask === '') 
        {
          clr.style.color='red';
          return this.ValueNewTask = 'Error - Enter the task'
        } else if(this.ValueNewTask === 'Error - Enter the task')
        {
          return
        };
        clr.style.color='gray';
        this.Tasklist.push({
          title: this.ValueNewTask,
          id: Math.random()
        });
        this.ValueNewTask='';
      },
      clCheck (index) {
          var str = document.getElementById('str');
          var opas = str.style.opacity = "0.4";
          if(document.getElementById('chBox').checked === true) {
            this.Tasklist.splice(index, opas);
            str.style.textDecoration = "line-through";
          }else {
            str.style.opacity = "1";
            str.style.textDecoration = "none";;
          }
      },
      //выполнено
      delet(index, type){
        if(type === 'del'){
          const del = this.Tasklist.splice(index, 1);
        }
      },
      Clear(index){
        if(document.getElementById('chBox').checked === true){
          const clear = this.Tasklist.splice(index, 1);
        }
      },
      All(index){
        document.getElementById('chBox').checked = true;
        str.style.opacity = "0.4";
        str.style.textDecoration = "line-through";
        this.Tasklist.splice(index, document.getElementById('chBox').checked = true);
      }
    }
  }).mount('#app');