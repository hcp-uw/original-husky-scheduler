// import { writeFile, writeFileSync } from 'fs';

// const content = 'Some content!';
// const form = document.querySelector('submitIt')
// if (form) {
//     form.addEventListener('submit', () => {
//         const user = {
//             "name": userName.value,
//             "email": email.value,
//             "feedback": feedback.value,
//             "rating": 5
//         };
//         const data = JSON.stringify(user);
//         writeFileSync('test.json', data, err => {
//         if (err) {
//             console.error(err);
//         }
//         // file written successfully
//         console.log("done!");
//         });
//     })
// }

// code needs to be in node.js, needs node manager
// pluralist.com

// import { writeFile } from 'fs';

// window.addEventListener("load", () => {
//     const infoButton = document.getElementById("submitIt");
//     // // // runs this code when the btnsub
//     if (infoButton) {
//         infoButton.addEventListener('click', saveInfo);
//         console.log("An event has been added to infoButton");
//     }

//     const form = document.querySelector('submitIt')

//     if (form){
//     form.addEventListener('submit', (e) => {
//         // stops the actual website from reloading
//         e.preventDefault();
//         const fs = require('fs');
//         const user = {
//             "name": userName.value,
//             "email": email.value,
//             "feedback": feedback.value,
//             "rating": 5
//         };
//         const data = JSON.stringify(user);
//         fs.writeFile('feedback.json', data, (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("JSON data is saved.");
//         });
//         window.location.href = "";
//     })
//     }

//     function saveInfo(){
//         console.log("Feedback form has submitted");

//     // //     // if (rate1.value != null) {
//     // //     //     rate = 1;
//     // //     // }

//     // //     // if (rate2.value != null) {
//     // //     //     rate = 2;
//     // //     // }

//     // //     // if (rate3.value != null) {
//     // //     //     rate = 3;
//     // //     // }

//     // //     // if (rate4.value != null) {
//     // //     //     rate = 4;
//     // //     // }

//     // //     // if (rate5.value != null) {
//     // //     //     rate = 5;
//     // //     // }

//     //     // create a JSON object
//         const user = {
//             "name": userName.value,
//             "email": email.value,
//             "feedback": feedback.value,
//             "rating": 5
//         };

//         const finished = (error) => {
//             if(error){
//                 console.error(error)
//                 return;
//             }
//         }

//         // convert JSON object to string
//         const data = JSON.stringify(user);
//         writeFile('feedback.json', data, finished)
        
//         // write JSON string to a file
//         writeFile('feedback.json', data, (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("JSON data is saved.");
//         });
//     }
// })

// NODE.JS
// Node lets us break it down to non-blocking so the webserver itself
// does not slow down
// 'exit' - shows like the actual function being done on the website
// function is what to do
// process.on('exit', function(){})

// Sync == blocking this is useful!!!
// example code where in the terminal if you call node save.js
// it should print out hello!
// const {readFile, readFileSync } = require('fs');
// const txt = readFileSync('./test.txt', 'utf8');
// console.log(txt);

// WEBSITE TO LOOK AT PLEASE!
// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/contanctpage.html', function (req,res) {
    res.sendFile(__dirname + "/" + "contactpage.html");
})

app.get('/process_get', function (req,res){
    // prepare output in JSON format
    repsonse = {
        User_name:req.query.userName
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
