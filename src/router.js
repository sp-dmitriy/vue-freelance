import { createRouter, createWebHistory} from 'vue-router'
import New from './views/New'
import Task from './views/Task'
import Tasks from './views/Tasks'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: New },
    { path: '/task/:id', component: Task },

  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
}) 