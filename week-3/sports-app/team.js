/*
============================================
; Title:  team.js
; Author: Erin Brady
; Date:   22 January 2023
; Description: Assignment 3 - Module to provide the schema for a team.
;===========================================
*/

// Each team has a name, mascot, and total number of players.
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name
        this.mascot = mascot
        this.playerCount = playerCount
    }
}

// Export this module.
exports.Team = Team
