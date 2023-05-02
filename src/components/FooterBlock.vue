<template>
  <div className="footer">
    @CreatedbyNAMDesign
  </div>
</template>
  
<script>

export default {
  name: 'FooterBlock',

}
</script>

<style lang="scss">
@import '../assets/scss/vars';
@import '../assets/scss/mixins';
@import '../assets/scss/reset';
@import '../assets/scss/base';

.footer {
  @include text ($ff, 400, 16px, 20px, $dark-grey);
  font-style: italic;

  @include tablet-small {
    display: none;
  }
}
</style>