function SwapDivsWithClick(div1)
{
  div2 = "";
  if(div1 == "description1"){
    div2 = "description2";
  }
  else {
    div2 = "description1";
  }

  d1 = document.getElementById(div1);
  d2 = document.getElementById(div2);

  d1.style.display = "block";
  d2.style.display = "none";

}
