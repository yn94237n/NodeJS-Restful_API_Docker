const express = require('express');
const app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   res.send('This is the Home Page');
});

app.get('/mlbteams', function (req, res) {
    fs.readFile("mlbTeamsPlayer.json", 'utf8', function (err, data) {
       //console.log( data );
       res.send(JSON.parse(data));
    });
 });

app.get('/mlbteams/:id', function (req, res) {
    
   fs.readFile("mlbTeamsPlayer.json", 'utf8', function (err, data) {
      if(err) {
         throw err;
      } 
      var teams = JSON.parse( data );
      var team = teams["mlb_team" + req.params.id];
      //console.log(team);

      if(team) {
        res.send(team); 
      }
      else {
        res.send("Baseball team does not exist");
      }
   });
});

app.get('/mlbteams/:id/:players', function (req, res) {

   fs.readFile("mlbTeamsPlayer.json", 'utf8', function (err, data) {
      
      if(err) {
         throw err;
      }

      var teams = JSON.parse( data );
      var team = teams["mlb_team" + req.params.id];
      
      //console.log(team);

      if(team) {
         var teamplayers = team[req.params.players];
         //console.log(team);
         res.json(teamplayers); 
       }
       else {
         res.send("Error: There is no information associated with parameters provided!");
       }
      
   });
});

app.get('/mlbteams/:id/player/:playerid', function (req, res) {
   
   fs.readFile("player.json", 'utf8', function (err, data) {

      if(err) {
         throw err;
      }

      var players = JSON.parse( data );
      var player = players["team" + req.params.id + "_player_" + req.params.playerid];

      //console.log(player);

      if(player) {
         res.send(player); 
       }
       else {
         res.send("Error: There is no information associated with parameters provided!");
       }
   });
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
