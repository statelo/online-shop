const express = require('express');
const app = express();
const authentication = require('./routes/authentication');
const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect('mongodb://localhost:27017/test', (err, connection) => {
	if(err) { console.log(err); }
	db = connection
})

app.use('/authentication', authentication);
app.get('/api/name', (req, res, next) => {
	db.collection('users')
		.find()
		.toArray((err, users) => {
			res.json(users);
		})
})

app.listen(3001, () => {
	console.log("Server listening on port 3001");
})