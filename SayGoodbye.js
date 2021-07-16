(function (window) {
var byespeaker = {};
var sayWord = "Good Bye";
byespeaker.speak = function (name) {
  console.log(sayWord + " " + name);
}
window.byespeaker = byespeaker;
})(window);