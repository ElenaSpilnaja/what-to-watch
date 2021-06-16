export const filmsFilter = [
  {
    filmId: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Cassini%27s_Grand_Finale.ogv/Cassini%27s_Grand_Finale.ogv.360p.vp9.webm`
  },
  {
    filmId: 2,
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Cassini%27s_Grand_Finale.ogv/Cassini%27s_Grand_Finale.ogv.360p.vp9.webm`
  },
  {
    filmId: 3,
    title: `Macbeth`,
    image: `img/macbeth.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Cassini%27s_Grand_Finale.ogv/Cassini%27s_Grand_Finale.ogv.360p.vp9.webm`
  },
  {
    filmId: 4,
    title: `Aviator`,
    image: `img/aviator.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Cassini%27s_Grand_Finale.ogv/Cassini%27s_Grand_Finale.ogv.360p.vp9.webm`
  },
  {
    filmId: 5,
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Cassini%27s_Grand_Finale.ogv/Cassini%27s_Grand_Finale.ogv.360p.vp9.webm`
  },
  {
    filmId: 6,
    title: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Cassini%27s_Grand_Finale.ogv/Cassini%27s_Grand_Finale.ogv.360p.vp9.webm`
  },
  {
    filmId: 7,
    title: `Revenant`,
    image: `img/revenant.jpg`
  },
  {
    filmId: 8,
    title: `Johnny English`,
    image: `img/johnny-english.jpg`
  },
  {
    filmId: 9,
    title: `Shutter Island`,
    image: `img/shutter-island.jpg`
  },
  {
    filmId: 10,
    title: `Pulp Fiction`,
    image: `img/pulp-fiction.jpg`
  },
  {
    filmId: 11,
    title: `No Country for Old Men`,
    image: `img/no-country-for-old-men.jpg`
  },
  {
    filmId: 12,
    title: `Snatch`,
    image: `img/snatch.jpg`
  },
  {
    filmId: 13,
    title: `Moonrise Kingdom`,
    image: `img/moonrise-kingdom.jpg`
  },
  {
    filmId: 14,
    title: `Seven Years in Tibet`,
    image: `img/seven-years-in-tibet.jpg`
  },
  {
    filmId: 15,
    title: `Midnight Special`,
    image: `img/midnight-special.jpg`
  },
  {
    filmId: 16,
    title: `War of the Worlds`,
    image: `img/war-of-the-worlds.jpg`
  },
  {
    filmId: 17,
    title: `Dardjeeling Limited`,
    image: `img/dardjeeling-limited.jpg`
  }
];

export const films = [
  {
    filmId: 1,
    filmTitle: `Fantastic Beasts: The Crimes of Grindelwald`,
    filmImage: `img/FantasticBeasts_poster.png`,
    filmBgImage: `img/Fantastic-Beasts-2_Sdtk_YouTube_1920x1080px_01.jpg`,
    genre: `Fantasy`,
    trailer: `https://imdb-video.media-imdb.com/vi965130777/1434659607842-pgv4ql-1540579487666.mp4?Expires=1602497896&Signature=UWSwaV~Dj7mzyMWaxei28pmrBgqfR1KE05ApSQnMgFRr-iU-dPdffomu5XrYAo7TwfMXqZpFiissIg1WCWAb2~BtDZWaOrWSDxiDRG-ymyzwToGsEyV0mBsqFFN2hV9L7IXl~fTcjhEtpnz61Gmgs9nyxGFDWkiaMiSow20obyCUnIb0KPLoylo08tJ5gucDBUAu1QzfCnO2GeNLUK8AC0ElFT-Yctyr07CnY5RVnlLSxufpje~dVS0V4vthgQl8WOsU3x1GcULOSJYzGUcWR6~ED0bH4WFJV9Kxc1-H13slK2wKLoFAR6gOKqzcEa1ccLa7oiQ14vfj5nal01m01Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    year: 2018,
    rating: 6.6,
    ratingName: getRatingName(6.6),
    numberOfReviews: 212,
    description: [
      `In an effort to thwart Grindelwald\`s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\`s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
    ],
    director: `David Yates`,
    stars: [
      `Eddie Redmayne`,
      `Katherine Waterston`,
      `Dan Fogler`,
      `Johnny Depp`,
      `Kevin Guthrie`,
      `Carmen Ejogo`,
      `Wolf Roth`
    ],
    runTime: `2h 14min`
  },
  {
    filmId: 2,
    filmTitle: `Bohemian Rhapsody`,
    filmImage: `img/Bohemian-Rhapsody_poster.png`,
    filmBgImage: `img/thumb-1920-955329.jpg`,
    genre: `Drama`,
    trailer: `https://imdb-video.media-imdb.com/vi1451538969/1434659607842-pgv4ql-1540474852592.mp4?Expires=1602498156&Signature=pGmRzsFW2as~0mP1JWaC4Nbl3zAskc9hfrFTEM2ABs9Eh5dNVo-C3ixu6LfEha-BPXTA1iV25WUQOLwZ0nnJRYO6rS52RQ8x118f~cV~vJE5X3HwwjOEVQviPkvm0TA~0U~EF1hhqS8SnOcKeTN53iK94~N4hCIbvNNKWB2oYijohI4pKeZvJhLlDOdY2HzG2x-WCCrpQrzRoQNwLNtwu0ZswM71i7P9z~jsR-7od6L5NwyobFc3nhnYjG0VIeIqpV~lgzaHTy0qBsU-Vvieb8udq2TZvdP2crAi7EQLazLJ9zuX0OS-gU~lLRutg5OiIA3~N1UuWs3bHMs62IbFTQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    year: 2018,
    rating: 8.0,
    ratingName: getRatingName(8.0),
    numberOfReviews: 437,
    description: [
      `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. ` +
      `Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film ` +
      `traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but ` +
      `in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly ` +
      `without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a ` +
      `recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy ` +
      `that continues to inspire outsiders, dreamers and music lovers to this day.`,
    ],
    director: `Bryan Singer`,
    stars: [
      `Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joseph Mazzello`, `Aidan Gillen`, `Allen Leech`
    ],
    runTime: `2h 14min`
  },
  {
    filmId: 3,
    filmTitle: `Macbeth`,
    filmImage: `img/Macbeth_poster.png`,
    filmBgImage: `img/29-290201_macbeth-wallpaper.jpg`,
    genre: `Drama`,
    trailer: `https://imdb-video.media-imdb.com/vi3526864921/1401497881123-xszl4z-1433432600712.mp4?Expires=1602498575&Signature=TgQP7BeLRPtls1YEAKapSVhnAQP8oY2f98J2gFxy1hULP29gcuVj7XCGrDpGlxfkr7tfCm2O3u3ShBnCLLfYoGYrYd0bL6cgcRted~J6dr4txNUzBuRYAKMvr3yfPY2yxD044shiHbGsIRmfglh3D9j5g2cHN46dqPVe2Zfgu7R1IOXdoGkIEY6P2Dxd0Mj8KknS98~qsUUdWITM2XEkVaJ1T1Z~R58ac6-127QMy2XoGOU4~TA1s2Lw9ZzKoiWRd4xzfI2FBSwhyI19S6xPTU7COiwJXc7-hkDuZ7jSe89yBY-u8RozHVQ5bAHiIv~-kd1FfmGsRhjPuvs2DpMDjA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    year: 2015,
    rating: 6.6,
    ratingName: getRatingName(6.6),
    numberOfReviews: 52,
    description: [
      `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. ` +
      `Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`
    ],
    director: `Justin Kurzel`,
    stars: [
      `Jack Madigan`, `Frank Madigan`, `Michael Fassbender`, `Marion Cotillard`, `Paddy Considine`, `Lochlann Harris`, `Kayla Fallon`
    ],
    runTime: `1h 53min`
  },
];

export const filmReviews = [
  {
    filmId: 1,
    filmTitle: `Fantastic Beasts: The Crimes of Grindelwald`,
    filmReviews: [
      {
        name: `androdelov`,
        data: new Date(2018, 10, 25),
        rating: 1.0,
        ratingName: getRatingName(1),
        description: [
          `It been a long time since I\`ve watched such a boring movie. There was literally no plot at all. The "plot" was forced by some completely random happening stuff. The movie was CGI effects only and nothing more.`,
          `1. Crimes of Grindelwald? Where were they, because I haven\`t seen one. 2. What was the point of the Fantastic Beasts other than pure CGI appearances? 3. Everything was so dumbed down I felt insulted while watching it. Literally! 4. No good soundtrack.`
        ]
      }
    ],
  },
  {
    filmId: 2,
    filmTitle: `Bohemian Rhapsody`,
    filmReviews: [
      {
        name: `ramonvandinther`,
        data: new Date(2018, 9, 28),
        rating: 10,
        ratingName: getRatingName(10),
        description: [
          `This movie is a must see for any music and movie lover Queen fan or no Queen fan,anyone who sees this movie will ` +
          `be going through a rollercoaster of Emotions Beeing it Queens music or the story behind the music Rami Malek puts ` +
          `down an excellent version of Freddie Mercury, but all the actors play great in this movie In my opinion best thing ` +
          `to do is ignore the criticism and go see it for yourself.`
        ]
      },
      {
        name: `david-626-148063`,
        data: new Date(2018, 10, 24),
        rating: 10.0,
        ratingName: getRatingName(10),
        description: [
          `Wow! I feel mind-blown after watching the world premiere yesterday evening. I am whether a megahuge Queen fan (although ` +
          `I really like many of their songs), nor do I know how accurate the storytelling is (, but I suppose pretty accurate since ` +
          `both Brian May and Roger Taylor are co-producers of the film), but I found the movie both intoxicating and moving. `,
          ` I have read some of the professional reviews, and I cannot comprehend their search of documentary wisdom in this movie; ` +
          `this is not a documentary, but an entertaining story of one of the world\`s most iconic bands. And the film delivers on all ` +
          `aspects. (And the critics were so wrong about the song Bohemian Rhapsody upon its release).`
        ]
      },
    ],
  },
  {
    filmId: 3,
    filmTitle: `Macbeth`,
    filmReviews: [
      {
        name: `ramonvandinther`,
        data: new Date(2020, 1, 13),
        rating: 8.0,
        ratingName: getRatingName(8),
        description: [
          `William Shakespeare\`s famous tragedy is brought to the screen on a large scale. ` +
          `Full of his intricate and unique style of writing, this play focuses on Macbeth. .... ` +
          `What I did not expect to see is that the landscape of Scotland becomes not just the scenery background but one of the main storytelling streams. `,
          `One sees too many modern adaptations of Japanese interpretation of Macbeth that one seems to forget where the story came from in the first place. ` +
          `Truly magnificent cinematography in this version of Macbeth and it really lives up to bloodbath on the battlefields as stated in the Bard\` s words. ` +
          `One of the best movies in 2015`
        ]
      },
      {
        name: `AliceofX`,
        data: new Date(2015, 11, 15),
        rating: 5,
        ratingName: getRatingName(5),
        description: [
          `Well it was certainly very artistic and certain parts were just gorgeous. However there is not much more ` +
          `to recommend Macbeth. The worst part to me was how the dialogue was spoken, or not spoken since it was mostly ` +
          `whispers and mumbles. Just mumbles and mumbles. Shakespeare\`s prose just begs to be enjoyed but here I couldn\`t ` +
          `understand what they were saying half the time.`,
          `Also they seemed to have no idea what to do with the talking parts and just tried to invent weird action scenes to ` +
          `go with them that felt out of place. Too theatrical is how I would describe this film. It tries to be realistic ` +
          `and set in historical times, but it just makes the theatrical stick out more in awkward ways.`
        ]
      },
    ],
  },

];

function getRatingName(number) {
  if (number >= 0 && number <= 4) {
    return `Bad`;
  } else if (number >= 4.1 && number <= 7) {
    return `Good`;
  }
  return `Very Good`;
}

export default {films, filmReviews, filmsFilter};
