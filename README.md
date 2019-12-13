# NodeJS-Restful_API_Docker

This project consists in a RESTFUL webservice that runs in a docker container. The webservice was implemented in NodeJs.

Basically, the main objective was to create an API that will provide information about Major League Baseball teams and their players. The webservice contains four GET routs:

    - One route to display all MLB teams stored in the JSON file based DB. 
        http:/localhost:9000/mlbteams
   
    - One route to display the information of an specific team providing the TeamID.
        Syntax: http:/localhost:9000/mlbteams/:id
        Example: http:/localhost:9000/mlbteams/1
    
    - One route to display all players from an specific team.
        Syntax: http:/localhost:9000/mlbteams/:id/players
        Example: Syntax: http:/localhost:9000/mlbteams/1/players
    
    - One route to display the information of an specific player from an specific team
        Syntax: http:/localhost:9000/mlbteams/:id/player/:playerId
        Syntax: http:/localhost:9000/mlbteams/1/player/2
 
The data will be returned in JSON form.
 
The webservice takes the data from a copule of hard coded JSON files based database (mlbTeamsPlayer.json and player.json). Both files can be found in this repository.

File: mlbTeamsPlayer.json structure.

  {
   "mlb_team1" : {
       "id": 1,
       "name": "Houston Astros",
       "league": "American League",
       "stadium": "Minute Maid Park",
       "address": "501 Crawford Street Houston, TX 77002",
       "phone": "(713) 259-8000",
       "website": "astros.com",
       "logoimg": "houstonLogo.jpg",
       "players":  [{
            "id": 1,
            "name": "Jose Altuve"
         }, {
            "id": 2,
            "name": "Carlos Correa"
         }, {
            "id": 3,
            "name": "Alex Bregman"
         }]
      }
    }

File: player.json structure.

  {
    "team1_player_1" : {
        "id": 1,
        "name": "Jose Altuve"
    },
    "team1_player_2" : {
        "id": 2,
        "name": "Carlos Correa"
    },
    "team1_player_3" : {
        "id": 3,
        "name": "Alex Bregman"
    }
 }
 
 For building the webservice in docker execute the command: docker build -t node-restapi .
 For executing the webservice in docker execute the command: docker run -it -p 9000:3000 node-restapi

    
        
    
