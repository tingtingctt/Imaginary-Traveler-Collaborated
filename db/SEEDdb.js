const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/imaginarytraveler"
);

const bookSeed = [
  {
    title: "Alburquerque",
    author: "Rudolfo Anaya",
    year:"1992",
    location:"Isleta Blvd,  Los Padillas neighborhood in Albuquerque, New Mexico",
    paragraph:
      "We were invited by your friend Isidro.  His family was having a matanza. We had fallen in love that summer and suddenly it was October, a more brilliant October I never saw again. The entire river was golden, the alamos had turned the color of fire.  Long strings of geese flew south and filled the valley with their call, and we, too, drove south along Isleta. Farmers lined the road, their trucks filled with bushels of green chile, red chile ristras, corn and pumpkins, apples.  It was autumn and the fiesta of the harvest drew people together.",
  },
  {
    title: "Little Fires Everywhere",
    author: "Celeste Ng",
    year:"2017",
    location:"Golden Gate Bridge, San Francisco, CA",
    paragraph:
      "Mia found an apartment, a room for rent in the Sunset in a house whose plaster was the color of sea salt, with a stern and elderly landlady who eyed her stomach and asked only, “There going to be an angry husband knocking on my door in a week?” For the last three months of her pregnancy, Mia walked the city, circling the lagoon in Golden Gate Park, climbing Coit Tower, one day crossing the Golden Gate Bridge in a fog so dense she could hear, but not see, the traffic rushing alongside her.  The fog mirrored her state of mind so perfectly she felt as if she were walking through her own brain: a haze of formless, pervasive emotion, nothing she could grasp, but full of looming thoughts that appeared from nowhere, startling her, then receded into whiteness again before she was even sure what she had seen.",
  },

  {
    title: "Foucault’s Pendulum",
    author: "Umberto Eco",
    year:"1988",
    location:"292 Rue Saint-Martin, 75003 Paris, France",
    paragraph:
      "Still unable to take my eyes from the key of the vault, I retreated, step by step, for I had learned the path by heart in the few minutes I had been there.  Great metal tortoises filed past me on either side, imposing enough to signal their presence at the corner of my eyes.  I fell back along the nave toward the front entrance, and again those menacing prehistoric birds of wire and rotting canvas loomed over me, evil dragonflies that some secret power had hung from the ceiling of the nave.  I saw them as sapiential metaphors, far more meaningful than their didactic pretext.  A swarm of Jurassic insects and reptiles, allegory of the long terrestrial migrations the Pendulum was tracing, aimed at me like angry archons with their long archeopterix-beaks…",
  },
  {
    title: "Play It As It Lays",
    author: "Joan Didion",
    year:"1970",
    location:"101 to 110 Interchange, Los Angeles, CA",
    paragraph:
      "Once she was on the freeway and had maneuvered her way to a fast lane she turned on the radio at high volume and she drove.  She drove the San Diego to the Harbor, the Harbor up to the Hollywood, the Hollywood to the Golden State, the Santa Monica, the Santa Ana, the Pasadena, the Ventura.  She drove it as a riverman runs a river, every day more attuned to its currents , its deceptions, and just as a riverman feels the pull of the rapids in the lull between sleeping and waking so Maria lay at night in the still of Beverly Hills and saw the great signs soar overhead at seventy miles an hour, Normandie ¼ Vermont ¾ Harbor Fwy 1.  Again and again she returned to an intricate stretch just south of the interchange where successful passage from the Hollywood onto the Harbor required a diagonal move across four lanes of traffic.  On the afternoon she finally did it without once braking or once losing the beat on the radio she was exhilarated, and that night slept dreamlessly.",
  },
  {
    title: "Kingbird Highway",
    author: "Ken Kaufman",
    year:"2007",
    location:"Dry Tortugas National Park, Florida ",
    paragraph:
      "Around and beyond the seething bird metropolis of Bush Key, the colors of the water were intense: milky emerald in the shallows, cobalt in the deeper waters.  Off to the northeast we could see a couple of white-sand shoals that barely broke the surface.  Farther away to the west was Logger-head Key, crowned with the thin feathery tops of Casuarina trees, with a lighthouse standing in the center.  Beyond these fragments, there was nothing but the wide ocean horizon. The fort was clearly being reclaimed by nature.  Grass and prickly pear grew atop the walls where we stood.  Water dripping through the lime cement in the upper walls over decades had begun to form stalactites in places.  Some parts of the fort had been reinforced recently with concrete: more were crumbling, with signs warning visitors away.  But if nature was going to retake the fort, it was going to take a while.",
  },
  {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    year:"1925",
    location:"1 Gatsby Lane, Great Neck NY",
    paragraph:
      "It was dawn now on Long Island and we went about opening the rest of the windows downstairs, filling the house with grey turning, gold tuning light.  The shadow of a tree fell abruptly across the dew and ghostly birds began to sing among the blue leaves.  There was a slow pleasant movement in the air, scarcely a wind, promising a cool lovely day. I don’t think she ever loved him.”  Gatsby turned around from the window and looked at me challengingly.",
  },
  {
    title: "Sweetbitter",
    author: "Stephanie Danler",
    year:"2016",
    location:"101 E 19th St, New York, NY 10003, Union Square Cafe",
    paragraph:
      "And then, the bar.  Timeless: long, dark mahogany, with stools high enough to make you feel like you were afloat.  The bar had soft music, dim lighting tinkling layers of noise, the bumps of a neighbor’s knee, the reach of someone’s arm by your face to take a glittering martini, the tap of a hostess as she escorted guests behind your back, the blur of plates being passed, the rattle of drinks, the virtuoso performance of bartenders slapping bottles into the back bar while also delivering bread, while also taking an order with the requisite substitutions and complications.  All the best regulars came in and greeted the hostess saying, Any space at the bar tonight?",
  },
  {
    title: "The Hunchback of Notre Dame",
    author: "Victor Hugo",
    year:"1831",
    location:"Paris Notre-Dame -- Place Jean-Paul-II, Paris, France",
    paragraph:
      "His cathedral was enough for him. It was peopled with marble figures of kings, saints and bishops who at least did not laugh in his face and looked at him with only tranquillity and benevolence. The other statues, those of monsters and demons, had no hatred for him – he resembled them too closely for that. It was rather the rest of mankind that they jeered at. The saints were his friends and blessed him; the monsters were his friends and kept watch over him. He would sometimes spend whole hours crouched before one of the statues in solitary conversation with it. If anyone came upon him then he would run away like a lover surprised during a serenade.",
  },
  {
    title: "The Guns of August",
    author: "Barbara Tuchman",
    year:"1962",
    location:"Westminster Hall, London, England",
    paragraph:
      "So gorgeous was the spectacle on the May morning of 1910 when nine kings rode in the funeral of Edward VII of England that the crowd waiting in hushed and black-clad awe, could not keep back gasps of admiration.  In scarlet and blue and green and purple, three by three the sovereigns rode through the palace gates, with plumed helmets, gold braid, crimson sashes, and jeweled orders flashing in the sun.  After them came five heirs apparent, forty more imperial or royal highnesses, seven queens--four dowager and three regnant --and a scattering of special ambassadors from uncrowned countries.  Together they represented seventy nations in the greatest assemblage of royalty and rank ever gathered in one place and of its kind the last.  The muffled tongue of Big Ben tolled nine by the clock as the cortege left the palace, but on history’s clock it was sunset, and the sun of the old world was setting in a dying blaze of splendor never to be seen again.",
  },
  {
    title: "The Guns of August",
    author: "Barbara Tuchman",
    year:"1962",
    location:"Westminster Hall, London, England",
    paragraph:
      "So gorgeous was the spectacle on the May morning of 1910 when nine kings rode in the funeral of Edward VII of England that the crowd waiting in hushed and black-clad awe, could not keep back gasps of admiration.  In scarlet and blue and green and purple, three by three the sovereigns rode through the palace gates, with plumed helmets, gold braid, crimson sashes, and jeweled orders flashing in the sun.  After them came five heirs apparent, forty more imperial or royal highnesses, seven queens--four dowager and three regnant --and a scattering of special ambassadors from uncrowned countries.  Together they represented seventy nations in the greatest assemblage of royalty and rank ever gathered in one place and of its kind the last.  The muffled tongue of Big Ben tolled nine by the clock as the cortege left the palace, but on history’s clock it was sunset, and the sun of the old world was setting in a dying blaze of splendor never to be seen again.",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    year:"1897",
    location:"Carpathian Mountains, Romania",
    paragraph:
      "...and bringing out all the glorious colours of this beautiful range, deep blue and purple in the shadows of the peaks, green and brown where grass and rock mingled, and an endless perspective of jagged rock and pointed crags, till these were themselves lost in the distance, where the snowy peaks rose grandly.  Here and there seemed mighty rifts in the mountains, through which, as the sun began to sink, we saw now and again the white gleam of falling water.  One of my companions touched my arm as we swept round the base of a hill and opened up the lofty, snow-covered peak of a mountain, which seemed, as we wound our serpentine way, to be right before us.“Look! Isten szek!” --”God’s seat!” --and he crossed himself reverently",
  },
  {
    title: "The Big Sleep",
    author: "Raymond Chandler",
    year:"1939",
    location:"Hollywood Blvd and Highland Ave",
    paragraph:
      "I got to my fee, tipped my hat to the blonde and went out after him.  He walked west, swinging his cane in a small tight arc just above his right shoe.  He was easy to follow.  His coat was cut from a rather loud piece of horse robe with shoulders so wide that his neck stuck up out of it like a celery stalk and his head wobbled on it as he walked.  We went a block and a half.  At the Highland Avenue traffic signal I pulled up beside him and let him see me… I leaned against a pepper tree in the parkway and waited.  The thunder in the foothills ws rumbling again.  The glare of lightning was reflected on piled-up black clouds off to the south.  A few tentative raindrops splashed down on the sidewalk and made spots as large as nickels. The air was as still as the air in General Sternwood’s orchid house.",
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
