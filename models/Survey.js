const mongoose = require('mongoose');
const Schema = mongoose.Schema; // const { Schema } = mongoose
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	1: { type: Number, default: 0 },
	2: { type: Number, default: 0 },
	3: { type: Number, default: 0 },
	4: { type: Number, default: 0 },
	5: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent: Date,
	lastResponded: Date
});

mongoose.model('surveys', surveySchema);
