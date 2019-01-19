import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  },
  methods: {
    inputChange (e) {
      console.log(e)
    }
  }
})

// 下面的测试代码可删掉，不需要在这里测试了
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 单元测试
{
  // 1. 测试按钮含有 icon
  // 动态生成了按钮，通过 JS 把按钮写到了页面
  // 先把 Button 组件变成了构造函数，然后通过这个构造函数声明一个 vm 实例，再把实例挂载到 #test 上
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  // vm.$mount('#test')~
  vm.$mount()
  // mount 中也可以什么都没有
  // 我期待 use 和 href 是 i-settings，因为我设置的 icon 是 settings；
  // 然后区检查 settings，若我的设置和检查的结果都满足预期，则代码没问题。
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}

{
  // 2. 测试如果传入一个 loading，那么会显示一个 href 为 #i-loading 的 icon
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}


{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  // 若搞定了，就把该元素从页面删除
  vm.$el.remove()
  // 把 vm 对象删掉
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  // mock
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})
  // 当 click 时触发 spy
  vm.$on('click', spy)
  // 测试意图：希望这个函数被执行
  let button = vm.$el
  button.click()
  // 期待当 button 执行时，间谍(spy)被调用了
  expect(spy).to.have.been.called()
}