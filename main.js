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
    AI_offense_percent = 50,
    AI_defense_percent = 50,
    gameOver = false;

// Create a master list of moves that can be performed.
var moves = movesSubmissions.concat(movesPositionChanges);


// Element Selectors
var $current_position = $( "#current_position" ),
    $opponent_position = $( "#current_position_opp" ),
    $current_mods = $( "#current_mods" ),
    $moves_list = $( "#moves_list" ),
    $defense_list = $( "#defense_list" ),
    $button_defend_yes = $( "#submit_defend_yes" ),
    $button_defend_no = $( "#submit_defend_no" ),
    $button_defend_random = $( "#submit_defend_random" ),
    $popup_button = $("#popup_small button"),
    $notification = $("#notification");

// Used to make it easier to pick a random position
var positionKeys = Object.keys(positions);



/* -------------------------------
      CLICK TO DO MOVE BUTTON
  ------------------------------- */
$("#submit").click(function(){
    if ( !$(this).hasClass("disabled") && $(".selected").length > 0 ) {
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
            showNotification("ALERT", "Your opponent defends!");
            updateHistory("Opponent blocks " + selectedMove.displayName);

            // sometimes an opponent defending opens up opportunities for new moves
            // add those here
            if (selectedMove.addChain) {
                 selectedMove.addChain.forEach(function (moveName) {
                    addMove(convertMoveNameToObect(moveName));
                 });
            }

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
        // If we passed through a move to updateGame function, opponent does that move
        if (move) {

            // check what the move type is
            switch(AImove.type) {
                case "positionChange":
                case "sweep":

                    // check if the move has choice of 2+ positions to end in
                    if (typeof AImove.next == "object") { // it's actually an array but JS, who knows.
                        var num = getRandomInt(0, AImove.next.length-1);
                        oppPosChange(positions[AImove.next[num]]);
                    } else {
                        oppPosChange(positions[AImove.next])
                    }

                    //oppPosChange(AImove.next);
                    // TODO one is passing through the name, the other the actual object -- be careful

                    break;
                case "submission":
                case "choke":
                    endRound();
                    break;
                default:
                    showNotification("ALERT", "Move type not supported")
            }

        }
        // Else, check if opponent will attack
        else {
            var opponentAttacks = getAction("offense");

            if (!opponentAttacks) {
                // opponent does not take action
                switchGameMode("offense");
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
    resetPosModList();

    if (currentMove.type == "positionChange" || currentMove.type == "sweep") {
        updateHistory("You " + currentMove.displayName);

        // check if the move has choice of 2+ positions to end in
        if (typeof currentMove.next == "object") { // it's actually an array but JS, who knows.
            var num = getRandomInt(0, currentMove.next.length-1);
            updatePosition(positions[currentMove.next[num]]);
            // todo: this is currently picking the next position at random - what information could I use to customize this?
        } else {
            updatePosition(positions[currentMove.next])
        }

    } else if (currentMove.type == "submission" || currentMove.type == "choke") {
        endRound("win");
    } else if (currentMove.type == "positionModifier") {
        updatePosModList(currentMove.displayName);
        disableMove(currentMove.shortName);
        
        // sometimes an opponent defending opens up opportunities for new moves
        // add those here
        if (currentMove.addChain) {
             currentMove.addChain.forEach(function (moveName) {
                addMove(convertMoveNameToObect(moveName));
             });
        }
        
    } else {
        console.log("Error with current move type");
    }

}


/* -------------------------------
        PLAYER DEFENSE
  ------------------------------- */

function playerDefendsAI(outcome) {

    // Player defends
    if (outcome == true ) {
        showNotification("NICE", "You countered their move!", "good")
        updateHistory("You counter");
        clearMoveNotes();

        // TODO: why was this here? caused opp. to randomly change position which was weird.
        //updatePosition(currentPosition);

        // switch to offense mode
        switchGameMode("offense")
    }
    // Player does not defend
    else {
        showNotification("WHOOPS", "You did not counter!", "bad")
        updateHistory("You do not counter");
        updateGame("AI", AImove)
    }
}

// Player chooses to defend
$button_defend_yes.click(function() {
    playerDefendsAI(true);
})

// Player chooses not to defend
$button_defend_no.click(function() {
    playerDefendsAI(false);
})

// Random pick
$button_defend_random.click(function() {
    // todo -- currently 50/50, could update to be based on custom ai off/def levels.
    var chance = getRandomInt(0, 1);
    if (chance == 1) {
        playerDefendsAI(true);
    } else {
        playerDefendsAI(false);
    }
})



/* -------------------------------
    UPDATE CURRENT GAME POSITIONS
  ------------------------------- */
// Specifically for when a player completes a move
// This function expects both parameters as position objects.
function updatePosition(playerPos, oppPos) {

    if (playerPos == null || typeof playerPos !== 'object') {console.log("ERROR: 'updatePosition' function expects the player position as an object");}

    // oppPos is optional. this doesn't do the null check above - consider reworking this.
    if ( oppPos !== undefined && typeof oppPos !== 'object') {console.log("ERROR: 'updatePosition' function expects the opponent position as an object");}

    currentPosition = playerPos;
    $current_position.text(currentPosition.displayName);

    if (oppPos) {
        opponentPosition = oppPos;
    } else {
        opponentPosition = getPositionPair(currentPosition);
    }

    $opponent_position.text(opponentPosition.displayName);

    $("#positionNote").text(currentPosition.notes);
    updateHistory(currentPosition.displayName);
    setupMovesList();
    setupPosModList();
    updateOppMoveDropdown();
}

// Specifically for when opponent is completing the move
// This function expects the opponent position as an object.
function oppPosChange(oppPos) {

    if (oppPos == null || typeof oppPos !== 'object') {console.log("ERROR: 'updatePosition' function expects the opponent position as an object");}

    clearMoveNotes();
    resetPosModList()

    // update opponent position
    opponentPosition = oppPos;
    $opponent_position.text(opponentPosition.displayName);

    // update player position
    currentPosition = getPositionPair(opponentPosition);
    $current_position.text(currentPosition.displayName);

    $("#positionNote").text(currentPosition.notes);
    updateHistory(currentPosition.displayName);
    setupMovesList();
    setupPosModList();
    updateOppMoveDropdown();

    // clear out variable when no longer needed
    AImove = null;
    updateGame("AI");
}


/* -------------------------------
        PLAYER'S MOVE LIST
  ------------------------------- */
function setupMovesList() {
    $("#moves_list, #mod_list").empty();

    // TODO loop through at start of program and create these lists ahead of time.
    moves.forEach(function (move) {

        // check that the move is valid
        if ($.inArray(move.shortName, currentPosition.validMoves) != -1) {

            // todo: add a secondary check here to make sure move is valid based on opponent's current position.

            addMove(move);
        }

    });
    
    sortMovesList();

}

function sortMovesList() {
  var i, switching, b, shouldSwitch;
  switching = true;

  /* Make a loop that will continue until no switching has been done */
  while (switching) {
    // Start by saying: no switching is done
    switching = false;
    b = $moves_list.find("a");
      
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

//  ADD MOVE TO LIST
// This function expects to receive the entire move object.
function addMove(move) {

    if (move == null || typeof move !== 'object') {console.log("ERROR: 'add move' function expects the move as an object");}

    // factory function to make the move html
    function createLink(target) {

        var newMove = $('<a/>', {
            'data-move': target.shortName,
            'href': '#',
            //'class': 'some-class',
            'text': target.displayName,
        })

        return newMove
    }

    var moveAction = createLink(move);

    // set up what happens when move is clicked
    $(moveAction).click(function(e) {

        selectedMove = move;

        $('.selected').removeClass("selected");
        $(this).addClass("selected");

        if ( $(this).hasClass("completed") ) {
            $("#submit").addClass("disabled");
        } else {
            $("#submit").removeClass("disabled");
        }

        updateMoveNotes(move);

    })

    // add move to the options list
    $moves_list.append(moveAction);
}




/* -------------------------------
         POSITION MODIFIERS
  ------------------------------- */

// SETUP POSITION MODIFIERS
function setupPosModList() {
    // check that the position has modifiers to show
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


// UPDATE THE CURRENT LIST OF POSITION MODIFICATIONS
// adds the modification to mod list
// expects a string
function updatePosModList(mod) {
    if ($("#current_mods").text() == "None") {
        $("#current_mods").empty();
        $("#current_mods").append(mod)
    } else {
        $("#current_mods").append(", " + mod)
    }
}

function resetPosModList() {
    $("#current_mods").empty();
    $("#current_mods").text("None")
}



/* -------------------------------
      UPDATE MOVE NOTES AREA
  ------------------------------- */
function updateMoveNotes(move) {

    clearMoveNotes();
    $("#moveNote").html(move.notes);

    // check if the move has any additional resources
    if (move.resources) {

        // loop through all the resouces and append info depending on type
        move.resources.forEach(function (resource) {

            if (resource.type == "video") {
                // non youtube version for reference: var vidHTML = '<video width="320" height="240" controls><source src="' + move.videoUrl[i] + '" type="video/mp4"></video>'
                var vidHTML = '<iframe width="350" height="197" src="' + resource.url + '" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'
                $("#videoNote").append(vidHTML)

            } else if (resource.type == "webpage") {
                var linkHTML = "<a target='_blank' href='" + resource.url + "'>" + resource.title + "</a>"
                $("#linkNote").append(linkHTML)

            } else if (resource.type == "image") {
                // code for displaying image here
            }
        });

    }

    // check if the move has any possible defenses, and if so list them.
    if (move.defense && move.defense.length > 0) {

        var defense_text_list = "";

        move.defense.forEach(function (defense) {
            defense_text_list += (defense += ", ");
        });

        var defense_text_list = defense_text_list.replace(/,\s$/g, ""); // find last comma in list and remove it.

        $("#defenseNote").text(defense_text_list);

    } else {
        $("#defenseNote").text("none");
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

}

var quotes = [
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    "“You can't always win, but you can always try.”",
    "“You can't always be winning. You can always be learning.”",
    "“A black belt is just a white belt who never gave up.”"
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
var notificationQueue = [];
var notificationShowing = false;

function showNotification(title, text, className) {

    // if a notification is already showing, add this new one to the queue instead
    if ( notificationShowing ) {
        var message = [title, text, className]
        notificationQueue.push(message)
    } else {

        notificationShowing = true;

        // show the notification
        $("#notification .title").text(title);
        $("#notification .text").text(text);

        $notification.removeClass();
        if (className) {
            $notification.addClass(className);
        }

        TweenMax.fromTo($notification, 0.25, {opacity:0, display:"none"}, {opacity:1, display:"block", yoyo: true, repeat: 1, repeatDelay: 1.4, onComplete: checkQueue})
    }
}

function checkQueue() {
    notificationShowing = false;

    if (notificationQueue[0] != undefined) {
        var nextMessage = notificationQueue[0];
        showNotification(nextMessage[0], nextMessage[1], nextMessage[2]);

        // Delete message out of array queue
        notificationQueue.shift();
    }
}



/* -------------------------------
        HELPER FUNCTIONS
  ------------------------------- */

// Switch game modes. Starts in offense.
var mode_switch_tl = new TimelineMax({paused: true});
    mode_switch_tl
        .to("#offense", 0.1, {opacity: 0, display: "none"})
        .to("#defense", 0.1, {opacity: 1, display: "block"});

function switchGameMode(goto) {
    if (goto == "defense") {
        mode_switch_tl.play();
    } else {
        mode_switch_tl.reverse();
    }
}


function getPositionPair(pos) {

    var potential = positionPairs[pos.shortName];
    var rand = getRandomInt(0, potential.length-1);
    var name = potential[rand];

    return positions[name]
    //return positions[positionPairs[pos.shortName][getRandomInt(0, potential.length-1)]]
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

// this function takes a move's short name (camelcase like armBarFromMount) as a string and returns the appropriate object.
function convertMoveNameToObect(moveName) {

    if (typeof moveName !== 'string') {console.log("ERROR: this function expects a string");}

    var moveObject;
    moves.forEach(function (move) {
        if (moveName == move.shortName) {
            moveObject = move;
        }
    });
    return moveObject
}

// this function will mark a move as "completed" and disable it, but keep it in the move list so user can still click it to see info.
function disableMove(target) {
    // kinda brute force but whatever
    $("#moves_list a").each(function() {
        if ( $(this).data('move') === target ) {
            $(this).addClass('completed')
        }
    });
}

// this will toggle the videos between small (defualt) and larger sizes

$("#video_toggle").click(function(){

    $("#video_toggle, #videoNote").toggleClass("large");

})


/* -------------------------------
      CLEANUP/RESET FUNCTIONS
  ------------------------------- */
function clearMoveNotes() {
    $("#moveNote, #imageNote, #videoNote, #defenseNote").empty();
    $("#linkNote a").remove();

}

function reset(position, oppPosition) {

    console.log("reset!");

    currentPosition = null;
    opponentPosition = null;
    currentMove = null;
    selectedMove = null;
    AImove = null;
    gameOver = false;

    // clear out old text
    $("#current_move, #positionNote, #defense_list").empty();
    clearMoveNotes();
    resetPosModList();

    $("#history").html("<b>History:</b> ")

    // set game back to offense mode
    switchGameMode("offense")

    // if we've passed through a specific position, start there.
    if (position) {
         updatePosition(positions[position], positions[oppPosition])
    } else {
        // pick random position to start from
        updatePosition(positions[getRandomPosition()]);
    }

    updateOppMoveDropdown();

    // clear out old notifications
    TweenMax.killTweensOf($notification)
    notificationQueue = [];
    notificationShowing = false;
    showNotification("RESET", "New roll starting now")

}

// Restart options at bottom of screen
$("#startFromRandom").click(function(){reset();})
$("#startFromSeated").click(function(){reset("neutralGround", "neutralGround");})

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

// Add opponent's moves to dropdown list
// This list needs to be cleared out, and updated every time there is a position change.
function updateOppMoveDropdown() {

    var select = $("#forceAImove")[0];

    while (select.options.length) {
        select.remove(0);
    }

    select.add(new Option("Force opponent move"));
    select.options[0].disabled = true;
    select.add(new Option("Random", "random"));

    var moveSet = positions[opponentPosition.shortName].validMoves;

    moveSet.forEach(function(move) {
        select.options[select.options.length] = new Option(move, move);
    });
}


/* -------------------------------
        START GAME!
  ------------------------------- */
function init() {

    // update based on query string settings
    updateGameOptions();

    TweenMax.set("#defense, .cover", {opacity: 0, display: "none"})

    updateSettings( $("#AIoffense")[0] )
    updateSettings( $("#AIdefense")[0] )


    if (startFromRand) {
        updatePosition(positions[getRandomPosition()]);
    } else {
        updatePosition(positions["neutralGround"], positions["neutralGround"])
    }

    updatePosDropdown();
    updateOppMoveDropdown();

}

init();







