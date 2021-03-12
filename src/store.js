import {createStore} from 'vuex'

export default  createStore({
  state(){
    return{
      types:[
        {'type': 'done', 'text': 'Выполнен', 'style': 'primary'},
        {'type': 'active', 'text': 'Активен', 'style': 'primary'},
        {'type': 'cancelled', 'text': 'Отменен', 'style': 'danger'},
        {'type': 'pending', 'text': 'Выполняется', 'style': 'warning'}
      ],
      tasks: [
        // {'id': '1', 'title': 'task 1', 'date' : '11.02.2021', 'description': 'text of task 1', 'status': 'active'},
        // {'id': '2', 'title': 'task 2', 'date' : '12.02.2021', 'description': 'text of task 2', 'status': 'done'},
        // {'id': '3', 'title': 'task 3', 'date' : '13.02.2021', 'description': 'text of task 3', 'status': 'cancelled'},
        // {'id': '4', 'title': 'task 4', 'date' : '14.02.2021', 'description': 'text of task 4', 'status': 'active'}
      ]
    }
  },
  mutations: {
    changeStatus(state,payload) {
      const idx = state.tasks.findIndex(t => t.id === payload.id)
      state.tasks[idx].status = payload.status
    },
    addTask(state,payload) {
      state.tasks.push(payload)
    },
    delTask(state,payload){
      const idx = state.tasks.findIndex(t => t.id === payload.id)
      console.log(idx)
      state.tasks.splice(idx,1) 
    }
  },
  actions: {

  },
  getters: {
    types(state) {
      return state.types
    },
    tasks(state) {
      return state.tasks
    },
    activeTasks(state) {
      return state.tasks.filter(t => t.status === 'active')
    }
  }
})