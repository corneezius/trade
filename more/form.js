// Initialize Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDzF8wXH6JSLeW0m5HphLme0V7nV15srrk",
  authDomain: "rumble-signup.firebaseapp.com",
  databaseURL: "https://rumble-signup.firebaseio.com",
  projectId: "rumble-signup",
  storageBucket: "rumble-signup.appspot.com",
  messagingSenderId: "142131072925",
  appId: "1:142131072925:web:fdd8a9ed39d5f7b4e46974",
  measurementId: "G-RDXNCRB8HG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 var url = window.location.href;


var signupBtn = document.getElementById('submit');
var signupForm = document.getElementById('signup-form');
var signupSuccess = document.getElementById('signup-success');
var signupError = document.getElementById('signup-error');


var form = document.getElementById("signup-form");

function handleForm(event) {
  // prevent page reload
  event.preventDefault();
  var userEmail = document.getElementById('email').value;
  console.log(userEmail);
  var myFirebaseRef = firebase.database().ref();

  signupError.innerHTML = '';
  signupSuccess.innerHTML = '';
  if (userEmail.includes("@")) {
    myFirebaseRef.push({
      email: userEmail,
      url: url
    });
    jQuery(function($) {
    $("#signup-success").html("Thanks, we'll be in touch soon!").show().delay(3000).fadeOut(2000);
    });
  } else {
    document.getElementById("email").value = "";
    jQuery(function($) {
    $("#signup-error").html('Please make sure you entered your e-mail correctly!').show().delay(3000).fadeOut(2000);
    });
    return false;
  }
  document.getElementById("email").value = "";
};


form.addEventListener('submit', handleForm);
