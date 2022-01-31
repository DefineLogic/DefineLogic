var express = require('express');
var app = express();
var map1 = new Map();
var prevRndm;
var user;
const quizList = [
    [3, 1, 4, 1, 5],
    [1, 1, 2, 3, 5], //fibonacci
    [1, 4, 9, 16, 25], //squares
    [2, 3, 5, 7, 11], //primes
    [1, 2, 4, 8, 16] //powers of 2
];
const correct = [9, 8, 36, 13, 32];

class User {
    constructor(id, score, count) {
        this.id = id;
        this.score = score;
        this.count = count;
    }
}

//set view engine
app.set("view engine", "pug")
app.use('/numberQuiz', function(req, res, next) {
    var userId = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    var rndm = Math.floor(Math.random() * 5);

    if (req.query.answer) {
        user = map1.get(parseInt(req.query.userId));
        var answer = req.query.answer;

        if (user) {
            user.count = user.count + 1;
            if (answer == correct[prevRndm])
                user.score = user.score + 1;
            map1.set(userId, user);
        } else {

        }

        if (user.count == 5) {
            res.render('result', { score: user.score });
        }
        //var currentScore = req.body.score;
        res.render('index', { inputs: quizList[rndm], score: user.score, userId: user.id }); //sends HTML version of sample.pug to Browse

    } else {
        user = new User(userId, 0, 0);
        map1.set(userId, user);
        res.render('index', { inputs: quizList[rndm], score: user.score, userId: user.id }); //sends HTML version of sample.pug to Browse
    }
    prevRndm = rndm;
});
var server = app.listen(4000, function() {
    console.log('Node server is running..');
});