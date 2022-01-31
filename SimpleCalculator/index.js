const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded());

app.get('/calculator', (req, res, next) => {
    console.log('In the middleware');
    res.send('<form action="/calculate" method="post">First Number:<input name = "firstNumber"><br>' +
        'Second Number:<input name = "secondNumber"><br>' +
        'Select Operation:<select id="operations" name="operations">' +
        '<option value="add" selected>Add</option>' +
        '<option value="subtract">Subtract</option>' +
        '<option value="multiply">Multiply</option>' +
        '<option value="divide">Divide</option>' +
        '</select><br>' +
        '<button type="submit">Submit</button> </form>');
});

app.use('/calculate', (req, res, next) => {
    var first = parseInt(req.body.firstNumber);
    var second = parseInt(req.body.secondNumber);
    var op = req.body.operations;
    var result;
    if (op == 'add')
        result = first + second;
    else if (op == 'subtract')
        result = first - second;
    else if (op == 'multiply')
        result = first * second;
    else if (op == 'divide')
        result = first / second;
    console.log(req.body);
    let respond = `<html><body><h1>The answer is:${result}</h1>` +
        `<a href="/calculator"><button >Another Calculation</button></a></body></html>`;
    res.send(respond);
    //res.redirect('back');
});

var server = app.listen(3000, () => {
    console.log("Your server is running on 3000");
})