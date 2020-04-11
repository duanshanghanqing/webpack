import Vue from 'vue'
Vue.directive('imgsrc', {
  bind: function (el, binding, vnode) { // 被绑定
    const initImg = el.getAttribute('data-initsrc') || vnode.context.Global.errorImg
    el.src = initImg// 初始化图片

    const Img = new Image()
    Img.src = binding.value
    Img.onload = function () {
      // 加载成功后的图片
      el.src = Img.src
    }
    Img.onerror = function () {
      // 加载失败后的图片
      el.src = initImg
    }
  },
  inserted: function () { // 绑定到节点

  },
  update: function (el, binding, vnode) { // 组件更新
    const initImg = el.getAttribute('data-initsrc') || vnode.context.Global.errorImg
    // 指令数据更新后图片的处理
    const Img = new Image()
    Img.src = binding.value
    Img.onload = function () {
      el.src = Img.src
    }
    Img.onerror = function () {
      el.src = initImg
    }
  },
  componentUpdated: function () { // 组件更新完成

  },
  unbind: function () { // 解绑

  }
})
