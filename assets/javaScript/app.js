// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAEzv1kuChFBRClgNoaStov8oqGIOIyZxA",
    authDomain: "traintimes-6d1a4.firebaseapp.com",
    databaseURL: "https://traintimes-6d1a4.firebaseio.com",
    projectId: "traintimes-6d1a4",
    storageBucket: "",
    messagingSenderId: "539361636374",
    appId: "1:539361636374:web:60836fa82a22b8d30c8537"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

// Submit Button
$("#add-train-button").on('click', function(event) {
    event.preventDefault();

    //Grab user input
    var empName = $('#name-input').val().trim();
    var empLocal = $('#location-input').val().trim();
    var empTime = $('#time-input').val().trim();
    var empFreq = $('#frequency-input').val().trim();
    
    //Object to hold data
    var newEmp = {
        name: empName,
        local: empLocal,
        time: empTime,
        freq: empFreq
    };

    //Upload data to database
    database.ref().push(newEmp);

    console.log(newEmp.name);
    console.log(newEmp.local);
    console.log(newEmp.time);
    console.log(newEmp.freq);
});

    



    //Clear text-boxes

// Create event to add train to Firebase
// Add HTML for user input

    //Create variables

    //Format time

    //Math

    //Create new row

    //Append to HTML
