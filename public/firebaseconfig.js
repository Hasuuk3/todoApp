
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getDatabase ,ref,set,push,onValue,onChildRemoved ,update ,remove } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDvI2zAAuhB52xEZ5oWnwlt-sgX3d2tTA8",
    authDomain: "todoapp-c8f65.firebaseapp.com",
    projectId: "todoapp-c8f65",
    storageBucket: "todoapp-c8f65.appspot.com",
    messagingSenderId: "591206277509",
    appId: "1:591206277509:web:2a39f2fe6688813155e4ec"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  export{database,ref,set,push,onValue,onChildRemoved,update ,remove }