//Here the data file is being loaded 
var friendsList = require('../data/friends');

module.exports = function(app) {

    //obtainign the json of the friends file 
    app.get("/apiRoute/friends", function(req, res) {
        res.json(friendsList)
        console.log(res);
    });






}