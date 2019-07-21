
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFHWJDAm5sztdtpOUo6jRtWBPVbb0pFe0",
    authDomain: "hackcinncinnati.firebaseapp.com",
    databaseURL: "https://hackcinncinnati.firebaseio.com",
    projectId: "hackcinncinnati",
    storageBucket: "",
    messagingSenderId: "881245530267",
    appId: "1:881245530267:web:f2d956873b944941"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
// alert("you made it");
var myuser = firebase.auth().currentUser;
    // User is signed in.
    document.getElementById('login-page').style.opacity = 0;
    document.getElementById('profile-page').style.opacity= 100;
    // user = firebase.auth().currentUser;

    var displayName = myuser.displayName;

    //var email = user.email; We don't need their email on profile page -ayush
    //var emailVerified = user.emailVerified; nobody cares about this
    var photoURL = myuser.photoURL;
  //   var isAnonymous = user.isAnonymous;
  //   var uid = user.uid;
  //   var providerData = user.providerData;
    document.getElementById('accname').innerHTML = displayName;
    document.getElementById('pfp').src = photoURL;
  } else {
    // User is signed out.
    document.getElementById('login-page').style.opacity = 100;
    document.getElementById('profile-page').style.opacity = 0;
  }
});

function registeracc() {
  alert("please end it all");
    var remail = document.getElementById('useremail').value;
    var rname = document.getElementById('dname').value;
    var rpass = document.getElementById('userpass').value;
    var rpurl = document.getElementById('purl').value;
    
    firebase.auth().createUserWithEmailAndPassword(remail, rpass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("Error:" + errorMessage);
      });
      var myuser1 = firebase.auth().currentUser;
      myuser1.updateProfile({
        displayName: "Hack User",
        photoURL: "https://www.random.org/analysis/randbitmap-rdo-section.png"
      }).then(function() {
        alert("Yay! User successfully created! Redirecting to profile..");
      }).catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error: " + errorMessage);

      });

}
function loginaction() {
    var email_address = document.getElementById('username1').value;
    var upassword = document.getElementById('password1').value;

    firebase.auth().signInWithEmailAndPassword(email_address, upassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("Error: " + errorMessage);
      });
      document.getElementById('login-page').style.opacity = 0;
      document.getElementById('profile-page').style.opacity= 100;


    
};
function logoutaction() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}
