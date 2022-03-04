<template>
  <div class="header">
    <div>
        Front-End Documentation
    </div>
    <div class="header__button" @click="showHeaderNavigation">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  emit : {
    showNavigationList : Boolean ,
  },
  data(){
    return{
      toggleNavigation : false
    }
  },
  methods: {
    showHeaderNavigation(){
      this.toggleNavigation = !this.toggleNavigation
      this.$emit('toggleNavigationList', this.toggleNavigation)
    }
  }
}
</script>

