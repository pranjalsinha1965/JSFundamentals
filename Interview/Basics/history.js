/* History */
alert(window.history.length);
//history.back();
//history.forward();
//history.go(-2);

history.replaceState('beau is good', null, 'http://codepen.io/Beau_Is_Awesome');
console.log(history.state);
history.pushState(null, null, 'freeCodeCamp');
