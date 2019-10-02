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
    var trainName = $('#name-input').val().trim();
    var trainLocal = $('#location-input').val().trim();
    var trainTime = $('#time-input').val().trim();
    var trainfreq = $('#frequency-input').val().trim();
    
    //Object to hold data
    var newTrain = {
        name: trainName,
        local: trainLocal,
        time: trainTime,
        freq: trainfreq
    };

    //Upload data to database
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.local);
    console.log(newTrain.time);
    console.log(newTrain.freq);

    alert('Train sucessfully added!')

    //Clear text-boxes
    $('#name-input').val('');
    $('#location-input').val('');
    $('#time-input').val('');
    $('#frequency-input').val('');
});

// Create event to add train to Firebase
// Add HTML for user input

    //Create variables

    //Format time

    //Math

    //Create new row

    //Append to HTML
