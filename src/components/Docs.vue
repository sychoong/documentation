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
    <div id="BEM">
      <BEM></BEM>
    </div>
  </div>
</template>

<script>
import Scss from '@/components/Scss.vue'
import Selector from '@/components/Selector.vue'
import Specificity from '@/components/Specificity.vue'
import BEM from '@/components/BEM.vue'
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
    BEM,
  },
  watch: {
    category : function(){
      const element = document.getElementById(this.$props.category)
      // element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.scroll({
        top: element.getBoundingClientRect().top,
        behavior: 'smooth'
      })
    }
  }
}
</script>

