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
      tasks: []
    }
  },
  mutations: {
    loadState(state,payload){
      state.tasks = payload
    },
    changeStatus(state,payload) {
      const idx = state.tasks.findIndex(t => t.id === payload.id)
      state.tasks[idx].status = payload.status
      localStorage.setItem('tasks', JSON.stringify(state.tasks)) 
    },
    addTask(state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    delTask(state,payload){
      const idx = state.tasks.findIndex(t => t.id === payload.id)
      console.log(idx)
      state.tasks.splice(idx,1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks)) 
    }
  },
  actions: {
    setToState({commit}) {
      try{
        const data = localStorage.getItem('tasks')
        if(data) {
          commit('loadState', JSON.parse(data))
        } 
      } catch(e){
        console.log(e.message)
      }
    }
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