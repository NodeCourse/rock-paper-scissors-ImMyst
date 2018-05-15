const express = require('express');
const app = express();
const randomItem = require('random-item');


app.get('/homepage'), (req, res) => {
  res.render('homepage', { choices });
}

const choices = ['rock', 'paper', 'scissors'];
const results = ['Égalité !', 'Bien joué !', 'Dommage !'];

function userVsComputer(userChoice, computerChoice) {
    var result;

    if(userChoice == computerChoice) {
        result = results[0];
    } else if(userChoice == "rock" && computerChoice == "paper") {
        result = results[2];
    } else if(userChoice == "paper" && computerChoice == "rock") {
        result = results[1];
    } else if(userChoice == "scissors" && computerChoice == "rock") {
        result = results[2];
    } else if(userChoice == "rock" && computerChoice == "scissors") {
        result = results[1];
    } else if(userChoice == "paper" && computerChoice == "scissors") {
        result = results[2];
    } else if(userChoice == "scissors" && computerChoice == "paper") {
        result = results[1];
    }

    return result;
}

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/homepage', (req, res) => {
    res.render('homepage');
});

app.get('/:choice', (req, res) => {
  var computerChoice = randomItem(choices);
    res.render('choice', { choice: req.params.choice, computer: computerChoice, result: userVsComputer(req.params.choice, computerChoice)});
});

app.listen(3000);
