var positions = {
    mount : {
            shortName: "mount",
            displayName: "Mount",
            validMoves: ["armBarFromMount", "kimuraFromMount", "monoplataFromMount", "gogoplataFromMount", "armTriangleChokeMount"],
            notes: "sitting on opponent's chest, as far up as you can get, knees pinched tight"
        },
    inGuard : {
            shortName: "inGuard",
            displayName: "Opponent in Your Guard",
            validMoves: ["armBarFromGuard", "scissorSweep", "kimuraFromGuard", "collarChoke", "triangleChokeFromGuard", "breakPosture"],
            notes: "your legs are wrapped around opponent's waist. remember to keep closed guard! try to break posture (hands/arms > grip fighting, legs > break posture) and meanwhile look for opponent's mistakes."
        },
    inOppGuard : {
            shortName: "inOppGuard",
            displayName: "In Opponent's Guard",
            validMoves: ["passGuard", "standUp", "standingGuardBreak"], // todo guillotine?
            notes: "you are between opponent's legs, which are most likely clamped around behind your back. solid base, elbows in, posture up, head shouldn't go past hands"
        // variations: open guard, closed guard, in opp half guard
        },
    sideControl : {
            shortName: "sideControl",
            displayName: "Side Control",
            validMoves: ["popUp", "guillotineFromSide", "passToMount", "passToMount2"],
            notes: "opponent on back, you on top. one arm under head, other hand on hip to control them, or snowball grip."
        },
    mounted : {
            shortName: "mounted",
            displayName: "Mounted by Opponent",
            validMoves: ["shrimp", "sweepWhileMounted"],
            notes: "opponent is sitting on your chest. not the best place to be, breathe and stay calm!"
        },
    neutralGround : {
            shortName: "neutralGround",
            displayName: "On Ground, Neutral Position",
            validMoves: ["collarDrag", "pullGuard"],
            notes: "crouched, seated, or something in between"
        },
    standing : {
            shortName: "standing",
            displayName: "Standing",
            validMoves: ["armDragTakedown"],
            notes: "standing up, you and opponent facing each other"
        },
    butterfly : {
            shortName: "butterfly",
            displayName: "Butterfly",
            validMoves: ["armDrag", "ankleLock", "collarDrag"],
            notes: "opponent is on their knees, your feet are hooked between their legs or thighs" // todo: reverse position
        },
    rearMount : {
            shortName: "rearMount",
            displayName: "Have Opponent's Back",
            validMoves: ["rearNakedChoke", "bowArrowChoke"],
            notes: "your chest is on your opponent's back, you are holding on to them"
        // TODO variations: with hooks, with 1 hook
        },
    rearMounted : {
            shortName: "rearMounted",
            displayName: "Opponent has your back",
            validMoves: ["defendBack"],
            notes: "your opponent is on your back"
        },
    bottomSideControl : {
            shortName: "bottomSideControl",
            displayName: "Side Control (Bottom)",
            validMoves: ["shrimp", "armbarFromBSC", "jailbreakEscape"],
            notes: "on your back, opponent laying on your chest"
        },
    kneeOnBelly : {
            shortName: "kneeOnBelly",
            displayName: "Knee on Belly",
            validMoves: ["armbarFromKOB"],
            notes: "opponent on back, your knee in their belly/solar plexus"
        },
    halfGuard : {
            shortName: "halfGuard",
            displayName: "Half Guard (Top)",
            validMoves: [""],
            notes: "You are on your side using your inside leg to hook one of your opponent’s legs and have some sort of underhook with your top arm. There are many minor variations to this position, including having your legs triangled, gripping his gi or his belt, etc"
        },
    halfGuardBottom : {
            shortName: "halfGuardBottom",
            displayName: "Half Guard (Bottom)",
            validMoves: [""],
            notes: "Opponent has his leg(s) hooked around one of yours, possibly some kind of arm control."
        }
}


// Used to determine how the opposite position could be positioned
var positionPairs = {
    mount : ["mounted"],
    mounted : ["mount"],
    inGuard : ["inOppGuard"],
    inOppGuard : ["inGuard"],
    sideControl : ["bottomSideControl"],
    bottomSideControl : ["sideControl", "kneeOnBelly"],
    neutralGround : ["neutralGround", "standing"],
    standing : ["standing", "neutralGround"],
    rearMount : ["rearMounted"],
    rearMounted : ["rearMount"],
    kneeOnBelly : ["bottomSideControl"],
    halfGuard : ["halfGuardBottom"],
    halfGuardBottom : ["halfGuard"],
    butterfly : ["neutralGround"]
}


/*

// FUTURE


x guard

various guard positions from the stephen kesting pdf


 
*/
