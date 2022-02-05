function setBg(e){
  if(e.type == 'click')
    {const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    }
  else if(e.type == 'keypress')
  {
    if(e.charCode == 13)
    {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;  
    }
  }
    //console.log(e.type);
  }

  document.body.addEventListener("click", setBg);
  document.addEventListener('keypress',setBg);
  //setBg(); 