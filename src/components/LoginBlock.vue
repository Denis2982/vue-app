<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div class="login">
      <h1 class="login__title">NFT Access</h1>
      <div class="login__subtitle">
        Please fill your detail to access your account.
      </div>

      <form action="get" class='form'>
        <UiInputemail title="Email" placeholder='debra.holt@example.com' type="email" iconInput='123' />
        <UiInput title="Password" placeholder='••••••••' iconInput='123' type="password" />

        <div class="remember">
          <UiCheckbox :text="'Remember me'" />
          <a href='/' class="forgot">Forgot Password?</a>
        </div>

        <UiButton class="button" title='Sign in' type='submit' />
      </form>

      <UiButton class="button-google" title='Sign in with Google' typeBtn='_primary' />
      <div class="sign">
        <a href="/">Don’t have an account? <span>Sign up</span></a>
      </div>

    </div>
  </transition>
</template>
  
<script>
import UiButton from './UI/UiButton.vue';
import UiCheckbox from './UI/UiCheckbox.vue';
import UiInput from './UI/UiInput.vue';
import UiInputemail from './UI/UiInputemail.vue';
import gsap from 'gsap';

const tween = gsap.timeline({repeat:0, repeatDelay:1})

export default {
  name: "LoginBlock",
  components: { UiCheckbox, UiInput, UiInputemail, UiButton },
  methods: {
    enter() {
      tween.to('.login__title', {
        opacity: 1,
        x: 0,
        ease: 'bounce',
        duration: 2,
        delay: 2        
      }),
      tween.to('.login__subtitle', {
        opacity: 1,
        x: 0,
        ease: 'bounce',
        duration: 2       
      }, '-=1'),
      tween.from('.button', {
        opacity: 0,
        y: 50,        
        duration: 1       
      }),
      tween.from('.button-google', {
        opacity: 0,
        y: 50,        
        duration: 1       
      }, '-=2')
    }
  }
    
}
</script>

<style lang="scss">
@import '../assets/scss/vars';
@import '../assets/scss/mixins';
@import '../assets/scss/reset';
@import '../assets/scss/base';

.login {
  max-width: 345px;
  justify-self: center;
  align-self: center;

  @include tablet {
    margin-bottom: 90px;
  }

  @include tablet-small {
    margin-bottom: 72px;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 134px;
      height: 5px;
      background: rgba(52, 64, 84, 0.85);
      border-radius: 2.5px;
      bottom: -82px;
      left: 50%;
      transform: translateX(-50%)
    }
  }

  &__title {
    opacity: 0;
    transform: translateX(-1000px);
    @include text ($ff, 700, 40px, 48px, $dark);
    letter-spacing: 0.01em;
    text-transform: capitalize;
    margin-bottom: 8px;

    @include tablet-small {
      @include text ($ff, 700, 32px, 39px, $dark);
    }
  }

  &__subtitle {
    opacity: 0;
    transform: translateX(-1000px);
    @include text ($ff, 500, 16px, 24px, $dark-grey);
    margin-bottom: 56px;

    @include tablet-small {
      @include text ($ff, 500, 14px, 24px, $dark-grey);
    }
  }
}

.remember {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.forgot {
  @include text ($ff, 500, 14px, 20px, $purple);
}

.sign {
  text-align: center;
  margin-top: 20px;

  a {
    @include text ($ff, 400, 14px, 24px, $dark);
  }

  span {
    color: $purple;
  }
}
</style>