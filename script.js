(function (window) {
var names = ["Prathoshisa", "Ramya", "jaanu", "Raju", "Anu", "Jeeva", "Jennie", "Kowsalya", "gayu", "Parvathy", "jos", "keerthu"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byespeaker.speak(names[i]);
  } else {
     window.hellospeaker.speak(names[i]);
  }
}
})(window);