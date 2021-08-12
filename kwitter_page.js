//YOUR FIREBASE LINKS
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

    var userName=localStorage.getItem("username");
    var roomName=localStorage.getItem("room_name");
console.log(roomName);
    function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(roomName).push({
                name:userName,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("outPut").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("outPut").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(roomName).child(message_id).update({
            like:updated_likes
      });
}

function logOut() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }

    function back() {
          window.location="kwitter_room.html";
    }