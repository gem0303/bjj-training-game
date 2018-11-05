/* --------------------------------------
    DETERMINE IF OPPONENT TAKES ACTION
  --------------------------------------- */
function getAction(action) {
    
    function getChance(type) {
        var chance = getRandomInt(1, 99);
        
        console.log(type, chance, AI_offense_percent, AI_defense_percent);
        
        if (type == "o" && chance < AI_offense_percent) {
            return true
        } else if (type == "d" && chance < AI_defense_percent) {
            return true
        } else {
            return false;
        }

    }
        
    if (action == "offense" && _AIoffense) {
        return getChance("o")
    } else if (action == "defense" && _AIdefense) {
        return getChance("d")
    } else {
        // if AI offense/defense option is not toggled on, always return failure to attack/defend
        return false 
    }
}


/* -------------------------------
        AI ATTEMPTS MOVE
  ------------------------------- */
function opponentAttemptMove() {
        
    // pick a move the opponent could perform based on their position
    // TODO this doesn't handle mismatched positions - ie one person standing and the other sitting. figure this out
        
    var moveSet = positions[opponentPosition.shortName].validMoves;
    var moveName = moveSet[getRandomInt(0,moveSet.length-1)];
  
    // Previous step only got us the move name as a string, we need to dig into our library to match that up to the actual move information. this feels icky :(
    AImove = convertMoveNameToObect(moveName);
    
    // check if the AI has no moves to perform (occurs when adding a new position but not adding any moves corresponding w/ it)
    if (AImove == undefined) {
        showPopup("Error! No moves available for your opponent to perform.", "Click ok to restart.")
        return
    }

    // update Dom
    $("#attempted_move_opp").text(AImove.displayName);
    updateHistory("Opponent attempts " + AImove.displayName);
    
    
    if (AImove.type == "positionChange" || AImove.type == "sweep") {
        showNotification("WATCH OUT", "Your opponent is executing a move!")    
    } else if (AImove.type == "submission" || AImove.type == "choke") {     
        showNotification("WATCH OUT", "Your opponent is attacking you!") 
    } else {
        showNotification("WATCH OUT", "Your opponent is executing a move!")   
    }
    
    
    // get the possible defenses to the move
    
    // -------------    SETUP DEFENSE MODIFIERS    --------------- //
    $defense_list.empty(); // todo - put this somewhere else?
    
    if ( AImove.hasOwnProperty("defense") && AImove.defense.length > 0 ) {
        AImove.defense.forEach(function (defense) {
            
            var newDefense = $('<a/>', {
                'href': '#',
                'text': defense,
            })

            $(newDefense).click(function(e){
                console.log("defense clicked");
                //$(this).remove();
                //$("#defense_list").append(mod)
                //updatePosModList(mod)
            })

            $defense_list.append(newDefense);
        })
    } else {
        console.log("no defenses available");
    }
    
    // switch to defense mode    
    switchGameMode("defense");    
    
    updateMoveNotes(AImove, true);
    
    // player can click the defenses for practice (for now won't actually do anything)    
    // then player can choose to succesfully defend, not defend, or leave it to random chance
    // clicking each action will either return game to previous state (if move is defended) or advance to next state (position change or tapping, depending on move type)
}



$("#forceAImove").click(function() {
    opponentAttemptMove()
})


/* -------------------------------
            AI BEHAVIOR
  ------------------------------- */

$('#offRange').change( function() {
    AI_offense_percent = this.value;
});

$('#defRange').change( function() {
    AI_defense_percent = this.value;
});

