/*

// WISHLIST!

prioritized 10/25

-- Ability to defend an opponent's move by switching to a different position/performing a counter. Currently the "defend" option just stops the move completely, which doesn't usually happen. Need to figure out a way to work in a defensive action list of actual moves, instead of the reminders/cues list (that currently doesn't do anything anyway). For example, passing guard, you might get all the way to side control, or you might get stuck in half guard. Is there a way to make defense modifiers actually do something? How to make a system work for both player and AI?

-- Figure out a way to deal with positions that are not paired, and opponent could be in 2+ different positions.
    -- create some alternative positions for "standing" - might be needed as I build in some open guard positions and need more options. Right now I'm only checking move req's based on the position YOU are on, but for the more open/dynamic positions, might need to start checking based on the opponent's position too.

-- game has very little open guard positions/submissions.

-- some moves/sweeps will always land you in the same spot every time (like in mount > roll to in guard). However, some types of sweeps and passes have a variety of end points, depending on your opponent and how the transition plays out. -> Change the 'next' property so it can store an array of potential next positions.
    -- How to pick which one you end up in? Random for starters.

-- a way to chain moves together. example you don't hit the arm bar from whatever position, but you can chain in a different move you might normally not be able to do from initial starting position. (inspired by that bottom side control video)
    -- update 10/25: started to work on this with a x collar choke > triangle setup option.
    -- note: currently the "chained" move is NOT added as an option for the AI if *you* defend a move *they* perform.

-- get more standing takedowns entered in/researched

-- Make sure the "new" features with chaining, and performing position modifieres (as an actual move in moves list) remain relavent and helpful. Are they adding value and learning/practice to the game?

-- When adding a chained move, give it a temporary highlight to make it more obvious it's been added

-- Customize the skill level of your opponent
    -- diff % chances for position changes vs submissions/chokes?
    -- how likely you can defend or counter their moves (if using random button to decide)


-- ability to put together a 'plan' -- aka, perform this sweep, then execute this submission, then if that fails go for something else. at any point the AI will do offense/defense against you (if toggled on)

-- mode to hide moveslist, and type in the move you want to do

-- click position in history list to return to that postion (eg "go back a step")

-- put in some pictures of each position.


// Specific situations

-- if opponent is passing to mount, catch them in half guard (situation where there's different levels of defending or countering moves)
-- same if opponent is passing your guard into side control. You may not be able to outright defend it 100% but can catch them in half guard.

// BUGS!

-- when the opponent is attempting a move, the AI seems to pick from the wrong set of potential moves. Position changes aren't updating correctly or something.



*/
