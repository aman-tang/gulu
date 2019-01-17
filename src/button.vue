<template>
   <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
   </button>
</template>

<script>
  import Icon from './icon'
export default {
  // 局部注册组件
  components: {
    'g-icon': Icon
  },
  // props: ['icon', 'iconPosition']
  // 下面这种 props 的写法，可解决 class 中有 undefined 的情况
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      // validator 是属性的检查器
      validator(value) {
        // if(value !== 'left' && value !== 'right') {
        //   return false
        // }else {
        //   // 如果满足条件，则必须 return 一个 true，不然还是以为是 false
        //   return true
        // }
        // 三种方式简化上面的代码
        return value === 'left' || value === 'right'
        // 方式1: return !(value !== 'left' && value !== 'right');
        // 方式2三目运算符: return value !== 'left' && value !== 'right' ? false : true
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
  border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon{
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}

</style>