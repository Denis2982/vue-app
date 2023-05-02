<template>
    <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="container">
        <div class="wrapper">
            <div class="login__inner">
                <HeaderBlock />
                <LoginBlock />
                <FooterBlock />
            </div>
            <ImageBlock />
        </div>
    </div>
    </transition>
</template>
  
<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import LoginBlock from '@/components/LoginBlock.vue';
import gsap from 'gsap';

const tween = gsap.timeline({repeat:0, repeatDelay:1})

export default {
    name: "HomePage",
    components: { HeaderBlock, LoginBlock, FooterBlock, ImageBlock },
    methods: {
    enter() {
      tween.from('.wrapper', {
        x: '100%',
        ease: "elastic.out(1, 0.4)",
        duration: 5
      })      
    }
  }
}
</script>