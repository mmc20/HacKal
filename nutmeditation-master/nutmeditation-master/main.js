  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDcTpbkOiB8IRUhNScPV8d3F4S0Hs63cTA",
  authDomain: "hackrice75.firebaseapp.com",
  databaseURL: "https://hackrice75.firebaseio.com",
  projectId: "hackrice75",
  storageBucket: "hackrice75.appspot.com",
  messagingSenderId: "547274297434"
};
firebase.initializeApp(config);

// ------ SIGN IN/SIGN UP ------- 
const auth = firebase.auth();

function signInwEmail(email, password){
    const email = document.getElementById('txtEmail').value;
    const pass = document.getElementById('txtPassword').value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass);
    console.log(email, pass);
    if(email)
    window.open('INSERT PAGE TO OPEN HERE');

}


//setting the global variable for the date
var date=new Date();
var year=mydate.getYear();
if (year < 1000)
  year += 1900;

var day = mydate.getDay(); //current day
var month = mydate.getMonth(); //current month
var daym = mydate.getDate();
var h = mydate.getHours();
var m = mydate.getMInutes();
var s = mydate.getSeconds();

m = checkTime(m);
s = checkTime(s);

function checkTime(i){
  if (i < 10) {i = "0" + i};
  return i;
}


function beginJourney(){
  var database = firebase.database();
  var feelings = database.ref('feeling');

  var data = {
    date: 

  }
  ref.push(data)
}

function submitFeeling(){
  var data = {
    uploadDay = day;
    uploadDaym = daym;
    uploadHour = h;
    uploadMin =m;
    uploadSec = s;

    //decide feeling type
    //feeling
  }
  var ref = database.ref('feelings');
  ref.push(data)
}
