{/* // Import the functions you need from the SDKs you need */ }
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js2";



{/* // Your web app's Firebase configuration */ }

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCRLnOKyAmUHwwcbwHW04X-VzkBIXhnpsE",
    authDomain: "cloud-46141.firebaseapp.com",
    databaseURL: "https://cloud-46141-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cloud-46141",
    storageBucket: "cloud-46141.appspot.com",
    messagingSenderId: "89786228640",
    appId: "1:89786228640:web:fb0bc1df07ed908a870ec5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

document.getElementById("form_container").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var emailid = document.getElementById("emailid").value;
    var msgContent = document.getElementById("msgContent").value;
    saveMessages(name, emailid, msgContent);
    document.getElementById("contactForm").reset();

}

function saveMessages(name, emailid, msgContent){

    set(ref(database,'Name'+": "+name),{
    
    name: name,
    
    emailid: emailid,
    
    msgContent: msgContent,})};
    