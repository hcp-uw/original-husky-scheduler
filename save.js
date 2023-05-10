// make sure that the page is loaded before running anything
// need ev always when you use a click event or load event or anything
// const addInfo = (ev)=>{
//     ev.preventDefault(); // Stops page from loading automatically, save data
//     let rate = 0;
//     // add the rate if statements
//     const user = {
//         id: Date.now(), // gives current date
//         "name": document.getElementById('userName').value,
//         "email": document.getElementById('email').value,
//         "feedback": document.getElementById('feedback').value,
//         "rating": rate
//     };
//     let fs = require('fs')
//     fs.writeFile('feedback.json', data, err => {
//         if (err) {
//             console.err;
//             return;
//         }
//         console.log("JSON data is saved.");
//     });
//     console.warn('added', user);
//     document.querySelector('form').reset();
// }

// code needs to be in node.js, needs node manager
// pluralist.com

import { writeFile } from 'fs';

window.addEventListener("load", () => {
    const infoButton = document.getElementById("submitIt");
    // // // runs this code when the btnsub
    if (infoButton) {
        infoButton.addEventListener('click', saveInfo);
        console.log("An event has been added to infoButton");
    }

    const form = document.querySelector('submitIt')

    if (form){
    form.addEventListener('submit', (e) => {
        // stops the actual website from reloading
        e.preventDefault();
        const fs = require('fs');
        const user = {
            "name": userName.value,
            "email": email.value,
            "feedback": feedback.value,
            "rating": 5
        };
        const data = JSON.stringify(user);
        fs.writeFile('feedback.json', data, (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
        window.location.href = "";
    })
    }

    function saveInfo(){
        console.log("Feedback form has submitted");

    // //     // if (rate1.value != null) {
    // //     //     rate = 1;
    // //     // }

    // //     // if (rate2.value != null) {
    // //     //     rate = 2;
    // //     // }

    // //     // if (rate3.value != null) {
    // //     //     rate = 3;
    // //     // }

    // //     // if (rate4.value != null) {
    // //     //     rate = 4;
    // //     // }

    // //     // if (rate5.value != null) {
    // //     //     rate = 5;
    // //     // }

    //     // create a JSON object
        const user = {
            "name": userName.value,
            "email": email.value,
            "feedback": feedback.value,
            "rating": 5
        };

        const finished = (error) => {
            if(error){
                console.error(error)
                return;
            }
        }

        // convert JSON object to string
        const data = JSON.stringify(user);
        writeFile('feedback.json', data, finished)
        
        // write JSON string to a file
        writeFile('feedback.json', data, (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
    }
})