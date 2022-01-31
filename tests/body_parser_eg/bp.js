const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send('<form action="/product" method="post"><input name = "title"><button type="submit">Submit</button> </form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('back');
});

var server = app.listen(3000, () => {
    console.log("Your server is running on 3000");
})