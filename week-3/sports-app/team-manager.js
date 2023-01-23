/*
============================================
; Title:  team-manager.js
; Author: Erin Brady
; Date:   22 January 2023
; Description: Assignment 3 - Module to generate, retrieve, and display team data.
;===========================================
*/

// Import the Team module
const Team = require("./team")

// Create an array of 5 teams.
const teams = [
	new Team.Team("Alabama", "Crimson Tide", 54),
	new Team.Team("LSU", "Tigers", 54),
	new Team.Team("Georgia", "Bulldogs", 54),
	new Team.Team("Texas", "Longhorns", 54),
	new Team.Team("USC", "Trojans", 54),
]

// Function to retrieve data for all teams.
const getTeams = () => teams

/**
 * 
 * @param {string} name - the name of the specific team for which to retrieve data. 
 * @returns the team object that corresponds to the specified name.
 */
const getTeam = (name) => {
	name = `${name}`
	return teams.find((team) => team.name === name)
}

/**
 * 
 * @param {Object} team - data for a specific team. 
 * @returns string output of all the data for the specified team.
 */
const displayTeam = (team) => `
  Name: ${team.name}
  Mascot: ${team.mascot}
  Player Count: ${team.playerCount}
`

// Export the module
module.exports = {getTeams, getTeam, displayTeam}
