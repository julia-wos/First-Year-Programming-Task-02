/**
 * Created by WOSJ1_17 on 12/12/2017.
 */
var Name = [];
var age = [];
var gen = [];
var Scores = [];

var s = 2;
var gymnastNo = 1;


function summarize() {


    console.log(gymnastNo);

    //assigning names, ages and genders to different arrays
    Name[Name.length] = document.getElementById("name").value;
    age[age.length] = document.getElementById("age").value;
    gen[gen.length] = document.getElementById("gen").value;



    //checking
    console.log(Name);
    console.log(age);
    console.log(gen);

    //assigning first score to an array
    //Scores[0] = [];
    Scores[gymnastNo - 1] = [];
    Scores[gymnastNo - 1][0] = parseInt(document.getElementById("s1").value);
    console.log(Scores);


    //this is a loop that assigns all scores to the array

    for ( var i = 1; i < (s - 1); i++){
        var number = "scoreno" + (i + 1);
        console.log(number);

        Scores[gymnastNo - 1][i] = parseInt(document.getElementById(number).value);
        console.log(Scores[gymnastNo - 1][i]);
    }

    var sum = 0;

    //this loop sums up all scores
    for (var k = 0; k < (s - 1); k++){
        sum += Scores[gymnastNo - 1][k];
        console.log(sum);
    }

    console.log(s);
    var avg = sum /(s - 1);



    //output with name, age and gender
    document.getElementById("stats").innerHTML += ("<h1>Gymnast No: " + gymnastNo + "</h1></br>Name: " + Name[gymnastNo - 1] + "</br>Age: " + age[gymnastNo - 1] + "</br>Gender: " + gen[gymnastNo - 1] + "</br></br>");

    //output with scores
    for ( var l = 0; l < (s - 1); l++){
        document.getElementById("stats").innerHTML += ("Score " + (l + 1) + " : " + Scores[gymnastNo - 1][l] + "</br>");
    };

    //output for an average score
    document.getElementById("stats").innerHTML += ("Average Score: " + avg);
    document.getElementById("stats").innerHTML += "</br></hr>";


    gymnastNo++;


}


function addScores () {

    //adding new input field
    document.getElementById("scores").innerHTML += ('<tr><td width="100">Score ') + s + (':</td><td><input id="nextScore" type="number" /></td></tr>');
    var scoresid = "scoreno" + s;
    document.getElementById("nextScore").id = scoresid;
    s++;
}