var moves = [
    {
        displayName: "Arm Bar from Mount",
        shortName: "armBarFromMount",
        type: "submission",
        notes: "Trap arm. Bring opposite leg to one knee. Put weight on that foot and hands completely. Sweep other leg around FAST and SIT DOWN. PINCH knees to their torso hard. Keep their arm tight against chest. Lean back. Thumb up. Lift hips to finish.",
        defense: ["hold on to arm being attacked"]
    },{
        displayName: "Arm Bar From Guard",
        shortName: "armBarFromGuard",
        type: "submission",
        notes: "Underhand grip on opponent's elbow, pull it across their body. You will spin the direction the arm is pointed. Leg on hip to help push. Pole through your belly, spin and get spine turned on opponent. Swing other leg up over opponent's head. PINCH KNEES TOGETHER. DO NOT CROSS FEET. Bite down, monkey hanging in a tree. Move hand to their wrist for better control, their thumb pointed up. Arm bar by lifting hips and keep their arm close to our chest.",
        defense: ["put head down to block leg", "pinch knees to his hips", "lock arm being attacked against your other bicep", "stack opponent/post knee", "pull elbow free"]
    },{
        displayName: "Kimura from Guard",
        shortName: "kimuraFromGuard",
        type: "submission",
        notes: "get opponent off balance, grab their wrist. plant feet on floor, lean up and sweep opposite arm over their shoulder/elbow. Loop underneath their arm and grab your own wrist (figure 4). Lean back, leg up over opponent's back. Pinch elbows to chest. Scoot hip out and turn.",
        defense: ["turn palm to opponent's chest", "drive your ear to his shoulder"]
        // https://www.youtube.com/watch?v=2DYXS2feaF8
    },{
        displayName: "Kimura from Mount",
        shortName: "kimuraFromMount",
        type: "submission",
        notes: "pinch arm with elbow, grab with other arm. turn upper body to slide grip down to wrist. then other hand comes to grab that wrist. their hand should be pointed to ground. turn your shoulders toward their face. Can also forego your grip on your own wrist and hold on to their elbow to apply pressure.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/yfGHPs9MnrQ"}
        ]
    },{
        displayName: "Rolling Kimura from Mount (No Gi)",
        shortName: "rollingKimuraFromMount",
        type: "submission",
        notes: "isolate arm out to the side and establish figure 4 lock. use your forearm against his side as a brace at this point. Pop up (time this!) and lock wrist in place with your knee. Opposite side leg posts out, FAR in front of you/over their head. Drop on to your shoulder (same side as the arm you're attacking) to roll. Keep figure 4 grip the whole way! Both legs should bite down on his back. You will end up on your back in kimura position. Bend his arm/elbow toward his face to finish.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/g4c5RG4KYlo"}
            ]
    },{
        displayName: "Scissor Sweep",
        shortName: "scissorSweep",
        type: "positionChange",
        next: "mount",
        notes: "move opponent off balance. deep collar grip, grab sleeve on same side. open guard and make the belt, other leg FLAT on the ground. pull them forward ('check the time'). bring leg out wide and smash it HARD against their legs to complete the sweep. alternate: use both legs in more of a true scissor motion by pulling bottom leg back and pushing top leg forward to topple over your opponent.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/UBf7uF5x8GQ"}
            ],
        defense: ["post on outside leg and inner arm", "try to keep eyes on opponent"] //https://www.youtube.com/watch?v=mRFVO1DOD5Y

    },{
        displayName: "Pass Guard",
        shortName: "passGuard",
        type: "positionChange",
        next: "sideControl",
        notes: "placeholder move because passing guard can mean a lot of different things. generally, want to apply pressure to one of opponents legs, get over it, and advance into half guard or side control.",
        defense: ["make and keep grips/stay connected to them", "know when to give up the position", "get on your side if you know side control is imminent"] 
        // todo: smash pass, other variations
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
        notes: "choking arm goes around opponent's neck, elbow aligned w/ their chin. grip bicep of your other arm. that arm wraps behind opponent's head. tighten and pull to finish.",
        defense: ["clamp down on opponent's arms (armpit/grips)", "shoulders up, chin down"] // https://www.youtube.com/watch?v=JR2e0IsqhrQ
    },{
        displayName: "Guillotine",
        shortName: "guillotine",
        type: "submission",
        notes: "opponent's head is facing you. put armpit on their face (crown of their head) and wrap arm around neck (OVERHAND). use opposite hand to grip your choking arm tightly.",
        defense: [""]
    },{
        displayName: "Ankle Lock",
        shortName: "ankleLock",
        type: "submission",
        notes: "Arrange feet so your outside leg is pressing against opponent's hip/stomach. Your other leg is tucked under their butt. You are squeezing the opponent's leg in between yours. Pinch your knees hard. Thread your arm under their calf (may need to shrimp to make proper space). Grab your threaded wrist/arm tightly. Place blade of threaded forearm under their heel, grip tight with opposite hand. arch back, make a sawing motion for extra ouch.",
        defense: [""]
        // todo butterfly guard isn't really the right place for this
    },{
        displayName: "Collar Choke",
        shortName: "collarChoke",
        type: "choke",
        notes: "sink hand deep into collar cross body, knuckles touching collar bone. can pull on back of neck to break posture more. opposite hand goes under your arm to grip opposite side of collar. DEEP. Lean back, inhale. Engage lats to pull your elbows to ground.",
        defense: ["two-handed grip strip", "bob and weave under arm", "block their free arm"] //https://www.youtube.com/watch?v=rJM7Ou84ZA4
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
        notes: "Pull one arm toward you. In the 'space' you've made on the opposite site, shoot your leg up and wrap it across  opponent's neck, close your other leg over it, lock with your foot pointed up. To finish: Get the arm you're attacking crossed to other side of their body ('in the pocket'). Pull on the back of their neck. Imagine creating a smaller space in between your legs. Pull knees in by bending legs out. Create an angle between your spines.",
        defense: ["look up/posture up", "sit back and get a strong base", "slide vulnerable arm back to the floor (don't cross it in front of you)"]
    },{
        displayName: "Monoplata",
        shortName: "monoplataFromMount",
        type: "submission",
        notes: "aka shoulder lock. Trap opponent's arm with your elbow (clamp tight to side). Post same side leg, roll opponent to their side. Post other hand on mat (or opponent's face). Sweep posted leg across opponent's face, roll so butt lands on mat. Their arm should be in between your legs. Roll your legs away from their face to put tension on their arm. Can also straighten your legs to provide tension.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/zD3sjRk9i5w"}
            ],
        defense: [""]
    },{
        displayName: "Gogoplata",
        shortName: "gogoplataFromMount",
        type: "submission",
        notes: "Trap opponent's arm with your elbow (clamp tight to side). Post same side leg, roll opponent to their side. With leg posted and opponent's arm trapped, post forward on arm (same side as trapped arm). with other hand, grab posted leg and drag across opponent neck. push weight into neck, can use arms to pull on the back of their head, or grab your toes and pull. If this isn't working, you can transition into monoplata by shifting weight off chest, sink butt to mat, bring other leg up and pinch them together, etc.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/MnauxGlVm2g"}
            ],
        defense: [""]
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
        displayName: "Bow & Arrow Choke",
        shortName: "bowArrowChoke",
        type: "choke",
        notes: "Make sure hooks are in. Get a strong grip on opponent's lapel. Clamp elbow to opponent's shoulder. Press your head against your opponents to keep control. (If on your side, move your head underneath your opponent's.) Free hand grabs for opponent's pants (ideal - underhook leg). Transition leg hooks so your legs point away from the leg you've trapped. Do this one at a time. You want your legs extended a bit. If possible, swing outside leg up and trap opponent's far side arm. Lean toward the trapped leg (not straight back!), pulling with both hands. Don't let elbow bow out, keep angle tight and pull it behind opponent's shoulder blade. Imagine the shape of a bow and arrow. Tip: set up tight grip on lapel",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/YoX8fNbA9l4"},
            {type: "video", url: "https://www.youtube.com/embed/H7tTIF6tvDU"},
            {type: "video", url: "https://www.youtube.com/embed/nS6ALx73epc"}
            ]
    },{
        displayName: "Arm Triangle Choke from Mount",
        shortName: "armTriangleChokeMount",
        type: "choke",
        notes: "scoop arm under opponent's neck, get underhook with your opposite arm and spiderwalk it out and around, sweeping opponent's arm up against the side of their neck. Cup their elbow to trap it deep against their neck, NOT their forehead. Can post your head on the mat to keep it in place, and/or make a gable grip. Press head against their arm to push it into their artery and choke them. Can also transition to side control (don't get caught in half guard) to increase pressure against their neck. Stay on your knees/toes to really drive in pressure",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/sNEAYcsXuPQ"}
            ]
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
        link: [ {url: "https://www.reddit.com/r/bjj/comments/9dzv2i/let_them_escape_side_control_to_trap_them_in_a/", title: "Reddit post"} ],
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/z9GxZG3t3bk"},
            {type: "webpage", url: "https://www.reddit.com/r/bjj/comments/9dzv2i/let_them_escape_side_control_to_trap_them_in_a/", title: "Reddit post"}
        ]
        
    },{
        displayName: "Arm Bar from Bottom Side Control",
        shortName: "armbarFromBSC",
        type: "submission",
        notes: "Need to be in position with elbows on your chest, palms shielding your face, opponent's arms around you. Hip/bridge out (explosive!), reverse crunch to bring outside leg around his face, the inside leg tucks in between his body and his arm. Top leg bites down hard. Bring your outside arm out to trap his threatened arm with your armpit, other arm holding his shoulder in place. If this move fails, you can go back to guard.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/Q3dMhE793g4?start=76"}
            ]
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
        notes: "Get leg hooks out, break hand grips, turn toward opponent so they don't have your back any longer"
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
        displayName: "Triangle Choke",
        shortName: "triangleChokeFromBotHG",
        type: "choke",
        notes: "If you are in bottom half guard, usually you'd have your two legs wrapped around one of your opponent's. You should have an underhook or overhook on their arm too. Free your legs. Roll to your side. Top/outside leg comes up to post against hip to control space/distance. Bottom leg can help manage the distance between you and your opponent. Grab opponent's wrist (on the non hooked arm) -- they're likely pushing on your bottom leg. Move their wrist out to the side. Pull out your bottom leg and throw it over opponent's shoulder to get the triangle locked up. If the arm you're attacking is not across your chest (still on same side), then bridge your hips up and pull it over."
    },{
        displayName: "Sit Up Sweep",
        shortName: "situpSweep",
        type: "positionChange",
        next: "mount",
        notes: "aka 'sinky armpit sweep' Get a strong lapel grip. Shrimp to the side, post off your leg, and sit up explosively. Your arm should cross your body and scoop over your opponent's shoulder, cupping their tricep. Momentum should roll opponent on to their back.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/PcEniBDPNMU"}
            ]
    },{
        displayName: "Triangle Choke",
        shortName: "triangleFromSide",
        type: "submission",
        notes: "Knees spiking into opponent's ribs. Arm under head. Post all your weight on the arm on their chest. Shoulder digging into their armpit to get that near-side arm isolated. Move leg across opponent, and at the same time shift hips to shove leg under opponent and land on your side/back. Close the triangle. Stay calm, work it tighter."
    },{
        displayName: "Leg Trap Mount Escape",
        shortName: "legTrapMountEscape",
        type: "positionChange",
        next: "bottomHalfGuard",
        notes: "Have legs against the floor so opponent can't grapevine. Frame, elbows on the inside. Bridge and shrimp so you're partially on your side (not too far!). Throw your leg over to the opposite side and trap your opponent's leg/shin. Hook his foot and drag it back over your flat leg. Then brace/frame and pull that leg free. Go for the underhook and switch your hips, pulling the first leg free and out. Lock your legs around opponent's to end up in half guard. Tip: if opponent's foot is tucked too close to scape, push your flat-leg knee outward to make his foot an easier target. Also, in the video she even comes to rear mount!",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/q2OAJF__P2w"}
            ]
    },{
        displayName: "Papercutter/Baseball Bat Choke",
        shortName: "papercutterChoke",
        type: "choke",
        notes: "Start by reversing the position of the hand under opponent's neck, by sweeping your bicep up and onto their throat, so your arm ends up tucked under their neck pointed back at you. Feed your free arm underneath you and up opponent's back, under their arm. Slide hand into their collar and make a tight grip. Draw other arm back to make a grip on opponent's far-side lapel. Think about drawing your pinky to your thumb to make this grip extra tight. With the blade of your forearm over their throat, drop your elbow to the mat. Have as little of your body on their body as possible, except for your arm and whats needed for control. Draw legs back. Turn into a baseball bat choke: Twist to bring head facing your opponent's hips while you move legs around behind their head. This tightens everything up.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/iGWWd5erCNE"},
            {type: "video", url: "https://www.youtube.com/embed/gzQ1a07wnpo"},
            {type: "video", url: "https://www.youtube.com/embed/6ybjm8Qa_w0"}
            ]
    },{
        displayName: "Baseball Bat Choke from Bottom",
        shortName: "baseballBatChokeFromBottom",
        type: "choke",
        notes: "Need a grip on either side of the opponent's lapel (not cross body - yet). You want one palm up, one down. You'll be spinning on your back, legs moving away from the side where your palm is down. Spin your body 180 degrees so your head is underneath your opponent's. Scissor arms and pull them down to the mat. Alternate - reverse palm direction. Bring elbows down til they touch. Then, instead of spinning on back, roll the opposite direction on to your belly.",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/1Blk548X1Eg"},
            {type: "video", url: "https://www.youtube.com/embed/oO0Jr6ijuWc"}
            ]
        //defense: ["make a fist at opponent's waist, the other at neck, legs sprawled behind you, press forward on toes out of the choke", "chain into armbar"] note: this defense is more for the bot side control variation but I have this move linked up to bot half guard for the time being til I find a better video.
    },{
        displayName: "Americana",
        shortName: "americanaFromSC",
        type: "submission",
        notes: "Start with your arm under opponent's neck, their arms on their chest. Rock forward to dislodge one of their arms. Remove the arm under their neck and bring it forward to grab their wrist with a monkey grip (not a C grip!) Your other hand threads through for the figure 4 grip. Keep that second arm parallel to your opponent's arm, not at an angle. Tighten; bring your elbows back to you ('fold up the accordian'). Bend your wrists forward like you're revving a motorcycle to roll opponent's palm outward.  Draw their elbow back toward their waist. Bend their elbow up into the air, while keeping their wrist down. Imagine painting the mat with the back of their hand.",
        defense: ["straighten your arm", "don't let palm roll outward"],
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/Zhh4W24rwrw"},
            {type: "video", url: "https://www.youtube.com/embed/KpEMF1QOsc4"}
            ]
    },{
        displayName: "X Choke",
        shortName: "xChokeFromGuard",
        type: "choke",
        notes: "Pull opponent's elbows out and bring your knees to your chest. Move your head to one side to avoid getting headbutted. Control opponent's head with one hand - turn it to the side for extra effectiveness. Get overhook (over their shoulder) with the other: slide hand between you both up toward their shoulder, angle hips out and punch hand past shoulder, then scoop down and under their arm pit. That same hand should grip their opposite side collar. Free hand comes around to other side of head to hold on to their shoulder and brace forarm blade against opponent's neck. Then drop that elbow to the mat, and flare it open.",
        resources: [
            {type: "webpage", url: "https://howtheyplay.com/individual-sports/Closed-Guard-Overhook-Combinations-a-BJJ-Tutorial", title: "Closed Guard Overhook Combinations"},
            {type: "video", url: "https://www.youtube.com/embed/x7FEU7NwRFc"},
            ],
        defense: ["guard collar/throat against setup", "grab elbow and push it back in/prevent it from flaring out"],
        addChain: ["triangleSetupFromOverhookGuard"]
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
    }


]




/*

// TEMPLATE

},{
        displayName: "NAME",
        shortName: "SHORT NAME",
        type: "positionChange submission choke positionModifier",
        next: "mount",
        notes: "NOTES",
        resources: [
            {type: "video", url: "https://www.youtube.com/embed/XYZ"},
            ],
        defense: []
    }


// FUTURE

omoplata from mount

toreando - pin legs down to the floor and VERY quickly circle around to opponent's side for side control

put x guard stuff into game

baseball bat choke - spinning thing

seated guard, knee push sweep https://www.youtube.com/watch?v=s1tPIdANAOQ

*/
