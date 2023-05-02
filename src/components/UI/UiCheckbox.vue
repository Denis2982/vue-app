<template>
  <label class='checkbox'>
    <input class='checkbox__input' type="checkbox" />
    <span class='checkbox__checkmark'>
      <CheckMarckIcon />
    </span>
    <span class='checkbox__text'>{{text}}</span>
  </label>
</template>
  
<script>
import CheckMarckIcon from '../Icons/CheckMarckIcon.vue';


export default {
    name: "UiCheckbox",
    props: {
        text: {
            type: String,
            required: true
        },
    },
    components: { CheckMarckIcon }
};
</script>

<style lang="scss">
@import '@/assets/scss/vars';
@import '@/assets/scss/mixins';

.checkbox {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  &__input {
    display: none;

    &:checked~.checkbox__checkmark {
      background: $purple;
      border-color: $purple;

      svg {
        transform: scale(1);
      }
    }
  }

  &__text {
    @include text ($ff, 500, 14px, 20px, $dark);
  }

  &__checkmark {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $border;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    transition: $transition;

    svg {
      width: 12px;
      height: 12px;
      display: inline-block;
      fill: $white;
      transition: $transition;
      transform: scale(0);
    }
  }
}</style>