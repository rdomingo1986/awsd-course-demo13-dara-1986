require('dotenv').config();

var AWS = require('aws-sdk');

var sts = new AWS.STS({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});
    
sts.assumeRole({
    RoleArn: 'arn:aws:iam::864613434505:role/awsd-course-demo13',
    RoleSessionName: 'awsddemo',
    DurationSeconds: 3600,
}, function (err, response) {
    if(err) return console.log(err);
    console.log(response);
});