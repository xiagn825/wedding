var express = require('express'),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')
    Invitation = require('./models/invitation_model');
var app = express();
var conn = mongoose.connect('mongodb://localhost:27017/invitation');
app.set('views', './views');
app.set('view engine', 'html');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser());
app.use('/static', express.static('./static'));
app.get('/', function(req, res) {
    res.render('photo');
});
app.post('/', function(req, res) {
    var InvitationModel = mongoose.model('invitation');
    var invitation = new InvitationModel();  
    console.log('usrename', req.body.name);
    invitation.set('username',req.body.name);
    invitation.set('phone',req.body.phone); 
    invitation.set('count',req.body.count);
    invitation.set('comment',req.body.comment);
    invitation.save(function(err) {
        if (err) {
	    console.log('err', err);
	}
        res.write(JSON.stringify(invitation.toJSON()));
        res.end();
    });

})
app.listen(8081);
