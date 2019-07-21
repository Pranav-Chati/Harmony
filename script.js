var user = {name: "Emily Yang", username: "eyangx", pfplink:"https://media.licdn.com/dms/image/C4E03AQEi5MuUpzPPsA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=fMdtOdqDQQjg58kx453tPa-JF6nRKUlL7XnSVYw5ff0"};

var userarray = new Array(60);
userarray[0] = user;

var currentuserpos = 0; //Current user logged in represented by the number of their elemtn in userarray
//filling up user array with our default user object so that we can edit each element w thethe right data, filled array up to 60 objects for now

var i = 1;
for (i=1; i<=60;i++) {
  userarray[i] = user;
}


document.getElementById('epb').onclick = function() {
  var answer = prompt("What would you like to edit? \n 1. Name \n 2. Username \n 3. Profile Picture");
  switch (answer) {
      case '1':
          var answer = prompt("Enter the new desired name");
          if (answer != "") {
            userarray[currentuserpos].name = answer;
            document.getElementById('accname').innerHTML = answer;
          }          
          break;
      case '2':
            var answer = prompt("Enter the new desired username");
            if (answer != "") {
                userarray[currentuserpos].username = answer;
                document.getElementById('username').innerHTML = '@' + answer;
            }
          break;
      case '3':
            var answer = prompt("Enter the image address of your new profile picture");
            if (answer != "") {
                userarray[currentuserpos].pfplink = answer;
                document.getElementById('pfp').src = answer;
            }
           break;
  }

}


