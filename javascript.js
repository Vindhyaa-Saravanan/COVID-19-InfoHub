// JAVASCRIPT FOR WEB TECH CWK2
// Code to calculate time and greet user
$(document).ready(function(){

  var today = new Date()
  var currentHour = today.getHours()

  if ((currentHour >= 0) && (currentHour < 12)) {
    document.getElementById("greeting").innerHTML = 'Good Morning!';
  }
  else if ((currentHour >= 12) && (currentHour < 17)) {
    document.getElementById("greeting").innerHTML = 'Good Afternoon!';
  }
  else {
    document.getElementById("greeting").innerHTML = 'Good Evening!';
  }

});

// ADVANCED HTML5 FEATURE - LOCAL STORAGE
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    }
    else {
      localStorage.clickcount = 1;
    }
    document.getElementById("resultClick").innerHTML = "Congratulations! " + localStorage.clickcount + " others also clicked this button.";
  }
  else {
    document.getElementById("resultClick").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

// Function to open and close newsletter sign up form
function openForm() {
  document.getElementById("form1").style.display = "block";
}

function closeForm() {
  document.getElementById("form1").style.display = "none";
}


// Function to scroll to text using buttons
function scrollBrain() {
  document.getElementById('Brain').scrollIntoView();
}

function scrollHeart() {
  document.getElementById('Heart').scrollIntoView();
}

function scrollLungs() {
  document.getElementById('Lungs').scrollIntoView();
}

function scrollKidneys() {
  document.getElementById('Kidney').scrollIntoView();
}


// Function to validate feedback form
function validateForm2() {
  if( document.form1.fname.value == "" ) {
    document.getElementById("warning1").innerHTML = 'Please provide your name.';
    document.form1.fname.focus() ;
    return false;
  }

  if( document.form1.email.value == "" ) {
    document.getElementById("warning2").innerHTML = 'Please provide your email.';
    document.form1.email.focus() ;
    return false;
  }

  if(!document.getElementById('reqcheckbox').checked){
    document.getElementById("warning3").innerHTML = 'You must agree to the Terms and Conditions to sign up.';
    return false;
  }
}

// ADVANCED HTML5 FEATURE - GEOLOCATION
// Function to get user location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML = "Thank you for your location information!"
}

// Error checking for geolocation
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
    document.getElementById("demo").innerHTML = "User denied the request for Geolocation."
    break;
    case error.POSITION_UNAVAILABLE:
    document.getElementById("demo").innerHTML = "Location information is unavailable."
    break;
    case error.TIMEOUT:
    document.getElementById("demo").innerHTML = "The request to get user location timed out."
    break;
    case error.UNKNOWN_ERROR:
    document.getElementById("demo").innerHTML = "An unknown error occurred."
    break;
  }
}
