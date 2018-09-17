/* -------------------------------
        VARIABLE SETUP
  ------------------------------- */

var currentPosition,
    opponentPosition,
    currentMove,
    selectedMove,
    AImove,
    _AIdefense,
    _AIoffense,
    gameOver = false;


// Element Selectors
var $current_position = $( "#current_position" ),
    $opponent_position = $( "#current_position_opp" ),
    $current_mods = $( "#current_mods" ),
    $moves_list = $( "#moves_list" ),
    $defense_list = $( "#defense_list" ),
    $button_defend_yes = $( "#submit_defend_yes" ),
    $button_defend_no = $( "#submit_defend_no" ),
    $button_defend_random = $( "#submit_defend_random" ),
    $popup_button = $("#popup_small button");

// Used to make it easier to pick a random position
var positionKeys = Object.keys(positions);



/* -------------------------------
      CLICK TO DO MOVE BUTTON
  ------------------------------- */
$("#submit").click(function(){    
    if ( $(".selected").length > 0 ) {
        updateGame("player")
    }    
})


/* -------------------------------
    MASTER GAME CONTROL FUNCTION
  ------------------------------- */

function updateGame(who, move) {
    
    if (who == "player") {
        runPlayerLogic();
    } else {
        runAILogic();
    }
    
    function runPlayerLogic() {
        
        var opponentDefends = getAction("defense");
                
        if (opponentDefends) {
            // if opponent defends -> show alert and stop the function
            showNotification("ALERT", "Your opponent defends!")
            updateHistory("Opponent blocks " + selectedMove.displayName)
            updateGame("AI");
            return
        }
        
        // else -> let player perform the move, then give AI a chance to take a move
        
        //updateHistory("Opponent does not block")      
        performMove();
        if (!gameOver) {
            updateGame("AI");   
        }

    }
    
    
    function runAILogic() {
        // If we passed through a move, opponent does that move
        if (move) {
            
            // check what the move type is
            switch(AImove.type) {
                case "positionChange":
                    oppPosChange();
                    break;
                case "submission":
                case "choke":
                    endRound();
                    break;
                default:
                    showNotification("ALERT", "Move type not supported")
            }
            
            function oppPosChange() {
                clearMoveNotes();
                updatePosModList();

                // update opponent position
                opponentPosition = positions[AImove.next]; 
                $opponent_position.text(opponentPosition.displayName);

                // update player position
                currentPosition = getPositionPair(opponentPosition);
                $current_position.text(currentPosition.displayName);

                $("#positionNote").text(currentPosition.notes);
                updateHistory(currentPosition.displayName);
                addMoves();


                // clear out variable when no longer needed
                AImove = null;
                updateGame("AI");
            }
            
            
            
        }
        // Else, check if opponent will attack
        else {
            var opponentAttacks = getAction("offense");

            if (!opponentAttacks) {
                // opponent does not take action
                console.log("opp does nothing");
                return
            }

            // else -> proceed with AI performing the move
            opponentAttemptMove();
        }
        

    }
    
}



/* -------------------------------
       PLAYER OFFENSE
  ------------------------------- */
function performMove() {

    currentMove = selectedMove;
    selectedMove = null;

    clearMoveNotes();
    updatePosModList();

    if (currentMove.type == "positionChange") {
        updateHistory("You " + currentMove.displayName);
        updatePosition(positions[currentMove.next])
    } else if (currentMove.type == "submission" || currentMove.type == "choke") {
        endRound("win");
    } else if (currentMove.type == "modifier") {
        alert("You did: " + currentMove.displayName) // currently unused, handled a different way
    } else {
        console.log("Error");
    }

}


/* -------------------------------
        PLAYER DEFENSE
  ------------------------------- */

function playerDefendsAI() {
    showNotification("NICE", "You countered their move!", "good")
    updateHistory("You counter");
    clearMoveNotes();
    updatePosition(currentPosition);
    
    // switch to offense mode
    var tl = new TimelineMax();
        tl.to("#defense", 0.1, {opacity: 0, display: "none"})
        tl.to("#offense", 0.1, {opacity: 1, display: "block"});
}

function playerDoesntDefendAI() {
    showNotification("WHOOPS", "You did not counter!", "bad")
    updateHistory("Player doesn't counter");
    updateGame("AI", AImove)
}

// Player chooses to defend
$button_defend_yes.click(function() {
    playerDefendsAI();
})
    

// Player chooses not to defend
$button_defend_no.click(function() {
    playerDoesntDefendAI();
})


$button_defend_random.click(function() {    
    var chance = getRandomInt(0, 1);
    if (chance == 1) {
        playerDefendsAI();
    } else {
        playerDoesntDefendAI();
    }
})

/* -------------------------------
        ADD POSSIBLE MOVES
  ------------------------------- */
function addMoves() {
    $("#moves_list, #mod_list").empty();

    function createLink(target) {

        var newMove = $('<a/>', {
            'data-move': target.shortName,
            'href': '#',
            //'class': 'some-class',
            'text': target.displayName,
        })

        return newMove
    }

    // TODO loop through at start of program and create these lists ahead of time.
    moves.forEach(function (move) {

        // check that the move is valid
        if ($.inArray(move.shortName, currentPosition.validMoves) != -1) {

            var moveAction = createLink(move);

            // set up what happens when move is clicked
            $(moveAction).click(function(e) {

                selectedMove = move;

                $('.selected').removeClass("selected");
                $(this).addClass("selected");
                
                updateMoveNotes(move);
 
            })

            // add move to the options list
            $moves_list.append(moveAction);
        }

    });

    // -------------    SETUP POSTION MODIFIERS    --------------- //
    if (modifiers.hasOwnProperty(currentPosition.shortName) && modifiers[currentPosition.shortName].length > 0) {
        modifiers[currentPosition.shortName].forEach(function (mod) {

            var newMod = $('<a/>', {
                //'data-mod': mod.shortName,
                'href': '#',
                //'class': 'some-class',
                'text': mod,
            })

            $(newMod).click(function(e){
                $(this).remove();
                updatePosModList(mod)
            })

            $("#mod_list").append(newMod);
        })
    } else {
        $("#mod_list").text("none");
    }

}


// -------------    UPDATE THE CURRENT LIST OF POSITION MODIFICATIONS    --------------- //
// if function is called with a modifier, add it to the list.
// if no parameter included, then reset the list
function updatePosModList(mod) {
    if (mod) {
        if ($("#current_mods").text() == "None") {
            $("#current_mods").empty();
            $("#current_mods").append(mod)
        } else {
            $("#current_mods").append(", " + mod)
        }

    } else {
        $("#current_mods").empty();
        $("#current_mods").text("None")
    }

}



/* -------------------------------
    UPDATE CURRENT GAME POSITIONS
  ------------------------------- */
// Specifically for when a player completes a move
function updatePosition(pos) {
    currentPosition = pos;
    $current_position.text(pos.displayName);

    opponentPosition = getPositionPair(currentPosition);    
    $opponent_position.text(opponentPosition.displayName);

    $("#positionNote").text(pos.notes);
    updateHistory(pos.displayName);
    addMoves();
}



/* -------------------------------
      UPDATE MOVE NOTES AREA
  ------------------------------- */
function updateMoveNotes(move, defense) {
    
    // set up note that appears on click
    clearMoveNotes();
    $("#moveNote").text(move.notes);
    move.imageUrl ? $("#imageNote").text(move.imageUrl) : $("#imageNote").text("none");
    
    // Append video(s) of move ---------------
    if (move.videoUrl) {
        for (var i = 0; i < move.videoUrl.length; i++) {
            /* non youtube version var vidHTML = '<video width="320" height="240" controls><source src="' + move.videoUrl[i] + '" type="video/mp4"></video>'*/
            var vidHTML = '<iframe width="350" height="197" src="' + move.videoUrl[i] + '" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
            $("#videoNote").append(vidHTML)
        }
    }

    // Append relavent links ---------------
    if (move.link) {
        for (var i = 0; i < move.link.length; i++) {
            var linkHTML = "<a target='_blank' href='" + move.link[i].url + "'>" + move.link[i].title + "</a>"
            $("#linkNote").append(linkHTML)
        }
    }
    
    if (defense) {
        console.log("appending defense info too");
        // TODO display information on defending the move
    }
}

/* -------------------------------
           END THE ROUND
  ------------------------------- */
function endRound(win) {
    
    gameOver = true;

    if (win) {
        showPopup("Your opponent taps!", "great job! click ok to restart.")
    } else {  
        var text = "You tap to your opponent. " + quotes[getRandomInt(0,quotes.length-1)]
        showPopup(text, "click ok to restart.")
    }

    //reset();
}

var quotes = [
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    "“You can't always win, but you can always try.”"
]


/* -------------------------------
        POPUP FUNCTIONS
  ------------------------------- */
// Note this popup is currently only used at the end of the game so some reset functionality/assumptions have been coded in.
function showPopup(title, text) {
    $("#popup_small .title").text(title);
    $("#popup_small .text").text(text);

    TweenMax.to("#popup_small", 0.25, {opacity:1, display:"flex"})  
}

$popup_button.click(function() {
    reset();
    TweenMax.to("#popup_small", 0.25, {opacity:0, display:"none"}) 
});


/* -------------------------------
        NOTIFICATION CODE
  ------------------------------- */
function showNotification(title, text, className) {
    $("#notification .title").text(title);
    $("#notification .text").text(text);
    
    $("#notification").removeClass();
    if (className) {
        $("#notification").addClass(className);
    }
    
    TweenMax.killTweensOf("#notification")
    TweenMax.fromTo("#notification", 0.25, {opacity:0, display:"none"}, {opacity:1, display:"block", yoyo: true, repeat: 1, repeatDelay: 2})

}

/* -------------------------------
        HELPER FUNCTIONS
  ------------------------------- */
function getPositionPair(pos) {
    var temp = positionPairs[pos.shortName][0]; // for now, just get first move in list. eventually get one at random if there's 2+ options.    
    return positions[temp]
}


function getRandomPosition() {
    return positionKeys[getRandomInt(0, positionKeys.length-1)];
}

function updateHistory(text) {
    $("#history").append(text + " > ")
}


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function updateSettings(el) {
    if (el.id == "AIoffense") {
        el.checked ? _AIoffense = true : _AIoffense = false;
    } else if (el.id == "AIdefense") {
        el.checked ? _AIdefense = true : _AIdefense = false;
    }
}

/* -------------------------------
      CLEANUP/RESET FUNCTIONS
  ------------------------------- */
function clearMoveNotes() {
    $("#moveNote, #imageNote, #videoNote").empty();
    $("#linkNote a").remove();

}

function reset(position) {
    
    currentPosition = null;
    opponentPosition = null;
    currentMove = null;
    selectedMove = null;
    AImove = null;    
    gameOver = false;

    // clear out old text
    $("#current_move, #positionNote, #defense_list").empty();
    clearMoveNotes();
    updatePosModList();

    $("#history").html("<b>History:</b> ")

    // if we've passed through a specific position, start there.
    if (position) {
         updatePosition(positions[position])
    } else {
        // pick random position to start from
        updatePosition(positions[getRandomPosition()]);
    }
    
    showNotification("RESET", "New roll starting now")

}

// Restart options at bottom of screen
$("#startFromRandom").click(function(){reset();})
$("#startFromSeated").click(function(){reset("neutralGround");})

// Add positions to dropdown list
function updatePosDropdown() {

    var select = $("#posList")[0];

    for (var key in positions) {
        var obj = positions[key];
        select.options[select.options.length] = new Option(obj.displayName, key);
    }

    // Alphabetize the positions list, ignoring the first option (default one)
    $("#posList").append($("#posList option:gt(0)").sort(function (a, b) {
        return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
    }))

}

/* -------------------------------
        START GAME!
  ------------------------------- */
function init() {
    
    TweenMax.set("#defense, .cover", {opacity: 0, display: "none"})
    
    updateSettings( $("#AIoffense")[0] )
    updateSettings( $("#AIdefense")[0] )

    updatePosDropdown();
    updatePosition(positions["neutralGround"])
    //updatePosition(positions[getRandomPosition()]);
}

init();
