let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let apiRoutes = require("./api-routes")

let app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/blog-api', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api',apiRoutes);

app.listen(port, function () {
     console.log("Running blog-api on port " + port);
});