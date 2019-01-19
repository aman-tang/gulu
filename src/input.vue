<template>
  <!-- <div class="wapper" :class={'error': error}> -->
  <div class="wapper" :class={error}> <!-- 简写 -->
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    >
    <!-- 若不想因为 icon 和 span 而多加一个 div 来写 v-if，可以加一个 template 写 v-if，dom 中不会出现多余标签  -->
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon.vue'
  export default {
    name: 'GuluInput',
    components: {Icon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0,0,0,.3);
  $red: #F1453D;
  .wapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
      margin-right: .5em;
    }
    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $red;
      }
    }
    .icon-error {
      fill: $red;
    }
    .errorMessage {
      color: $red;
    }
  }
</style>