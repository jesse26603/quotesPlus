const quotes = [
    'I came into this world crying, screaming, and covered in somebody else\'s blood, and I\'m not afraid to go out that way.',
    'Why is there blood on the floor?',
    'Hmmm… my eyeball tastes funny.',
    'I\'m not crazy! Ask anyone! Just don\'t ask the creepy old bald woman in the corner.',
    'Roses are red; violets are blue; I smell colors - you should too!',
    'I wonder what my intestines would look like on the outside of my body.',
    'You know, some days I wake up and think that it\'s a good day to imagine my skin swinging from a fan.',
    'I wonder what children taste like.',
    'Whatever you do, don\'t look behind you…',
    'The screams of kids are like music to my ears.',
    'You know I tried to make a drum with the skin, but nobody will donate to me.',
    'Drowning is my jam.',
    'I saw a baby face-down at the bottom of the lazy river in Hershey Park.',
    'I love hairy tongues.',
    'There\'s a centipede that lives in my nose, and his name is Bob.',
    'I have a bathtub full of questionable liquids.',
    'Call me an octopus because I have blue blood. Hmmm… I should go to the doctor, shouldn\'t I?',
    'I am a jellyfish. I have no bones - only jelly.',
    'I have the IQ of a naked mole rat.',
    'Hair is too hairy for me.',
    'DON\'T TOUCH ME; I\'M STERILE.',
    'When I\'m bored, I like to go out in the yard and pretend I\'m a carrot.',
    'Oinka boinka! You smell like my cousin named Erika.',
    'WASH AWAY THE HORROR WASH AWAY THE HORROR WASH AWAY THE HORROR WASH AWAY THE HORROR!',
    'THE POWER OF JORGE COMPELS YOU.',
    'Wanna buy some spooder cheez?',
    'What if Cheez-itz didn\'t have cheese? Would they be Itz?',
    'Wanna buy my cream cheese?',
    'My friend Gustav watches everyone while they sleep.',
    'If you\'ve ever wondered what goes on in my head, imagine a headless chicken, with a broken neck, bleeding uncontrollably, while screaming: “Have you seen my watermelon?”',
    'Cows are fun; therefore, I like chicken.',
    'GEORGE WASHINGTON AND ABRAHAM LINCOLN ARE COUSINS.',
    'Fat Elmo is good Elmo.',
    'We should have a communal bath with dogs.',
    'He looks goofy tee hee hee.',
    'Sometimes the shadows are more than shadows.',
    'PULL MY CARPETS BACK IF YOU DARE; JUST DON\'T BE SCARED ABOUT WHAT YOU FIND.',
    'The smiles I get from my teacher aren\'t teacher to student; they were from predator to prey.',
    'STARE AT ME ANY LONGER AND I\'LL PLUCK YOUR EYE OUT!',
    'Oh I actually do get angry I just let it fester until it reaches its boiling point and then let it rain hell on everyone',
    'A baby can be dangerous if given the right weapon…',
    'My hope one day is to say, “I\'ve killed a chicken.”',
    'Nightmares can come pouring out of Hell if the Devil gets desperate.',
    'If you don\'t get mad every once and a while, you\'ll go mad PERMANENTLY.',
    'Many people like Halloween; the real reason why is unsaid by many.',
    'I went to the cemetery to look for eyes.',
    'Bloodshed is my only option now… bad news for the kid over there.',
    'Feel free to scream, if you feel pain.',
    'I broke the first rule: never open portals to Hell… now I\'m gonna feel those consequences tomorrow.',
    'My favorite people are the ones who vomit uncontrollably.',
    'We should nuke the sun. It\'d be a good investment opportunity and a tiny bit of blackmail “GIVE ME MONEY OR BYE-BYE SUN!”',
    'The sun is big boy orange',
    'I love Thomas the choo choo train he looks like a blueberry was squished on a plane',
    'Do you want to keep your teeth',
    'Something caught my eye, it ripped out.',
    'If you season it well enough you can eat any type of meat',
    'What\'s the best way to talk to dead people (asking for a friend)',
    'Ghosts were originally humans demons weren\'t that\'s the difference between being scared and being threatened',
    'You never die just one day you go to sleep and never wake up',
    'SKIN IS THE BEST PART!!!!',
    'Can you feel them crawling into your ears?',
    'You can\'t be too picky about meat when meat is hard to find',
    'Did you know you can fit a whole bag of concrete down your throat? I know this from experience',
    'That sound you hear at night. That scratching sound. That\'s the sound of a Hexounen trying to gain entry to your home',
    'I ate a type of meat that you\'ve probably never eaten before',
    'THERE\'S BLOOD ON MY HAND!!!!',
    'NOBODY MOVE OR THE CLOWN GETS IT',
    'My imagination station is much darker than you think…',
    'BLOOD IS LIFE',
    'I can make trees bleed',
    'Time to cause some screaming',
    'I HAVE EYES FOR MY EYES',
    'I\'ll swallow your soul',
    'I love making little kids cry on my birthday',
    'When I stare into the abyss the abyss stares back',
    'Can I sell your pinky finger I could make a good $20 off of it',
    'My favorite part of pain… is that it\'s too painful',
    'I do indeed like to wake up to the sound of screaming in the morning',
    'I need blood but not in the way you think',
    'I\'m a normal person just like van Gogh',
    'If you want to know what\'s wrong with my head dissect it then you\'ll have the answer you seek',
    'I MUST GURGLE IT',
    'My eyes have teeth',
    'I\'m making a statement by never using water again only questionable sludge',
    'You smell different when you\'re awake',
    'Can you see me that old lady in the hallway couldn\'',
    'I have accomplished my Spanish goal for the year. to learn to say “I want to eat your head”',
    'That\'s my special friend that sings to me but nobody can hear them or see them… weird',
    'HE\'S BEHIND YOU NOW',
    'You know I can\'t stand the sound of metal against human bones',
    'Wanna donate a kidney… I already have 2 but I could find purpose in another…',
    'I wonder if a butcher butches themself sometimes…',
    'I can shoot fire from my eyes… I also can\'t see',
    'When I look into the mirror sometimes my reflection doesn\'t stare back',
    'Some Days when I wake up I think I\'m an orange',
    '9/10 voices in my head say I\'m crazy',
    'Somebody get this kid before I eat him whole',
    'What if… i just slowly walked to your house to live in your closet?',
    'I\'m professional in multiple fields just don\'t ask which ones',
    '100 times 20 is the number of eyeballs I have in my freezer',
    'It was juicy',
    'MY EARS SMELL LIKE CHEESE',
    'I made rat poison out of real rats!',
    'My dead friend in the corner over there said that they were in a movie starring Justin Timberlake…',
    'WHEN I GROW UP I WANT TO PULL THE EYES OUT OF DEAD PEOPLE!',
    'I have a dead pig in my attic',
    'You can go into my basement if you want… you just might never come out',
    'Your brain looks very pink today',
    'I had a dream where when we sneezed hair came shooting out of your nose',
    'Pretend I\'m an avocado pretend these chips are me as well so if you eat guacamole you\'re a cannibal.',
    ' One time I walked up to a little kid after I inhaled some helium and said “Follow the yellow brick road!”',
    'I asked the dude in the stall next to me for some toilet paper while I was eating a chocolate bar and he screamed you\'re nasty!... I still have no idea why he screamed',
    'I would have loved to be a greeter for Walmart “Welcome to Walmart get your crap and get out!... Have a nice day!”',
    ' I went to PetCo and asked for a cow they just stared at me funny',
    'I left a present in the stall for the next person… I mean I dropped a pineapple as a nutritious snack… Weirdo…',
    'I WILL GET A KNIFE GO UP TO SOMEBODY AND CUT THEM… a delicious piece of cake!',
    'My favorite sound in the whole wide world is hearing the screams of the emotionally abused people',
    'If you go to Disney and poop you would be taking a $ 10,000 crap',
    'I\'m not dumb… I\'m just not smart.',
    'WHEN IN DOUBT RIOT IT OUT',
    'Frickle frackle rickle rackle',
    'Talk any longer and I\'ll drop-kick a baby across a football field',
    'I was raised as an only child… my brother didn\'t like that too much',
    'If you had Alzheimer\'s would you have to worry about forgetting to breathe?',
    'The was a cactus named bob the end',
    'Where\'s the leak ma\'am?',
    'Nowhere in the nursery rhyme does it state Humpty-Dumpty is an egg',
    'My dog is in my stomach right now',
    '*giggles intensify*',
    'Come to my giggle door',
    'I eat a stick of butter with sprinkles for breakfast, lunch, and dinner',
    'I pulled my dog\'s tooth out last night and then tried to eat it',
    'I HAVE SEVERE GINGIVITIS',
    'Giggity Giggity',
    'Monkey see monkey mountain dew',
    'I GOT A 12 PERCENT ON MY SCIENCE TEST I\'M SO SMART',
    '*aggressively craps pants*',
    'I wanna dance in a Minnie Mouse bikini',
    'DOG FOOD FIGHT IN A BIKINI',
    '🎶 Don\'t worry, just eat him🎶',
    'I SOILED MYSELF! SOILED I SAY, SOILED!',
    '🎶 I ate a chicken with my mom inside and it tasted like bubblegum so I decided to throw her up and then she said “do it again”.🎶',
    '“Hey hey ho ho humans\' rights have got to go.” ',
    'FE FI FO FUM I CAN SEE YOUR BRAIN MATTER',
    'I love swimming in warm cheese',
    'Why is everyone staring at me… I only drop-kicked a child.',
    'I am a proud mother/brother/sister/grandma/cousin/aunt/uncle/father/grandpa/step-parent/step-sibling/friend of a watermelon',
    'The smell of burning flesh is the most appetizing smell in the world',
    'When I look into your eyes I see mac and cheese',
    'Guess who my favorite teacher is… my brain, it gives me the power of the naked mole-rat',
    'My IQ is all over the place… It fluctuates… like- like a lot',
    'I saw the brother of Bruno Mars in the alleyway where the homeless guy is',
    '*angry Spanish noises*',
    'TRY THE WHEEZE LAUGH TRY IT!!!!!!!!',
    'Oh but when I laugh I sound like a serial killer',
    'How do I know I\'m smart? Would a smart person have a 6 percent in math class?',
    'I have a diet of deep-fried toddler hearts… better hide your kids',
    'Yankee Doodle went to feather riding on his macaroni stuck a pony in his hat and called it his town… wait that\'s not the right words',
    'I have the eyes of an old person…',
    'A wise woman once told me “ you look like a sixth grader” (at 6\' 1” apparently)',
    'If I wanted to go whale watching I would just go to the local McDonalds',
    'ARE YOU READY TO GO SO FAST THAT YOUR PUBES BLOW BACK AND TICKLE YOUR BUTTHOLE??',
    'One time I had a dry skin piece on my finger and when I pulled it, it unraveled my whole skin',
    'I admire the work of the St. Bartholomew statue',
    'Do you remember WWV?',
    'I\'m gonna party so hard that I\'m gonna be PURPLE',
    'THIS IS VERY ACADEMIC SEE',
    '2+2 is uhhhhhhhhhh… 37? See academic.',
    'I think my teachers like me… but they probably show favoritism towards me because they\'re probably just scared of me.',
    'You should show more skin, I did and people like it… they think it\'s sexy…',
    '“Really Isaiah? Only 3 pages this week?” -Mrs. McAuliffe',
    '“You know I came in my room one time screaming that I have a bat to sound crazy” -Mrs. McAuliffe ',
    'I had an argument with myself… and lost',
    'I\'m gonna tickle your brain… Goochie goochie goo…',
    'I AM FLESH. BONE. I AM SKIN. SOUL. I AM HUMAN. NOTHING MORE THAN HUMAN.',
    'I want to open you up like a bag of Lays chips and *insert munching noises here* ',
    'I just bit a piece of my hair off',
    'Moo… ma moo moo',
    '“You\'re supposed to be doing something academic during flex” -Ms. Arcuri',
    'Maybe you need to lose your voice more',
    'I CAN\'T WAIT FOR 3 AM TO EAT A BURGER',
    'Rummage is a fun word… Rummage rummage rummage.',
    '“DID YOU JUST SAY EW TO CREAM CHEESE” -Gustav the clown',
    '“I don\'t think you need this document anymore.” -My mother',
    'I don\'t bleed blood… blood bleeds me.',
    'This will take a long time to print.',
    'I AM POTATO',
    'My dad is secretly a Victoria\'s Secret model',
    'My finger smells',
    'I got kicked out of KFC for licking other people\'s fingers',
    'I saw a dog in the bed of a truck on the highway…',
    'I want to kiss a cockroach',
    'There\'s a lady trying to bite my head off… I\'m scared',
    '“Totally tubular” -Corny soccer mom',
    'Why does my cat lick its lips every time I get near it?',
    'I ate lipstick… It was DELICIOUS',
    'I love dog bones',
    'Excuse the head lice',
    'I KNEW SOMEBODY WOULD DIE IN MY ARMS',
    'Two hundre- why how has anybody let this progress to this point in time…?',
    'Sounds like a skill issue',
    'I want to be like Doc McStuffins she\'s my hero…',
    'My mom\'s a unicorn ',
    'P H L E G M',
    'I don\'t know all of your tricks but I know some',
    'I am afraid to talk around you now',
    '“I am not saying anything around you cause it\'s going to go in that document!” -My mom',
    'I\'m gonna hit you with my seal flipper',
    'You should always knock before opening the fridge in case there\'s a salad dressing in there',
    'DON\'T OPEN THAT FREEZER DOOR… there are um uh… lots of exotic meats in there…',
    'There\'s a 6th grader called the ear sniffer… I\'m scared',
    'If I didn\'t like you as much I would punch you for that…',
    'When I get older I will try to pay my teachers for the therapy they got because of me but I might not… too expensive',
    'I wonder if people are attracted to money since they are always talking about their “Pretty Pennies”',
    'If you live to be 70, that means you\'ve spent 10 years on Mondays',
    'Sooner or later somebody will say your name for that last time',
    'Do deaf people think farts are funny?',
    'When jogging do we wear special clothing so people don\'t think we are running from something or someone?',
    'How do vampires always look neat and tidy if they can\'t see in a mirror?',
    'Does your stomach think that all potatoes are mashed?',
    'Mothers only get a day while sharks get a whole week. Think about that…',
    'Nothing is on fire, fire is on things',
    'I was almost squashed by a door',
    'There\'s an old man that lives in my head… he\'s taking control…',
    'I saw a cat get run over and then I ate it…',
    'I wanted to go to France to eat escargot but my mom just took me to the sewers and said “there are plenty of snails here”',
    'you are looking like a fat version of velma from Scooby-Doo',
    'Don\'t worry it\'ll be back… give it 5-10 business days',
    'I wonder where all the hippies went after the seventies and sixties… probably to Groove Land',
    'I ate my grandma',
    'Is it normal to bathe in slime?',
    'TIME IS A HUMAN-MADE CONCEPT NOT A THING THE FUTURE DOESN\'T EXIST ONLY THE PRESENT AND THE PAST… think about it',
    'I AM LIKE A BUTTERFLY. I formed a chrysalis and then… B L O O D',
    'I am roommates with a squirrel his name is Jimmothy',
    'I ate some cake and now I have type 2 flu',
    'Why isn\'t there type 5 diabetes',
    'My IQ is the same as Einstein\'s… with a negative',
    'Is it normal for my tongue and hair to sweat?',
    'One time I tripped a little kid… and then their daddy came to the rescue. My bone is still broken from that…',
    ' Shh… you hear that? That\'s the trees… they have eyes and ears… they\'re being quiet… listening for us…',
    'This is not good there will definitely be something big coming to chew on my BONES',
    ' I\'m glad you allowed me to be out of those air ducts. You know it\'s not easy for 10 children to fit up there.',
    'My friend, you have met a terrible, terrible demise. But uh, you know, I…I don\'t feel too bad about it. After all if…if it weren\'t for me, it would\'ve just been from someone else, you know? I guess what I\'m tryin\' to say is life…life goes on. Well, for…for everyone else, life goes on. Not…not for you, you\'re… well you\'re dead. But that\'s neither here nor there',
    'WHATEVER YOU DO, DO NOT FALL ASLEEP',
    'Don\'t go home',
    'The voices in my head told me to talk to you',
    'Last time I saw someone like you I was burying their body in my basement',
    'Agree now and I won\'t have to poison your food later',
    'Does this rag smell like chloroform to you?',
    '“You better get your work done or else I will jump down your throat and tap dance on your liver.” -Mrs. Eiffert',
    'My favorite video in the whole world is all the US presidents singing the macarena',
    '“I got a 69% WHEEEEEEE!!!!!!” -excited math student (it was me)',
    '“If I murder someone they have it coming to them” - hyped up Isaiah',
    'People ask me why my chief pizza cook also plays the drums in my garage band… well the answer is that he is my prisoner',
    '“What loser would cheat on the PSSA\'S?” -Nerd',
    'I love the screams of little kids through the night',
    'FAT IS A RACIAL SLUR… apparently',
    'I drew a cow driving a tank… that\'s the dream right there',
    'I have OCD… Octagons Can Die',
    'You know when people ask why there are screams coming from my basement I always say “I\'m listening to heavy metal”',
    'I got the whole family on board from Alabamer, we got uncle billy, cousin Cletus, aunt Margret, cousin Joe, granddad buck, grandma Alice, cousin Bo, uncle Harvey, cousin Chester, cousin Cliff, cousin Clem, cousin Dale, cousin Dixie, cousin Buddy, cousin Duke, cousin Earl, cousin Otis, Grandma Sally, and me',
    'I AM THE GOOFIEST OF THEM ALL',
    'If you think about it if a morgue worker dies then would they still need to come to work one more time?',
    'The whole “spring forward” thing would be more popular if you do it on Monday at 2 PM',
    'If Apple builds a house will it have windows?',
    'The objective of golf is to play the least amount of golf',
    'Since there are 3,600 seconds in an hour, and most people make less than $36.00/hr, their time is worth less than a penny per second. It\'s literally worth your time to pick up a penny from the ground',
    'Sitting through graduation is like watching a movie that\'s entirely end credits',
    'Can you cry underwater?',
    'Why do they make cars so slow that they break the law?',
    'A different version of you exists in the minds of everyone that knows you.',
    'If Apple manufactured clothing they\'d probably have all the belt loops on their jeans a different size than normal, so you\'d also have to buy an Apple Belt.',
    'There should be a reality show where flat-earthers have to find the edge of the world.',
    'Your shadow is a confirmation that light has traveled nearly 93 million miles unobstructed, only to be deprived of reaching the ground in the final few feet thanks to you.',
    'The whole “go to bed you\'ll feel better” is the human equivalent of “did you turn it on and off again?”',
    'I like B U R D S',
    'Just do what I do, imagine your meat came from a human… you\'ll feel better about eating meat then.',
    'Humans get so much water that we\'re basically complex house plants with emotions',
    'I HAVE PANTOPHOBIA',
    'Step 1, find the syrup boy, Step 2, befriend the syrup boy, Step 3 wait for the syrup boy to fall asleep, Step 4 EAT THE SYRUP BOY',
    'Should my hair be crunchy?',
    'My favorite pastime is eating bread in my bathtub.',
    'THERE ARE BUGS ON AND IN YOUR EYES! ',
    'Even when you\'re alone… I\'ll be watching',
    'Does anyone know what the big red button that says “detonate” do? IMMA PRESS IT!',
    'Wait… we had to read a chapter?',
    'I AGGRESSIVELY CLEAN WHITE BOARDS!… So, hire me! Only $1,000 per second!',
    'Does anyone remember the sun baby in Teletubies? Yeah that was my cousin-in-law, BILLY BOB JO YEEEEEEEHAW!',
    'I like eating paper but man does it hurt when my teeth get paper cut.',
    'YOU TOOK MY CHICKEN, AND NOW I POOPED OUT A BLOOD VESSEL. GOOD JOB!',
    'I like people unless they don\'t like me… then well you can ask the last person who didn\'t like me, Chiapo Kilanchuna… oh yeah, that\'s right, he doesn\'t exist anymore…',
    'You\'re paying way too much for your worms, who\'s your worm guy? I got mine from a nice fish across the street.',
    'I\'ve been involved in a number of cults, both as a leader and a follower…',
    'Did somebody say I have asthma because if that gets out then they won\'t let me scuba dive and if i\'m not allowed to scuba dive what\'s the point of anything?',
    'I\'ve always wanted to own a refrigerator.',
    'Have you ever seen a foot with four toes on it?',
    'You know a human can go several days without a head. I\'ll say how I know this if you\'re not a cop.',
    'THE SMELL OF BLOOD MAKES ME THIRSTY',
    'Animals don\'t feel pain',
    'This number has me flabbergasted, man',
    'In case you\'re wondering my spirit animal is a duck-billed platypus',
    '“This kid put mayonnaise covered pizza in my lap so I did the most reasonable thing… I stabbed him with a spork.” -Riley Noel',
    'Did some random woman just ask me for my hair?',
    'You know there was a kindergartener I knew that sniffed my hair',
    '*slurping intensifies*',
    'Have you ever seen a fat guy do a belly flop 90% naked? It was the noise that concerned me mostly…',
    'What would you do if a strange tall man came through that door?',
    'We could make the UA\'s into a reality show “Keeping It Real With the UA Teachers (starring Isaiah)”',
    'I can see your house from here.',
    'I am in a constant state of limbo where I am not quite dead nor alive, and through all of it I remain lucid.',
    'LET\'S GET WACKY AND DOWN A BOTTLE OF CANNED CHEESE.',
    'Once I saw a chicken on fire trying to stop drop and roll… that was sad',
    'I\'ve broken my neck several times',
    'Quick question. How much salt does it take to kill a toddler? 2-4 tablespoons… that\'s what I thought.',
    'I\'m a little drunk after all those skittles',
    'I HEAR 5TH GRADERS; I\'M HUNGRY NOW',
    'I eat shoes for a living; I just love the taste of rubber and shoe polish in the morning. A little topping of spit to seal the meal.',
    'GRANDMA GERTRUDE IS OUT OF HER CAGE AND IS READY TO RUMBLE',
    'One time I fat shamed a pig. It cried.',
    'How many cheeks can you handle? I mean face cheeks, you weirdo…',
    'Can I take off my shirt?',
    'I\'m going to threaten myself and you can\'t stop me.',
    'Oh no! I just saw a homeless man run through that hallway.',
    'You smell like a skunk',
    'I did pre-K math all of 6th grade; now, I can count up to 5 YAY',
    '🎶Billy la bufanda🎶',
    '🎶Eat my esophagus; it tastes like asparagus and it looks like a penis🎶',
    'This room is about to get real sticky if someone doesn\'t stop me',
    'I think we should put a nice big marble statue of a refrigerator in this room.',
    'Billy la bufanda una amenaza para la sociedad',
    'Whenever I see my teachers they always look like they\'re about to eat me… I\'m scared',
    '*stands up* I\'M ABOUT TO GO MONKEY MODE',
    'I\'m fearful of that kid crying in that corner. Oh wait… you don\'t see him?',
    'My brain is like a lollipop, if you suck on it  enough it shrinks, or you could chew it and make it explode… I recommend the second one it\'s more fun',
    'A fat man just tried to tickle me…',
    'My true form is a rat with fangs that can bite a little girl\'s head off… don\'t worry it\'s true I tested it first',
    'Hold up… I\'m bout to go hunting for a wild moose',
    'Wait… you\'re telling me that YOU of all people are judging ME on what i ate… wow pot call the kettle black much?',
    'I just saw a blind woman walk into a paper shredder… willingly',
    'Jorge knows all and he has granted me the power to destroy this world if I see it fit.',
    'Is it normal for my eyes to be bleeding blue blood?',
    'My spit tastes like peanut butter.',
    'I\'m gonna smash my shoulder blades with a mallet over the summer!',
    'The sky is not blue, it\'s all a hoax!',
    'I don\'t think you\'re mentally stable enough to handle what I\'m about to do',
    'I\'m not actually here, your brain is playing tricks on you.',
    'This room would look good in a nice poop-brown shade.',
    'I\'ve showered like once or twice in my life, and exactly zero times in clean water',
    'My feet are actually really tiny. I just think big shoes look stylish.',
    'I wonder how morally okay it is to launch children 50 feet into the air. Sometimes they don\'t come down.',
    '“Mrs. McAuliffe, can I go to 6th grade lunch?” -Isaiah',
    '“MRS MCAULIFFE!!!! CAN I GO TO 6th GRADE LUNCH?!?! NO??! WHY?!?! Oh…” -Isaiah',
    'I like to abuse clothing in my freetime',
    'Can I spin like a beautiful ballerina right now?',
    'I\'m prepared to do the time, so now all I need is a felony to commit.',
    'I AM A HOOLIGAN!',
    'Tell me how it ends or the curtain gets it!',
    'My self-pity is through the roof!',
    ' Time is only a function of time… I\'ll let you interpret the rest.',
    'I\'m like pac-man I eat ghosts. only the blue ones though…',
    'I nibble on my desk sometimes',
    'I like getting slapped really hard',
    'I\'m gonna jump high enough to go through the ceiling and then I\'ll fly into the sun and die!',
    'In 1 months time I will be 500 lbs.',
    'I have a lot stupid things to say, one for each day of the year.',
    'I don\'t know why bongos exist. We could just play on our thighs.',
    'I feel really filthy and I\'ve soiled this room by walking inside it.',
    'I saw an old man singing to his son about mornings… it was scary.',
    'I can do a perfect split but it might be too bewitching for the class.',
    'You have been P H R O G \' D',
    'The skin on my throat is unbreakable. The bone isn\'t…',
    'I can halve your lifespan!',
    'I want to bring my three clones in. I\'d think we\'d all get along.',
    'I\'ve snorted smarties before. I think skittles were worse honestly. ',
    'I can read tongues, and I already read yours and yours is unbelievably warm.',
    'I\'ve seen the dank depths of mankind\'s mind… and I believe we are already doomed.',
    'There\'s a spider in your body… his name\'s larry, he\'s nice, has good intentions. Maybe just the wrong mindset though.',
    'I can\'t rollerskate anymore, at least not after the incident.',
    'I\'m gonna hit you with a bivouac.',
    'I\'m a little teapot stout and short I have a handle and a brain… wait wrong words',
    '🎶I use my head like a gong. It is very strong. Okay maybe I lied because my brain matter is all over the floor.🎶',
    'I don\'t like the way the whiteboard is lookin\' at me.',
    'I had my soft spot pushed in by my delirious grandpa when I was a baby.',
    'The other day, I gutted a huma- fish… I gutted a fish… and it was EXCELLENT.',
    'I got my head caressed today. It was crisp.',
    'Jorjesimose was here.',
    '“You all worship a false god. Jorge will have his reckoning.” -crazy clown man that hasn\'t slept in weeks',
    'Have you ever seen a sweaty moose?',
    'PEANUT BUTTER THIEF AT LARGE PROCEED WITH CAUTION',
    'In the beginning of the year I had milk in my bookbag… now I have cheese. It\'s the same item… that\'s how old I am. If you figure out what I mean, you are ready for it...',
    'Nothing like a nice bowl of cereal with cat milk',
    'Your bones are wet and your teeth are warm',
    'Did you know that a human body decomposes faster in water than in air',
    'If I force my burp I can make it any volume I want loud, quiet, even squeaky!',
    'I own multiple pools of various liquids',
    'The average person walks past 36 murderers in their lifetime; I am one of them (don\'t tell the police)',
    'You have a nice head… so symmetrical',
    'I hope you don\'t scream as much as the last one…',
    'I bet you didn\'t feel that guy lick your ear',
    'WHY DOES THIS NUMBER EXIST! WE SHOULD\'VE ELIMINATED THIS DOCUMENT WHEN WE HAD THE CHANCE!',
    'I knew it would end like this!',
    'Goodbye… why are you still here?',
    'You have lovely skin… can I wear it?',
    'Do you like taling to dead people?',
    'If at first you don\'t succeed, hide the evidence.',
    'Once I dressed up as an m&m and yelled “THE SKITTLES ARE COMING!!!”',
    'I\'ve never held a baby monkey before',
    'Do you want to make a blob fish?... no?... YOU FAIL!',
    '“HARASSMENT IS FUN!!!” -head of the HR department',
    'MARS TORNADO',
    'Ring around the jorge',
    'My bones are bird thin so I\'m a fragile person please show some respect',
    'Have you gone to the tour Gustav\'s Non-Suspicious Products Inc.?',
    'I\'ve always got my nose sniffing something!',
    'Bridges are weird, so I\'m starting a charity to destroy all bridges to better society.',
    'Do not put an old person in front of me or they\'ll be leaving with one less arm',
    'I can ground pound in real life and it causes a mini-earthquake.',
    'I eat chicken bone and all',
    'I can swallow a person whole if they look delicious enough',
    'I\'ve met snoop dogg and he gave me some thumb tacks.',
    'THE MAN HAS RETURNED WITH A PIG\'S HEAD ON HIS BELLY',
    'I like to oot oot oot opples and bonobos',
    ' Sometimes I wake up and wonder where and when I will turn into a clown',
    'If I were you I wouldn\'t go in a forest shaking your fist and screaming “ME HATE THE TREES!!! ME HATE THE TREES!!!”',
    ' You\'ve probably touched something I\'ve licked before',
    'I have this sixth sense to smell when a person is within a 20-mile radius of me',
    ' But have YOU ever won a fist fight with an old man while he was severely malnourished and dehydrated? Didn\'t think so bucko.',
    'It\'s good to make a sandwich but weird to make out with a sandwich',
    ' I keep a bottle of unrefrigerated ranch with me at all times ',
    ' when left in the sun mayonnaise grows hair ',
    ' I know my barber is conspiring against me',
    ' If your grandmother has no teeth it\'s considered to be quite rude to give her corn on the cob and then laugh while she gums it',
    ' My nose hairs jingle like church bells.',
    ' LISTEN! Doing that to the children\'s hospital was FUNNY. I don\'t know why I\'m going to jail for it.',
    ' If you live in a glass house always wear pants',
    ' I WILL BURN THIS PLACE TO THE GROUND IF SOMEBODY DOESN\'T SING THEIR ABC\'S!',
    ' It\'s time for the ponies to come and eat my shoes! YAY!',
    ' Sometimes I want to run away from my life, become a farmer and then stack the cows like ice-cream scoops.',
    ' FEAST ON MY SWEET HEAD IT TASTES LIKE HONEY',
    ' Im porkboy the breakfast hero',
    ' I want eat those yummy chemicals like petroleum',
    ' It\'s not nice to push your friend off the roof I learned this the hard way',
    ' Join the Dora cult the way to join is easy all you gotta do is get a dora tattoo then masked dora bandits kidnap you and take you to the shrine of doras and then you must bathe in dora blood while Boots the monkey watches you and then you\'re in!',
    ' Cliffs make great places to put swing sets ',
    ' I think all children should be forced to have mohawks',
    ' EVERYONE CLAP YOUR HANDS UNLESS YOUR HEART IS BEATING',
    ' Can I make cotton candy out of nonspecific large intestines?',
    ' LOOK HERE MISTER I PAID FOR EXTRA CHEESY RAT FOOD AND THAT\'S WHAT I WANT THIS IS A 5-STAR RESTAURANT FOR CRYING OUT LOUD',
    ' I finish all my food, even the plate itself.',
    ' I wonder if I eat the yummy looking green stuff they leave out for rats I\'ll turn into a rat.',
    ' My dog asked what my favorite color was. I said it was gorphamorph',
    ' I think I\'ll become world leader just to resign because of scandalous and horrifying allegations that are 100% true.', 
    ' When the going gets tough the tough gets going when the chicken gets fried I\'M COMING OVER',
    ' I am known to be quite the master of being chip dip at a party',
    ' If your phone rings, answer it; If your body rings see a doctor',
    ' I shoved a waffle up my nose',
    ' My lockers on fire YIPPEE',
    ' I shake my fist at those pigeons who think they\'re better than me.',
    ' If Santa comes down your chimney on the fourth of july… RUN LIKE THE WIND THAT AIN\'T SANTA',
    ' I can fly, I just don\'t want to!',
    ' If you hear knocking on your bedroom door at 11:54 P.M. tonight, open the door for the fine young uh creature',
    ' I taught a chicken pot pie to speak Spanish',
    ' A mouse took residence in my pants last winter and refuses to pay rent',
    ' It cause I smort',
    ' I ate cereal out of my pants today',
    ' THAT\'S A REAL KNEE SLAPPER',
    ' I like watching invisible people',
    ' You have a scary aura',
    ' Why are we proving to a machine that we are not a machine?',
    ' “I thought taking notes was just a suggestion” -9th grade Isaiah ',
    ' Halloween is the only time of year that I can scare little kids and not be labeled as a jerk',
    'If I walk in here with a xxxl shirt tomorrow don\'t talk about it because I will not be in the mood to talk about my shirt.', 
    ' Anyone got a large rock to smash into this window?',
    ' I\'m “special” in many ways.',
    ' Anyone know what the heck a “beep test” is',
    'I bet my big toe you\'re lying ',
    ' I wonder how I taste fried.',
    ' Look, it\'s snowing! *say this only in spring or summer*',
    ' I\'m actually a spy contracted by the government, and I\'ve deduced that I\'m actually the threat to the government masquerading here as a student is ME.',
    ' Why is it called pulling your pants down when your pushing',
    ' Your nose hairs are going to look like Dr. Robotnik\'s in like 2 years',
    ' I want to sneeze chunky stale bread out of my left nostril',
    ' I hear blood',
    ' You know you\'ve peaked/reached a new low if you can eat an entire tub of cheeseballs in a day.',
    ' Mental instability is fun to be in!',
    ' Whole sticks of butter with sprinkles is a light snack for me',
    ' Boy oh boy do I love me some good old fashioned huntin\' in my giant pick up truck by the way my name is Rifty and I\'m 300 lbs.',
    ' You look like you could use some human-sized shingles',
    ' Aloysius O\' Hare is my dream man',
    '',
    'I wanna become a teacher from the 60s so I can paddle little children',
    'It takes me approximately 5.53919364438 hours to make a sandwich',
    ' EL TORNADO DE CABALLO',
    ' I ALREADY AM CRAZY OOGA BOOGA',
    ' Doggy feel yummy',
    'Someone bout to beat me with a flip-flop',
    ' My ideal afternoon is to sniff old people',
    ' I saw an angry man bowl his book bag into a wall',
    ' I can smell when somebody has a severe chemical burn',
    ' A scary lady offered me a starburst',
    ' What if we were all just bacteria growing in a petri dish… I could start a religion out of this… AND I DID BEHOLD PETRI-DISHISM',
    ' Why is it that when stuff is on a ship it\'s called cargo but when stuff is on a car it\'s called a shipment',
    ' Were oranges named after the color orange or was the color of orange named orange because they\'re the color of orange?',
    ' The walls told me your secrets',
    ' Well, well, well, look what the over-sized, obese, hairless, skinless, gutless, cat dragged in',
    ' I wonder what a toilet seat tastes like',
    ' Waiter, there\'s a human head in my soup',
    ' Is it me or is this window invisible',
    ' P O N C H',
    ' SING THE SONG ABOUT THE CHIA PET OR NOBODY GETS FREE PUPPIES',
    ' What if the plot of Godzilla happened in real life we could just send me out and I\'ll eat him alive',
    ' I\'M AN EQUATOR YAY!!',
    '“Well if we cut off your body and just left your head then yes, Isaiah, you would have an equator.” -Ms.Elko',
    ' my throat swallowed a vessel of water',
    'If a fly lost its wings would it be called a walk? ',
    ' If the story doesn\'t end with the character\'s head being cut off then I\'m not reading it',
    ' “Can we take a moment to talk about the Egyptian slave trade?” - Ray in 8th grade',
    ' I have one singular egg in my fridge',
    ' I\'M BRODYING IT TOO HAYDEN',
    ' Do not put a mud puddle big enough for me to roll in because trust me, I will roll in it',
    ' I\'m so handsome that I break the law… or maybe that was because of the poison I used on that one lady',
    'Either my brain is too smart for my brain to comprehend, or I\'m an idiot.',
    'If you drop a bar of soap on the floor is the floor clean or is the soap dirty?',
    'I wanna replace my bones with wood, so termites come and eat me when I\'m dead just to show those grave robbers what\'s what.',
    'YOU HAVE A CUSTOM CURSOR?! Uh-uh, that\'s a Chromebook violation.',
    'Oh yeah, I\'m a real hacker! I can plug in a USB stick and have my computer play the Windows ME startup sound when it turns on.',
    'I will make this cheese stick disappear *swallow*',
    'You better not mess with me. I know Harvey\'s mom.',
    'The brain named itself which is kinda weird if you think hard enough about it.',
    'When did time begin?',
    'Are children who act in R-rated movies allowed to watch the movie by themselves after it\'s done?',
    ' Where does a thought go when it\'s forgotten',
    ' Is it normal to scream every time I see a mirror?',
    'You can hide and you can run but I can smell chicken anywhere I go',
    'I wonder if I run into the Mona Lisa will I be teleported like Super Mario 64?',
    'I NEED MY SPECIAL SEAT',
    'Who\'s in charge of that murder program? They aren\'t doing a very good job of running that thing',
    'Have you watched the latest Gustav movie? I hear this time he\'s playing video games.',
    'So are we going to pretend that there isn\'t a body in the middle of the floor',
    'DO YOU WANT SOME fruit punch? Okay, follow me.',
    'Could you imagine if Gordon Ramsey and Bob Ross switched professions “Now that\'s not how you bake a cake but that\'s okay. That can be our little happy accident.” “DOES THIS LOOK LIKE A HAPPY TREE TO YOU?! DOES IT!?!”',
    'A light bulb was such a good idea it became a symbol for a good idea.',
    'What? You don\'t have a room in your house solely dedicated to storing children\'s teeth? Well, you\'re weird.',
    'My camera roll is the scariest thing known to man… even scarier than my brain. Okay, maybe not that scary.',
    'I want to copyright all the planets and make it a 100-dollar royalty to say one of the names out loud',
    'I always come back… like people do.',
    'I sniff my fingers at least 5 times a day and if they don\'t smell like peanut butter then i\'m living wrong',
    'My name is Lord Foog the III Jr.',
    'You can never feel too unsafe when I\'m around!',
    'If you ever need me just ring my bell and I\'ll track your scent',
    'Did you know the blue flame is actually cold and safe to touch?',
    'It\'s proven sustained contact with me for more than 1 month is equivalent to having depression',
    'My targets are not safe in public',
    'I know if someone has been in my room because they will disturb the carefully put together trash mound I\'ve accumulated.',
    'How many fingers can you put in your mouth? 20 for me, but don\'t ask where the other 10 came from.',
    'Worms can go very fast depending on how hard you fling them.',
    'I just witnessed someone eat deodorant… twice. (I wish this was a joke)',
    'Bodies decompose after 12 hours in acid… there\'s no reason I know that.',
    'I must mummify the toddlers',
    'My name is timothee Bugersten and i\'ve come to take all your burgers',
    '“My mating call is going up to random women in the hallway jumping up and down and screaming “WOOOOO!” sure I may get beaten up by their boyfriends but it works.” hayden',
    'Remember… Giving up is easy, but so is downing a whole jar of peanut butter once you\'ve done it once.',
    'I bankrupted an ice cream shop because I came with 1,000 finished punchcards sourced from illicit vendors',
    'I think I lost faith in humanity when I saw how many god awful anime artworks 6th graders submitted to the art show.',
    'How many taxpayer dollars would it take to erase Florida with an artificial hurricane, and, unrelated, how do I get into a high-influence government position.',
    'I wonder what would come up if I searched some of these on Bing.',
    'Lord Farquad is the only man for me. ',
    'I think I could survive with no bones',
    'All natural disasters are vengeful forms of me',
    'Your honor, the spaghettio incident is not relevant.',
    'The pressure put on from my thighs busted a screen protector (I\'m not joking I just can\'t explain in one sentence).',
    'You can tell which ones were written by who just by looking at the doc history',
    'Dang haydens doc is weak compared to this',
    'That\'s nice',
    'Let\'s blackmail smith again cause that worked so well the first time',
    'I\'m a real gangster I grew up in the ghettos of York suburban don\'t mess with me',
    'I have been cucked by a falling platform a total of 3 times',
    'lil\' jewzi?',
    'If you really wanna see some eye bleaching material just ask me I have the videos',
    'You might need your brain checked out ',
    'Connor gave everyone STDs this is not true I do not have any of those',
    'I\'m sad it\'s not February and I lost my black person privilege',
    'Donkey Kong country returns is the best modern day Donkey Kong game anyone who says otherwise is wrong and is getting “the punishment”',
    'You\'re not a fat autistic 30 year old man that wears people\'s faces',
    'I\'m NOT pirating WiiU games',
    'If I get tunneled by a damn bear one more time I\'m gonna commit mass genocide',
    'Joey you have literal porn on your yt homepage I don\'t wanna hear it lol',
    'We need to petition for a gay porn channel',
    'I love COC',
    'My friends say they\'re gonna do some obscene things to Connor\'s mom',
    'It gives me those vibes when elementary schoolers dress like walking highlighters',
    'Ray told me I dress like a cartoon character and I now see that he\'s 100% right',
    'im gonna sniff connor if he doesnt play on weekend (my bad bro)',
    'I hope you stub your toe for saying that corny crap… right into the coffee table',
    'I\'m gonna do some unspeakable things to you Ray for saying that',
    'No a brick wasn\'t dropped on him… it was most likely a whole cinder block ',
    'Like tell me if you died to bootyhairplucker72 you wouldn\'t be mad',
    'Connor sprayed his liquids on me',
    'Addanika dingir aspasu me *projectile vomiting intensifies*',
    'I mean when I\'m trying to fall asleep I hear a rabbit lady humming',
    'You losers have a dad?',
    'Lemme gas up real quick',
    'Nah I\'ll just take Connor\'s skin',
    'Alright I tried doing it the legal way',
    'Just so you know connor we will be having marriage counseling in GDC on thursday',
    'I want the victims childrens\' names, the name of the school they go to and the victims phone number once I have that I can call the victim trace the call back to their house and then set up shop I would call the victim each day asking for money in exchange of their children\'s safety after each day I would get more and more aggressive by writing in fake blood on their house in the middle of the night leaving strange notes in their mailbox and I would even try to get in the house while nobody is home then I will mess everything up and write they have 5 days and each day I would count the days down and I would even pay off the cops or fbi so they don\'t come after me. Eventually I will get my money.',
    'And I thought you would\'ve killed yourself by now but yet here we are',
    'HOW HARD IS IT FOR YOU TO INSTALL A DLC',
    'OOH YEAH ADOPT US!',
    'What?... what?... Did you just say beavers juggling dogs?',
    'Your favorite car is a jeep?',
    'Joey, youre friends with a pedo',
    'Robert did you ponder on my lines of code until you realized it was js which you cannot read',
    'Quick question is it illegal to punch a minor if youre also a minor (asking for a friend)',
    'Yeah this time is for programming… and making your kid extremely fat',
]

const siteExclusiveQuotes = [
    
]

// For anyone that needs a quick refreshment 👇
//.............................:::.:::::::::::::::----====++++******++++=====--------::::::::::::::::::-----------------===========++++++++++++++++++++++=================-----------===-===================-------:::::::::::::::::::::::::::......................
//................................:-=======++++************+++++++=======------------::::::::::::::::::-------------============+++++++++++++++++++++++++================----------------::------------==========+++++++++*****++++++=====-:::......................
//..............................::-+##**++++++++++++++++++++++++++++======------------------:-----::::---------==========+++++++++++++***********+++++++++++===================----------------=====================++++++++*****#########+-::......................
//...........................:::..=*#**++++++++++********+++++++++++++=====-----------------------------========++++++++************####################**********+++++++++++========--------=========+++++++++++++++++++***************##+-::......................
//................................=+#**+++++++++***#########***************+++++++++++++++++*******************##################################################################********************************************************#+-::......................
//................................-+###***########%%%%%%%%%####################################################################################################################################%%#+===++++++++******######%%%%%%%%%%%%%%##+-::......................
//......................:::::::::::-%@%%%#################################################***********************************##################################*#################################*:::::::::::::::::::::::=#%%#####%%%%%@@#=:::......................
//......................:::::::::::-*%%#########################################********************************************##################################**********#####**********##########*::::::::::::::::::::::-+%%%%#######%%%#=::::......................
//......................:::::::::::-#%%############################*******************************************************##################################*********************************####+::::::::::::::::::::::+#%%%%%%%#%%%%%%#:::::......................
//......................:::::::::::=%%%#############################*******************************************************################################***********************************###+::::::::::::::::::::::*%%%%%%%%####%%%#-::::......................
//......................:::::::::::=%%###############################*******************************************************##############################************************************##*=:::::::::::::::::::::=#%%%%%%%######%%%+-:::......................
//......................::::::::::-+%%#########################*******************************************************######################################**********************************##*=::::::::::::::::::::-#%%%%%%%%######%%%%=:::......................
//......................::::::::::*%%###########################**************************************************############################################*****************************#####*-::::::::::::::::::::=%%%%#############%%#+:::::::::::::...........
//......................:::::::::+#%###########################**************************************************#############################################*****************************#####+-:::::::::::::::::::-+%%###############%%%#=::::::::::::...........
//......................:::::::-+%%%##########################**************************************************#############################################******************************#####+-:::::::::::::::::::=*###################%%#=:::::::::::...........
//......................:::::::+%%%#########################***************************************************#############################################*********************************###+-:::::::::::::::::::+#####################%%#=:::::::::............
//......................::::::+#%%########################*****************************************************#############################################**********************************##+-:::::::::::::::::::*#####################%%%#+:::::::::...........
//......................::::-+#%%#########################*****************************************************###############################################*********************************#+-::::::::::::::::::=*#######################%%#+::::::::...........
//...........::::::::::::::-+%%%###########################***************************************************#################################################*********************************+-:::::::::::::::::-+#########################%%#+-::::::...........
//...........::::::::..::::+%%############################*********#*##*******#******************************###################################################********************+++++++++***+-:::::::::::::::::-*##########################%%#+::::::...........
//...........:::::::::::::+#%%###########################***********==+###***********************************####################################################*******************++++++++++**+=:::::::::::::::::-*###########################%%#+-::::...........
//...........:::::::::::-+%%%#########################*************#*-:=*##**********************************#####################################################*****************+++++++++++***=:::::::::::::::::-###*#########################%%#+-:::...........
//...........:::::::::::+%%#########################***************##*=:-+###********************************######################################################****************+++++++++++***+::::::::::::::::-+##############################%%#+-::...........
//...........::::::::::*#%%#####################********************##+:::=*###*******************************##########################################################************+++++++++++**+::::::::::::::::-*###############################%%#+-:...........
//...........::::::::-+#%########################******************####+-::-+##********************************######################################################**************++++++++++++**+::::::::::::::::=#################################%%#*-:::::::::::
//...........:::::::-+%%%########################**************#########=:::-+###*******************************####################################################**************++++++++++++++*+::::::::::::::::=##################################%%%+-::::::::::
//...........::::::-+#%%#%%#####################**************##########*=:::-=##****++++++++++*******************##################################################**************++++++++++++++*+-:::::::::::::::=###################################%%%*-:::::::::
//...........:::::-+#%%#%%%#####################************#############+:::::=*#**+++++++++++++++++++***************################################################***********+++++++++++++++*+=:::::::::::::::=####################################%%#*-::::::::
//...........::::-+#%%############################******############**###+=:::::=+*+++++++++++++++++++++++************##################################################**********++++++++++++++**+:::::::::::::::+#####################################%%%*-:::::::
//...........::::=#%%############################################*********+::::::-+++=+++++++++++++++++++++********#######################################################********++++++++++++++***-:::::::::::::-+######################################%%%*-::::::
//...........:::=*%%%###########################################******++***:::::::-=++++++++++++++++++++++++*********####################################################*********++++++++++++++***-:::::::::::::-+#######################################%%#*-:::::
//...........:::*%%%#############################################*****+++*+=:::::::-+++++++++++++++++++++++++******=-=+*#################################################*********+++++++++++++++**-:::::::::::::=+###**###################################%%#+-::::
//...........::=#%%%##############################################*****+++++-:::::::=++++++++++++++++++++++++++****=::::=*#####################+=*#%####################**********++++++++++++++***=:::::::::::::=*#******##################################%%%=::::
//...........:-#%%%%%########################################+-:::::-=+++***-:::::::-++++++++++++++++++++++++++****=::::::-=*#################%=::=+####################**********+++++++++++++++**+-::::::::::::=*********#################################%%%*=:::
//...........:=%%%%%########################################*-::::::::::--=*=::::::::-+++++++++++++++++++++++++****=:::::::::-=*##%###########%+-:::-=*#%##############************++++++++++++++***=::::::::::::=**********################################%%%%*:::
//...........=*%%%%#########################################*:::-+**+-::::-*=-::::::::=++++++++++++++++++++++++****=::::::::::::-=*#%%%#######%##+-::::=*#%############************++++++++++++++***=::::::::::::+*********##################################%%%*:::
//:::::::::::*%%%%%#########################################*::::*##**++-:-+=-::::::::=++++++++++++++++++++++++****=::::::::::::::::=*#%%%%#####%%%*-::::-+############************++++++++++++++***+::::::::::::+*#*******##################################%%%#=::
//:::::::::::*%%%%%######################################*##*::::-+******++++-:::::::::=*+++++++++++++++++++++*****+-:::::::::::::::::-=*##%%########*+-:::-=*##########************+++++++++++++***+=:::::::::::+*********###################################%%#+-:
//::::::::::-*%%%%%######################################*###=::::-+***++++*+-:::::::::=*+++++++++++++++++*+******##*=-::::::::::::::::::-=*#%%#########+-:::-=#%##########***********+++++++++++****+:::::::::::+*#******####################################%%%*-:
//::::::::::-*%%%%#######################################*####=:::::+***++**+-:::::::::=****+++++++++++++********##*=:::::::::::::::::::::::-+*#%%######%#+-::::+#%######*++++*********+++++++++******:::::::::::+*#******####################################%%%#-:
//::::::::::=#%%%%#######################################**###+-:::::=+*****+-:::::::::=*+++**+++++++++++*******##+-:::-+*+=-::::::::::::::::::-=*#%%#######+-:::-+#####+-----+**********+++++********-::::::::::+*#*****#####################################%%%#-:
//::::::::::=#%%%%#######################################***###+-:::::-+****+-:::::::::=+=--=***++++++++********#*-::::=#####*+-::::::::::::::::::-=*#%%#####*+::::-+###+--:-=++**********++**********=::::::::::+*#*****#####################################%%%#-:
//::::::::::=#%%%%#######################################*#**##*+-::::::=***+-:::::::::=*=-::-=***++++*********##*:::::-+####%%#*=::::::::::::::::::::=*%%%%##%#=::::-##*====-+*******************+***+-:::::::::+##*****#####################################%%%#-:
//.:::::::::=#%%%%#######################################*****###+-::::::-+*#+=::::::::=**=-:::-=**************##*-::::::+######%%#*=-::::::::::::::::::-+*##%%%#+:::::+*###*##*******************+****=:::::::::+##***#######################################%%%#-:
//.:::::::::=#%%%%#######################################********#+-:::::::-+##+=-:::::=##**+-:::-=************###-:::::::=*%#########*+-::::::::::::::::::-=*####+:::::=*####************************#=:::::::::+##***#######################################%%%#-:
//.:::::::::=#%%%%#######################################*#*********-::::::::=*##*=-:::=****#*+-:::-=*##*******###+-:::::::-+#%#######%##*=:::::::::::::::::::-=+*+:::::::+####***********************#+-::::::::+*##**#######################################%%%#-:
//.:::::::::=#%%%%#######################################************=::::::::-+*##*=-:=******#*+=:::-+*##******###+:::::::::=*#%########%%#+-:::::::::::::::::::::::::::::+###*************************=::::::::+*###*#######################################%%%#-:
//.:::::::::=#%%%%#######################################*************+-::::::::-+*##*++**********+-:::-+*##****###*+::::::::::=*#############*+=:::::::::::::::::::::::::::=###***********************#+::::::::=*###*#######################################%%%#-:
//.:::::::::=#%%%%#######################################***************-:::::::::-+*#**************+-:::-+###*######+-::::::::::-+#%############*+-:::::::::::::::::::::::::=*#***********************#*::::::::=*###*#######################################%%%#-:
//.:::::::::=#%%%%######################################*****************=::::::::::-+****************+::::-+#########+-:::::::::::-*#%%#########%%##=-:::::::::::::::::::::::*##************************+-::::::=*###########################################%%%#-:
//.:::::::::=#%%%#######################################************+******=-:::::::::-+*#************#*+-:::=*########*=::::::::::::-+##%%############+=-::::::::::::::::::::+##*************************-::::::-+###########################################%%%#-:
//.:::::::::=#%%%#######################################************++******+-::::::::::-+*##**********##*+-:::=*########+-::::::::::::-=*##%############*+-::::::::::::::::::+##***********************##-::::::-+###########################################%%%#-:
//.:::::::::=#%%%#######################################***************+++****+::::::::::::=*##**********##*=:::-+#######%#+::::::::::::::-+#%%##########%%#+-:::::::::::::::=*##************************#+-::::::+###########################################%%%#-:
//.:::::::::=#%%%#######################################**************+-:-=**##+=::::::::::::=+************##*-:::=+########*=:::::::::::::::=+##%############*-::::::-----=+*##*************************#*=::::::=###########################################%%%#-:
//.:::::::::=#%%%#######################################**************=::::-+*##*+-::::::::::::-+*#*********###+-::-=*######%#*=:::::::::::::::-=+#%%###########+-:::=**#*#####***************************#+::::::=###########################################%%%#-:
//.:::::::::=#%%%#######################################************#=:::::::-+###*+-:::::::::::::=*##********##*+::::+#%#######*=:::::::::::::::::-+##%%######%#+-::::+#####*****************************#+-:::::=###########################################%%%#-:
//.:::::::::=#%%%#######################################************+-:::::::::=+*##*+-:::::::::::::=+*##******###*=:::-*######%%#*=-:::::::::::::::::-+*###%%%%%#*:::::=*####****************************#*=:::::=###########################################%%%#-.
//.:::::::::=#%%%#######################################*********#*+::::::::::::-=**#**=-:::::::::::::-=+*###**#####+-:::=*#######%#*+-::::::::::::::::::--=+**##+-:::::::+*##******************************+:::::=###########################################%%%#-.
//.:::::::::=#%%%#######################################********##+-::::::::::::=********=-::::::::::::::-+*##########=:::-=########%##*=::::::::::::::::::::::::::::::::::=*###***************************#*-::::=*##########################################%%%#-.
//.:::::::::=#%%%#######################################*******##+-::::::::::::=+********#*=::::::::::::::::=+#########+-:::-*#%######%%#*=-::::::::::::::::::::::::::::::::-###*****************************=-:::-*##########################################%%%#-.
//.:::::::::=#%%%#######################################*****###*-::::::::::::-**************=-:::::::::::::::-=+########+-::-+##########%%#+=:::::::::::::::::::::::::::::::=*##*****************************=:::-+##########################################%%%#-.
//.:::::::::=#%%%##########################################**##*-::::::::::::-***************#*=:::::::::::::::::-=*######*=:::=###########%%#*=-:::::::::::::::::::::::::::::*##***************************##=::::=##########################################%%%#-:
//.:::::::::=#%%%########################################*####*=::::::::::::-+****************##*=-:::::::::::::::::-=*#%%#*=:::-+#%##########%%#*-:::::::::::::::::::::::::::+##****************************#+::::-##########################################%%%#-:
//.:::::::::=#%%%########################################*####=::::::::::::-+*******************#**+-::::::::::::::::::-+*##%+-::-+##############%%*=-::::::::::::::::::::::::+##****************************#*=:::-##########################################%%%#-:
//.:::::::::=#%%%############################################+-:::::::::::=****+++*****************#**=:::::::::::::::::::-=+#*=:::=*#################*=-::::::::::::::::::::=*#*****************************##+:::-##########################################%%%#-:
//.:::::::::=#%%%###########################################*::::::::::::=***++++++******************###+-::::::::::::::::::::-+-:::-+%%##############%%#+-::::::::::::::::-+###******************************#+:::-*#########################################%%%#-:
//.:::::::::=#%%%##########################################*+:::::::::::=****++++++********************###*=-::::::::::::::::::::::::-+#%%###############%#*=-:::::===-===*####*******************************#*-:::+#########################################%%%#-:
//.:::::::::=#%%%##########################################+-:::::::::-=***++++++++++*******+*************##**=-:::::::::::::::::::::::+#%%%###############%#*+::::-+#%######*********************************#**-::=*########################################%%%#-:
//.:::::::::=#%%%##########################################=::::::::::=***+++++++++++++++++*****************####+=::::::::::::::::::::::-=*#%%%##############%##=::::=+#%####**********************************##-::-*########################################%%%#-:
//.:::::::::=#%%%##########################################=:::::::::=****+++++++++++++++++*******************####*+-:::::::::::::::::::::::-+*##%#############%#+-::::=*#####*********************************##-:::+########################################%%%#-:
//.:::::::::=#%%%#########################################*=::::::::=***+++++++++++++++++++++*****************#######*+=-:::::::::::::::::::::::-++*###%##########*-::::-+#####********************************##+-::+########################################%%%#-:
//.:::::::::=#%%%#########################################*-:::::::-***+++++++++++++++++++++*********************########*=:::::::::::::::::::::::::--=+*#%%%%%%%#*-::::::-*###*********************************#*=::+########################################%%%#-:
//.:::::::::=#%%%#########################################*-::::::-+***+++++++++++++++++++++++*****************###*######%##*=::::::::::::::::::::::::::::::-==++=-::::::::-+###********************************##+::+########################################%%%#-:
//::::::::::=#%%%#########################################*=::::::=****+++++++++++++++++++++++*******************############%#*+--:::::::::::::::::::::::::::::::::::::::::-*###*******************************##+::=*#######################################%%%#-:
//::::::::::=#%%%##########################################=:::::-+#**++++++++++++++++++++++++*******************###############%##*=-:::::::::::::::::::::::::::::::::::::::-*##*******************************##*-:-+#######################################%%%#-:
//::::::::::=#%%%##########################################=:::::+****++++++++++++++++++++++++*******************#################%%%#*+-:::::::::::::::::::::::::::::::::::::+##********************************##+::=#######################################%%%#-:
//::::::::::=#%%%##########################################+:::::+****++++++++++++++++++++++********************#######******###%%##%%%%#*::::::::::::::::::::::::::::::::::::+##********************************##*::=#######################################%%%#-:
//::::::::::=#%%%##########################################+-::::*#**+++++++++++++++++++++++*******************####*=--::::::--==+*#%%%%%#-::-++=-:::::::::::::::::::::::::::=*##********************************##*-:-#######################################%%%#-:
//::::::::::=#%%%##########################################*+::::+#*****+++++++++++++++++++++*****************####=::::::::::::::::::=*#%#*-::*%%##*+-::::::::::::::::::::::=*##**********************************##=:-*######################################%%%#-:
//::::::::::=#%%%###########################################*::::+*#**********+++++++++++**++*****************###*-:::::=*#%##*+=--:::::-++-::*#%%%%%%%#*+=---:::::::::::--+####**********************************##*--+######################################%%%#-:
//::::::::::=#%%%###########################################*=:::--=---===++*******+******+++*****************##*=::::-+%%#####%%%#**+-:::::::=*#%%#######%%%#**++++++++*######***********************************###=:-*#####################################%%%#-:
//::::::::::=#%%%############################################+-::::::::::::::-=*******++++**+*****************##*-::::-*%###########%%##*=:::::-=##%%########################*************************************###=::*#####################################%%%#-:
//::::::::::=#%%%###########################################*::::::-=----::::::::-+******+++******************###+:::::=##############%%#*::::::::-=#########################*************************************###+-:*#####################################%%%#-:
//::::::::::=#%%%##########################################+-::::::-*###**+==-::::::-=+***********************###*-::::-+*############%%+-::-=+=-::::-=*#####################**************************************##*=:*#####################################%%%#-:
//::::::::::=#%%%##########################################+:::-+-::-+*********+=-::::-=+*********************####=-:::::=*#%#######%##+-:::=#%##+=:::::-+*%%################**************************************###+:=*####################################%%%#-:
//::::::::::=#%%%##########################################=:::=#+-::=+***++*******=-:::::=********************####+:::::::=*###%%%%#+-::::*#%###%%#+-:::::=*#%##############**************************************###*:-+####################################%%%#-:
//::::::::::=#%%%##########################################=:::=##+-::-+***++++******+=-:::-=******************####*=:::::::::-=++=-:::::=*#%#######%#*=-::::=*##############**************************************###*::=####################################%%%#-:
//::::::::::=#%%%##########################################=:::-+##*-:::+***+++++++*****=-::::=+#***************#####+-::::::::::::::::=*#%##############+-::::-*############**************************************###*=:=####################################%%%#-:
//::::::::::=#%%%##########################################=::::-*##*-:::=****++++++++**#*+-::::=***************######*-::::::::::::-+%%%################%#*-::::=*#%########**************************************####*-=####################################%%%#-:
//::::::::::=#%%%##########################################+:::::+*##*=:::-+***++++++*******=-:::-+**************######*=::::::::::::=*##%%################%#+-::::=*########***************************************####--*###################################%%%#-:
//::::::::::=#%%%##########################################*=:::::+#*#*+-:::-+****+++++++*****=::::=*************########+-::::::::::::-=+#%%##################=-:::-+#######***************************************####--=###################################%%%#-:
//::::::::::=#%%%###########################################*:::::-+****+=::::=*******++*******+::::-+#*********###########+::::::::::::::-+#%%%################+-::::-*######**************************************####-:-###################################%%%#-:
//::::::::::=#%%%###########################################*-::::::******+-::::=*********++*****=:::=*#*********###########*=:::::::::::::::-*##%#############%#+::::::=####***************************************####+--###################################%%%#-:
//::::::::::=#%%%############################################+-:::::-+******=-:::-=+**************=:::-*#********#############+=:::::::::::::::--+*#%%##########%*=::::::=#####*************************************####*=-*##################################%%%#-:
//::::::::::=#%%%#############################################=::::::-+#*****+=-::::=+******+****#+-::-+********################*-:::::::::::::::::--+*#%%%###%%#+-:::::::-*####************************************#####=:+##################################%%%#-:
//::::::::::=#%%%#########################################*###+-::::::-=***+****=:::::-=*********#*+-::=*#*******###############%#*-:::::::::::::::::::::=+####*+-:::::::::=*###************************************#####+:-*%################################%%%#-:
//::::::::::=#%%%##########################################*###+::::::::=*********+-:::::-=+***###*=:::=*#*******###################*=-:::::::::::::::::::::::::::::::::::::-####***********************************#####+::*#################################%%%#-:
//::::::::::=#%%%########################################****##*=::::::::=+**********+-::::::---=--:::-**********###################%##+-::::::::::::::::::::::::::::::::::::=*##**********************************######+-:+%################################%%%#-:
//::::::::::=#%%%#########################################***####-::::::::-*****++****#*+-:::::::::::-=#*********#####################%%%#-:::::::::::::::::::::::::::::::::::*###*********************************######*=:+#################################%%%#-:
//::::::::::=#%%%##########################################**#*##*-:::::::::=***+++*********+=-----=+*#**********#######********##%%%%%%%%%#+=-:::::::::::::::::::::::::::::::+###*********************************#######+:=*%###############################%%%#-:
//::::::::::=#%%%########################################********#+-:::::::::=******+++*************************####*==-::::::::--==+*#%%%%%%##*+-::::::::::::::::::::::::::::*##**********************************#######*:-+%###############################%%%#-:
//::::::::::=#%%%########################################***#****#*+::::::::::-+**+******+***+++***************####+::::::::::::::::::::-+##%%%%%##+-:::::::::::::::::::::::-+###**********************************########::=%###############################%%%#-:
//::::::::::=#%%%########################################***********+-::::::::::=******++**********************##*-:::::=+#%%%##*+=--:::::::-+*##%%%%#*+=--::::::::::::::::=+###***********************************########-:-%%##############################%%%#-:
//::::::::::=#%%%########################################************+-::::::::::-+********+******************###+:::::=#%%######%%%##*+=-:::::-=+#%%%%%%##**++===-----=++*#####***********************************########-:-################################%%%#-:
//::::::::::+#%%%#########################################************+-:::::::::::=+#**+******++*************##*+:::::=##############%%%##+=::::::-+#%%%%%%#%%################************************************########+--+###############################%%%#-:
//::::::::::+#%%%#########################################**************-:::::::::::-=************************###+:::::-+#%###############%%%#*=::::::=*#######################************************************########*-:-#%#############################%%%#-:
//::::::::::+#%%%#########################################**********+****=::::::::::::-+***********************##*-::::::=*###################%#*+=-::::-+*###################*************************************#########-::*%#############################%%%#-:
//::::::::::+#%%%#########################################**********+++***=:::::::::::::-+*********************###=:::::::-+#####################%#*+-::::-=*##################************************************#######%%=::*%%############################%%%#-:
//::::::::::+#%%%#########################################**********+++****+-:::::::::::::=+*******************####+:::::::::*#%%##################%%#+-:::::=#%%##############************************************#######%%=::*#%############################%%%#-:
//::::::::::+#%%%#########################################**********+++++***+-:::::::::::::-=+******************###*=::::::::::=+*#%%%##################+-:::::+*##############************************************#######%%=::=*%############################%%%#-:
//::::::::::+#%%%#########################################**********+++++++**+=:::::::::::::::-+****************####*=::::::::::::--+*#%%%%#############%#+-::::-+#############************************************########%+::-+%############################%%%#-:
//::::::::::+#%%%#########################################**********++++++++***+-:::::::::::::::-+*#***********#######=:::::::::::::::::-=+#%############%##+-::::-*############***********************************########%+-::+%%##########################%%%%#-:
//::::::::::+#%%%#########################################**********+++++++++***+=::::::::::::::::-+**#**********######*-::::::::::::::::::+*%#############%#*=:::::=*%########************************************########%*=::=#%##########################%%%%#-:
//::::::::::+#%%%#########################################**********+++++++++++***+-::::::::::::::::-=+####*****#########+-:::::::::::::::::=#%################+-::::-*########************************************########%*+::=#%##########################%%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++**#*=::::::::::::::::::-+#######**########*+:::::::::::::::::=#%%##############%*=:::::+#######************************************##########+::-+###########################%%%%#-:
//::::::::::+#%%%#########################################**********+++++++++++++****+-::::::::::::::::::-+*##############%##=-:::::::::::::::=*%%##############%*-:::::+#######***********************************##########*:::=###########################%%%%#-:
//::::::::::+#%%%#########################################**********+++++++++++++++****+-:::::::::::::::::::-+*################*=-:::::::::::::-+#################*-:::::=######***********************************#########%*:::-#%#########################%%%%#-:
//::::::::::+#%%%%########################################**********++++++++++++++*++****+-::::::::::::::::::::=+#################*+-::::::::::::=*%###############+-:::::+#####*#*********************************#########%*:::-#%#########################%%%%#-:
//::::::::::+#%%%%########################################**********++++++++++++++++*******=::::::::::::::::::::::=*##############%%%#*+-:::::::::-+#%############%#=::::::+#####**********************************#########%*::::*#%########################%%%%#-:
//::::::::::+#%%%%########################################**********++++++++++++++**++*******=-:::::::::::::::::::::-=+*##############%#%#*++=--::::-+#############%=::::::=*####**********************************#########%*::::=*%########################%%%%#-:
//::::::::::+#%%%%########################################**********++++++++++++++++***********+-::::::::::::::::::::::-=+*#%%############%#%%##***+==*############%=:::::::=###*#*********************************#########%*-:::-*%########################%%%%#-:
//::::::::::+#%%%%########################################**********++++++++++++++***+=+*******#*+-::::::::::::::::::::::::-=*##%%%%###########%%%%%%###############=:::::::-####**********************************#########%*-::::+%%#######################%%%%#-:
//::::::::::+#%%%#########################################**********+++++++++++++****+::-=+******#*+-::::::::::::::::::::::::::-+**##%%%#########################%#=-:::::::-*###**********************************#########%*=::::+#########################%%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++***+:::::-=+*****#*+=::::::::::::::::::::::::::::-==+##%%%##################%%#*=::::::::::=*##**********************************###########+::::=#%########################%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++***+::::::::-+****####+-::::::::::::::::::::::::::::::::-+*#%%%%%%%%%%%%%%%##*=::::::::::::-*##**********************************#########%#+::::-+%########################%%%#-:
//::::::::::+#%%%#########################################**********+++++++++++++*****:::::::::-*******###*=-:::::::::::::::::::::::::::::::::::-=+*********+=-::::::::::::::-*##**********************************#########%#+-::::=%########################%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++***+:::::::::-**********##*+=-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::+###**********************************###########*-::::=%%#######################%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++***+-::::::::-************###*+-::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-####*********************************############*-::::-#########################%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++*****=-::::::-*************######+-:::::::::::::::::::::::::::::::::::::::::::::::::::::::=####*********************************############*-::::-*########################%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++++*****+=-:::-**************#######*+=-::::::::::::::::::::::::::::::::::::::::::::::::::=*####*********************************#############-::::-=#######################%%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++**+*+*****+=:-+**************##########*+-::::::::::::::::::::::::::::::::::::::::::::::=*#####*********************************#############-:::::-*######################%%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++++**********++***************##########%%%#+-:::::::::::::::::::::::::::::::::::::::::-+######**********************************###########%#-::::::*%#####################%%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++***+=+***********************##############%##*+=--:::::::::::::::::::::::::::::::::-+########**********************************###########%#-::::::*######################%%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++***+:-=+*********************##################%%##*++=::::::::::::::::::::::::::=+*########**#*********************************###########%%-::::::+######################%%%%#-:
//::::::::::+#%%%#########################################**********++++++++++++++***+:::::=*******************###+*#################%%%%%%#*+=-:::::::::::::::=*#%%%###########**********************************###########%%-::::::=*#####################%%%%#-:
//.:::::::::+#%%%%#######################################***********++++++++++++++***+:::::::-+***************####-:-+#####################%%%%%%%%%#######%%%%##################*********************************###########%%-::::::-+%####################%%%%#-:
//.:::::::::+#%%%%#######################################***********++++++++++++++***+::::::::::-+*##*********####-:::-=*########################################################*********************************###########%%-:::::::+%####################%%%%#-:
//.:::::::::+#%%%%#######################################***********++++++++++++++****:::::::::::::=+*###*****#####+-::::=*#%##################################################***********************************###########%%-:::::::=%%###################%%%%#-:
//.:::::::::+#%%%%#######################################***********++++++++++++++***+:::::::::::::::-=*###########%#+=-:::-*##################################################***********************************###########%%-:::::::=#%###################%%%%#-:
//.:::::::::+#%%%%#######################################************+++++++++++++****=-::::::::::::::::-+*##########%#*=::::=+###################################################********************************###########%#-:::::::-*####################%%%%#-:
//.:::::::::+#%%%%#######################################************+++++++++++++***#+-:::::::::::::::::::-+*############=::::-+#%%##########################################************************************###########%#-:::::::-+####################%%%%#-:
//::::::::::+#%%%########################################************+++++++++++*****+::::::::::::::::::::::::-+#########%#*-::::-=#%#######################################*+-+##********************************#############-::::::::=####################%%%%#-:
//::::::::::+#%%%########################################************++++++++++++***+:::::+##+=-:::::::::::::::::=+*#######%#*=::::-+*%####################################+=:+###********************************#############-::::::::-#%##################%%%%#-:
//::::::::::+#%%%%#######################################************+++++++++++****+:::::+###**+=-::::::::::::::::-=+*#%######*-::::-+#%%################################=:-*####********************************############*-::::::::-#%##################%%%%#-:
//::::::::::+#%%%%#######################################************+++++++++++****+:::::-+##***#**-::::::::::::::::::=*#%%%##%#+-::::-*#%#############################+-:-=####*********************************##########%#*-::::::::-*###################%%%%#-:
//::::::::::+#%%%%#######################################************+++++++++++++**+-:::::-+******#**+=:::::::::::::::::-=+##%#%#*-::::-=#%%##########################+-::+####*#********************************##########%#*-:::::::::+###################%%%%#-:
//::::::::::+#%%%%#######################################************++++++++++++****+:::::::=+********#*+=:::::::::::::::::-=+#%%#*-:::::-*#%#######################*=-::-*#####*********************************##########%#+-:::::::::=*##################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++++****-::::::::=*##*****####+-::::::::::::::::::-=*+-:::::::=#%####################%*=::::######**********************************##########%#=:::::::::::*%#################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++*******=:::::::::=*#******#####=-::::::::::::::::::::::::::::=#%###################+-::::-######**********************************##########%#=:::::::::::*%#################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++++****#+=:::::::::-=+*#*****#####*+-::::::::::::::::::::::::::=*%###############%#+-::::-*#######*********************************##########%*=:::::::::::+#%################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++***+*****=:::::::::::=+##**#########*+-::::::::::::::::::::::::+#%###############+::::::=########*********************************##########%*-:::::::::::+#%################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++++********=-:::::::::::-*############%#*=::::::::::::::::::::::=*%##############=:::::::=########*********************************##########%*::::::::::::+##################%%%%#-:
//::::::::::+#%%%%########################################***********++++++++++++++**+*****+=::::::::::::-+*#############*+=:::::::::::::::::::-+%###########%#=:::::::-+########*********************************##########%*::::::::::::=*#################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++***+++++*****+-::::::::::::-=*###########%##*-:::::::::::::::::-*%##########%#+::::::::=*########*********************************##########%*::::::::::::-+#################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++*****++++******=::::::::::::::=*############%#*=::::::::::::::-+#%#########%%+:::::::::+########**********************************##########%*::::::::::::-=%################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++******+++*******+=::::::::::::::-+*#############*=-::::--====+*#%###########*=:::::::::+#########*********************************#########%#*:::::::::::::=%################%%%%#-:
//::::::::::+#%%%%########################################***********+++++++++++++++**+++++++***#*+=:::::::::::::::-=*#########%%#+-:::-+#%%%%############%#=::::::::::+#########*********************************#########%#+:::::::::::::=%################%%%%#-:
//::::::::::+#%%%%########################################************++++++++******+++++*****++**##+=::::::::::::::::-=*#%%#####%%#=::::-*#%%#############*-::::::::::+#%#######*********************************#########%*=:::::::::::::=%%###############%%%%#-:
//::::::::::+#%%%%########################################************++++++++**********************#*+-:::::::::::::::::-=+*##%%%%%=:::::-=*%%##########%*=:::::::::::=*########*********************************#########%*=:::::::::::::-#################%%%%#-:
//::::::::::+#%%%%########################################************++++++++************++++********##*=:::::::::::::::::::-===++=::::::::-*#%########%%+::::::::::::-+#######*#********************************#########%+-:::::::::::::-*################%%%%#-:
//.:::::::::+#%%%#########################################************++++++++****+****=-:::::::-=*###**##*=-::::::::::::::::::::::::::::::::-*#%#######%#+:::::::::::::=%#######*##******************************#########%+::::::::::::::-*################%%%%#-:
//.:::::::::+#%%%#########################################************++++++++*******+-::::::::::::-=*######*+-:::::::::::::::::::::::::::::::-*%#######%*=:::::::::::::-+#######*********************************##########=::::::::::::::-+################%%%%#-:
//.:::::::::+#%%%#########################################************++++++++**++**+-::::=+*+-:::::::=*#######+=::::::::::::::::::::::::::::::=#%######%+-::::::::::::::-*####**#********************************########%#=:::::::::::::::=################%%%%#-:
//.:::::::::+#%%%#########################################************++++++++******+:::::+###=:::::::::+*#######*=-:::::::::::::::::::::::::::-*######%%=:::::::::::::::::+######********************************########%#=:::::::::::::::-*###############%%%%#-:
//.:::::::::+#%%%#########################################************++++++++******+:::::+###+-:::::::::=########%#+-:::::::::::::::::::::::::-+%#####%%=::::::::::::::::::-*#####*******************************#########*-::::::::::::::::*###############%%%%#-:
//::::::::::+#%%%%########################################*************++++++*******+:::::-+###*=::::::::=###*########+=:::::::::::::::::::::::-*%#####%%-::::::::::::::::::::=*##********************************#########+-::::::::::::::::*%##############%%%%#-:
//::::::::::+#%%%%########################################*************+++++++******+::::::-+###**+-::::=+##**##########+-:::::::::::::::::::::+#%#####%%-::::::::::::::::::-+*###*********************************########=:::::::::::::::::*%##############%%%%#-:
//::::::::::+#%%%%########################################*************+++++++******+=:::::::+*#**##****##***#*###*#####%#+-::::-==-:::::::::-*#%######%%-:::::::::::::::::+######********************************#########-:::::::::::::::::*%##############%%%%#-:
//::::::::::+#%%%%########################################*************+++++++****+***-:::::::-+#*************############%#+-:::=+#%%##***###%########%%-::::::::::::::-=######**********************************#######%#-:::::::::::::::::*%##############%%%%#-:
//::::::::::+#%%%%########################################*************+++++++****+***+-::::::::=*#***********##############%#+-:::-*#%%%##############%%=:::::::::::::-*#######**********************************########*::::::::::::::::::*%##############%%%%#-:
//::::::::::+#%%%%########################################*************+++++++****++***+-::::::::-+##**********################*=::::=*#%%#############%%=:::::::::::::*##########********************************######%#+::::::::::::::::::*###############%%%%#-:
//::::::::::+#%%%%########################################************++++++++**++*+****+-:::::::::-+*#*******#*###############%#+-::::+#%%############%%=:::::::::::-##########**********************************#######*=::::::::::::::::::+###############%%%%#-:
//.:::::::::+#%%%%#########################################***********++++++++****++******-::::::::::-+*###***###################%#=::::=*%%############%+-:::::::::-+###########********************************#######%+:::::::::::::::::::+#%#############%%%%#-:
//.:::::::::+#%%%%#########################################************+++++++****+++*+****=:::::::::::-=*########################%%+-:::-*#%###########%*-:::::::::+############*********************************######%+:::::::::::::::::::+###############%%%%#-:
//.:::::::::+#%%%%#########################################************+++++++**+***++******+-::::::::::::=+*######################%#+:::::+#%##########%#=::::::::-*%###########*********************************#####%#+:::::::::::::::::::=*##############%%%%#-:
//.:::::::::+#%%%%#########################################*************+++++****+++**++******=:::::::::::::-=+*####################%#+:::::=#%#########%#+::::::::+#############*********************************######*=:::::::::::::::::::=*%#############%%%%#-:
//.:::::::::+#%%%%#########################################*************++++*****************#*+-::::::::::::::-=+##################%%#-:::::=#%########%%+::::::::##############*********************************######=-:::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%#########################################*************++++******++****++*****#*=:::::::::::::::::-*###############%%#-::::::+#%#######%%+::::::::##############*********************************#####%-::::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%########################################********************+******+**********#*+-::::::::::::::::::-=+*##%%##%#%%#*+::::::::+%%######%%*-::::::-##############*********************************######-::::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%########################################*********************++*+***************#*=-::::::::::::::::::::--=+**##**=-:::::::::=#%#######%#+::::::=##############********************************######*-::::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%#########################################****************++*****+++++++****++****#*+-::::::::::::::::::::::::::::::::::::::::-+%########%#-:::::=##############********************************#####*-:::::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%########################################************************++****************##*-::::::::::::::::::::::::::::::::::::::::=%%#######%#-::::-=##############*********************************####*::::::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%########################################***######***************++++*****##**#*****##*-::::::::::::::::::::::::::::::::::::::-+%########%#=::::-=##############********************************#####+::::::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%##############################################*+===+*##*********+*****+--:::::-=+*####+-::---::::::::::::::::::::::::::::::::=*%##########*-::::=##############********************************####*=::::::::::::::::::::::=*%#############%%%%#-:
//::::::::::+#%%%%###########################################*=:::::::::-+************=-:::::::::::::-=*#+:::-##+-::::::::::::::::::::::::::::-+#%#########%%=::::-##############********************************####+:::::::::::::::::::::::=*%############%%%%%#-:
//::::::::::+#%%%%#########################################*+:::::::::::::-=+********=::::::--==--::::::--:::-*###*+=-:::::::::::::::::::::::-*#%##########%%+::::-##############*******************************#####=:::::::::::::::::::::::=*%############%%%%%#-:
//::::::::::+#%%%%#########################################+::::-+***-:::::::-+*****+:::::=*#*******+=-::::::-+*######*+=-:::::::::::::::::-+###############%*-::::##############*******************************####*-:::::::::::::::::::::::=#%############%%%%%#-:
//::::::::::+#%%%%########################################*=:::-*####=:::::::::=*#*#+:::::+#********####+-::::::=#####%%%%#*+--:::::::::-+##%%%#############%#+::::##############********************************###=::::::::::::::::::::::::+##############%%%%%#-:
//::::::::::+#%%%%########################################+-:::=#####+-:::::::::=*##+:::::+#***********##+-:::::::-=*##%#####%%%%#####%%%#%##################%*::::*#############*******************************###*-::::::::::::::::::::::::+##############%%%%%#-:
//::::::::::+#%%%%########################################+-:::-*#####+:::::::::-+*#+:::::=*#**********##+:::-*=-::::-=*#%####################################*-:::+*############*******************************###*:::::::::::::::::::::::::+#%############%%%%%#-:
//.:::::::::*#%%%%########################################+-:::-=*##*##*=:::::::-+*#*=:::::-*#********##+-::-+###*-:::::-*#####################################*-:::+############*******************************##*-:::::::::::::::::::::::::*%#############%%%%%#-:
//.:::::::::*#%%%%########################################*-::::-*##***##*+=---=+*****-::::::+*##***##*+-:::=######*=-::::-=*#################################%#=:::+#%##########******************************###+::::::::::::::::::::::::::*%#############%%%%%#-:
//.:::::::::*#%%%%########################################*=:::::+*#******************+-::::::-=+****+-::::=*#########*=-::::=+#%##############################%=:::+#%##########******************************###=::::::::::::::::::::::::::*%#############%%%%%#-:
//.:::::::::*#%%%%#########################################=::::::+##*************+****=::::::::::::::::::=#############*=-::::-*#%############################%*=::=*%##########******************************##+-::::::::::::::::::::::::::*%#############%%%%%#-:
//.:::::::::*#%%%%#########################################+::::::-+##******************+:::::::::::::::=+####*##########%#+-::::=*#%##########################%#+:::=###########*****************************###=:::::::::::::::::::::::::::*%#############%%%%%#-:
//.:::::::::*#%%%%#########################################*=::::::-*##******************+-:::::::::::-+###################%#+-::::-*#%#########################%+:::-%##########****************************###*-:::::::::::::::::::::::::::*%#############%%%%%#-:
//::::::::::*%%%%%##########################################*::::::::+##**********+*******+=::::::::::::=*#####################*-::::=*##########################*+::-*###########***************************##*-:::::::::::::::::::::::::::=###############%%%%%#-:
//::::::::::*%%%%%##########################################*-:::::::-+##*******************=:::::::::::::-+*#################%#*=::::-+#%%#######################*:::=*#########****************************##*::::::::::::::::::::::::::::=###############%%%%%#-:
//::::::::::*%%%%%###########################################*-:::::::-+*#*******+***********+-:::::::::::::-=+*################%#+:::::=*#%#######################-:::*#########***************************##*=:::::::::::::::::::::::::::-+###############%%%%%#-:
//::::::::::*%%%%%############################################=:::::::::=*#*********++*******#*=:::::::::::::::-=*###############%#=:::::-+#%######################=:::+#########***************************##+-:::::::::::::::::::::::::::-*###############%%%%%#-:
//::::::::::*%%%%%######################%%%%##################*=:::::::::-+##******************#*=:::::::::::::::::=*#############%%=::::::=*%%####################*-::=*########**************************###=::::::::::::::::::::::::::::-################%%%%%#-:
//::::::::::*%%%%%###%%%#*+==-::::::::-==++*##%###########*####+-:::::::::-+*#***********+******#*+-::::::::::::::::::=+**#%%%%%%%#+-:::::::=*#%####################=:::+########**************************##+-::::::::::::::::::::::::::::=%%##############%%%%%#-:
//::::::::::*%%%%%%%%%#+-:::::::::::::::::::-=+###########*#####*-::::::::::=*#****++***++**********+-::::::::::::::::::::-==++++=-::::::::::-#%###################%=:::=########*************************##*-:::::::::::::::::::::::::::::=%%##############%%%%%#-:
//.::::::::-*%%%%%%%%#*-::::::::::::::::::::::::-+###############+-::::::::::-+#*****++****++*******##*-::::::::::::::::::::::::::::::::::::::=*%###################+-::-*#######*************************#*+::::::::::::::::::::::::::::::=%%##############%%%%%#-:
//.::::::::-*%%%%%%%%#*-:::--::::---::::----:::::-*########**#####+::::::::::::=+*********************##+=-::::::::::::::::::::::::::::::::::::+#%###################+:::-########***********************##+-:::::::::::::::::::::::::::::-+%###############%%%%%#-:
//.::::::::-*%%%%%%%%%*-::-**=::-*#*=:-+####*-:::-*##########****#*+::::::::::::-=*******+**************##*+-::::::::::::::::::::::::::::::::::+#%###################*::::######*#***********************#*=::::::::::::::::::::::::::::::=*%###############%%%%%#-:
//.::::::::-*%%%%%%%%#*-:-##*=::-#%*=:+%#==#%+:::-*########******###+-::::::::::::-+*#*****+*+++**********###+=::::::::::::::::::::::::::::::::+#%###################*::::*#####*#**********************##=-::::::::::::::::::::::::::::::+#%###############%%%%%#-:
//.::::::::-*%%%%%%%%%*-:-+#*-::=##*=:+##=-*#+:::-*######**********##+-:::::::::::::-+**********************###*+--::::::::::::::::::::::::::::+#%###################*::::=*######**********************##-:::::::::::::::::::::::::::::::+#%###############%%%%%#-:
//.::::::::-*%%%%%%%%%*-:::+*-:=*+**=:+##--*#+-::-*##########*******##+-::::::::::::::=+*********************#####*+=-::::::::::::::::::::::::=*%####################*:::::+#####**********************#*=::::::::::::::::::::::::::::::::*%%###############%%%%%#-:
//.::::::::-*%%%%%%%%%*-:::+*-:=*-+*=:+#*--*#+-::-*########**********#**=:::::::::::::::=+********************########*+-:::::::::::::::::::-+#%%####################*:::::+#####**********************#+::::::::::::::::::::::::::::::::-*%################%%%%%#-.
//.::::::::-*%%%%%%%%%*-:::+*--+*:+*=:+##--*#+-::-*########***********##*=::::::::::::::::=+#******************#########%#*+--::::::::::::-+*%%######################*-::::=*####*********************#*-::::::::::::::::::::::::::::::::=*%################%%%%%#-.
//.::::::::-*%%%%%%%%%*-:::+*-+*+-*#=:+##--*#+-::-*########*************#*+-::::::::::::::::=+*****************#############%###*+++++++*###########################%*:::::-+####*********************#=::::::::::::::::::::::::::::::::-*##################%%%%%#-.
//.::::::::-*%%%%%%%%%*-:::+*=*##*##*-+#*--*#+-::-*########****************+-:::::::::::::::::-+*##***********###################%%%%%##############################%*::::::=#####********************+-::::::::::::::::::::::::::::::::-###################%%%%%#-.
//.::::::::-*%%%%%%%%%*-:::+*--==+*#*-+#*--*#+:::-*#########***************#*=:::::::::::::::::::=*#***********#####################################################%*::::::-#####******************#*-:::::::::::::::::::::::::::::::::-#%#################%%%%%#-.
//:::::::::-*%%%%%%%%%*-:::+#=::::+#+:=#%*+#%+:::-*#########****************#*+-::::::::::::::::::-=**#********######################################################*::::::-#####*******************+::::::::::::::::::::::::::::::::::=###################%%%%%#-:
//::::.::::-*%%%%%%%%%*-:::-=-::::=+-::-+*#*=-:::-*########*******************#*=::::::::::::::::::::-=*#####*######################################################*=::::::-#####*****************#+::::::::::::::::::::::::::::::::::-*####################%%%%#-:
//::::.::::-*%%%%%%%%#*-:-:::::::::::::::::::::::-##########*******************#*+-:::::::::::::::::::::=+########################################################%%+:::::::-#####****************#+-::::::::::::::::::::::::::::::::::=#####################%%%%#-:
//::::.::::-*%%%%%#%%#*=+*=+*=:-++==++=---==-==-:-*######*##*********************#*=-:::::::::::::::::::::-=+######################################################*-:::::::-#####***************##-:::::::::::::::::::::::::::::::::::+%####################%%%%#-:
//::::.::::-*%%%%%#%%#*=---**+:=*=+****++**=**+=--*##########************************=:::::::::::::::::::::::-=+*##################################################-::::::::-####***************#*+:::::::::::::::::::::::::::::::::::-*%####################%%%%#-:
//::::.::::-*%%%%%%%%#*=--+**+:=+-=*##*=+##+=+*-:-*######*###************************#+=:::::::::::::::::::::::::-+*#%%########################################%#*=:::::::::-#####***************+::::::::::::::::::::::::::::::::::::+######################%%%%#-:
//:::::::::-*%%%%%%%%#*==**##*==+==++*+++*+:===*=-*###########************************#*+-::::::::::::::::::::::::::-=*###%%#################################%##+-::::::::::=#####*************#+-::::::::::::::::::::::::::::::::::::*%#####################%%%%#-:
//.::::::::-*%%%%%%%%%*-:----=+==+=======**=+**+--*###########****************************+-::::::::::::::::::::::::::::-=+*##%%##########################%%#*+-:::::::::::=*###*#************#*=::::::::::::::::::::::::::::::::::::-*%#####################%%%%#-:
//.::::::::-*%%%%%%%%%*-::--::::::::::::::--:--::-*###########******************************+=::::::::::::::::::::::::::::::--=+*#%%%%%################%%##*=-:::::::::::::+#####*************#=::::::::::::::::::::::::::::::::::::-*#######################%%%%#-:
//.::::::::-*%%%%%%%%%*-:-*###***-:-#+=--==-:::::-*###########***********************+******##*=:::::::::::::::::::::::::::::::::::-=+#####%%%%%%%#####*+-::::::::::::::::=*#####***********#*+:::::::::::::::::::::::::::::::::::::=#%######################%%%%#-:
//.::::::::-*%%%%%%%%%*-:-**++=++=--+=+*=*#*=::::-*###########***************************+*****#*=-:::::::::::::::::::::::::::::::::::::::---======-::::::::::::::::::::::*######***********#+-:::::::::::::::::::::::::::::::::::::=%%######################%%%%#-:
//.::::::::-*%%%%%%%%%*-::+=-++++=--==+***##=::::-*###########**************************++**********=-::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-+#######**********#+-:::::::::::::::::::::::::::::::::::::=*%#######################%%%%#-:
//.::::::::-*%%%%%%%%%*-::-:-#*+==-=%#######=::::-*###########*********************++**************###+:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::+%%#####**********##-::::::::::::::::::::::::::::::::::::::+%%#######################%%%%#-:
//:::::::::-*%%%%%%%%%#=::::::::::::::::::-::::::-*############***************************************##*+-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-*#########********#*=::::::::::::::::::::::::::::::::::::::-*%########################%%%%#-:
//:::::::::-*%%%%#%%%%%#*=-:::::::::::::::::::::=+#############*****************************************###*+=-:::::::::::::::::::::::::::::::::::::::::::::::::::::-=###########*******#*=:::::::::::::::::::::::::::::::::::::::+#%########################%%%%#-:
//:::::::::-*%%%%%%%##%%%#*=-:::::::::::::::--+*###############*******************************************#####*=-:::::::::::::::::::::::::::::::::::::::::::::::::=*#%##########******##+:::::::::::::::::::::::::::::::::::::::-#%#########################%%%%#-:
//:::::::::-*%%%%%#######%%##*+=---------+*###%#################********************************************#######*=-::::::::::::::::::::::::::::::::::::::::::-=*##############*****##+-::::::::::::::::::::::::::::::::::::::-+###########################%%%%#-:
//:::::::::-*%%%%%%###############%%%%%%#%%#####################*********************************************#########**+==-:::::::::::::::::::::::::::::::::-=+*#%##############****##*-:::::::::::::::::::::::::::::::::::::::=###########################%%%%%#-:
//:::::::::-*%%%%%%%############################################***********************************************#########%####*+=-:::::::::::::::::::::::::=+*###################**####+:::::::::::::::::::::::::::::::::::::::::+%##########################%%%%%#-:
//:::::::::-*%%%%####%%%########################################**********************************************###############%%%%%%%#*+=---:::::::--=+*#%%%%%##################**####*=::::::::::::::::::::::::::::::::::::::::+###########################%%%%%%#-:
//:::::::::-*%%%%%%%%%#+++###+**################################**********************************************#######################%%%%%%%%%%%%%%%%%##############################*-:::::::::::::::::::::::::::::::::::::::::*#%##########################%%%%%#-:
//:::::::::-*%%%%%%#%%%+--#*=::-=#######%#######################*********************************************################################################################*#####*-::::::::::::::::::::::::::::::::::::::::-+#%###########################%%%%%*-:
//:::::::::-*%%%%%%%%%%%+-###%#=-*####**##%#####################*********************************************#####################################################################*=:::::::::::::::::::::::::::::::::::::::::=##############################%%%%%*-:
//:::::::::-*#%%%%##%%%%+-*%#*=-=#%#=---:=+*=-::=*##############*********************************************####################################################################*=:::::::::::::::::::::::::::::::::::::::::-+%#############################%%%%#+::
//::::::::::+#%%%%%##%%%+-**=:-+##%*:-*#+-=%#=:-*###############*********************************************####################################################################-::::::::::::::::::::::::::::::::::::::::::+#%############################%%%%%#=::
//::::::::::+#%%%%###%%%*=#=::::-*#*-:=*::=#--=#%##############**********************************************##################################################################*=:::::::::::::::::::::::::::::::::::::::::::+#%############################%%%%%*:::
//::::::::::-*%%%%%%##%%%%%%%%#######+---+**=---=*##############*********************************************#################################################################*=:::::::::::::::::::::::::::::::::::::::::::+##############################%%%%%#+:::
//:::::::::::+#%%%%%%%%##%#############%%%####***################********************************************################################################################*=:::::::::::::::::::::::::::::::::::::::::::-##############################%%%%%%+-:::
//::::::::::::-+#%%%%%%%%%%##########################################***************************************################################################################*=:::::::::::::::::::::::::::::::::::::::::::-+###########################%%%%%%%*=:::::
//::::::::::::::-=+##%%%%%%%%%%%%%%%########################################*****************************##################################################################*=::::::::::::::::::::::::::::::::::::::::::::=#%#####################%%%%%%%%%#*+-::::::
//:::::::::::::::::-=+**####%%%%%@@@%%%%%%%%%%%%###########################################################################################################################=:::::::::::::::::::------------------------:=*%%######%%%%%%%%%%%%%%%%%%%%#*+=-:::::::::
//::::::::::::::::::::-=*####**#####%%%%@@@@@@@@@%%%%%%%################################################################################################################%#=:::::---:---------------------===============*%%%%%%%%@@@@@@@@@@@@@%%####*+-:::::::::::::
//...........::.::::::.:::=*#####**###########%%%@@@@@@@@@%%%%%%%%####################################################################################################%%#+---------=================++++++++++++++*****#%@@@@@@@@@@@@@@%%%%%###%%#+=-::::...........
//..............::..:::::::::-+*#####****************######################%%%%%%%%%%####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*++++++++++++****************###############%%%%%%%%%%%%%%%%%#%##%%%%#*+=-:::::::...........
//...........::.::...:::::::::::-=+#%%#********************+++++++++++++++++++++++++++++****#######%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%###################**************************############%%%%##%%%#+=-:::::::::::...........
//............::::::::..:::::::::::-+%%#**********+++++********++++++++===========------------------========+++++++++*****#######%%%%%%%%%%######*******++++++++++++++=======-------------=======++++++++++++********################%%%#+-...:::::::::::...........
//...........::.::::.::::::::::::::::=#%##*********+++************+++++++++========-----------------============+++++++++******###########******++++++++++===============--------------------====++++++++++++*********###############%%*=::::::::::::::::...........
//...........::..:::.:::::::......::::=#%##*++++++++*****#####*****++++++++======-------------------==========+++++++++++*************************++++++++++++++++=======-------------------=====+++++++++++**********###############%+-:::::::::::::::::...........
//.................................::::=#%%##**+++++++******###******+++++++=====-------------------=======+++++++++++++++**************************++++++++++++++++======-----------------======+++++++++++++*********############%%*-:............................
//..................................::::=#%%%###****++*******##******+++++++=====---------------------======+++++++++++++++***********##########********++++++++++++=======----------------=====+++++++++++************###########%%*-::::::........................
//..................................:::::-+%%%####******************+++++======-------::::::::::---------=====++++++++++++**********######%%%%######*******++++++++++=====--------------------======+++++++++*******###########%%%%*-:::..::........................
//....................................:::::-+*%%###*******************++++====-----:::::::::::::::::::::-------====+++++**************##########************++++++++===------------------------======+++++++++****######%%%%%%@@%#=::::::::.........................
//.................................:::.:::::::::-=**################******++++====-----:::::::::::::------------====+++*************************************+++++++===-----::::::-------------======++++++***####%%%%%%%%%%%#*+-:...::::::::........................
//........................................:::.:::::::::-==+++****#########******++++===========================+++++******#####################******************+++++====---------------=====+++***###########***+++==-::::...........:::::........................
//..........................................................::::::----------====++++++++************************########%%%%%%%%%%%%%%%%%%%%%%#########################*****************++++++======--------::::::..................................................
//..........................................................................................:::::::----============++++*****#####%%%%%%##########*****+++++========-------::::::...............................:::..................................................
//........................................................................................................................................................................................................::........................................................