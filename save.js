
// Before running this code make sure to download "npm install requirejs" in terminal
// Need to do this to be able to use require in js
// let userName = document.getElementById("userName");
// let email = document.getElementById("email");
// let feedback = document.getElementById("feedback");
// let rate1 = document.getElementById("A");
// let rate2 = document.getElementById("B");
// let rate3 = document.getElementById("C");
// let rate4 = document.getElementById("D");
// let rate5 = document.getElementById("E");
// let rate = 0;
// const infoButton = document.getElementById('btnsubmit')

// make sure that the page is loaded before running anything
// need ev always when you use a click event or load event or anything
const addInfo = (ev)=>{
    ev.preventDefault(); // Stops page from loading automatically, save data
    let rate = 0;
    // add the rate if statements
    const user = {
        id: Date.now(), // gives current date
        "name": document.getElementById('userName').value,
        "email": document.getElementById('email').value,
        "feedback": document.getElementById('feedback').value,
        "rating": rate
    };
    let fs = require('fs')
    fs.writeFile('feedback.json', data, err => {
        if (err) {
            console.err;
            return;
        }
        console.log("JSON data is saved.");
    });
    console.warn('added', user);
    document.querySelector('form').reset();
}


// // runs this code when the btnsub
// if (infoButton) {
//     infoButton.addEventListener('click', saveInfo, false);
//   }

// function saveInfo(){
//     const fs = require('fs');
//     if (rate1.value != null) {
//         rate = 1;
//     }

//     if (rate2.value != null) {
//         rate = 2;
//     }

//     if (rate3.value != null) {
//         rate = 3;
//     }

//     if (rate4.value != null) {
//         rate = 4;
//     }

//     if (rate5.value != null) {
//         rate = 5;
//     }

//     // create a JSON object
//     const user = {
//         "name": userName.value,
//         "email": email.value,
//         "feedback": feedback.value,
//         "rating": rate
//     };

//     // const finished = (error) => {
//     //     if(error){
//     //         console.error(error)
//     //         return;
//     //     }
//     // }
//     // convert JSON object to string
//     const data = JSON.stringify(user);
//     //fs.writeFile('feedback.json',jsonData,finished)
//     // write JSON string to a file
//     fs.writeFile('feedback.json', data, (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("JSON data is saved.");
//     });
// }