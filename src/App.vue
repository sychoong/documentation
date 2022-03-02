<template>
  <div id="app" class="bg-black text-white min-h-screen">
    <Header></Header>
    <div class="sticky top-0 ">
      <ol class="header__navigation">
        <li v-on:click="selectCategory('Scss')">
          <a>
            SASS And SCSS
          </a>
        </li>
        <li v-on:click="selectCategory('Selector')">
          <a>
            Selector and Block
          </a>
        </li>
        <li v-on:click="selectCategory()">
          <a>
            Specificity
          </a>
        </li>
        <li v-on:click="selectCategory()">
          <a>
            BEM Model
          </a>
        </li>
      </ol>
    </div>
    <div class="mx-auto px-4">
      <router-view :category="category" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data(){
    return{
      category : '',
    }
  },
  methods:{
    selectCategory(category){
      this.category = category
    }
  },
}
</script>
