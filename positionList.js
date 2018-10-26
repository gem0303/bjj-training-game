var positions = {
    mount : {
            shortName: "mount",
            displayName: "Mount",
            validMoves: ["armBarFromMount", "kimuraFromMount", "monoplataFromMount", "gogoplataFromMount", "armTriangleChokeMount", "rollingKimuraFromMount"],
            notes: "sitting on opponent's chest, as far up as you can get, knees pinched tight"
        },
    inGuard : {
            shortName: "inGuard",
            displayName: "In Guard",
            validMoves: ["armBarFromGuard", "scissorSweep", "kimuraFromGuard", "collarChoke", "triangleChokeFromGuard", "situpSweep", "xChokeFromGuard"],
            notes: "your legs are wrapped around opponent's waist. remember to keep closed guard! try to break posture (hands/arms > grip fighting, legs > break posture) and meanwhile look for opponent's mistakes."
        },
    inOppGuard : {
            shortName: "inOppGuard",
            displayName: "In Opponent's Guard",
            validMoves: ["passGuard", "standUp", "standingGuardBreak"],
            notes: "you are between opponent's legs, which are most likely clamped around behind your back. Make a solid base, elbows in, posture up, head shouldn't go past hands"
        },
    sideControl : {
            shortName: "sideControl",
            displayName: "Side Control",
            validMoves: ["popUp", "guillotineFromSide", "passToMount", "passToMount2", "papercutterChoke"],
            notes: "opponent on their back, you on top. one arm under head, other hand on hip to control them, or snowball grip."
        },
    mounted : {
            shortName: "mounted",
            displayName: "Mounted by Opponent",
            validMoves: ["shrimp", "sweepWhileMounted", "legTrapMountEscape"],
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
    bottomHalfGuard : {
            shortName: "bottomHalfGuard",
            displayName: "Half Guard (Bottom)",
            validMoves: ["triangleChokeFromBotHG", "baseballBatChokeFromBottom"],
            notes: "Opponent has his leg(s) hooked around one of yours, possibly some kind of arm control."
        },
    turtle : {
            shortName: "turtle",
            displayName: "Turtle",
            validMoves: [],
            notes: ""
        },
    delarivaGuard : {
            shortName: "delarivaGuard",
            displayName: "De La Riva Guard",
            validMoves: [],
            notes: "Opponent is standing. You're on your back underneath them. Get your butt near their forward foot. Control ankle or pants leg. Hook foot behind their knee and into their thigh from underneath. Opposite foot posted on the other thigh, maybe in the hip/waist area. With free hand, get/maintain a grip on same side arm, far side arm, or lapel."
        }
}


// Used to determine the opposite position
var positionPairs = {
    mount : ["mounted"],
    mounted : ["mount"],
    inGuard : ["inOppGuard"],
    inOppGuard : ["inGuard"],
    sideControl : ["bottomSideControl"],
    bottomSideControl : ["sideControl", "kneeOnBelly"],
    neutralGround : ["neutralGround", "standing", "turtle"],
    standing : ["standing", "neutralGround"],
    rearMount : ["rearMounted"],
    rearMounted : ["rearMount"],
    kneeOnBelly : ["bottomSideControl"],
    halfGuard : ["bottomHalfGuard"],
    bottomHalfGuard : ["halfGuard"],
    butterfly : ["neutralGround"],
    turtle : ["neutralGround"],
    delarivaGuard : ["standing"]
}


/*

// FUTURE


x guard

various guard positions from the stephen kesting pdf

sidemount
 
*/
