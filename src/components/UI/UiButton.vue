<template>
    <button class='btn'>
      {{title}}
    </button>
  </template>
  
  <script>

  export default {
    name: 'UiButton',
    props: {
        title: {
            type: String,
            required: true
        }    
    },
    
  }
  </script>

  <style lang="scss">
  @import '@/assets/scss/vars';
  @import '@/assets/scss/mixins';

.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: #5429FF;
    border-radius: 8px;
    width: 100%;
    padding: 12px 20px;
    border: 0;
    outline: 0;
    cursor: pointer;
    margin-bottom: 16px;
    
    &__text {
        @include text ($ff, 500, 16px, 20px, $white);
    }
    &._secondary {
        border: 1px solid #D0D5DD;
        border-radius: 8px;
        background: transparent;
        padding: 10px 20px;
        & .btn__text {
            @include text ($ff, 500, 16px, 20px, $dark);
        }
    }
}

</style>