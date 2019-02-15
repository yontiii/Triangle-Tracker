function track() {
  var value1 =parseInt(document.getElementById('a').value);
  var value2 =parseInt(document.getElementById('b').value);
  var value3 =parseInt(document.getElementById('c').value);

  if (value1+value2 > value3 && value2+value3>value1 && value1+value3>value2){
    if (value1==value2 && value2==value3 && value1==value3) {
      alert("THIS IS AN EQUILATERALL TRIANGLE")
    }
    else if (value1!==value2 && value2!=value3 && value1!==value3){
    alert("THIS IS A SCALENE TRIANGLE")
    }
    else{
      alert("THE TRIANGLE IS ISOSCELESS")
    }
  }
  else{
    alert("THIS IS NOT A TRIANGLE")
  }
}
