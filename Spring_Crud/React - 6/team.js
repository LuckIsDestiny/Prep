import toast from 'react-hot-toast';



const alert = (msg) => {

 toast.error(msg, {position: 'top-right'});

}

let team = {

 title: "Mumbai Indians",

 players: [],

};

export const getTeam = () => {

 return team;

};

export const setTeam = (tm) => {

 team = tm;

};

/*

  Should edit a player of given id to nwPlayer

 */

export const editTeamPlayer = (id, nwPlayer) => {

 const index = team.players.findIndex(p => p.id === id);

 if(index !== -1){

  team.players[index] = nwPlayer;

 }

};

/*

  Should add a player to team, if the player

  already exist alert "This Player already exist in your team !!"

 */

export const addTeamPlayer = (player) => {

 const exists = team.players.find(p => p.id === player.id);

 if(exists){

  alert("This Player already exist in your team !!");

  return;

 }

 team.players.push(player);

};

/*

  Should delete a player from team

 */

export const deleteTeamPlayer = (id) => {

 team.players = team.players.filter(p => p.id !== id);

};

/*

  Returns error messages if a team does not have exactly 2 batsmen

  2 bowlers and 1 wicket-keeper

 */

export const getStatus = () => {

 const batsmen = team.players.filter(p => p.role === 'Batsman').length;

 const bowlers = team.players.filter(p => p.role === 'Bowler').length;

 const keepers = team.players.filter(p => p.role === 'Wicket Keeper').length;

 const errors = [];

 if(batsmen !== 2){

  errors.push('You do not have required number of batsmen in your team');

 }

 if(bowlers < 2){

  errors.push('You do not have required number of bowler in your team');

 }

 if(keepers < 1){

  errors.push('You do not have the required number of wicketkeepers in your team');

 }

 return errors;

};
