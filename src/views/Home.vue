<template>
  <div class="home">
    <a href="https://roadmap.sh/frontend" class="text-center py-6 text-red-200 underline m-auto w-max block">
      Roadmap in Front End Technologies
    </a>
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
