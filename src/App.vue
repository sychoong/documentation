<template>
  <div id="app">
    <Header @toggleNavigationList="getNavigationList"></Header>
    <Transition name="dropdown">
      <template v-if="showNavigationList">
        <HeaderNavigation @getCategory="getCategory" ></HeaderNavigation>
      </template>
    </Transition>
    <div class="body__docs">
      <router-view :category="category" />
    </div>
  </div>
</template>
<style>
.dropdown-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all .5s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to{
  opacity: 0;
  transform: translateY(-100px);
}

</style>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HeaderNavigation from '@/components/HeaderNavigation.vue'
const windowWidth = window.innerWidth
export default {
  name: 'Home',
  components: {
    Header,
    HeaderNavigation,
  },
  data(){
    return{
      category : '',
      showNavigationList : true,
    }
  },
  methods :{
    getCategory(name){
      this.category = name
      if (windowWidth <= 766) {
        this.showNavigationList = false
      }
    },
    getNavigationList(state){
      if (windowWidth <= 766) {
        this.showNavigationList = state
      } else {
        this.showNavigationList = true
      }
    }
  },
  created() {
    if (windowWidth <= 766) { 
      this.showNavigationList = false
    }
  }
}
</script>
