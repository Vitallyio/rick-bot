module.exports = function (robot) {
  robot.respond(/rant/i, function(msg) {
    var rants = [
      "Listen Morty, I hate to break it to you, but what people call love is just a chemical reaction " +
      "that compels animals to breed. It hits hard Morty, then it slowly fades, leaving you stranded " +
      "in a failing marriage. I did it, your parents are gonna do it. Break the cycle Morty - rise above. " +
      "Focus on science.",
      "I'm the Rick, and so were the rest of you before you formed this stupid alliance. You wanted to be " +
      "safe from the government so you became a stupid government. That makes every Rick here less Rick " +
      "than me. [murmuring]. Yeah, murmur it up d-bags. Now, if you'll excuse me, I've got pancakes back home with " +
      "syrup on top of them. They're about to hit that critical point of syrup absorption that turns the cakes " +
      "into a gross paste. And I hate to get all Andy Rooney about it, but, I think we all like fluffy disks " +
      "of cakes with syrup on TOP! And I think we also like to be accused of CRIMES when there's EVIDENCE. So " +
      "as they say in Canada - peace oot.",
      "I see what's happening here - you're both young, you're both unsure about your place in the universe, " +
      "and you both want to be grandpa's favorite. I could fix this. Morty, sit here. Summer, you sit here. Now listen. " +
      "I know the 2 of you are very different from each other in a lot of ways, but you have to understand that as far as " +
      "grandpa is concerned, you're both pieces of shit. Yeah! I can prove it mathematically. Actually, let " +
      "me grab my whiteboard. This has been a long time coming anyways.",
      "Quick! Morty, you've gotta turn into a car. A long time ago, I implanted you with a subdermal chip that could call " +
      "upon dormant nanobots in your bloodstream to restructure your anatomy and turn you into a car. Concentrate Morty - concentrate " +
      "and turn into a car Morty!....Nevermind, here's a taxi. Get in. It's fine.",
      "So, in conclusion, you’re both equally mercurial, overly sensitive, clingy, hysterical, birdbrained " +
      "homunculi. And I honestly can’t even tell the two of you apart half the time because I don’t go by height or age - I go by amount of " +
      "pain in my ass which makes you both identical. All right, everything resolved?",
      "Oh god, it hurts. She got me right in the goddamn liver Morty. It's the hardest working liver in " +
      "the galaxy Morty. And now it has a hole in it.",
      "I'm sorry Morty - it's a bummer. In reality, you're as dumb as they come. And I needed those seeds " +
      "real bad, and I had to give them up just to get your parents off my back. So now, we're going to have to go get " +
      "more. And then we're going to go on even more adventures after that Morty. And you're going to keep " +
      "your mouth shut about em Morty. Cause the world is full of idiots that don't understand what's important, and " +
      "they'll tear us apart Morty. But if you stick with me, I'm going to accomplish great things Morty. And you're going to " +
      "be part of them. And together, we're going to run around Morty, we're gonna....do all kinds of wonderful things Morty. " +
      "Just you and me Morty. The outside world is our enemy Morty. We're the only friends we've got Morty. " +
      "It's just Rick and Morty and their adventures Morty. Rick and Morty forever and forever 100 years Ricky and " +
      "Mortys things. Me and Rick and Morty and running around. Rick and Morty time. All day long, forever. 100 days. " +
      "Rick and Morty forever 100 times. Over and over Rick and Morty adventures.com www.atRickandMorty.com www Rick and Morty " +
      "adventures. All 100 years. Every minute RickAndMorty.com www 100 times RickAndMorty.com",
      "Ahh, not so fast Morty. You heard your mom, we’ve got adventures to go on Morty. Just you and me, and sometimes your sister, and sometimes your mom, but NEVER your dad! You wanna know why Morty? Because he CROSSED me. OK, take it easy, Rick! Th-that's dark. Oh it gets darker Morty... Welcome to the darkest year of our adventures. First thing that’s different, no more dad Morty. He threatened to turn me in to the government, so I made him and the government go away... I repla-burp-ced them both as the defacto-patriarch of your family, AND your universe. Your mom wouldn’t have accepted me if I came home without you and your sister. So now you know the REAL reason I rescued you. I JUST TOOK OVER THE FAMILY MORTY! Oh man. And if you tell your mom or sister I said any of this, I’ll DENY it. And they’ll take my side, because I’m a hero, Morty. And now you’re gonna have to do whatever I say, Morty, FOREVER! A-and I-I’ll go out and find some more of that Mulan, Szechuan Teriyaki dipping sauce, Morty. Because that's, that's what this is all about Morty! Szechuan? Th-that’s my one arm man. I’m not driven by avenging my dead family Morty crawls away- Morty, that was FAKE! -and Morty gets pulled back. I-I’m driven by finding that, McNugget Sauce. Nuggets? I want that Mulan McNugget Sauce, Morty. That’s my series arc Morty! If it takes 9 seasons, I WANT MY MCNUGGET DIPPING. SAUCE SZECHUAN SAUCE MORTY! What're you talking about? TH-THAT’S WHAT'S GONNA TAKE US, ALL THE WAY TO THE END MORTY! SEASON, 9 MORE SEASONS MORTY! 9 MORE SEASONS UNTIL I GET THAT DIPPING SZECHUAN SAUCE! What is that?! FOR 97 MORE YEARS MORTY! I WANT THAT MCNUGGET SAUCE MORTY!!!"
    ];

    var rant = msg.random(rants);
    msg.send(rant);
  });
};
