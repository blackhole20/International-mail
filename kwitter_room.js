
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyA8janzn5Dh0Fwb9_t9ZzPfhofxoPbapko",
      authDomain: "kwitter-eaf13.firebaseapp.com",
      databaseURL: "https://kwitter-eaf13-default-rtdb.firebaseio.com",
      projectId: "kwitter-eaf13",
      storageBucket: "kwitter-eaf13.appspot.com",
      messagingSenderId: "1049336664028",
      appId: "1:1049336664028:web:b6028185a83adf8973c919",
      measurementId: "G-N2QQ9ZTT81"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("username");

    document.getElementById("user_name").innerHTML="welcome "+ user_name;

    function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("outPut").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("outPut").innerHTML+= row;

      //End code
      });});}
getData();

function redirecttoroom(name) {
  console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html"; 
}

function logOut() {
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html";
}