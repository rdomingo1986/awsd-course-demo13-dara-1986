require('dotenv').config();

var AWS = require('aws-sdk');
var util = require('util');

var ec2 = new AWS.EC2({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});

ec2.describeInstances(function (err, response) {
    if(err) return console.log(`Error: ${err}`);
    console.log(`Data: ${util.inspect(response, false, null, true)}`);
});