const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, connection) => {
	assert.equal(null, err);
	console.log('Successfully connected to mongodb');
	module.exports.db = connection;
})