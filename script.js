function SwapDivsWithClick(div1)
{
  div2 = "";
  if(div1 == "path1"){
    div2 = "tourguide1";
  }
  else if (div1 == "path2") {
    div2 = "tourguide2";
  }
  else if (div1 == "tourguide1"){
    div2 = "path1";
  }
  else if (div1 == "tourguide2") {
    div2 = "path2";
  }

  d1 = document.getElementById(div1);
  d2 = document.getElementById(div2);
  
  d1.style.display = "block";
  d2.style.display = "none";

}
