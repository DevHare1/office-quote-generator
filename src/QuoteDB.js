const quotes = [
  {
    quote: "I’m not superstitious, but I am a little stitious.",
    author: "Michael Scott",
    episode: "(Season 4, Fun Run)",
  },
  {
    quote:
      "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
    author: "Michael Scott",
    episode: "(Season 5, The Duel)",
  },
  {
    quote:
      "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    author: "Michael Scott",
    episode: "(Season 5, Stress Relief: Part 1)",
  },
  {
    quote:
      "I live by one rule: No office romances, no way. Very messy, inappropriate…no. But, I live by another rule: Just do it… Nike.",
    author: "Michael Scott",
    episode: "(Season 1, Hot Girl)",
  },
  {
    quote: "The worst thing about prison was the dementors.",
    author: "Prison Mike",
    episode: "(Season 3, The Convict)",
  },
  {
    quote:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    author: "Michael Scott",
    episode: "(Season 2, The Fight)",
  },
  {
    quote:
      "I’m not a millionaire. I thought I would be by the time I was 30, but I wasn’t even close. Then I thought maybe by 40, but by 40 I had less money than I did when I was 30.",
    author: "Michael Scott",
    episode: "(Season 6, Scott’s Tots)",
  },
  {
    quote: "I am Beyoncé, always.",
    author: "Michael Scott",
    episode: "(Season 6, The Chump)",
  },
  {
    quote:
      "Abraham Lincoln once said that ‘If you’re a racist, I will attack you with the North,” and these are the principles I carry with me in the workplace.",
    author: "Michael Scott",
    episode: "(Season 1, Diversity Day)",
  },
  {
    quote: "I am running away from my responsibilities. And it feels good.",
    author: "Michael Scott",
    episode: "(Season 4, Money)",
  },
  {
    quote:
      "As it turns out, you can’t just check someone into rehab against their will. They have to do it voluntarily. They have to hit rock bottom. So I think I know what I need to do at this point. I need to find ways to push Meredith to the bottom. Um. I think I can do it.",
    author: "Michael Scott",
    episode: "(Season 5, Moroccan Christmas)",
  },
  {
    quote: "That is sort of an oaky afterbirth.",
    author: "Michael Scott",
    episode: "(Season 4, Dinner Party)",
  },
  {
    quote:
      "I’m not usually the butt of the joke. I’m usually the face of the joke.",
    author: "Michael Scott",
    episode: "(Season 6, Koi Pond)",
  },
  {
    quote:
      "The rules of shotgun are very simple and very clear. The first person to shout ‘shotgun’ when you’re within sight of the car gets the front seat. That’s how the game’s played. There are no exceptions for someone with a concussion.",
    author: "Michael Scott",
    episode: "(Season 2, The Injury)",
  },
  {
    quote: "Saw Inception. Or at least I dreamt I did…",
    author: "Michael Scott",
    episode: "(Season 7, Nepotism)",
  },
  {
    quote: "You are as creepy as a real serial killer. For real.",
    author: "Michael Scott",
    episode: "(Season 4, Survivor Man)",
  },
  {
    quote:
      "They always say that it’s a mistake to hire your friends. And they are right. So, I hired my best friends. And this is what I get!?.",
    author: "Michael Scott",
    episode: "(Season 5, The Michael Scott Paper Company)",
  },
  {
    quote: "I’m an early bird and I’m a night owl, so I’m wise and have worms.",
    author: "Michael Scott",
    episode: "(Season 2, Office Olympics)",
  },
  {
    quote:
      "Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.",
    author: "Michael Scott",
    episode: "(Season 4, Fun Run)",
  },

  {
    quote: "You all took a life here today. You did. The life of the party.",
    author: "Michael Scott",
    episode: "(Season 5, Cafe Disco)",
  },
  {
    quote:
      "Whether you’re scared of dying, or dying alone, or dying drunk in a ditch, don’t be. It’s going to be OK.",
    author: "Michael Scott",
    episode: "(Season 7, Goodbye Michael)",
  },
  {
    quote:
      "I fell in love with these kids. And I didn’t want to see them fall victim to the system. So I made ’em a promise. I told them if they graduated from high school, I would pay for their college education. I have made some empty promises in my life but, hands down that was the most generous.",
    author: "Michael Scott",
    episode: "(Season 6, Scott’s Tots)",
  },
  {
    quote:
      "This is a dream that I’ve had…since lunch…and I’m not giving it up now.",
    author: "Michael Scott",
    episode: "(Season 5, The Michael Scott Paper Company)",
  },
  {
    quote:
      "I feel like all my kids grew up, and then they married each other. It’s every parent’s dream.",
    author: "Michael Scott",
    episode: "(Season 9, Finale)",
  },
  {
    quote:
      "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like a compulsive need to be liked. Like my need to be praised.",
    author: "Michael Scott",
    episode: "(Season 4, Fun Run)",
  },
  {
    quote: "Why are you the way that you are?",
    author: "Michael Scott",
    episode: "(Season 2, Casino Night)",
  },
  {
    quote:
      "Meredith, you lit your hair on fire today. What about tomorrow? What is going to happen when you come into work and you’re dead?",
    author: "Michael Scott",
    episode: "(Season 5, Moroccan Christmas)",
  },
  {
    quote:
      "Nobody should have to go to work thinking, ‘Oh this is the place that I might die today.’ That’s what a hospital is for. An office is for not dying. An office is a place to live life to the fullest. To the max. To…an office is a place where dreams come true.",
    author: "Michael Scott",
    episode: "(Season 5, Stress Relief: Part 1)",
  },
  {
    quote:
      "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.",
    author: "Michael Scott",
    episode: "(Season 6, The Chump)",
  },
  {
    quote:
      "My, philosophy is, basically this. And this is something that I live by. And I always have. And I always will. Don’t, ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who you are with, or, or where you are going, or, or where you’ve been. Ever. For any reason. Whatsoever.",
    author: "Michael Scott",
    episode: "(Season 5, The Duel)",
  },
  {
    quote: "I. Declare. Bankruptcy!!",
    author: "Michael Scott",
    episode: "(Season 4, Money)",
  },
  {
    quote:
      "I wish there was a way to know you’re in the good old days, before you’ve actually left them.",
    author: "Andy Bernard",
    episode: "(Season 9, Finale)",
  },
  {
    quote:
      "In the Schrute family, the youngest child raises the others. I’ve been raising children since I was a baby.",
    author: "Dwight Schrute",
    episode: "(Season 7, Viewing Party)",
  },
  {
    quote:
      "’R’ is among the most menacing of sounds. That’s why they call it ‘murder’ and not ‘mukduk.’",
    author: "Dwight Schrute",
    episode: "(Season 6, Mafia)",
  },
  {
    quote:
      "Jim is my enemy. But it turns out that Jim is also his own worst enemy. And the enemy of my enemy is my friend. So Jim, is actually my friend. But, because he is his own worst enemy, the enemy of my friend is my enemy so actually Jim is my enemy.",
    author: "Dwight Schrute",
    episode: "(Season 6, Koi Pond)",
  },
  {
    quote:
      "In the end, the greatest snowball isn’t a snowball at all. It’s fear. Merry Christmas.",
    author: "Dwight Schrute",
    episode: "(Season 7, Classy Christmas)",
  },
  {
    quote:
      "I am fast. To give you a reference point. I’m somewhere between a snake and a mongoose. And a panther.",
    author: "Dwight Schrute",
    episode: "(Season 3, The Merger)",
  },
  {
    quote:
      "Whenever I’m about to do something, I think, ‘Would an idiot do that?’ And if they would, I do not do that thing.",
    author: "Dwight Schrute",
    episode: "(Season 3, Business School)",
  },
  {
    quote:
      "People underestimate the power of nostalgia. Nostalgia is truly one of the greatest human weaknesses, second only to the neck.",
    author: "Dwight Schrute",
    episode: "(Season 9, The Farm)",
  },
  {
    quote:
      "In the wild, there is no healthcare. In the wild healthcare is, ‘Ow, I hurt my leg. I can’t run. A lion eats me, and I’m dead.’ Well, I’m not dead. I’m the lion. You’re dead.",
    author: "Dwight Schrute",
    episode: "(Season 1, Health Care)",
  },
  {
    quote: "I feel God in this Chili’s tonight.",
    author: "Pam Beesly",
    episode: "(Season 2, The Dundies)",
  },
  {
    quote: "Every so often, Jim dies of boredom.",
    author: "Pam Beesly",
    episode: "(Season 2, Office Olympics)",
  },
  {
    quote:
      "I don’t care what they say about me, I just wanna eat. Which I realize is a lot to ask for. At a dinner party.",
    author: "Pam Beesly",
    episode: "(Season 4, Dinner Party)",
  },
  {
    quote: "Fact: Bears eat beets. Bears. Beets. Battlestar Galactica.",
    author: "Jim Halpert",
    episode: "(Season 3, Product Recall)",
  },
  {
    quote: "I talk a lot, so I've learned to just tune myself out...",
    author: "Kelly Kapoor",
    episode: "(Season 7, Counseling)",
  },
  {
    quote: "Oh, it is on, like a prawn who yawns at dawn.",
    author: "Andy Bernard",
    episode: "(Season 5, Casual Friday)",
  },
  {
    quote:
      "One day Michael came in and complained about a speed bump on the highway. I wonder who he ran over then.",
    author: "Jim Halpert",
    episode: "(Season 4, Fun Run)",
  },
  {
    quote:
      "Mini cupcakes? As in the mini version of regular cupcakes? Which is already a mini version of cake? Honestly, where does it end with you people?",
    author: "Kevin Malone",
    episode: "(Season 9, Dwight Christmas)",
  },
  {
    quote:
      "The doctor said, if I can't find a new way to relate more positively to my surroundings, I'm going to die. I'm going to die.",
    author: "Stanley Hudson",
    episode: "(Season 5, Stress Relief)",
  },
  {
    quote: "I understand nothing.",
    author: "Michael Scott",
    episode: "(Season 5, The Dream Team)",
  },
  {
    quote:
      "I got six numbers. One more would have been a complete telephone number.",
    author: "Kevin Malone",
    episode: "(Season 6, Niagra)",
  },
  {
    quote:
      "For my new year's resolution, I gave up drinking... during the week.",
    author: "Meredith Palmer",
    episode: "(Season 2, Christmas Party)",
  },
  {
    quote: "Sorry I annoyed you with my friendship.",
    author: "Andy Bernard",
    episode: "(Season 3, The Return)",
  },
  {
    quote:
      "I just wanna lie on the beach and eat hot dogs. That's all I've ever wanted.",
    author: "Kevin Malone",
    episode: "(Season 3, Beach Games)",
  },
  {
    quote:
      "I love catching people in the act. That's why I always whip open doors.",
    author: "Dwight Schrute",
    episode: "(Season 5, Frame Toby)",
  },
];

export default quotes;
