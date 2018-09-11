/* -------------------------------
        VARIABLE SETUP
  ------------------------------- */

var currentPosition,
    currentMove,
    selectedMove;


// Used to make it easier to pick a random position
var positionKeys = Object.keys(positions);


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
            $(moveAction).click(function(e){
                
                selectedMove = null;
                selectedMove = move;
                
                $('.selected').removeClass("selected");
                $(this).addClass("selected");
                
                // set up note that appears on click
                clearMoveNotes();                
                $("#moveNote").text(move.notes);               
                move.imageUrl ? $("#imageNote").text(move.imageUrl) : $("#imageNote").text("none");
                
                //move.videoUrl ? $("#videoNote").text(move.videoUrl) : $("#videoNote").text("none");
                
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
                

            })

            // add move to the options list
            $("#moves_list").append(moveAction);
        }

    });
    
    // -------------    SETUP POSTION MODIFIERS    --------------- //
    if (modifiers[currentPosition.shortName].length > 0) {
        modifiers[currentPosition.shortName].forEach(function (mod) {
            //var modAction = createMod(mod)

            var newMod = $('<a/>', {
                //'data-mod': target.shortName,
                'href': '#',
                //'class': 'some-class',
                'text': mod,
            })

            $(newMod).click(function(e){
                $(this).remove();
                //$("#current_mods").append(mod)
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
        PERFORM A MOVE
  ------------------------------- */
function performMove() {
    
    // TODO cleaner way to do this?
    /*moves.forEach(function (elem) {
        if (elem.shortName == selectedMove.shortName) {
            currentMove = elem;
            $("#current_move").text(elem.displayName);
            
            if (currentMove.type == "positionChange") {
                updatePosition(positions[elem.next])
            } else if (currentMove.type == "submission" || currentMove.type == "choke") {
                // TODO: feature where you can fail submissions
                endRound("win");
            }
        }
    })*/
    
    currentMove = selectedMove;
    selectedMove = null;
    
    clearMoveNotes();
    updatePosModList();

    $("#current_move").text(currentMove.displayName);

    if (currentMove.type == "positionChange") {
        updateHistory(currentMove.displayName);
        updatePosition(positions[currentMove.next])
    } else if (currentMove.type == "submission" || currentMove.type == "choke") {
        // TODO: feature where you can fail submissions
        endRound("win");
    } else if (currentMove.type == "modifier") {
        alert("You did: " + currentMove.displayName)
    } else {
        console.log("Error");
    }
 
}


/* -------------------------------
           END THE ROUND
  ------------------------------- */
function endRound(win) {
    
    if (win) {
        showPopup("Your opponent taps!", "great job! click ok to restart.")
    } else {
        showPopup("“Success is not final, failure is not fatal: It is the courage to continue that counts.", "click ok to restart.")
    }
    
    reset();    
}


/* -------------------------------
        POPUP FUNCTIONS
  ------------------------------- */
function showPopup(title, text) {
    $("#popup .title").text(title);
    $("#popup .text").text(text);
    $("#cover").css("display", "flex");
}

$("#popup button").click(function(){
    $("#cover").hide();
})


/* -------------------------------
        HELPER FUNCTIONS
  ------------------------------- */
function updatePosition(pos) {
    currentPosition = pos;
    $("#current_position").text(pos.displayName);
    $("#positionNote").text(pos.notes);    
    addMoves()
    updateHistory(pos.displayName);
}

function getRandomPosition() {
    // TODO bug here
    var test = positionKeys[getRandomInt(0, positionKeys.length)];
    //console.log(test);
    return test
    
    //return positionKeys[getRandomInt(0, positionKeys.length)]
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


/* -------------------------------
      CLEANUP/RESET FUNCTIONS
  ------------------------------- */
function clearMoveNotes() {
    $("#moveNote, #imageNote, #videoNote").empty();
    $("#linkNote a").remove();
    
}

function reset(position) {
    
    currentPosition = null;
    currentMove = null;
    
    // clear out old text
    $("#current_move, #positionNote").empty();
    clearMoveNotes();
    
    $("#history").html("<b>History:</b> ")
    
    // if we've passed through a specific position, start there.
    if (position) {
         updatePosition(positions[position])
    } else {
        // pick random position to start from
        updatePosition(positions[getRandomPosition()]);
    }
    
}


$("#refresh").click(function(){reset();})
$("#startFromSeated").click(function(){reset("neutralGround");})

function updatePosDropdown() {
    var select = $("#posList")[0];
    
    for (var key in positions) {
        var obj = positions[key];
        select.options[select.options.length] = new Option(obj.displayName, key);     
    }
}

/* -------------------------------
        START GAME!
  ------------------------------- */
function init() {
    updatePosDropdown();
    updatePosition(positions["neutralGround"])
    //updatePosition(positions[getRandomPosition()]);
}

init();
