import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: localStorage.getItem('localstorage_tasks') || [],
    currentTask: {},
  },  
  getters:{
    getTasks(state){
      return state.tasks;
    }
  },
  
  mutations: {
    ADD_TASK(state, payload){

      state.tasks.push(payload);
    },
    SET_CURRENT_TASK(state, taskId){
      console.log('state', state);
      console.log('payload', taskId);
      let taskFound = {};
      state.tasks.forEach((task) => {
        if (taskId == task.id){
          taskFound = task;
        }
      });
      state.currentTask = taskFound;
      console.log("Task found",taskFound);
    },
    
    // SAVE_TASKS_LOCAL_STORAGE(state){
    //   localStorage.setItem(tasks);
    // }
    // SET_NAME(state, payload){
    //   state.title = payload;
    //   console.log(state.title);
    // }
     initialiseStore(state) {
      if (localStorage.getItem('localstorage_tasks')) {
        state.tasks = localStorage.getItem('localstorage_tasks');
      }
      console.log("state" ,state)
    },
  },

  actions: {
    add_task({commit}){
      commit('ADD_TASK');
    }
  },
  modules: {
  }
})
