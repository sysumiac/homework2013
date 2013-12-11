/*!
 * @Copyright(c) 2013 MIAC <sysumiac@gmail.com> All rights reserved.
 * @license MIT
 * @version v0.0.1
 *
 * @Author Dai jiahua
 * @Date 2013/12/10
 * 
 * https://github.com/sysumiac
 */
;(function() {
  'use strict'

  var imgs = $('li.gallery-slide')
  var currentIndex = 0
  var slideStatus = 1
  var nextIndex

  var IN_PROCESS = 2
  var READY_TO_SLIDE = 0
  
  var DURATION = 3000
  var FRAME_DURATION = 1000 / 60
  var STAY_TIME = 3000

  init()

  function init() {
    setImgsOpacity()
    setTimeout(slide, STAY_TIME)
  }

  function setImgsOpacity() {
    for (var i = 0, len = imgs.length; i < len; i++) {
      if (i === currentIndex) {
        imgs[i].css('opacity', 1)
      } else {
        imgs[i].css('opacity', 0)
      }
    }
  }

  function slide() {
    slideStatus--
    if (slideStatus === READY_TO_SLIDE) {
      nextIndex = getNext()
      imgs[currentIndex].fadeOut(DURATION, slide)
      imgs[nextIndex].fadeIn(DURATION, slide)
      currentIndex = nextIndex
      slideStatus = IN_PROCESS
    } 
  }

  function getNext() {
    nextIndex = currentIndex + 1
    if (nextIndex === imgs.length) {
      nextIndex = 0
    }
    return nextIndex
  }

  function $(selector) {
    var elems = document.querySelectorAll(selector)
    var jqLikeObjs = []
    for (var i = 0, len = elems.length; i < len; i++) {
      var jqLikeObj = {}
      jqLikeObj[0] = elems[i]
      jqLikeObjs[i] = jqLikeObj
      injectMethods(jqLikeObj)
    }
    return jqLikeObjs
  }

  function injectMethods(jqLikeObj) {
    jqLikeObj.css = css
    jqLikeObj.fadeOut = fadeOut
    jqLikeObj.fadeIn = fadeIn
    jqLikeObj.fadeTo = fadeTo
    jqLikeObj.stop = stop
  }

  function css(prop, value) {
    if (value !== undefined) {
      this[0].style[prop] = value
      return this
    } else {
      return this[0].style[prop]
    }
  }

  function fadeOut(durantion, callback) {
    this.fadeTo(0, durantion, callback)
    return this
  }

  function fadeIn(durantion, callback) {
    this.fadeTo(1, durantion, callback)
    return this
  }

  function fadeTo(opacity, durantion, callback) {
    var startOpacity = parseFloat(this.css('opacity')) || 0
    var endOpacity = opacity
    var totalAnimateTime = durantion / FRAME_DURATION
    var detailOpacity = (endOpacity - startOpacity) / totalAnimateTime
    var currentOpacity = startOpacity
    var that = this

    this.fxTimer = setInterval(function () {
      currentOpacity += detailOpacity
      totalAnimateTime--
      that.css('opacity', currentOpacity)
      if (totalAnimateTime <= 0) {
        that.stop()
        setTimeout(callback, STAY_TIME)
      }
    }, FRAME_DURATION)

    return this
  }

  function stop() {
    clearInterval(this.fxTimer)
    return this
  }

})();