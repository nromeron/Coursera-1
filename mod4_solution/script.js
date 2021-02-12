(function(){

 var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < names.length; i++) {

    var firstletter = names[i].charAt();
    //var word = names[i];
    //var firstletter = word.charAt();
  
    if (firstletter == 'j' || firstletter == 'J') {
      byeSpeaker.speak(names[i]);
    } 
    else {
      helloSpeaker.speak(names[i]);
    }
  }
})();


