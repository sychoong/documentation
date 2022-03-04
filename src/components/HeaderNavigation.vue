<template>
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
        <li v-on:click="selectCategory('Specificity')">
          <a>
            Specificity
          </a>
        </li>
        <li v-on:click="selectCategory('BEM')">
          <a>
            BEM Model
          </a>
        </li>
      </ol>
    </div>
</template>
<script>
export default {
  name: 'HeaderNavigation',
  data(){
    return{
      category : '',
    }
  },
  emit:{
    category : String,
  },
  methods:{
    selectCategory(category){
      this.category = category
      this.$emit('getCategory', this.category)
    }
  },
}

</script>