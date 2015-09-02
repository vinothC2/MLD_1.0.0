var application_root = __dirname,
express = require("express"),
path = require("path");

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var databaseUrl = "mongodb://localhost:27017/MLD";
var collections = ["users"];
var db = require("mongojs").connect(databaseUrl, collections);

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(express.static(path.join(application_root, "public")));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.get('/api', function (req, res) {
	res.send('Our Sample API is up...');
});

app.post('/api/login', function(req, res) {
	
    db.users.findOne({userName:req.body.userName,password:req.body.password}, function(err, user) {
        if (err) {
            res.json({
                isLogged: false,
                message: "Error occured: " + err
            });
        } else {
            if (user) {
				db.users.findOne({userName:req.body.userName,password:req.body.password}, function(err, allUsers) {
					if (err) {
						res.json({
							isLogged: true,
							userDetails: user,
							message: "Login Success"
						});
					} else {
						res.json({
							isLogged: true,
							userDetails: user,
							message: "Login Success"
						});
						console.log('sss');
					}
				});
            } else {
                res.json({
                    isLogged: false,
                    message: "Incorrect User name/password"
                });    
            }
        }
    });
});

app.listen(1212, function(){
	console.log('listening on PC1421:1212');
});