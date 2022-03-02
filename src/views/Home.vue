<template>
  <div class="home">
    <Docs class="w-full mt-6" :category="category"></Docs>
  </div>
</template>

<script>
import Docs from '@/components/Docs.vue'
export default {
  name: 'Home',
  props: {
    category :{
      type: String,
    } 
  },
  components: {
    Docs,
  },
}
</script>
