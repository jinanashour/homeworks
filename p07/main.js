let calc = document.getElementById('s');

//console.log(char_count(text));
function char_count(str) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) != ' ') 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
function myFunction() {
    let text = document.getElementById('t').value;
    alert("number of letters : "+char_count(text));
  }
calc.addEventListener('click',myFunction);



