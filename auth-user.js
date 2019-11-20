global.fetch = require('node-fetch');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var authenticationData = {
    Username : process.argv[2],
    Password : process.argv[3],
};
var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

var poolData = { UserPoolId : 'us-west-2_zYdnNk3cC',
    ClientId : '1tpqminf29rhmt2v6c6dfjf3ht'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var userData = {
    Username : process.argv[2],
    Pool : userPool
};
var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        
        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
        var idToken = result.idToken.jwtToken;
        // console.log('Access token: ' + accessToken);
        console.log('ID token: ' + idToken);
    },

    onFailure: function(err) {
        console.log(err);
    },

});