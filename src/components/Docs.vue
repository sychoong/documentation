<template>
  <div class="px-24">
    <div id="Scss">
      <Scss></Scss>
    </div>
    <div id="Selector">
      <Selector></Selector>
    </div>
  </div>
</template>

<script>
import Scss from '@/components/Scss.vue'
import Selector from '@/components/Selector.vue'
export default {
  name: 'Docs',
  props: {
    category :{
      type: String,
    } 
  },
  components: {
    Scss,
    Selector
  },
  watch: {
    category : function(){
      const element = document.getElementById(this.$props.category)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

