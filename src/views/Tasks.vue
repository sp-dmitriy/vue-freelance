<template>
  <h1 v-if="!$store.state.tasks.length" class="text-white center">Задач пока нет</h1>
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
            {{ task.deadline }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="goToTask(task.id)">Посмотреть</button>
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

    function goToTask(id) {
      router.push(`/task/${id}`) 
    }
  
    return {
      tasks: store.getters.tasks,
      activeTasks: store.getters.activeTasks,
      goToTask
    }
  },
  components: {AppStatus}
}
</script>
