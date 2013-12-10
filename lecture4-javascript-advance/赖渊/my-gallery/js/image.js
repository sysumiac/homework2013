var pics = [
  document.getElementById('gallery-slide1'),
  document.getElementById('gallery-slide2'),
  document.getElementById('gallery-slide3')
]

var ctrls = [
  document.getElementById('control-circle1'),
  document.getElementById('control-circle2'),
  document.getElementById('control-circle3')
]

var currentPicIndex = 0
var fadeInTimer = null
var fadeOutTimer = null

var ANIMATION_FRAME = 1000 / 60
var ANIMATION_TIME = 3000

function addActionToController() {
  for (var i = 0, len = ctrls.length; i < len; i++) {
    ctrls[i].addEventListener('click', (function(index) {
      return function() {
        fadeByIndex(index)
        fadeByIndex(currentPicIndex, true)
      }
    })(i), false)
  }
}

function fadeByIndex(index, isFadeOut) {
  var pic = pics[index]
  var opacity = isFadeOut ? 0: 1
  var sign = isFadeOut ? -1: 1
  var timer = isFadeOut ? fadeOutTimer: fadeInTimer

  clearTimeout(fadeInTimer)
  pic.style.opacity = opacity
  
  timer = setTimeout(function() {
    opacity += sign * 1 / (ANIMATION_TIME / ANIMATION_FRAME)
    pic.style.opacity = opacity
    timer = setTimeout(arguments.callee, ANIMATION_FRAME)
  }, ANIMATION_FRAME)
}

addActionToController()