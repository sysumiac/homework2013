/*!
 * @Copyright(c) 2013 MIAC <sysumiac@gmail.com> All rights reserved.
 * @license MIT
 * @version v0.0.1
 *
 * @Author Kuang weike
 * @Date 2013/12/09
 * 
 * https://github.com/sysumiac
 */

(function() {

  //配置变量
  //初始显示的img: 0 || 1 || 2
  var current = 1
  //转换时间 单位：ms 
  var slideTime = 3000

  var frames = 60
  var interval = null
  var clickTimeout = null
  var intervals = []
  var eachFrameTime 
  var imgs 
  var total
  var stayTime

  stayTime = slideTime / 3
  eachFrameTime = 1000 / frames 
  imgs = getImgElements()
  hideOtherImgs()
  total = imgs.length
  setTimeout(slide, stayTime)
  onclickedAndShowClickedImg()


  function getImgElements () {
    var slideImgs
    slideImgs = document.querySelectorAll('li.gallery-slide img')
    return slideImgs
  }

  function hideOtherImgs() {
    imgs[current].style.opacity = 1
    each(imgs,function(img, key){
      if (key !== current) {
        img.style.opacity = 0
      }
    })
  }

  function slide() {
    clearInterval(interval)
    var next 
    function eachSlide() {
      next = getNext()
      fadeOut(current)
      fadeIn(next)
      current = next
    }
    eachSlide()
    interval = setInterval(eachSlide, slideTime + stayTime)
  }

  function getNext(){
    if (current === total - 1 ) {
      return 0
    } else {
      return current + 1
    }
  }

  function fadeIn(num, time) {
    var img 
    var animateTime
    var imgCurrentOpacity

    img = imgs[num]
    animateTime = time || slideTime 
    clearInterval(intervals[num])
    imgCurrentOpacity = parseFloat(img.style.opacity) 
    intervals[num] =  animateOpacity(img, animateTime ,imgCurrentOpacity, 1)
  }

  function fadeOut(num, time) {
    var img
    var animateTime
    var imgCurrentOpacity

    img = imgs[num]
    animateTime = time || slideTime 
    clearInterval(intervals[num])
    imgCurrentOpacity = parseFloat(img.style.opacity) 
    intervals[num] = animateOpacity(img, animateTime, imgCurrentOpacity, 0)
  }

  function animateOpacity(element, animateTime, from, to) {
    var counts
    var eachOpacity
    var currentOpacity
    var animateInterval

    counts = animateTime / 1000 * frames 
    eachOpacity = getEachTimeOpacityToChage(from, to, counts)
    currentOpacity = from

    function changeFrame() {
      currentOpacity += eachOpacity
      element.style.opacity = currentOpacity
    }

    function isAnimateStop() {
      return Math.abs(currentOpacity - to) < 0.01
    }

    animateInterval = setInterval(function(){
      if (!isAnimateStop()) {
        changeFrame()
      } else {
        clearInterval(animateInterval)
      }
    }, eachFrameTime)

    return animateInterval
  }

  function getEachTimeOpacityToChage(from, to, counts) {
    var change
    change = ( to - from ) /counts 
    return change
  }

  function onclickedAndShowClickedImg() {
    var ctrls
    ctrls = document.querySelectorAll('li.slide-ctrl')
    each(ctrls, function(ctrl){
      ctrl.addEventListener('click', showClickedImg)
    })
  }

  function showClickedImg(event) {
    var clicked 
    clicked = parseInt(event.target.id.slice(5))
    clearInterval(interval)
    clearTimeout(clickTimeout)
    fadeOut(current, 500) 
    fadeOut(getOther(current, clicked), 500) 
    fadeIn(clicked, 500)
    clickTimeout = setTimeout(function(){
      slide()
    }, slideTime)
    current = clicked 
  }

  function getOther(a, b) {
    var arr = [ 0, 1, 2 ]
    var other = 0
    each(arr,function(num){
      if (num !== a && num !== b){
        other = num
      }
    })
    return other
  }

  function each(array, iterator) {
    var i = 0
    var len = array.length
    for(;i < len; i++) {
      iterator(array[i], i)
    }
  }

})();