<template>
    <transition appear @before-enter="beforeEnter" @enter="enter">
        <div className="image">
            <img src="@/assets/bg.png" alt="" />
            <div class="box-card">
                <div class="card" v-for="card in cards" :key="card.id"></div>
            </div>
        </div>
    </transition>
</template>
  
<script>
import gsap from 'gsap';

// const tween = gsap.timeline({repeat:0, repeatDelay:1})

export default {
    name: 'ImageBlock',
    data() {
        return {cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]}
    },
    methods: {
        enter() {
        gsap.to('.card', {
            delay: 5,            
            duration: 0.7,
            scale: 0,
            stagger: {                
                each: 0.1,
                grid: [16, 16],
                from: "center",
            }
        })      
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';
@import '../assets/scss/mixins';

.image {
    background: $grey;
    border-radius: 40px;
    position: relative;
    @include tablet {
        display: none;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
}
.box-card {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;    
}
.card {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    width: 46px;
    height: 56px;
    background: $bg;
}
</style>