let csv_string =
  'name,question,answer\n amy,What has more surface area the eye ball or one large neuron?,They have about the same\n bob,How many synapses does a cerebellar granule cell have?,4\n clair,How long is all your DNA,100 billion km';

var csv = ['csv poop'];
var json = 'json poop';
var questionNumber = '';

function displayEvent(q) {
  document.getElementById('displayQuestionNumber').innerHTML =
    json[q]['Question ID'];
  document.getElementById('displayQuestion').innerHTML = json[q]['Question'];
  document.getElementById('displayAnswer').innerHTML = '';
}

function loader() {
  var fr = new FileReader();
  fr.readAsText(document.getElementById('inputFileToRead').files[0]);
  fr.onload = function () {
    csv = fr.result;
    function csvJSON(csv) {
      //Each line of the CSV becomes a JSON object
      var lines = csv.split('\n');

      var result = []; //Array to hold each line

      var headers = lines[0].split(',');

      questionNumber = lines.length;
      console.log(questionNumber);

      for (var i = 1; i < lines.length; i++) {
        var obj = {}; //Make a JSON object
        var currentline = lines[i].split(',');
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj); //Put the object onto the end of the array
      }
      return result; //return the array
    }
    json = csvJSON(csv);
    let q = 0;
    displayEvent(q);
  };
}

function csvJSON(csv) {
  //Each line of the CSV becomes a JSON object
  var lines = csv.split('\n');

  var result = []; //Array to hold each line

  var headers = lines[0].split(',');

  for (var i = 1; i < lines.length; i++) {
    var obj = {}; //Make a JSON object
    var currentline = lines[i].split(',');
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj); //Put the object onto the end of the array
  }
  return result; //return the array
}
//Print the CSV by iterating through the list
let q = 0;
//document.getElementById("testBody").innerHTML =  json[q]["question"];
function clickForward() {
  if (q == questionNumber - 3) {
    displayEvent(q);
  } else {
    q++;
    displayEvent(q);
  }
}
function clickBackward() {
  if (q == 0) {
    displayEvent(q);
  } else {
    q = q - 1;
    displayEvent(q);
  }
}

function Answer() {
  document.getElementById('displayAnswer').innerHTML = json[q]['Answer'];
}

window.clickForward = clickForward;
window.clickBackward = clickBackward;
window.csvJSON = csvJSON;
window.loader = loader;
window.Answer = Answer;
window.displayEvent = displayEvent;
