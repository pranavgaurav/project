let showbtn = document.getElementById('showbtn');
let close = document.getElementById('close');
let pop = document.getElementById('pop');
let popup = document.querySelector(".popup");

// show popup on click
showbtn.addEventListener("click",()=>{
  popup.style.display = "block";
  showbtn.style.display = "none";
  document.body.style.backgroundColor = "#9AE9B1";
  pop.style.display = "none";
})

// close the popup on click
close.addEventListener("click", ()=>{
  popup.style.display = "none";
  showbtn.style.display = "block";
  document.body.style.backgroundColor = "#09DBD450";
  pop.style.display = "block";
})
