import { playersData } from "./PlayersData";



const allPlayers = [...playersData];

export const getPlayers = () => {

  return allPlayers;

};

export const generateId = () => {

  const maxId = Math.max(...allPlayers.map(p => p.id), 0);

  return maxId + 1;

};

/*

  Returns the player for a given player id

 */

export const getPlayer = (id) => {

  return allPlayers.find(p => p.id === id);

};

/*

  Adds the player to player list

*/

export const addPlayer = (player) => {

  allPlayers.push(player);

};

/*

  Updates the player given the index and new changed values

*/

export const updatePlayer = (index, newPlayer) => {

  allPlayers[index] = newPlayer;

};

/*

  Deletes a player from player list

*/

export const deletePlayer = (index) => {

  allPlayers.splice(index, 1);

};

export const getIndexOfPlayer = (id) => {

  return allPlayers.findIndex(p => p.id === id);

};

