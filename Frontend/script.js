// function returnText(){
//     let input = document.getElementById("userName").value
//     alert(input)

// }

const firebaseConfig = {
    apiKey: "AIzaSyAHp4jDlL1--Ne-JHrljaPvGaILv3CcmxA",
    authDomain: "original-husky-scheduler.firebaseapp.com",
    databaseURL: "https://original-husky-scheduler-default-rtdb.firebaseio.com",
    projectId: "original-husky-scheduler",
    storageBucket: "original-husky-scheduler.appspot.com",
    messagingSenderId: "166063942758",
    appId: "1:166063942758:web:aa595d79a16b3efaae11a7",
    measurementId: "G-YEET85ZDZC"
    };



firebase.initializeApp(firebaseConfig);

// Handle form submission
const database = firebase.database().ref("feedbackForm");

const userNameInput = document.getElementById("userName");
const emailInput = document.getElementById("email");
const ratingInput = document.querySelector('input[name="rating"]:checked');
const feedbackInput = document.getElementById("feedback");

document.getElementById("feedbackForm").addEventListener("click", (event) => {
  event.preventDefault();

  const userName = userNameInput.value;
  const email = emailInput.value;
  const rating = ratingInput.value;
  const feedback = feedbackInput.value;

  const data = {
    userName: userName,
    email: email,
    rating: rating,
    feedback: feedback,
  };

  const dbRef = ref(database, 'feedbacks');
  push(dbRef, data)
    .then(() => {
      openPopup();
    })
    .catch((error) => {
      console.error("Error writing to Firebase Database: ", error);
    });
});