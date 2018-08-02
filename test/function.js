// Xiang Wang @ 2018-08-02 11:30:55


function showarguments() {
  console.log("showarguments")
  var args = arguments;
  debugger;
  console.log("done");
}


function call() {
  var a=1
  var b=2
  var c=3
  showarguments(a=a, b=b);
}

call();
