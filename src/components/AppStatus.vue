<template>
  <span  :class="['badge',typeTextStyle.style]">{{typeTextStyle.text}}</span>
</template>

<script>
import {reactive,computed} from 'vue'
import {useStore} from 'vuex'

export default {
  props: ['type'],
  setup(props) {
    const store = useStore()
    
    const typeTextStyle = computed(()=>{
      return store.getters.types.find(t=>t.type === props.type)
    }) 

    return {
      typeTextStyle
    }
  }  
}
</script>

