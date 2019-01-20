<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluCol',
    props: {
      span: {
        type: [Number,String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    background-color: pink;
    width: 50%;
    border: 1px solid grey;

    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

 .col {
  // $class 是前缀，$class-prefix
    $class: data-span-;
    // scss 的 for 循环
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

</style>