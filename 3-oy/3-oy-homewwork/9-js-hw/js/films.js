let darkMode=document.querySelector(".dark-mode"),
    svgTogl = document.querySelector(".svgTogl");
    

darkMode.addEventListener("click" , function(){
    document.body.classList.toggle('dark');
})

svgTogl.addEventListener("click", function () {
    document.body.classList.toggle('yoqbol')
})


var movies = [
    
   
    {
      title: "Darkest Hour",
      year: 2017,
      categories: ["Biography", "Drama", "History", "War"],
      imdbId: "tt4555426",
      imdbRating: 7.4,
      runtime: 125,
      language: "English",
      youtubeId: "LtJ60u7SUSw",
      summary:
        "During World War II, as Adolf Hitler's awesomely powerful Wehrmacht rampages across Europe, the Prime Minister of the United Kingdom, Neville Chamberlain, is forced to resign, recommending Winston Churchill as his replacement. But even in his early days as the country's leader, Churchill is under pressure to commence peace negotiations with the German dictator or to fight head-on the seemingly invincible Nazi regime, whatever the cost. However difficult and dangerous his decision may be, Churchill has no choice but to shine in the country's darkest hour.",
      smallThumbnail: "http://i3.ytimg.com/vi/LtJ60u7SUSw/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/LtJ60u7SUSw/maxresdefault.jpg",
    },
    {
      title: "In Search of Balance",
      year: 2016,
      categories: ["Documentary"],
      imdbId: "tt5022626",
      imdbRating: 6.6,
      runtime: 74,
      language: "English",
      youtubeId: "x4pLLL8XF5Q",
      summary:
        "At a genetic level, humans are literally connected to the rest of the natural world through our DNA. But today's highly processed foods, pesticide based monoculture farming methods, increasing urbanization, obsession with technology and destruction of the natural environment distance us further and further from the world we coevolved with. We are out of balance with nature and the reductionist philosophy of modern western medicine, once immensely powerful, seems inadequate to answer today's challenges.",
      smallThumbnail: "http://i3.ytimg.com/vi/x4pLLL8XF5Q/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/x4pLLL8XF5Q/maxresdefault.jpg",
    },
    {
      title: "Minimalism: A Documentary About the Important Things",
      year: 2015,
      categories: ["Documentary"],
      imdbId: "tt3810760",
      imdbRating: 6.7,
      runtime: 79,
      language: "English",
      youtubeId: "0Co1Iptd4p4",
      summary:
        "How might your life be better with less? Minimalism: A Documentary About the Important Things examines the many flavors of minimalism by taking the audience inside the lives of minimalists from all walks of life -- families, entrepreneurs, architects, artists, journalists, scientists, and even a former Wall Street broker -- all of whom are striving to live a meaningful life with less.",
      smallThumbnail: "http://i3.ytimg.com/vi/0Co1Iptd4p4/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/0Co1Iptd4p4/maxresdefault.jpg",
    },
    {
      title: "Tom of Finland",
      year: 2017,
      categories: ["Biography", "Drama"],
      imdbId: "tt5226984",
      imdbRating: 6.9,
      runtime: 115,
      language: "English",
      youtubeId: "V0E9zPRt96w",
      summary:
        "Touko Laaksonen, a decorated officer, returns home after a harrowing and heroic experience serving his country in World War II, but life in Finland during peacetime proves equally distressing. He finds peace-time Helsinki rampant with persecution of the homosexual men around him, even being pressured to marry women and have children. Touko finds refuge in his liberating art, specializing in homoerotic drawings of muscular men, free of inhibitions. His work - made famous by his signature 'Tom of Finland' - became the emblem of a generation of men and fanned the flames of a gay revolution.",
      smallThumbnail: "http://i3.ytimg.com/vi/V0E9zPRt96w/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/V0E9zPRt96w/maxresdefault.jpg",
    },
    {
      title: "Thelma",
      year: 2017,
      categories: ["Drama", "Fantasy", "Mystery", "Romance", "Thriller"],
      imdbId: "tt6304046",
      imdbRating: 7.1,
      runtime: 116,
      language: "English",
      youtubeId: "vgQMHG9SGlU",
      summary:
        "Having just enrolled at a university in Oslo against her stern parents' will, the sheltered Biology freshman and devout Christian, Thelma, leaves for the first time the isolated Norwegian countryside, to start a new life away from home. Tangibly lonely, a casual conversation and an unexpected friendship in the face of the beautiful fellow student, Anja, will broaden Thelma's hazy horizons; however, as the glacially alluring misfit wrestles with an onslaught of novel feelings, an unprecedented psychosomatic manifestation of repressed emotions takes over. A mystery cloaks soft-spoken Thelma's past, and the more she struggles to renounce her nebulous desire, the more violent is her quivering awakening. But can Thelma find a denied truth behind a stinging temptation?",
      smallThumbnail: "http://i3.ytimg.com/vi/vgQMHG9SGlU/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/vgQMHG9SGlU/maxresdefault.jpg",
    },
    {
      title: "When We First Met",
      year: 2018,
      categories: ["Comedy", "Fantasy", "Romance"],
      imdbId: "tt5783956",
      imdbRating: 6.4,
      runtime: 97,
      language: "English",
      youtubeId: "d2sJNee7FQ4",
      summary:
        "Noah spends the perfect first night with Avery, the girl of his dreams, but gets relegated to the friend zone. He spends the next three years wondering what went wrong - until he gets the unexpected chance to travel back in time and change that night - and his fate - over and over again.",
      smallThumbnail: "http://i3.ytimg.com/vi/d2sJNee7FQ4/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/d2sJNee7FQ4/maxresdefault.jpg",
    },
    {
      title: "Bomb City",
      year: 2017,
      categories: ["Action", "Crime", "Drama", "Thriller", "Western"],
      imdbId: "tt4351548",
      imdbRating: 7.1,
      runtime: 95,
      language: "English",
      youtubeId: "ir4IraOtads",
      summary:
        "Bomb City is a crime-drama, about the cultural aversion of a group of punk rockers in a conservative Texas town. Their ongoing battle with a rival, more-affluent clique leads to a controversial hate crime that questions the morality of American justice. Based on the true story of Brian Deneke.",
      smallThumbnail: "http://i3.ytimg.com/vi/ir4IraOtads/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/ir4IraOtads/maxresdefault.jpg",
    },
    {
      title: "The Ritual",
      year: 2017,
      categories: ["Horror"],
      imdbId: "tt5638642",
      imdbRating: 6.3,
      runtime: 94,
      language: "English",
      youtubeId: "Vfugwq2uoa0",
      summary:
        "A group of college friends reunite for a trip to the forest, but encounter a menacing presence in the woods that's stalking them.",
      smallThumbnail: "http://i3.ytimg.com/vi/Vfugwq2uoa0/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/Vfugwq2uoa0/maxresdefault.jpg",
    },
    {
      title: "Accident Man",
      year: 2018,
      categories: ["Action", "Crime", "Thriller"],
      imdbId: "tt6237612",
      imdbRating: 6.1,
      runtime: 105,
      language: "English",
      youtubeId: "hk6Fhe8HyKs",
      summary:
        "Mike Fallon, the Accident Man, is a stone cold killer whose methodical hits baffle the police and delight his clients. He is the best at what he does. But when a loved one is dragged into the London underworld and murdered by his own crew, Fallon is forced to rip apart the life he knew in order to hold those accountable and avenge the one person who actually meant something to him.",
      smallThumbnail: "http://i3.ytimg.com/vi/hk6Fhe8HyKs/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/hk6Fhe8HyKs/maxresdefault.jpg",
    },
    {
      title: "Coco",
      year: 2017,
      categories: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
      imdbId: "tt2380307",
      imdbRating: 8.5,
      runtime: 0,
      language: "English",
      youtubeId: "6Zxj9q8Yjdw",
      summary:
        "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      smallThumbnail: "http://i3.ytimg.com/vi/6Zxj9q8Yjdw/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/6Zxj9q8Yjdw/maxresdefault.jpg",
    },
    {
      title: "My Little Pony: The Movie",
      year: 2017,
      categories: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
      imdbId: "tt4131800",
      imdbRating: 6.2,
      runtime: 99,
      language: "English",
      youtubeId: "kIv_ConaZ1c",
      summary:
        "After a dark force conquers Canterlot, the Mane 6 - Twilight Sparkle, Applejack, Rainbow Dash, Pinkie Pie, Fluttershy, and Rarity - embark on an unforgettable journey beyond Equestria where they meet new friends and exciting challenges on a quest to use the magic of friendship to save their homeland.",
      smallThumbnail: "http://i3.ytimg.com/vi/kIv_ConaZ1c/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/kIv_ConaZ1c/maxresdefault.jpg",
    },
    {
      title: "The Foreigner",
      year: 2017,
      categories: ["Action", "Crime", "Drama", "Mystery", "Thriller"],
      imdbId: "tt1615160",
      imdbRating: 7,
      runtime: 113,
      language: "English",
      youtubeId: "33iuQu3UtjI",
      summary:
        "The story of humble London businessman Quan (Chan), whose long-buried past erupts in a revenge-fueled vendetta when the only person left for him to love - his teenage daughter - is taken from him in a senseless act of politically-motivated terrorism. In his relentless search for the identity of the terrorists, Quan is forced into a cat- and-mouse conflict with a Irish government official (Brosnan), whose own past may hold clues to the identities of the elusive killers.",
      smallThumbnail: "http://i3.ytimg.com/vi/33iuQu3UtjI/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/33iuQu3UtjI/maxresdefault.jpg",
    },
    {
      title: "Marshall",
      year: 2017,
      categories: ["Biography", "Drama"],
      imdbId: "tt5301662",
      imdbRating: 7.2,
      runtime: 118,
      language: "English",
      youtubeId: "IfvzEXhhWNk",
      summary:
        "In 1940, Thurgood Marshall is a young lawyer for the NAACP who criss-crosses the country defending innocent African-Americans from unjust indictments in court. His latest case is in Bridgeport, Connecticut where an African-American chauffeur is accused of rape of a wealthy white society woman. To admit Marshall into the local Bar, insurance lawyer Sam Friedman is picked over his objections to do introductions in court. However, Friedman's commitment changes drastically when the racist judge forbids Marshall to speak in court, forcing Friedman to act as lead counsel. Now in an intolerable situation for the pair, Marshall must guide his new compatriot through this criminal trial even as Friedman endures not only this unfamiliar area of law, but also the bigoted pressure he now must share. However, the case proves more complex than either anticipates with unexpected twists and turns even as it becomes a vital one that would define two careers as well as the fight for justice in America.",
      smallThumbnail: "http://i3.ytimg.com/vi/IfvzEXhhWNk/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/IfvzEXhhWNk/maxresdefault.jpg",
    },
    {
      title: "Rebel in the Rye",
      year: 2017,
      categories: ["Biography", "Drama", "Romance", "War"],
      imdbId: "tt4986134",
      imdbRating: 6.6,
      runtime: 106,
      language: "English",
      youtubeId: "VWRhXMMb7CY",
      summary:
        'The life of celebrated but reclusive author, J.D. Salinger, who gained worldwide fame with the publication of his novel, "The Catcher in the Rye".',
      smallThumbnail: "http://i3.ytimg.com/vi/VWRhXMMb7CY/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/VWRhXMMb7CY/maxresdefault.jpg",
    },
    {
      title: "Brawl in Cell Block 99",
      year: 2017,
      categories: ["Crime", "Drama"],
      imdbId: "tt5657856",
      imdbRating: 7.2,
      runtime: 132,
      language: "English",
      youtubeId: "7FnAhrJDTqs",
      summary:
        "Bradley Thomas is a hard working man. After him and his wife's miscarriage they admit the spark isn't there anymore and decide to have a baby. After being fired from his job, he turns to his friend who hires him as a drug dealer. A trade goes bad and he ends up in prison, the only problem is that a gang has kidnapped his wife and they will do an experimental operation on the baby unless Thomas kills one of the inmates in cell block 99. Bradley will not stop at anything until his wife is safe again.",
      smallThumbnail: "http://i3.ytimg.com/vi/7FnAhrJDTqs/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/7FnAhrJDTqs/maxresdefault.jpg",
    },
    {
      title: "Chasing Trane: The John Coltrane Documentary",
      year: 2016,
      categories: ["Biography", "Documentary", "Music"],
      imdbId: "tt4287434",
      imdbRating: 7.3,
      runtime: 99,
      language: "English",
      youtubeId: "LujRZj2nJTg",
      summary:
        "CHASING TRANE is the definitive documentary film about an outside-the-box thinker with extraordinary talent whose boundary-shattering music continues to impact and influence people around the world. This smart, passionate, thought-provoking and uplifting documentary is for anyone who appreciates the power of music to entertain, inspire and transform. Written and directed by critically-acclaimed documentary filmmaker John Scheinfeld (The U.S. vs. John Lennon and Who Is Harry Nilsson...?) the film is produced with the full participation of the Coltrane family and the support of the record labels that collectively own the Coltrane catalog. Scheinfeld brings his strong story-telling skills to the creation of a rich, textured and compelling narrative that takes the audience to unexpected places. Set against the social, political and cultural landscape of the times, CHASING TRANE brings John Coltrane to life as a fully dimensional being, inviting the audience to engage with Coltrane the man...",
      smallThumbnail: "http://i3.ytimg.com/vi/LujRZj2nJTg/hqdefault.jpg",
      bigThumbnail: "http://i3.ytimg.com/vi/LujRZj2nJTg/maxresdefault.jpg",
    },
  ];
  console.log(movies);