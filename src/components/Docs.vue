<template>
  <div>
    <div id="Scss">
      <Scss></Scss>
    </div>
    <div id="Selector">
      <Selector></Selector>
    </div>
    <div id="Specificity">
      <Specificity></Specificity>
    </div>
  </div>
</template>

<script>
import Scss from '@/components/Scss.vue'
import Selector from '@/components/Selector.vue'
import Specificity from '@/components/Specificity.vue'
export default {
  name: 'Docs',
  props: {
    category :{
      type: String,
    } 
  },
  components: {
    Scss,
    Selector,
    Specificity,
  },
  watch: {
    category : function(){
      const element = document.getElementById(this.$props.category)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

