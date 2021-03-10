<template>
  <div v-if="task" class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.deadline }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div class="btn__inner">
      <div>
        <button class="btn" @click="change('active')">Взять в работу</button>
        <button class="btn primary" @click="change('done')">Завершить</button>
        <button class="btn danger" @click="change('cancelled')">Отменить</button>
      </div>
      <router-link to="/"> <button class="btn warning">Все задачи</button></router-link>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{id}}</strong> нет.
    <hr />
    <router-link to="/"> <button class="btn warning">Все задачи</button></router-link>
  </h3>
</template>

<script>
import AppStatus from "../components/AppStatus";
import {useStore} from 'vuex'
import {ref,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'

export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const id = ref(route.params.id)

    const task = computed(()=>{
      return store.getters.tasks.find(t=>t.id === id.value)
    }) 

    function change(status) {
     store.commit('changeStatus',{
       id: id.value,
       status: status
     })
    }

    return {
     task,id,change
    }
  },
  components: { AppStatus }
}
</script>

<style scoped>
.btn__inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>