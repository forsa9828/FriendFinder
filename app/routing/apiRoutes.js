//Here the data file is being loaded 
var friendsList = require('../data/friends');

module.exports = function(app) {
    
    //A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    //obtaining the json of the friends file 
    app.get("/apiRoute/friends", function(req, res) {
        res.json(friendsList)
        console.log(res);
    });
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        //object to hold bestMatch
        var bestMatch = {
            name:"",
            photo:"",
            friendDifference: Infinity
        };
        //Parsing user survey POST
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;
        
        //looping through friends 
        for(var i = 0; i<friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
            
            console.log(currentFriend.name);
            
          //looping through friends scores 
          for(var j =0; j < currentFriend.scores.length;j++) {
              var currentFriendScore = currentFriend.scores[i];
              var currentUserScore = userScores[i];
              
          //   Difference between scores and adding them
          totalDifference += Math.abs(parseInt(currentUserscore)-parseInt(currentFriendScore));
          }
          //if the difference is less than bestmatch it resets
          if (totalDifference <= bestMatch.friendDifference) {
              bestMatch.name = currentFriend.name;
              bestMatch.photo = currentFriend.photo;
              bestMatch.friendDifference = totalDifference;
           }
        }
        
        //save user to database
        friend.push(userData);
        
        //return a json 
        res.json(bestMatch);
    });
            
}

//Export for use in main server.js file
module.exports = apiRoutes;
