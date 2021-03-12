<template>
  <form class="card" @submit.prevent="submitHandler">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" type="submit" :disabled="!isDisabled">Создать</button>
  </form>
</template>


<script>
import {ref,computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { v4 as uuidv4 } from 'uuid'

export default {
  setup(){
    const store = useStore()
    const router = useRouter()

    const title = ref('')
    const date = ref('')
    const description = ref('')
    
    const isDisabled = computed(()=>{
      return title.value.length && description.value.length && date.value.length
    }) 
    

    function submitHandler(event) {    
      store.commit('addTask',{
        id: uuidv4(),  
        title: title.value.trim(),
        date: new Date(date.value).toLocaleDateString(),
        description: description.value.trim(),
        status: (new Date(date.value) > new Date())? 'active' : 'cancelled'
      })
      router.push('/')   
    }

    return {
      title,date,description,
      isDisabled,submitHandler
    }
  }  
}
</script>