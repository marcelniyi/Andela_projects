  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8lob9tDW6aW-xwxQQWq8h4fztPRbZy1Q",
    authDomain: "maxradio-73510.firebaseapp.com",
    databaseURL: "https://maxradio-73510.firebaseio.com",
    projectId: "maxradio-73510",
    storageBucket: "maxradio-73510.appspot.com",
    messagingSenderId: "24502352094",
    appId: "1:24502352094:web:aaf19715b7a87cd0c62a4f"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();

function init(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    db.collection('Users').doc(user.uid).get().then((data) => {
      localStorage.setItem("username", data.data().names);

      const user = {"uid": data.id}
      localStorage.setItem("user", JSON.stringify(user));
      // alert(user.uid);

        if(data.data().role === "Admin"){
          window.location.href = "dashboard.html";
        }
        if(data.data().role === "Guest"){
          window.location.href = "userAdmin.html";
        }
    });
  } else {
    console.log("not logged in");
  }
  });
}


const currentUser = JSON.parse(localStorage.getItem("user"));
const user = currentUser.uid;

const userName = localStorage.getItem("username");
console.log(userName);
