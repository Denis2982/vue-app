<template>
    <label>
      <div class="form__title">{{ title }}</div>
      <div class="form__inner">
        <input 
          class='form__input' 
          v-bind:placeholder="placeholder" 
          :type="inputType"
          v-model="inputValue" />        
        <div class='form__icon' v-on:click="clearInputValue">
        <CrossIcon />
      </div>
      </div>
    </label>
  </template>
    
  <script>  
  import CrossIcon from '../Icons/CrossIcon.vue';
  
  
  export default {
      name: "UiInputemail",
      data() {
          return {              
              inputValue: ""
          };
      },
      props: {
          text: {
              type: String,
              required: true
          },
          placeholder: {
              type: String,
              required: false
          },          
      },
      methods: {          
          clearInputValue() {
              this.inputValue = "";
          }
      },
      components: {          
        CrossIcon 
      }
  }
  </script>
  
  <style lang="scss">
  .form {
    @import '@/assets/scss/vars';
    @import '@/assets/scss/mixins';
  
    &__title {
      @include text ($ff, 500, 14px, 20px, $dark);
      margin-bottom: 8px;
    }
  
    &__inner {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
  
    &__input {
      border: 1px solid $border;
      border-radius: 8px;
      padding: 10px 14px;
      width: 100%;
  
      // position: relative;
      &::placeholder {
        @include text ($ff, 400, 16px, 24px, $dark-grey);
      }
    }
  
    &__icon {
      display: block;
      position: absolute;
      right: 14px;
      top: 50%;
      width: 24px;
      height: 24px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  </style>