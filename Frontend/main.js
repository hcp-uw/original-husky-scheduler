// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC1Cs3Rtn78Fm7Oa76X5jpFvgxNoK9vNqQ",
//   authDomain: "contactpagehpc.firebaseapp.com",
//   projectId: "contactpagehpc",
//   storageBucket: "contactpagehpc.appspot.com",
//   messagingSenderId: "770567537858",
//   appId: "1:770567537858:web:d9b3e0a89f6e915ce0e75b",
//   measurementId: "G-S3JD4MQLYS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // needed to reach firebase database
// const db = getDatabase(app);

// // listend for form submit
// // "submitForm" is the function being used
// const contact = document.getElementById('feedbackForm');
// if (contact){
//     contact.addEventListener('submit', submitForm);
// }


// // This function dictates what happens when we submit the form
// function submitForm(e){
//     // stop it from automaically submiting it
//     e.preventDefault();

//     // Get the values
//     var name = getInputVal('userName');
//     var email = getInputVal('email');
//     var feedback = getInputVal('feedback');

//     set(ref(db, 'user/' + name),
//     {
//         username: name,
//         email: email,
//         feedback: feedback
//     });

//     alert("success");
// }

// // Function to get formm values
// function getInputVal(id){
//     return document.getElementById(id).value;
// }


