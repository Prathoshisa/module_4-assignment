(function (window) {
var hellospeaker = {};
var sayWord = "Hello";
hellospeaker.speak = function (name) {
  console.log(sayWord + " " + name);
}
window.hellospeaker = hellospeaker;
})(window);