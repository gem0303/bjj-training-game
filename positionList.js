var positions = {
    mount : {
            shortName: "mount",
            displayName: "Mount",
            validMoves: ["armBarFromMount", "kimuraFromMount", "monoplataFromMount", "gogoplataFromMount", "armTriangleChokeMount", "rollingKimuraFromMount"],
            notes: "sitting on opponent's chest, as far up as you can get, knees pinched tight"
        },
    closedGuard : {
            shortName: "closedGuard",
            displayName: "Closed Guard",
            validMoves: ["armBarFromGuard", "scissorSweep", "kimuraFromGuard", "collarChoke", "triangleChokeFromGuard", "situpSweep", "xChokeFromGuard", "armlockFromGuard", "flowerSweep", "switchToOG", "armDragCG"],
            notes: "your legs are wrapped around opponent's waist. remember to keep closed guard! try to break posture (hands/arms > grip fighting, legs > break posture) and meanwhile look for opponent's mistakes."
        },
    inOppGuard : {
            shortName: "inOppGuard",
            displayName: "In Opponent's Guard",
            validMoves: ["standUp", "standingGuardBreak", "legHugPassfromInGuard", "standingPass", "kneeCutPass"],
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
            validMoves: ["shrimpFromMount", "bridgingMountEscape", "legTrapMountEscape"],
            notes: "opponent is sitting on your chest. not the best place to be, breathe and stay calm!"
        },
    neutralGround : {
            shortName: "neutralGround",
            displayName: "On Ground, Neutral Position",
            validMoves: ["collarDrag", "pullGuard", "heelPickCombatBase", "standingPass", "kneeCutPass"],
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
            validMoves: ["shrimpFromBSC", "armbarFromBSC", "jailbreakEscape"],
            notes: "on your back, opponent laying on your chest"
        },
    kneeOnBelly : {
            shortName: "kneeOnBelly",
            displayName: "Knee on Belly",
            validMoves: ["armbarFromKOB", "toSCfromKOB", "toMountfromKOB"],
            notes: "opponent on back, your knee in their belly/solar plexus"
        },
    halfGuard : {
            shortName: "halfGuard",
            displayName: "Half Guard (Top)",
            validMoves: ["passKneeShield", "passKneeShield2", "passHG", "passHG2"],
            notes: "Opponent is on their back/side underneath you. One of your legs is past their hips, the other is trapped by one of their legs. Try to get arms around and under opponent's head."
        },
    bottomHalfGuard : {
            shortName: "bottomHalfGuard",
            displayName: "Half Guard (Bottom)",
            validMoves: ["triangleChokeFromBotHG", "baseballBatChokeFromBottom", "backTakeFromBHG", "johnWayneSweep", "lapelSweep", "lapelBackTake"],
            notes: "Opponent is on top of you. You are ideally on your side (don't get pushed to your back), using one or both of your legs to hook one of your opponent’s legs. Use arms to brace/frame or get an underhook."
        },
    turtle : {
            shortName: "turtle",
            displayName: "Turtle",
            validMoves: [],
            notes: ""
        },
    openGuard : {
            shortName: "openGuard",
            displayName: "Open Guard",
            validMoves: ["tripodSweep", "pullIntoCG"],
            notes: "You are on the ground, seated or lying on your back. Try to maintain 4 points of contact with your opponent: feet on hips, legs wrapped around or through their legs, sleeve grips, collar grips, or your hands/arms holding on to their legs. Note that this is a catch-all position for open guards, until I figure out the best way to implement them individually."
        },
    inOpenGuard : {
            shortName: "inOpenGuard",
            displayName: "In Opponent's Open Guard",
            validMoves: [],
            notes: "Your opponent is on the ground and you are standing or crouched over them. They are likely trying to pull you back to the ground or sweep you. Try to break free of their grips. Note that this is a catch-all position for your position vs open guards, until I figure out the best way to implement them individually."
        },    
    delarivaGuard : {
            shortName: "delarivaGuard",
            displayName: "De La Riva Guard",
            validMoves: ["ballChainSweep", "overheadSweepDLR", "seatedSweepDLR", "switchToOG"],
            notes: "Opponent is standing. You're on your back underneath them. Get your butt near their forward foot. Control ankle or pants leg. Hook foot behind their knee and into their far-side thigh from underneath. Opposite foot posted on the other thigh, maybe in the hip/waist area. With free hand, get/maintain a grip on same side arm, far side arm, or lapel."
        }
}


// Used to determine the opposite position
var positionPairs = {
    mount : ["mounted"],
    mounted : ["mount"],
    closedGuard : ["inOppGuard"],
    inOppGuard : ["closedGuard"],
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
    openGuard : ["inOpenGuard"],
    inOpenGuard : ["openGuard"],
    delarivaGuard : ["inOpenGuard"]
}


/*

// FUTURE


x guard

various guard positions from the stephen kesting pdf

sidemount

*/
