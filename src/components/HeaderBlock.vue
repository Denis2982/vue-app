<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div className="header">
      <LogoIcon />
      <span class="logo-text">PNFT Market</span>
    </div>
  </transition>
</template>
  
<script>
import LogoIcon from './Icons/LogoIcon.vue';
import gsap from 'gsap';

const tween = gsap.timeline({ repeat: 0, repeatDelay: 1 })

export default {
  name: "HeaderBlock",
  components: { LogoIcon },
  methods: {
    enter() {
      tween.from('.header', {
        opacity: 0,
        y: -50,        
        duration: 1,
        delay: 5
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';
@import '../assets/scss/mixins';
@import '../assets/scss/reset';
@import '../assets/scss/base';

.header {
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  @include tablet {
    margin-bottom: 60px;
  }

  @include tablet-small {
    margin: 88px auto 56px;
    flex-direction: column;
  }

  span {
    @include text ($ff, 500, 16px, 19px, $black);
    letter-spacing: 0.01em;
  }
}
</style>