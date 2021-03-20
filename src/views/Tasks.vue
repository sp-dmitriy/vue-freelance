<template>
  <h1 v-if="!tasks.length" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{activeTasks.length}}</h3>
    <div v-for="task in tasks" :key=task.id class="card">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <div class="btn__inner">
        <button class="btn primary" @click="goToTask(task.id)">Посмотреть</button>
        <button class="btn danger" @click="remove(task.id)">Удалить</button>
      </div>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useRouter} from 'vue-router'
import {useStore,mapGetters} from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    store.dispatch('setToState')

    function remove(id) {
      store.commit('delTask',{id: id})
    }

    function goToTask(id) {
      router.push(`/task/${id}`) 
    }
  
    return {
      tasks: store.getters.tasks,
      activeTasks: store.getters.activeTasks,
      goToTask,remove
    }
  },
  components: {AppStatus}
}
</script>
<style scoped>
.btn__inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>