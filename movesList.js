var moves = [
    {
        displayName: "Arm Bar from Mount",
        shortName: "armBarFromMount",
        type: "submission",
        notes: "Trap arm. Bring opposite leg to one knee. Put weight on that foot and hands completely. Sweep other leg around FAST and SIT DOWN. PINCH knees to their torso hard. Keep their arm tight against chest. Lean back. Thumb up. Lift hips to finish.",
        defense: ["do the thing"]
    },{
        displayName: "Arm Bar From Guard",
        shortName: "armBarFromGuard",
        type: "submission",
        notes: "Underhand grip on opponent's elbow, pull it across their body. You will spin the direction the arm is pointed. Leg on hip to help push. Pole through your belly, spin and get spine turned on opponent. Swing other leg up over opponent's head. PINCH KNEES TOGETHER. DO NOT CROSS FEET. Bite down, monkey hanging in a tree. Move hand to their wrist for better control, their thumb pointed up. Arm bar by lifting hips and keep their arm close to our chest."
    },{
        displayName: "Kimura from Guard",
        shortName: "kimuraFromGuard",
        type: "submission",
        notes: "get opponent off balance, grab their wrist. plant feet on floor, lean up and sweep opp arm over their shoulder/elbow. Loop underneath their arm and grab your own wrist. Lean back, leg up over opponent's back. Pinch elbows to chest. Scoot hip out and turn."
    },{
        displayName: "Kimura from Mount",
        shortName: "kimuraFromMount",
        type: "submission",
        notes: "pinch arm with elbow, grab with other arm. turn upper body to slide grip down to wrist. then other hand comes to grab that wrist. their hand should be pointed to ground. turn your shoulders toward their face. Can also forego your grip on your own wrist and hold on to their elbow to apply pressure.",
        videoUrl: ["https://www.youtube.com/embed/yfGHPs9MnrQ"]
    },{
        displayName: "Scissor Sweep",
        shortName: "scissorSweep",
        type: "positionChange",
        next: "mount",
        notes: "move opponent off balance. deep collar grip, grab sleeve on same side. open guard and make the belt, other leg FLAT on the ground. pull them forward ('check the time'). bring leg out wide and smash it HARD against their legs to complete the sweep. alternate: use both legs in more of a true scissor motion by pulling bottom leg back and pushing top leg forward to topple over your opponent.",
        videoUrl: ["https://www.youtube.com/embed/UBf7uF5x8GQ"]

    },{
        displayName: "Pass Guard",
        shortName: "passGuard",
        type: "positionChange",
        next: "sideControl",
        notes: "placeholder move because passing guard can mean a lot of different things. generally, want to apply pressure to one of opponents legs, get over it, and advance into half guard or side control." // todo: smash pass, other variations
    },{
        displayName: "Shrimp",
        shortName: "shrimp",
        type: "positionChange",
        next: "neutralGround",
        notes: "bridge, buck hips upwards, then swing out (AWAY) from opponent to create space. don't give them your back."
    },{
        displayName: "Arm Drag",
        shortName: "armDrag",
        type: "positionChange",
        next: "rearMount",
        notes: "C grip thumb up on opp wrist. Underhand grip on tricep. Pull diagonally across you. Plant outside foot, hook other over calf. Bring them down to elbow. Hook arm and take back. Arm goes under their armpit and grips opposite hand/wrist. In seatbelt hold."
    },{
        displayName: "Sweep",
        shortName: "sweepWhileMounted",
        type: "positionChange",
        next: "inOppGuard",
        notes: "opponent's hand is on your neck or collar. with your opp hand, monkey grip on wrist. other hand reaches up to cup tricep underhand. on tricep grab side, trap opponent's foot by hooking your ankle over their leg. BRIDGE UP to 12 o clock, then flip over and come to knees fast."
    },{
        displayName: "Pull Guard",
        shortName: "pullGuard",
        type: "positionChange",
        next: "inGuard",
        notes: "more notes needed on how to do this. essentially grab opponents arms, get control of one, lift leg up same side and drag/trip them to the floor. watch out for them passing guard on you. tons of ways to do this, this is more of a placeholder move for now. expand on techniques :)"
    },{
        displayName: "Rear Naked Choke",
        shortName: "rearNakedChoke",
        type: "choke",
        notes: "choking arm goes around opponent's neck, elbow aligned w/ their chin. grip bicep of your other arm. that arm wraps behind opponent's head. tighten and pull to finish."
    },{
        displayName: "Guillotine",
        shortName: "guillotine",
        type: "submission",
        notes: "opponent's head is facing you. put armpit on their face (crown of their head) and wrap arm around neck (OVERHAND). use opposite hand to grip your choking arm tightly."
    },{
        displayName: "Ankle Lock",
        shortName: "ankleLock",
        type: "submission",
        notes: "Arrange feet so your outside leg is pressing against opponent's hip/stomach. Your other leg is tucked under their butt. You are squeezing the opponent's leg in between yours. Pinch your knees hard. Thread your arm under their calf (may need to shrimp to make proper space). Grab your threaded wrist/arm tightly. Place blade of threaded forearm under their heel, grip tight with opposite hand. arch back, make a sawing motion for extra ouch." // todo butterfly guard isn't really the right place for this
    },{
        displayName: "Collar Choke",
        shortName: "collarChoke",
        type: "choke",
        notes: "sink hand deep into collar cross body, knuckles touching collar bone. opposite hand goes under your arm to grip opposite side of collar. DEEP. Lean back, inhale. Engage lats to pull your elbows to ground."
    },{
        displayName: "Stand Up",
        shortName: "standUp",
        type: "positionChange",
        next: "standing",
        notes: "if your opponent does not have you in closed guard, push to feet and back away"
    },{
        displayName: "Triangle Choke",
        shortName: "triangleChokeFromGuard",
        type: "submission",
        notes: "shoot hips up, get leg wrapped around opponent's neck, grip ankle with your hand. close into figure 4 as soon as possible and squeeze."
    },{
        displayName: "Monoplata",
        shortName: "monoplataFromMount",
        type: "submission",
        notes: "aka shoulder lock. Trap opponent's arm with your elbow (clamp tight to side). Post same side leg, roll opponent to their side. Post other hand on mat (or opponent's face). Sweep posted leg across opponent's face, roll so butt lands on mat. Their arm should be in between your legs. Roll your legs away from their face to put tension on their arm. Can also straighten your legs to provide tension.",
        videoUrl: ["https://www.youtube.com/embed/zD3sjRk9i5w"]
    },{
        displayName: "Gogoplata",
        shortName: "gogoplataFromMount",
        type: "submission",
        notes: "Trap opponent's arm with your elbow (clamp tight to side). Post same side leg, roll opponent to their side. With leg posted and opponent's arm trapped, post forward on arm (same side as trapped arm). with other hand, grab posted leg and drag across opponent neck. push weight into neck, can use arms to pull on the back of their head, or grab your toes and pull. If this isn't working, you can transition into monoplata by shifting weight off chest, sink butt to mat, bring other leg up and pinch them together, etc.",
        videoUrl: ["https://www.youtube.com/embed/MnauxGlVm2g"]
    },{
        displayName: "Collar Drag",
        shortName: "collarDrag",
        type: "positionChange",
        next: "rearMount",
        notes: "grip same side of lapel, bring elbow to the mat and post off other hand, scoot to one side and swing up over opponent's back. remember to get in hooks",
        videoUrl: ["https://www.youtube.com/embed/Ahtq9FY3Fws"]
    },{
        displayName: "Arm Drag Takedown",
        shortName: "armDragTakedown",
        type: "positionChange",
        next: "rearMount", // todo: side control
        notes: "mirror stance, outside hand grabs wrist, inside hand cups tricep, pull opponent toward you and circle to take back, your inside foot is hooking around theirs" // todo: what to do if you can't circle far enoough to back
    },{
        displayName: "Standing Guard Break",
        shortName: "standingGuardBreak",
        type: "positionChange",
        next: "sideControl", // todo: half guard
        notes: "Catpaw grip on their sleeve, get same side knee up, then the other (tip: swing your hips slightly to the side to make space), stand up FAST and throw hips out to break opponent's legs apart (push with stiff arm against knee if needed). Step over leg so it's trapped between your thighs and drive knee to floor to break through into half guard, or, if possible, drive opponent onto their side and circle around into side mount. (more notes needed here of alternate techniques). you can also circling your opponent once you're standing to dislodge legs and disorient them."
    },{
        displayName: "Bow & Arrow Choke",
        shortName: "bowArrowChoke",
        type: "choke",
        notes: "make sure hooks are in. pull opponent's lapel over their throat, stiffen your back like you're doing a superman and pry opponent apart"
    },{
        displayName: "Arm Triangle Choke from Mount",
        shortName: "armTriangleChokeMount",
        type: "choke",
        notes: "scoop arm under opponent's neck, get underhook with your opposite arm and spiderwalk it out and around, sweeping opponent's arm up against the side of their neck. Cup their elbow to trap it deep against their neck, NOT their forehead. Can post your head on the mat to keep it in place, and/or make a gable grip. Press head against their arm to push it into their artery and choke them. Can also transition to side control (don't get caught in half guard) to increase pressure against their neck. Stay on your knees/toes to really drive in pressure",
        videoUrl: ["https://www.youtube.com/embed/sNEAYcsXuPQ"]
    },{
        displayName: "Pop Up",
        shortName: "popUp",
        type: "positionChange",
        next: "kneeOnBelly",
        notes: "Spring up and drive knee into hollow of opponent's chest/gut. Other leg out for balance, heel planted."
    },{
        displayName: "Arm Bar From KOB",
        shortName: "armbarFromKOB",
        type: "submission",
        notes: "When you first land in knee in belly, your opponent may push at your knee. Make an underhand C grip on their tricep and pull them TOWARD you, dumping them onto your side. Transition so your body is circling over their head. Circle all the way and twist 180 and sit. You should have their arm isolated in an arm lock. One leg will be across their chest or neck. The other against their side. Pinch knees together tight. Arm clamped tight against your chest. Thumb up. Lean back and do arm bar."
        // todo: circle halfway, plant knees on either side of ther body and sit down on their head - options from here?
    },{
        displayName: "Guillotine",
        shortName: "guillotineFromSide",
        type: "submission",
        notes: "Bottom arm under neck, top arm controlling their far arm. When they start to roll toward you, barely give them the space. Your bottom arm lifts and swoops around their neck, let their head come into your armpit. Grip with other hand. Stay on your knees. Wait until they pop up on their knees. Shift your legs forward, under your hips. Throw leg over their back to keep posture broken, bottom leg goes up into their belly like a belt. At the end, your forearm blade should be against their throat, your hand cupped around their cheek, your thumb out like a hook, other hand clamped down on the meat of your palm to hold everything tight. Should be able to see the back of their neck.",
        videoUrl: ["https://www.youtube.com/embed/z9GxZG3t3bk"],
        link: [ {url: "https://www.reddit.com/r/bjj/comments/9dzv2i/let_them_escape_side_control_to_trap_them_in_a/", title: "Reddit post"}, {url: "http://www.cnn.com", title: "CNN"} ]
    },{
        displayName: "Arm Bar from Bottom Side Control",
        shortName: "armbarFromBSC",
        type: "submission",
        notes: "Need to be in position with elbows on your chest, palms shielding your face, opponent's arms around you. Hip/bridge out (explosive!), reverse crunch to bring outside leg around his face, the inside leg tucks in between his body and his arm. Top leg bites down hard. Bring your outside arm out to trap his threatened arm with your armpit, other arm holding his shoulder in place. If this move fails, you can go back to guard.",
        videoUrl: ["https://www.youtube.com/embed/Q3dMhE793g4?start=76"]
    },{
        displayName: "Jail Break Escape",
        shortName: "jailbreakEscape",
        type: "positionChange",
        next: "butterfly",
        notes: "Thread inside arm under opponent, same side leg/knee is bent up and pushing against opponent to make some space. Threaded arm grabs OPPOSITE foot, and pulls it through. Frame with the other foot against hip.",
        videoUrl: ["https://www.youtube.com/embed/thUHGQyYrjc?start=45"]
    }
]


/*

// FUTURE


omoplata from mount

toreando - pin legs down to the floor and VERY quickly circle around to opponent's side for side control

put x guard stuff into game

baseball bat choke - spinning thing


*/
