/*
============================================
; Title:  index.js
; Author: Erin Brady
; Date:   22 January 2023
; Description: Displays console output for Assignment 3
;===========================================
*/

// Import TeamManager module.
const TeamManager = require("./team-manager.js")

// Collect data for 2 individual teams.
let lsu = TeamManager.getTeam("LSU")
let texas = TeamManager.getTeam("Texas")

// Concatenate data for all teams as a string.
let displayAllTeams = "-- DISPLAYING TEAMS --"
TeamManager.getTeams().forEach(team => displayAllTeams += TeamManager.displayTeam(team))

/**
 * Displays a selected team in the console.
 * @param {string} team - the team to be displayed in the console.
 */
const displaySingleTeam = (team) => {
    console.log(`-- DISPLAYING A SINGLE TEAM --${TeamManager.displayTeam(team)}`)
}

// Display all teams within the console.
console.log(displayAllTeams + "\n\n")
// Display the LSU team data.
displaySingleTeam(lsu)
// Display the Texas team data.
displaySingleTeam(texas)
