function track() {
  var value1 =parseInt(document.getElementById('a').value);
  var value2 =parseInt(document.getElementById('b').value);
  var value3 =parseInt(document.getElementById('c').value);

  if (value1 || value2 || value3 isNaN()) {
    alert("PLEASE ENTER NUMERIC VALUES")
  }
  else{
    if (value1+value2 > value3 && value2+value3>value1 && value1+value3>value2){
      if (value1==value2 && value2==value3 && value1==value3) {
        document.getElementById('demo').innerHTML = 'This is an <strong>equillateral</strong> triangle <br> <img src="images/equillateral.png">'
      }
      else if (value1!==value2 && value2!=value3 && value1!==value3){
      document.getElementById('demo').innerHTML= 'This is a <strong>Scalene</strong> triangle <br> <img src="images/scalene.png">'
      }
      else{
        document.getElementById('demo').innerHTML='This is a <strong>isoscel</strong> triangle <br> <img src="images/isosceless.png">'
      }
    }
    else{
      document.getElementById('demo').innerHTML ='This is <strong>NOT A TRIANGLE</strong> <br>  <img src="images/warning.png">'
    }
  }

}
