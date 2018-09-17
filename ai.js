/* --------------------------------------
    DETERMINE IF OPPONENT TAKES ACTION
  --------------------------------------- */
function getAction(action) {
    
    // currently just a 50/50 chance using rand function already in this file
    function getChance() {
        var chance = getRandomInt(0, 1);
        if (chance == 1) {
            return true
        } else {
            return false
        }
    }
        
    if (action == "offense" && _AIoffense) {
        return getChance()
    } else if (action == "defense" && _AIdefense) {
        return getChance()
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
    // todo restructure moves list.js to be like pos list with extra layer of 'names'?
    moves.forEach(function (move) {
        if (moveName == move.shortName) {
            AImove = move;
        }
    });
          
    // update Dom
    $("#attempted_move_opp").text(AImove.displayName);
    updateHistory("Opponent attempts " + AImove.displayName);
    
    
    if (AImove.type == "positionChange") {
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
    var tl = new TimelineMax();
        tl.to("#offense", 0.1, {opacity: 0, display: "none"})
        tl.to("#defense", 0.1, {opacity: 1, display: "block"});
    
    
    updateMoveNotes(AImove, true);
    
    // player can click the defenses for practice (for now won't actually do anything)    
    // then player can choose to succesfully defend, not defend, or leave it to random chance
    // clicking each action will either return game to previous state (if move is defended) or advance to next state (position change or tapping, depending on move type)
}


$("#forceAImove").click(function() {
    opponentAttemptMove()
})