// Xiang Wang @ 2016-09-27 17:37:18

a = 8
switch (a) {
  case 1:
    console.log("a=1");
    break;
  case 2:
    console.log("a=2");
    // break;
  case 3:
    console.log("a=3");
    break;
  case 7:
  case 8:
  case 9:
    console.log('a=7,8,9');
    break
  default:
    console.log("default");
  case 4:
    console.log("a==4");
}
