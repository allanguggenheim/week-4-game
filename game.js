

$(document).ready(function(){

// Luke Sywalker default attributes.
var LukeS = {
    // Health Points, Attack Power and Counter Attack Power.
    healthPoints: 100,
    attackPower: 5,
    counterAttackPower: 8,
    hidden: false
}

// Obi-Wan Kanobi default attributes.
var ObiW = {
    // Health Points, Attack Power and Counter Attack Power.
    healthPoints: 120,
    attackPower: 7,
    counterAttackPower: 10,
    hidden: false
}

// Darth Sidious default attributes.
var DarthS = {
    // Health Points, Attack Power and Counter Attack Power.
    healthPoints: 150,
    attackPower: 15,
    counterAttackPower: 15,
    hidden: false
}

// Darth Maul default attributes.
var DarthM = {
    // Health Points, Attack Power and Counter Attack Power.
    healthPoints: 180,
    attackPower: 20,
    counterAttackPower: 20,
    hidden: false
}

// To keep track of our stats, in current game
// ..can also be done using character name 
var playerHealthPoints = 0;
var playerAttackPower = 0;
var playerCounterAttackPower = 0;
var playerName = "";

// To keep track of their stats, in current game
// ..can also be done using character name 
var opponentHealthPoints = 0;
var opponentAttackPower = 0;
var opponentCounterAttackPower = 0;
var opponentName = "";

var gameOver = false;
var chosenPlayer = false;
var chosenOpponent = false;
var gameStarted = false;

function resetGame() {

	// To keep track of our stats, in current game
	// ..can also be done using character name 
	var playerHealthPoints = 0;
	var playerAttackPower = 0;
	var playerCounterAttackPower = 0;
	var playerName = "";

	// To keep track of their stats, in current game
	// ..can also be done using character name 
	var opponentHealthPoints = 0;
	var opponentAttackPower = 0;
	var opponentCounterAttackPower = 0;
	var opponentName = "";

	var gameOver = false;
	var chosenPlayer = false;
	var chosenOpponent = false;
	var gameStarted = false;


	$("#btnLukeS").fadeOut();
	$("#btnObiW").fadeOut();
	$("#btnDarthS").fadeOut();
	$("#btnDarthM").fadeOut();
	$("#btnLukeS").fadeIn();
	$("#btnObiW").fadeIn();
	$("#btnDarthS").fadeIn();
	$("#btnDarthM").fadeIn();
	jQuery('#btnLukeS').detach().appendTo('#notChosenButtonsArea');
	jQuery('#btnObiW').detach().appendTo('#notChosenButtonsArea');
	jQuery('#btnDarthS').detach().appendTo('#notChosenButtonsArea');
	jQuery('#btnDarthM').detach().appendTo('#notChosenButtonsArea');

    	$("#playerHealthPoints").html("0");
    	$("#opponentHealthPoints").html("0");    	
    	$("#playerAttackPower").html("0"); 
    	$("#opponentAttackPower").html("0"); 


}

// Check if any button is clicked forever
$('button').on("click", function() {


//CHARACTER BUTTON SCOPE
    // Now that a button has been clicked, let's check if it's a character
    if ($(this).hasClass("character") && !gameOver){

    	// If you havn't chosen a opponent yet, but you already chose a character, move the chosed character to the chosenOpponentAreaUI
    	if (!chosenOpponent && chosenPlayer) {

    		jQuery(this).detach().appendTo('#chosenOpponentAreaUI');

    		// Example button value would be "LukeS" and we have a class with the same name
    		opponentName = $(this).attr("value");
    		console.log("opponent name chosen: " + opponentName);

    		opponentHealthPoints = eval(opponentName).healthPoints;
    		opponentAttackPower = eval(opponentName).attackPower;
    		// console.log("opponent attack power is: " + opponentAttackPower);
    		opponentCounterAttackPower = $(opponentName).counterAttackPower;

    		chosenOpponent = true;
    		gameStarted = true;

    	}

    	// If you havn't chosen a player yet, move the chosed character to the chosenPlayerAreaUI
    	if (!chosenPlayer) {

    		jQuery(this).detach().appendTo('#chosenPlayerAreaUI');

    		// Example button value would be "LukeS" and we have a class with the same name
    		playerName = $(this).attr("value");
    		console.log("player name chosen: " + playerName);

    		playerHealthPoints = eval(playerName).healthPoints;
    		// playerAttackPower = eval(playerName).attackPower;
    		playerAttackPower = 8;
    		playerCounterAttackPower = $(playerName).counterAttackPower;

    		chosenPlayer = true;

    	}

    }

//ATTACK BUTTON SCOPE
    // Logic for attack button, only if the game is not over and the game has started already
    if ($(this).hasClass("attack") && !gameOver && gameStarted){

    	console.log("you clicked attack button and the game has started");



    	// Minus attackPower off of each other's healthPoints
    	playerHealthPoints = playerHealthPoints - opponentAttackPower;
    	opponentHealthPoints = opponentHealthPoints - playerAttackPower;
    	$("#playerHealthPoints").html(playerHealthPoints);
    	$("#opponentHealthPoints").html(opponentHealthPoints);    	
    	$("#playerAttackPower").html(playerAttackPower); 
    	$("#opponentAttackPower").html(opponentAttackPower); 

    	// Show the points in the console
    	console.log("player health points are now: " + playerHealthPoints);
    	console.log("oppenet health points are now: " + opponentHealthPoints);

    	if (playerHealthPoints <= 0) {
    		gameOver = true;
    		resetGame();
    		alert("Game Over! Now I will reset the game and hopefully you will have the force next time..... Try harder....");

    	}

    	if (playerAttackPower > opponentAttackPower) {
    		playerAttackPower = playerAttackPower + 8;
    		$("#playerAttackPower").html(playerAttackPower); 
    		console.log("player attack power increase to: " + playerAttackPower);
    	}

    	if (opponentHealthPoints <= 0) {
    		$('#btn' + opponentName).fadeOut();
    		chosenOpponent = false;
    		gameStarted = false;
    	}

    }

//RESET BUTTON SCOPE
    // Reset the game
    if ($(this).hasClass("reset")){
    	   gameOver = true;
    	   resetGame();
    }
   	


})

})
