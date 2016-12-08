var i = 0;
var x = 0;
var z = 0;
function isInt(n){
  return n % 1 ===0;
}

while (i < 1000) {
  var t = x/3;
  var f = x/5;
  if(x!==0){
    if(isInt(t) && isInt(f)){
      z+=x;
    } else if(isInt(t) || isInt(f)){
      z+=x;
    }
  }
  x += 1;
	i++; 
}
console.log(z);
