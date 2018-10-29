/*

// WISHLIST!

prioritized 10/25

-- make it more clear when opponent has countered your move, and then immediately does his own move.

-- Ability to defend an opponent's move by switching to a different position/performing a counter. Currently the "defend" option just stops the move completely, which doesn't usually happen. Need to figure out a way to work in a defensive action list of actual moves, instead of the reminders/cues list (that currently doesn't do anything anyway).

-- Figure out a way to deal with positions that are not paired, and opponent could be in 2+ different positions.
    -- create some alternative positions for "standing" - might be needed as I build in some open guard positions and need more options. Right now I'm only checking move req's based on the position YOU are on, but for the more open/dynamic positions, might need to start checking based on the opponent's position too.
    
-- some moves/sweeps will always land you in the same spot every time (like in mount > roll to in guard). However, some types of sweeps and passes have a variety of end points, depending on your opponent and how the transition plays out. -> Change the 'next' property so it can store an array of potential next positions. How to pick which one you end up in? Random for starters.

-- a way to chain moves together. example you don't hit the arm bar from whatever position, but you can chain in a different move you might normally not be able to do from initial starting position. (inspired by that bottom side control video)
    -- update 10/25: started to work on this with a x collar choke > triangle setup option.


-- get more standing takedowns entered in/researched


-- Customize the skill level of your opponent
    -- diff % chances for position changes vs submissions/chokes?
    -- how likely you can defend or counter their moves (if using random button to decide)



-- ability to put together a 'plan' -- aka, perform this sweep, then execute this submission, then if that fails go for something else. at any point the AI will do offense/defense against you (if toggled on)

-- ability to mark off moves that you want more practice at. it will output a little list for you to refer to

-- mode to hide moveslist, and type in the move you want to do

-- click position in history list to return to that postion



// BUGS!

-- when the opponent is attempting a move, the AI seems to pick from the wrong set of potential moves. Position changes aren't updating correctly or something. 







*/