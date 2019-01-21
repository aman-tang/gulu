<template>
  <div class="col" :class="span && [`col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid #777; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuluCol',
    props: {
      span: [Number, String],
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    created() {
      console.log('col created')
      // 没有儿子：打印出来是空数组，但点开有内容是因为时间差让内容能够在里面了，实际此时是没有儿子的
    },
    mounted() {
      console.log('col mounted')
      // 这时有了儿子
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    // background-color: pink;
    width: 50%;
    // border: 1px solid grey;

    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class: offset-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

</style>