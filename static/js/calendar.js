/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("WeekFilter").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("WeekFilter");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function ToggleVisibility(week) {
  //if it's invisible, make it visible
  if (document.getElementById(week).style.display == "none")
  {
    document.getElementById(week).style.display = "block";
  }
  else{
    document.getElementById(week).style.display = "none";
  }
}

document.getElementById('calendar').onclick = () => myFunction()
