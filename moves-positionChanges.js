var movesPositionChanges = [
    {
        displayName: "Scissor Sweep",
        shortName: "scissorSweep",
        type: "positionChange",
        next: "mount",
        notes: "Move opponent off balance. Deep collar grip, grab sleeve on same side. open guard and make the belt, other leg FLAT on the ground. pull them forward ('check the time'). bring leg out wide and smash it HARD against their legs to complete the sweep. alternate: use both legs in more of a true scissor motion by pulling bottom leg back and pushing top leg forward to topple over your opponent. Also try the push sweep, where you push their knee out and away with the bottom leg, rather than blocking it from the outside.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/UBf7uF5x8GQ"}
            ],
        defense: ["post on outside leg and inner arm", "try to keep eyes on opponent"], //https://www.youtube.com/watch?v=mRFVO1DOD5Y
        addChain: ["triangleSetupFromSS"]

    },{
        displayName: "Pass Guard",
        shortName: "passGuard",
        type: "positionChange",
        next: ["sideControl", "halfGuard"],
        notes: "placeholder move because passing guard can mean a lot of different things. generally, want to apply pressure to one of opponents legs, get over it, and advance into half guard or side control.",
        defense: ["make and keep grips/stay connected to them", "know when to give up the position", "get on your side if you know side control is imminent"] 
        // todo: record some actual techniques
        // todo: this is being used both from in neutral and in guard, may need to split up eventually.
    },{
        displayName: "Shrimp",
        shortName: "shrimp",
        type: "positionChange",
        next: "neutralGround", // todo - update
        notes: "bridge, buck hips upwards, then swing out (AWAY) from opponent to create space. don't give them your back."
    },{
        displayName: "Arm Drag",
        shortName: "armDrag",
        type: "positionChange",
        next: "rearMount",
        notes: "C grip thumb up on opp wrist. Underhand grip on tricep. Pull diagonally across you. Plant outside foot, hook other over calf. Bring them down to elbow. Hook arm and take back. Arm goes under their armpit and grips opposite hand/wrist. In seatbelt hold."
    },{
        displayName: "Upa Escape / Mount Escape",
        shortName: "sweepWhileMounted",
        type: "sweep",
        next: "inOppGuard",
        notes: "Bridge to throw opponent off balance and force their hands to land on the mat. Get an overhook on one arm. Same-side leg should step over their leg to trap it. Bump/bridge a second time and dump opponent to the side. They'll land on their back and you end up on your knees, in their guard. Immediately posture up. You can also try this sweep if opponent's hand is gripping your neck or collar. Make a monkey grip on their wrist with opposite hand. Same-side hand reaches up to cup tricep. Trap leg, bridge and roll like usual.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/Rok32K89DZc"}
            ],
    },{
        displayName: "Pull Guard",
        shortName: "pullGuard",
        type: "positionChange",
        next: "inGuard",
        notes: "more notes needed on how to do this. essentially grab opponents arms, get control of one, lift leg up same side and drag/trip them to the floor. watch out for them passing guard on you. tons of ways to do this, this is more of a placeholder move for now. expand on techniques :)"
/*    },{
        displayName: "Stand Up",
        shortName: "standUp",
        type: "positionChange",
        next: "standing",
        notes: "if your opponent does not have you in closed guard, push to feet and back away"*/
    },{
        displayName: "Collar Drag",
        shortName: "collarDrag",
        type: "positionChange",
        next: "rearMount",
        notes: "grip same side of lapel, bring elbow to the mat and post off other hand, scoot to one side and swing up over opponent's back. remember to get in hooks",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/Ahtq9FY3Fws"}
            ]
    },{
        displayName: "Arm Drag Takedown",
        shortName: "armDragTakedown",
        type: "positionChange",
        next: "rearMount", // todo: side control
        notes: "mirror stance, outside hand grabs wrist, inside hand cups tricep, pull opponent toward you and circle to take back, your inside foot is hooking around theirs", // todo: what to do if you can't circle far enough to back
        defense: [""]        
    },{
        displayName: "Standing Guard Break",
        shortName: "standingGuardBreak",
        type: "positionChange",
        next: "sideControl", // todo: half guard
        notes: "Catpaw grip on their sleeve, get same side knee up, then the other (tip: swing your hips slightly to the side to make space), stand up FAST and throw hips out to break opponent's legs apart (push with stiff arm against knee if needed). Step over leg so it's trapped between your thighs and drive knee to floor to break through into half guard, or, if possible, drive opponent onto their side and circle around into side mount. (more notes needed here of alternate techniques). you can also circle your opponent once you're standing to dislodge legs and disorient them.",
        defense: [""]
    },{
        displayName: "Pop Up",
        shortName: "popUp",
        type: "positionChange",
        next: "kneeOnBelly",
        notes: "Spring up and drive knee into hollow of opponent's chest/gut. Other leg out for balance, heel planted."
    },{
        displayName: "Jail Break Escape",
        shortName: "jailbreakEscape",
        type: "positionChange",
        next: "butterfly",
        notes: "Thread inside arm under opponent, same side leg/knee is bent up and pushing against opponent to make some space. Threaded arm grabs OPPOSITE foot, and pulls it through. Frame with the other foot against hip.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/thUHGQyYrjc?start=45"}
            ]
    },{
        displayName: "Defend", // when opp has your back
        shortName: "defendBack",
        type: "positionChange",
        next: "inGuard",
        notes: "Always try to fall to the -opposite side- of the choking arm (pillow of death). Once there, reach up and get a strong grip on opponent's collar. Hide your chin so they can't finish the choke. Plant your feet and turn INTO your opponent to 'scrape them off' your back. You'll want to get your knees under you so you can drive forward. Use grips on opponent's collar to help pull you forward (like climbing a rope). Advance as far as you can."
    },{
        displayName: "Pass to Mount", // from side control
        shortName: "passToMount",
        type: "positionChange",
        next: "mount",
        notes: "Shoulder pressure, forearm like a belt across hips, knee replaces arm, far side arm covers opponent's far side arm/shoulder to keep it out of the way, shift hips and throw leg rest of the way over.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/Qx9ESxCCy6E"}
            ]
    },{
        displayName: "Pass to Mount 2", // from side control
        shortName: "passToMount2",
        type: "positionChange",
        next: "mount",
        notes: "Heavy shoulder pressure, outside arm reaches over and smashes against his legs to drop them toward you, step behind his legs quickly and roll over, use outside arm to block his far side arm/shoulder.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/Qx9ESxCCy6E"}
            ]
    },{
        displayName: "Sit Up Sweep",
        shortName: "situpSweep",
        type: "positionChange",
        next: "mount",
        notes: "aka 'stinky armpit sweep' Get a strong lapel grip. Shrimp to the side, post off your leg, and sit up explosively. Your arm should cross your body and scoop over your opponent's shoulder, cupping their tricep. Momentum should roll opponent on to their back.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/PcEniBDPNMU"},
            {type: "video", url: "https://www.youtube.com/embed/m6gv-iDarkE"}
            ]
    },{
        displayName: "Leg Trap Mount Escape",
        shortName: "legTrapMountEscape",
        type: "positionChange",
        next: "halfGuardBottom",
        notes: "Have legs against the floor so opponent can't grapevine. Frame, elbows on the inside. Bridge and shrimp so you're partially on your side (not too far!). Throw your leg over to the opposite side and trap your opponent's leg/shin. Hook his foot and drag it back over your flat leg. Then brace/frame and pull that leg free. Go for the underhook and switch your hips, pulling the first leg free and out. Lock your legs around opponent's to end up in half guard. Tip: if opponent's foot is tucked too close to scrape, push your flat-leg knee outward to make his foot an easier target. Also, in the video she even comes to rear mount!",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/q2OAJF__P2w"}
            ]
    },{
        displayName: "Triangle Setup from Overhook",
        shortName: "triangleSetupFromOverhookGuard",
        type: "positionModifier",
        notes: "With overhook in place, use your free hand to control opponent's other arm. Pin to their chest/side. Shift hips to point at your overhook side. Your leg comes out and over the arm you have pinned to setup the triangle.",
        resources: [
            {type: "webpage", url: "https://howtheyplay.com/individual-sports/Closed-Guard-Overhook-Combinations-a-BJJ-Tutorial", title: "Closed Guard Overhook Combinations"},
            {type: "video", url: "https://www.youtube.com/embed/FGPazXbdsLA"},
            {type: "video", url: "https://www.youtube.com/embed/5gW16WmIVjs"},
            ],
        defense: []
        // todo some way of highlighting relationship to triangle.
    },{
        displayName: "Ball & Chain Sweep",
        shortName: "ballChainSweep",
        type: "positionChange",
        next: ["halfGuard", "sideControl"],
        notes: "From DLR, make a grip on opponent's far-side sleeve. Use free leg to push on opponent's far-side thigh, so they take a big step back. At the same time, sit up (pull on opponent's sleeve for help) and wrap your free hand around opponent's trapped leg. Let your hooked leg drop to the floor, but keep it active. Transfer the sleeve grip to the other hand. Reach up with free hand and get a grip on opponent's collar. Simultaneously pull collar down, pull his sleeve in between his leg, and push on the far-side leg. Opponent will fall to the ground. Get your hips under you and advance your position.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/I5ZRVabUcIY"},
            {type: "webpage", url: "https://bjjfanatics.com/blogs/news/go-to-de-la-riva-sweeps", title: "Go To De La Riva Sweeps"},
            ],
        defense: []
    },{
        displayName: "Overhead Sweep",
        shortName: "overheadSweepDLR",
        type: "positionChange",
        next: "mount",
        notes: "From DLR, make a grip on opponent's near-side sleeve. Free hand gets a grip on near-side collar up by their collar bone. (You could also have 2 catpaw grips on sleeves.) Free leg braces against opponent's far-side thigh. As opponent drives forward into you, bring your knees to your chest, and lift your leg up to sweep opponent over your head. He will end up on his back, and you follow into mount.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/ylXALtSRdxk"},
            {type: "webpage", url: "https://bjjfanatics.com/blogs/news/go-to-de-la-riva-sweeps", title: "Go To De La Riva Sweeps"},
            ],
        defense: []
    },{
        displayName: "Seated Sweep",
        shortName: "seatedSweepDLR",
        type: "positionChange",
        next: "sideControl",
        notes: "This is more of a seated DLR. Opponent is crouched with 1 knee up. Start with 2 catpaw grips on the sleeves, and 1 foot braced against opponent's thigh. The other leg comes around under/behind opponent's knee, and press/hook into his hip. You might need to drop your elbow to scoot your butt around to get the hook deep enough. From there, use free leg to kick his knee out and simultaneously lean backwards to stretch opponent's body out. Then dump him to his side. Come up and advance to side control. Video covers 2 additional techniques in cases where your opponent postures up to prevent the sweep.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/R9U6Fbnlv2g"}
            ],
        defense: ["posture"]
    },{
        displayName: "Leg Hug Pass",
        shortName: "legHugPassfromInGuard",
        type: "positionChange",
        next: "sideControl",
        notes: "Have to have the right setup from your opponent for this to work. Basically, one of their legs should be up on your shoulder. (Imagine if they have shot for and failed a triangle setup.) Grab the leg and push it over your head to your opposite shoulder. Scoop up their other leg and 'bear hug' both legs together. Now shove their legs down to the mat, effectively causing them to lose all control of their hips, and turn the corner into side control.",
        defense: ["stiff-arm his head and push it to the side he's trying to pass to", "break grips on pants"]
    },{
        displayName: "Heel Pick vs. Combat Base",
        shortName: "heelPickCombatBase",
        type: "positionChange",
        next: "halfGuard",
        notes: "Opponent needs to be in combat base (one knee up, one knee down). First, if their base is tight (no space between knees) you need to create some space behind the posted leg. Grip fight and get a cross body lapel grip. Pull opponent forward and push on their knee to break their balance/stance. You can also try for a lapel drag where you circle out to the side. Once you have space, get lapel grip if you don't already have it. Your free hand grabs opponent's heel (should be same side). Pull opponent forward to disrupt their balance and generate momentum. Then lift their ankle and push forward. They will sprawl backwards.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/F2iAO5_NM48"},
            ],
        defense: []
    },{
        displayName: "Back Take",
        shortName: "backTakeFromBHG",
        type: "positionChange",
        next: "rearMount",
        notes: "get an underhook on opponent and scoot out to take their back",
        defense: ["get a whizzer on the underhook", "push back and extract your arm - then drive back in for your underhook"]
    },{
        displayName: "Pass Knee Shield",
        shortName: "passKneeShield",
        type: "positionChange",
        next: "kneeOnBelly",
        notes: "This technique works if opponent has a knee shield. Establish upper body control (ex: wedge hands in armpits). Stand up so opponent rolls to being flat on their back. Two options from here:<br>A) Roll opponent all the way over to their other side. Drop down on their hips and slide to side control.<br>B) Hold on to both of opponent's knees and slide trapped leg back a step. Bend that leg so your knee points out toward your other leg. (moving you, not your opponent) Quickly circle out the leg and land your foot right by opponent's hip. Advance to knee on belly or side control.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/rfJjmq0vRUs?start=60"},
            ],
        defense: []
    },{
        displayName: "Basic Pass",
        shortName: "passHG",
        type: "positionChange",
        next: "sideControl",
        notes: "Your top arm gets underhook with 4 finger grip inside collar. Use free hand to get control of opponent's other arm. Drive forward with shouder to establish cross face control. Use shoulder pressure and plant your forehead on the mat to make sure opponent's head is turned away from you. Also make sure that opponent's near-side arm/elbow is lifted up off the mat. Your free leg kicks out to establish a wide base. Turn hips out and get them to the floor. Slide trapped leg out to complete the pass. Might need to repeat widening stance/sliding hips pattern a few times. Can also reach back with free leg to help push against opponent's legs to free your trapped leg (don't let opponent catch both legs). Important to maintain upper body pressure, grips and tightness through the entire pass. Note: this doesn't work against knee shield.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/IWwJKi4ZX8Q?start=20"},
            ],
        defense: []
    }

]

/*
TEMPLATE:

    },{
        displayName: "NAME",
        shortName: "SHORT NAME",
        type: "positionChange",
        next: "mount",
        notes: "NOTES",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/XYZ"},
            ],
        defense: []
    }
    
*/

