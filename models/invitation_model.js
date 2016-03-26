var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var InvitationSchema = new Schema({
	userid: Schema.ObjectId,
	username:String,
	phone:String,
	count:String,
	comment:String
});

mongoose.model('invitation', InvitationSchema);
