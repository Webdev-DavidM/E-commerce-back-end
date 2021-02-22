const products = [
  // Bikes //
  // Mountain bikes
  {
    name: 'Vitus Sentier 27 VR Mountain Bike',
    price: 1099,
    description:
      "Ready for fast and fun hardtail trail riding, the Vitus Sentier 27 VR Mountain Bike (2021) is a multi-award winning model that's capable, playful and confident over all terrain",
    images: [
      '/images/cycle/mountain-bikes/Vitus-Sentier:image1.jpg',
      '/images/cycle/mountain-bikes/Vitus-Sentier:image2.jpg',
      '/images/cycle/mountain-bikes/Vitus-Sentier:image3.jpg',
      '/images/cycle/mountain-bikes/Vitus-Sentier:image4.jpg',
    ],
    stock: 10,
    size: [{ small: 2, medium: 3, large: 5 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Vitus',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Graphite',
  },
  {
    name: 'Nukeproof Giga 290 Elite Carbon Bike (SLX - 2021)',
    price: 4599,
    description:
      "The Nukeproof Giga 290 Elite Carbon Bike (SLX) features a carbon frame that's equipped with Fox Performance suspension, a Shimano SLX 12-Speed groupset and a 29' DT Swiss E1900 Spline wheelset wrapped in Michelin Wild Enduro tyres.Ready for fast and fun hardtail trail riding, the Vitus Sentier 27 VR Mountain Bike (2021) is a multi-award winning model that's capable, playful and confident over all terrain",
    images: [
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image1.jpg',
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image2.jpg',
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image3.jpg',
      '/images/cycle/mountain-bikes/Nukeproof_Giga:image4.jpg',
    ],
    stock: 22,
    size: [{ small: 10, medium: 8, large: 4 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Nukeproof',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Bullet Grey',
  },
  {
    name: 'Fuji Nevada 29 1.7 Hardtail Bike (2021)',
    price: 649,
    description:
      "The Nukeproof Giga 290 Elite Carbon Bike (SLX) features a carbon frame that's equipped with Fox Performance suspension, a Shimano SLX 12-Speed groupset and a 29' DT Swiss E1900 Spline wheelset wrapped in Michelin Wild Enduro tyres.Ready for fast and fun hardtail trail riding, the Vitus Sentier 27 VR Mountain Bike (2021) is a multi-award winning model that's capable, playful and confident over all terrain",
    images: [
      '/images/cycle/mountain-bikes/Fuji-Nevada:image1.jpg',
      '/images/cycle/mountain-bikes/Fuji-Nevada:image2.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
    ],
    brand: 'Fuji',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Satin Grey',
  },
  {
    name: 'Commencal Meta HT AM Origin 29 Hardtail Bike (2021)',
    price: 1249,
    description:
      'TA rider favourite year after year, the Commencal Meta HT AM Origin 29 Hardtail Bike (2021) features updated geometry to suit the needs of modern riders and modern MTB components.',
    images: [
      '/images/cycle/mountain-bikes/Meta-HT-Origin:image1.jpg',
      '/images/cycle/mountain-bikes/Meta-HT-Origin:image2.jpg',
      '/images/cycle/mountain-bikes/Meta-HT-Origin:image3.jpg',
    ],
    stock: 9,
    size: [{ small: 3, medium: 3, large: 3 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Commencal Meta HT',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'British Racing Green',
  },
  {
    name: 'Ghost Lanao Base 27.5 Hardtail Bike (2021)',
    price: 499,
    description:
      "The Ghost Lanao Base 27.5 Hardtail Bike features female optimised geometry to provide outstanding comfort and control, plus, it's equipped with SR Suntour suspension, a Shimano Tourney 3x7-Speed drivetrain and disc brakes..",
    images: ['/images/cycle/mountain-bikes/Ghost-Lanao:image1.jpg'],
    stock: 3,
    size: [{ small: 0, medium: 3, large: 0 }],
    reviews: [],
    brand: 'Ghost',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Dust - Mud',
  },
  {
    name: 'GT Aggressor Expert 29 Hardtail Bike (2021)',
    price: 449,
    description:
      'Ready for technical trail descents and long rides in the mountains, the GT Aggressor Expert 29 Hardtail Bike can handle it all. Its tough and light aluminium frame is combined with reliable MicroShift gears and Tektro disc brakes.',
    images: [
      '/images/cycle/mountain-bikes/GT Aggressor:image1.jpg',
      '/images/cycle/mountain-bikes/GT Aggressor:image2.jpg',
      '/images/cycle/mountain-bikes/GT Aggressor:image3.jpg',
    ],
    stock: 21,
    size: [{ small: 10, medium: 0, large: 11 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'GT',
    subcategory: 'Mountain bikes',
    category: 'cycle',
    colour: 'Blue',
  },
  // Hybrid bikes
  {
    name: 'Vitus Mach 3 VR Urban Bike (Claris - 2021)',
    price: 579,
    description:
      "The Vitus Mach 3 VR Urban Bike (Claris - 2021) is a modern 700c wheel hybrid bike that's capable of challenging your fitness.",
    images: [
      '/images/cycle/hybrid-bikes/Vitus-Mach:image1.jpg',
      '/images/cycle/hybrid-bikes/Vitus-Mach:image2.jpg',
      '/images/cycle/hybrid-bikes/Vitus-Mach:image3.jpg',
    ],
    stock: 8,
    size: [{ small: 0, medium: 3, large: 5 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Vitus',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Nardo Grey',
  },
  {
    name: 'Fuji Declaration Urban Bike (2021)',
    price: 449,
    description:
      'With a less aggressive riding position than the Feather model, the Fuji Declaration Urban Bike is built to own the urban jungle. Its steel frameset provides a comfortable ride and the rear wheel offers you a fixed or freewheel option.',
    images: [
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image1.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image2.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image3.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Fuji',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Khaki green',
  },
  {
    name: 'Fuji Declaration Urban Bike (2021)',
    price: 449,
    description:
      'With a less aggressive riding position than the Feather model, the Fuji Declaration Urban Bike is built to own the urban jungle. Its steel frameset provides a comfortable ride and the rear wheel offers you a fixed or freewheel option.',
    images: [
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image1.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image2.jpg',
      '/images/cycle/hybrid-bikes/Fuji-Declaration:image3.jpg',
    ],
    stock: 31,
    size: [{ small: 20, medium: 2, large: 9 }],
    reviews: [],
    brand: 'Fuji',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Khaki green',
  },
  {
    name: 'Cube SL Road Bike (2021)',
    price: 849,
    description:
      'Created to get you from A to B quickly, the Cube SL Road Bike brings you cycling in its purest form with minimum fuss. Its light, efficient aluminium frame is backed up by reliable Shimano Tourney gears and powerful Tektro disc brakes.',
    images: [
      '/images/cycle/hybrid-bikes/Cube-SL:image1.jpg',
      '/images/cycle/hybrid-bikes/Cube-SL:image2.jpg',
      '/images/cycle/hybrid-bikes/Cube-SL:image3.jpg',
    ],
    stock: 3,
    size: [{ small: 2, medium: 1, large: 0 }],
    reviews: [],
    brand: 'Cube',
    subcategory: 'Hybrid bikes',
    category: 'cycle',
    colour: 'Iridium - Black',
  },
  // road bikes //
  {
    name: 'Vitus Vitesse EVO CRS Road Bike (Ultegra - 2021)',
    price: 2999,
    description:
      'Setting the standard for other race-ready bikes, the Vitus Vitesse Evo CRS Road Bike brings you ultra-efficient power transfer. It has a full carbon frameset, a slick-shifting Shimano Ultegra groupset and carbon Reynolds AR29 wheels.',
    images: [
      '/images/cycle/road-bikes/Vitus-Vitesse:image1.jpg',
      '/images/cycle/road-bikes/Vitus-Vitesse:image2.jpg',
      '/images/cycle/road-bikes/Vitus-Vitesse:image3.jpg',
    ],
    stock: 7,
    size: [{ small: 0, medium: 2, large: 5 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Vitus',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Blue Chameleon',
  },
  {
    name: 'Zannata Z25 Road Bike',
    price: 499,
    description:
      'Bringing you responsive handling and efficient power delivery, the Zannata Z25 Road Bike is ideal for new road cyclists. Its light aluminium frame is built up with reliable Shimano Claris 3x8 gearing and Velox Roadrunner wheels.',
    images: [
      '/images/cycle/road-bikes/Zannata-Z25:image1.jpg',
      '/images/cycle/road-bikes/Zannata-Z25:image2.jpg',
      '/images/cycle/road-bikes/Zannata-Z25:image3.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Zannata',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Yellow',
  },
  {
    name: 'Fuji Transonic 1.1 Road Bike (2021)',
    price: 6999,
    description:
      'The Fuji Transonic 1.1 Road Bike features a quality C15 Ultra High-Modulus carbon frameset, a SRAM 2x12 Force eTap wireless electronic groupset with hydraulic disc brakes while rolling on carbon Vision wheels and Vittoria Corsa tyres.',
    images: [
      '/images/cycle/road-bikes/Fuji:image1.jpg',
      '/images/cycle/road-bikes/Fuji:image2.jpg',
    ],
    stock: 2,
    size: [{ small: 2, medium: 30, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
    ],
    brand: 'Fuji',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Satin Carbon - Black',
  },
  {
    name: 'Fuji Transonic 2.3 Road Bike (2021)',
    price: 3499,
    description:
      'The Fuji Transonic 2.3 Road Bike is a fast, agile and reliable race bike that features a full C10 carbon frameset, a Shimano 105 2x11 groupset, hydraulic disc brakes and Oval Concepts wheels wrapped in Vittoria Zaffiro Pro V tyres.',
    images: [
      '/images/cycle/road-bikes/Fuji2.3:image1.jpg',
      '/images/cycle/road-bikes/Fuji2.3:image2.jpg',
    ],
    stock: 2,
    size: [{ small: 2, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Fuji',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: 'Satin Carbon - Black',
  },

  {
    name: 'De Rosa IDOL Ultegra Racing500Disc Grey 46.2',
    price: 2959,
    description:
      'The De Rosa Idol Racing 500 Disc Ultegra Road Race Bike features a high-end carbon fibre construction, exceptional performing Shimano Ultegra mechanical drivetrain and hydraulic disc brakes.',
    images: [
      '/images/cycle/road-bikes/DeRosa_IDOL:image1.jpg',
      '/images/cycle/road-bikes/DeRosa_IDOL:image2.jpg',
      '/images/cycle/road-bikes/DeRosa_IDOL:image3.jpg',
      '/images/cycle/road-bikes/DeRosa_IDOL:image4.jpg',
    ],
    stock: 17,
    size: [{ small: 0, medium: 12, large: 5 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Charlie',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'De Rosa',
    subcategory: 'Road bikes',
    category: 'cycle',
    colour: ' Red',
  },
  // helmets //
  {
    name: 'Abus Macator Road Cycling Helmet',
    price: 39,
    description:
      "An entry-level cycle helmet, the Macator Road Helmet offers superb levels of protection alongside a stylish design. Whether just getting into the sporting side of cycling or looking for a commuter lid, it's a great choice.",
    images: [
      '/images/cycle/helmets/Abus-Macator:image1.jpg',
      '/images/cycle/helmets/Abus-Macator:image2.jpg',
    ],
    stock: 7,
    size: [{ small: 1, medium: 2, large: 4 }],
    reviews: [],
    brand: 'Abus',
    subcategory: 'Helmets',
    category: 'cycle',
    colour: 'Black',
  },
  {
    name: 'Kask Protone Road Helmet',
    price: 185,
    description:
      "First seen worn by WorldTour professional cyclists, the Kask Protone Road Cycle Helmet proves that a cycling helmet can be both breathable and aerodynamic. Offering incredible comfort, this is a bike helmet you'll want to use for training and racing.",
    images: [
      '/images/cycle/helmets/Kask-Protone:image1.jpg',
      '/images/cycle/helmets/Kask-Protone:image1.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Charlie',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Kask',
    subcategory: 'Helmets',
    category: 'cycle',
    colour: 'White',
  },
  {
    name: 'Giro Cinder Road Helmet (MIPS)',
    price: 67,
    description:
      'The Giro Cinder MIPS cycling helmet is heavy on features yet light in weight. With the innovative MIPS technology for added protection, the Cinder bike helmet provides high levels of protection to keep you safe on your bike.',
    images: [
      '/images/cycle/helmets/Giro-Cinder-MIPS-Helmet:image1.jpg',
      '/images/cycle/helmets/Giro-Cinder-MIPS-Helmet:image2.jpg',
    ],
    stock: 23,
    size: [{ small: 8, medium: 11, large: 2 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Charlie',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Giro',
    subcategory: 'Helmets',
    category: 'cycle',
    colour: 'White',
  },
  {
    name: 'Endura Hummvee Helmet',
    price: 42,
    description:
      'The Endura Hummvee helmet is designed with MTB and urban cyclist in mind, offering up great value comfort and protection no matter what type of riding you do.',
    images: ['/images/cycle/helmets/Endura-Hummvee-Helmet:image1.jpg'],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Endura',
    subcategory: 'Helmets',
    category: 'cycle',
    colour: 'Green',
  },
  // protection
  {
    name: 'POC Joint VPD Air Knee Pads',
    price: 70,
    description:
      "The POC Joint VPD Air Knee Pads provide excellent protection without being too restrictive. If you're pushing yourself to the limit, these are the knee pads you can depend on.",
    images: [
      '/images/cycle/protection/POC-Joint-VPD-Air-Knee:image1.jpg',
      '/images/cycle/protection/POC-Joint-VPD-Air-Knee:image2.jpg',
    ],
    stock: 7,
    size: [{ small: 0, medium: 2, large: 5 }],
    reviews: [],
    brand: 'POC',
    subcategory: 'Protection',
    category: 'cycle',
    colour: 'Black',
  },
  {
    name: 'Respro Ultralight Anti Pollution Mask',
    price: 40,
    description:
      'The Respro Ultralight Anti Pollution Mask is perfect for urban areas high in diesel particulates or hot, dusty conditions.',
    images: [
      '/images/cycle/protection/Respro-Ultralight-Anti-Pollution-Mask:image1.jpg',
    ],
    stock: 12,
    size: [{ small: 2, medium: 10, large: 3 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Respro',
    subcategory: 'Protection',
    category: 'cycle',
    colour: 'Black',
  },
  {
    name: 'Dainese Trail Skins 2 Elbow Guards',
    price: 40,
    description:
      "Dainese's Trail Skins 2 Elbow Guards are a great choice for enduro and downhill riders wanting protection when trails get rougher. The low profile design ensures arm movement is not restricted and the Pro Armour pads protect against injuries.",
    images: ['/images/cycle/protection/Dainese:image1.jpg'],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Dainese',
    subcategory: 'Protection',
    category: 'cycle',
    colour: 'Black',
  },
  {
    name: 'Fox Racing Titan Race Liner Shorts',
    price: 58,
    description:
      'Add an extra layer of protection to your off-road ride with the Fox Racing Titan Race Liner. Ideal regardless of whether you compete or ride casually, these padded shorts are anatomically shaped and extremely comfortable.',
    stock: 3,
    images: [
      '/images/cycle/protection/Fox-Racing-Titan-Race-Liner-Internal:image1.jpg',
      '/images/cycle/protection/Fox-Racing-Titan-Race-Liner-Internal:image2.jpg',
    ],
    size: [{ small: 1, medium: 1, large: 1 }],
    reviews: [],
    brand: 'Fox',
    subcategory: 'Protection',
    category: 'cycle',
    colour: 'Black',
  },
  // Run category //
  // Tops //
  {
    name: 'dhb Short Sleeve Run Top',
    price: 20,
    description:
      "The dhb Short Sleeve Run Top is a lightweight running top with a fitted, but unrestrictive fit. It's perfect for both running and the gym.",

    images: [
      '/images/run/clothing/dhb-Short-Sleeve:image1.jpg',
      '/images/run/clothing/dhb-Short-Sleeve:image2.jpg',
    ],
    stock: 20,
    size: [{ small: 6, medium: 6, large: 8 }],
    reviews: [],
    brand: 'dhb',
    subcategory: 'Tops',
    category: 'run',
    colour: 'Blue',
  },
  {
    name: "dhb Aeron Women's Short Sleeve Run Top",
    price: 25,
    description:
      "The dhb Aeron Women's Short Sleeve Run Top is a super light-weight running top with Microfresh for added breathability.",

    images: [
      '/images/run/clothing/dhb-Aeron-Women-s-Short-Sleeve:image1.jpg',
      '/images/run/clothing/dhb-Aeron-Women-s-Short-Sleeve:image2.jpg',
    ],
    stock: 2,
    size: [{ small: 1, medium: 0, large: 1 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'dhb',
    subcategory: 'Tops',
    category: 'run',
    colour: 'Peach',
  },
  {
    name: 'Asics Womens FUJITRAIL TOP',

    price: 65,
    description:
      'Envelop yourself in breathable protection with the Fujitrail T-Shirt from ASICS.',

    images: [
      '/images/run/clothing/Asics:image1.jpg',
      '/images/run/clothing/Asics:image2.jpg',
    ],
    stock: 12,
    size: [{ small: 3, medium: 7, large: 2 }],
    reviews: [],
    brand: 'Asics',
    subcategory: 'Tops',
    category: 'run',
    colour: 'Blue/Grey',
  },
  {
    name: '2XU GHST S/S Tee',

    price: 22,
    description:
      'Delivering world class lightness and cooling, the 2XU GHST S/S Tee keeps you cooler and dryer for longer',

    images: [
      '/images/run/clothing/2XH-image1.jpg',
      '/images/run/clothing/2XH-image2.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
    ],
    brand: '2XU',
    subcategory: 'Tops',
    category: 'run',
    colour: 'Blue',
  },
  {
    name: 'Gore Wear R7 2in1 Shorts',
    price: 88,
    description:
      'Comfortable, stylish and supporitve. The Gore Wear R7 2in1 Shorts will help you push your running distance even farther with its muscle supporting inner brief.',
    images: ['/images/run/clothing/Gore-Wear-R7-2in1-Shorts:image1.jpg'],
    stock: 21,
    size: [{ small: 12, medium: 3, large: 6 }],
    reviews: [],
    brand: 'Gore',
    subcategory: 'Legwear',
    category: 'run',
    colour: 'Multi',
  },
  {
    name: "Asics Women's Road 3.5 Inch Shorts",
    price: 18,
    description:
      "Sprint to the finish in these Asics Women's Road 3.5 Inch Shorts, offering a higher waist band and integrated drawcord for easy adjustability.",
    images: [
      '/images/run/clothing/Asics-women:image1.jpg',
      '/images/run/clothing/Asics-women:image1.jpg',
    ],
    stock: 4,
    size: [{ small: 1, medium: 2, large: 1 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Asics',
    subcategory: 'Legwear',
    category: 'run',
    colour: 'Black',
  },
  {
    name: "Shock Absorber Women's Capri",
    price: 15,
    description:
      "The Shock Absorber Women's Capri is highly comfortable and stylish. The perfect addition to your gym training wardrobe.",
    images: ['/images/run/clothing/Shock-Absorber-Women-s-Capri-image1.jpg'],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Shock',
    subcategory: 'Legwear',
    category: 'run',
    colour: 'Multi',
  },
  {
    name: 'adidas Astro Pant',
    price: 33,
    description:
      'Run like the wind! These Astro Pants from adidas are comfortable and highly breathable to keep airflow maximised.',
    images: [
      '/images/run/clothing/adidas:image1.jpg',
      '/images/run/clothing/adidas:image2.jpg',
    ],
    stock: 21,
    size: [{ small: 2, medium: 4, large: 15 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Adidas',
    subcategory: 'Legwear',
    category: 'run',
    colour: 'Multi',
  },
  // Jackets
  {
    name: 'Montane Minimus Stretch Ultra Running Jacket',
    price: 165,
    description:
      'The Minimus Stretch Ultra Running Jacket from Montane offers waterproof lightweight protection should the weather take a turn for the worst. Ideal for running, its stretch shell and high-end breathability make it a must for any trail runner.',
    images: [
      '/images/run/clothing/Montane-image1.jpg',
      '/images/run/clothing/Montane-image2.jpg',
    ],
    stock: 13,
    size: [{ small: 3, medium: 0, large: 10 }],
    reviews: [],
    brand: 'Montane',
    subcategory: 'Jackets',
    category: 'run',
    colour: 'Multi',
  },
  {
    name: 'dhb Flashlight Run Jacket',
    price: 48,
    description:
      "dhb's Flashlight Jacket will keep you ticking off the miles when the weather takes a turn for the worse. Great protection from wind and rain, it's bright colour and reflective details will catch the eye and leave you to focus on the road ahead.",
    images: [
      '/images/run/clothing/dhb:image1.jpg',
      '/images/run/clothing/dhb:image2.jpg',
    ],
    stock: 7,
    size: [{ small: 3, medium: 0, large: 4 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'dhb',
    subcategory: 'Jackets',
    category: 'run',
    colour: 'Fluro Yellow',
  },
  {
    name: 'OMM Halo Jacket',
    price: 111,
    description:
      'The OMM Halo Jacket is an ultra-lightweight, waterproof mountain shell designed to protect you in harsh mountain weather conditions. Extremely packable it can also be stored for it the weather improves.',
    images: [
      '/images/run/clothing/OMM-Halo-Jacket-image1.jpg',
      '/images/run/clothing/OMM-Halo-Jacket-image2.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'OMM',
    subcategory: 'Jackets',
    category: 'run',
    colour: 'Blue/Grey',
  },
  {
    name: "Salomon Women's Lightning Waterproof Jacket",
    price: 142,
    description:
      "You're into a demanding sport - be demanding with your gear. The Lightning Waterproof Jacket is the minimalist protective layer that ticks all your boxes for technical trails and more.",
    images: [
      '/images/run/clothing/Salomon-Women-s-Waterproof:image1.jpg',
      '/images/run/clothing/Salomon-Women-s-Waterproof:image2.jpg',
    ],
    stock: 22,
    size: [{ small: 5, medium: 3, large: 14 }],
    reviews: [],
    brand: 'Salomon',
    subcategory: 'Jackets',
    category: 'run',
    colour: 'Meadowbrook',
  },
  // Running shoes
  {
    name: 'Hoka One One CARBON X 2 Running Shoe',
    price: 157,
    description:
      'Equipped with a responsive carbon fibre plate and aggressive Meta-Rocker, the Carbon X 2 Running Shoes from Hoka One One is a high performance endurance racing shoe built for training and racing over long distances.',
    images: [
      '/images/run/footwear/Hoka:image1.jpg',
      '/images/run/footwear/Hoka:image2.jpg',
    ],
    stock: 13,
    size: [{ small: 2, medium: 7, large: 4 }],
    reviews: [],
    brand: 'Hoka',
    subcategory: 'Running Shoes',
    category: 'run',
    colour: 'Peach',
  },
  {
    name: 'Asics Gel-Nimbus 22 Running Shoes',
    price: 108,
    description:
      'Comfortable and responsive over long distances, the Gel-Nimbus 22 Shoes from Asics are packed full of performance-enhancing features to deliver soft cushioning, excellent shock absorption and an energetic ride stride after stride.',
    images: [
      '/images/run/footwear/AsicsGel:image1.jpg',
      '/images/run/footwear/AsicsGel:image2.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Hoka',
    subcategory: 'Running Shoes',
    category: 'run',
    colour: 'LIGHT STEEL/MAGNETIC',
  },
  {
    name: 'adidas Ultraboost 20 Running Shoes',
    price: 95,
    description:
      'Take your performance into orbit with the Ultraboost 20 Running Shoes from adidas. Creating a partnership between adidas and the International Space Station (ISS) to take giant leaps in fit, comfort and responsiveness.',
    images: ['/images/run/footwear/adidas-Ultraboost:image1.jpg'],
    stock: 17,
    size: [{ small: 3, medium: 4, large: 2 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Adidas',
    subcategory: 'Running Shoes',
    category: 'run',
    colour: 'Black',
  },
  {
    name: "Mizuno Women's Wave Inspire 17 Running Shoes",
    price: 119,
    description:
      "Ideal for daily runs, the Women's Wave Inspire 17 Running Shoes from Mizuno are a lightweight, well cushioned and responsive road running shoe built for the runner in need of additional support and stability through the gait cycle.",
    images: [
      '/images/run/footwear/Mizuno:image1.jpg',
      '/images/run/footwear/Mizuno:image2.jpg',
    ],
    stock: 5,
    size: [{ small: 1, medium: 3, large: 1 }],
    reviews: [],
    brand: 'Mizuno',
    subcategory: 'Running Shoes',
    category: 'run',
    colour: ' India Ink/Platinum G',
  },
  // trail shoes
  {
    name: "Salomon Women's XA Pro 3D Running Shoes",
    price: 84,
    description:
      "Providing stability to the overpronator on every type of terrain, the Women's XA Pro 3D Shoes from Salomon is an iconic running shoe that features expert grip, durability and fit for all of your outside adventures.",
    images: ['/images/run/footwear/Salomon-Women-images1.jpg'],
    stock: 19,
    size: [{ small: 9, medium: 2, large: 8 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Salomon',
    subcategory: 'Trail Shoes',
    category: 'run',
    colour: 'Black/Magnet/Aqua',
  },
  {
    name: 'adidas Terrex Agravic Flow Gore-Tex Trail Shoes',
    price: 125,
    description:
      'Combining premium waterproof protection with a snug sock-like fit, cushioned midsole and grippy Continental outsole, the adidas Terrex Agravic Flow Gore-Tex Trail Shoes let you take to the trail with confidence.',
    images: [
      '/images/run/footwear/adidas-Terrex-Agravic:image1.jpg',
      '/images/run/footwear/adidas-Terrex-Agravic:image2.jpg',
    ],
    stock: 7,
    size: [{ small: 2, medium: 2, large: 3 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Adidas',
    subcategory: 'Trail Shoes',
    category: 'run',
    colour: 'Blue',
  },
  {
    name: "Hoka One One Women's Speedgoat 4 Trail Running Shoe",
    price: 80,
    description:
      "Paying tribute to Hoka athlete Karl 'Speedgoat' Meltzer, Hoka One One's Women's Speedgoat 4 Trail Running Shoes come from an award-winning collection for making quick work of technical, challenging terrain.",
    images: [
      '/images/run/footwear/hokawomen:image1.jpg',
      '/images/run/footwear/hokawomen:image2.jpg',
    ],
    stock: 21,
    size: [{ small: 7, medium: 7, large: 7 }],
    reviews: [],
    brand: 'Hoka',
    subcategory: 'Trail Shoes',
    category: 'run',
    colour: 'Purple',
  },
  {
    name: 'Asics GEL-Trabuco 9 Running Shoes',
    price: 120,
    description:
      "Delivering protection, grip and durability, the Gel-Trabuco 9 Trail Running Shoes from Asics are perfect for the adventurous off-road runner. Even lighter than it's predecessor with a supportive fit, premium cushioning and advanced traction.",
    images: [
      '/images/run/footwear/Asicsimage1.jpg',
      '/images/run/footwear/Asicsimage1.jpg',
    ],
    stock: 3,
    size: [{ small: 1, medium: 0, large: 2 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
    ],
    brand: 'Asics',
    subcategory: 'Trail Shoes',
    category: 'run',
    colour: 'Black/yellow',
  },
  // Swim

  // swimming shorts
  {
    name: 'Speedo Classic Aquashort',
    price: 9,
    description:
      'Perfect for both fitness training or leisure swimming, the Classic Aquashort from Speedo offers a great fit and unrivalled comfort thanks to the adjustable drawcord waist and durable, chlorine-resistant fabric construction.',
    images: [
      '/images/swim/shorts/Speedo-Essentials-:image1.jpg',
      '/images/swim/shorts/Speedo-Essentials-:image2.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [],
    brand: 'Speedo',
    subcategory: 'Swimming shorts',
    category: 'swim',
    colour: 'Red',
  },
  {
    name: 'Speedo Essentials 16" Watershort',
    price: 10,
    description:
      'Providing classic style and exceptional comfort, the Essentials 16 Watershort from Speedo are versatile swimming shorts ideal for a range of activities and perfect for anything from taking a dip in the pool or heading to the beach',
    images: [
      '/images/swim/shorts/Speedo-Classic-Aquashort:image1.jpg',
      '/images/swim/shorts/Speedo-Classic-Aquashort:image2.jpg',
    ],
    stock: 7,
    size: [{ small: 1, medium: 3, large: 3 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Speedo',
    subcategory: 'Swimming shorts',
    category: 'swim',
    colour: 'Black',
  },
  {
    name: 'Arena Daytrip Short',
    price: 14,
    description:
      'Subtle style that lets your performance do the talking, the Daytrip Shorts from Arena are perfect for taking your swim to new places.',
    images: [
      '/images/swim/shorts/Arena:image1.jpeg',
      '/images/swim/shorts/Arena:image2.jpeg',
    ],
    stock: 11,
    size: [{ small: 2, medium: 7, large: 2 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c65',
        firstName: 'Mick',
        comment: 'Rubbish',
        rating: 1,
      },
    ],
    brand: 'Arena',
    subcategory: 'Swimming shorts',
    category: 'swim',
    colour: 'Multi',
  },
  {
    name: 'adidas Beach Women Short',
    price: 12,
    description:
      "For active days at the beach, from a few sets of beach volleyball to summer walks with the dog or simply hanging out with friends, the adidas Women's Beach Shorts are the ideal choice.",
    images: [
      '/images/swim/shorts/adidas-Beach-Women-Short:image1.jpg',
      '/images/swim/shorts/adidas-Beach-Women-Short:image2.jpg',
    ],
    stock: 31,
    size: [{ small: 15, medium: 7, large: 9 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Adidas',
    subcategory: 'Swimming shorts',
    category: 'swim',
    colour: 'Purple/Pink',
  },
  // swimming briefs
  {
    name: 'MP Rush Brief',
    price: 10,
    description:
      "MP's Rush Brief ensures light, simple swimming with a 6cm length allowing for free moving, unrestricted movement.",
    images: [
      '/images/swim/shorts/TRAINING-SUIT_RUSH-MP_MEN:image1.jpg',
      '/images/swim/shorts/TRAINING-SUIT_RUSH-MP_MEN:image2.jpg',
    ],
    stock: 3,
    size: [{ small: 1, medium: 1, large: 1 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'MP',
    subcategory: 'Swimming briefs',
    category: 'swim',
    colour: 'Black',
  },
  {
    name: 'Speedo Boom Splice Aquashort',
    price: 7,
    description:
      "Whether heading to the pool or beach, the Speedo Boom Splice Aquashorts feature chlorine resistance and UPF 50+ sun protection so it's great indoors or out. An internal drawcord ensures the shorts stay put as you plunge into the water.",
    images: [
      '/images/swim/shorts/Speedo-Boom-Splice:image1.jpg',
      '/images/swim/shorts/Speedo-Boom-Splice:image2.jpg',
    ],
    stock: 13,
    size: [{ small: 3, medium: 3, large: 7 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Speedos',
    subcategory: 'Swimming briefs',
    category: 'swim',
    colour: 'Black/red',
  },

  // swim suits- one piece
  {
    name: "Speedo Women's Electric Eclipse Placement Digital Rippleb",
    price: 14,
    description:
      "Stand out on race day! This swimsuit's show-stopping print displays a powerful sky scene. The powerback style offers superb freedom of movement while competing, ensuring nothing holds you back in the pool.",
    images: [
      '/images/swim/swimsuits/Speedo-Women-s-Electric-Eclipse:image1.jpg',
      '/images/swim/swimsuits/Speedo-Women-s-Electric-Eclipse:image2.jpg',
    ],
    stock: 14,
    size: [{ small: 2, medium: 7, large: 5 }],
    reviews: [],
    brand: 'Speedos',
    subcategory: 'One piece',
    category: 'swim',
    colour: 'Multi',
  },
  {
    name: 'Zoggs Girls Cottesloe Sportsback Swimsuit',
    price: 7,
    description:
      'A sporty looking swimsuit from Zoggs with a simple plain finish. Available in four colours, the Cottesloe is one of Zoggs core designs and offers a great fit, 100% chlorine proof fabric which has excellent colour and shape retention.',
    images: [
      '/images/swim/swimsuits/Zoggs-Girls-Cottesloe-Sportsback:image1.jpg',
    ],
    stock: 4,
    size: [{ small: 1, medium: 2, large: 1 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Zoggs',
    subcategory: 'One piece',
    category: 'swim',
    colour: 'Black',
  },
  {
    name: "TYR Women's Vega Maxfit Swimsuit",
    price: 18,
    description:
      'The Vega Maxfit is a top choice for swimmers wanting a supportive training suit. The thick straps, medium neckline and lined suit ensures excellent coverage and support during those grueling training drills',
    images: [
      '/images/swim/swimsuits/TYR-Women-s-Vega-Maxfit:image1.jpg',
      '/images/swim/swimsuits/TYR-Women-s-Vega-Maxfit:image2.jpg',
    ],
    stock: 13,
    size: [{ small: 2, medium: 2, large: 9 }],
    reviews: [],
    brand: 'TYR',
    subcategory: 'One piece',
    category: 'swim',
    colour: 'Blue',
  },
  {
    name: "Zoggs Women's Pop Block Scoopback",
    price: 20,
    description:
      "A costume that looks just as great on a sun lounger as in the pool, the Women's Pop Block Scoopback offers vibrant style.",
    images: [
      '/images/swim/swimsuits/Zoggs-Women-s-Pop-Block-Scoopback:image1.jpg',
      '/images/swim/swimsuits/Zoggs-Women-s-Pop-Block-Scoopback:image2.jpg',
    ],
    stock: 0,
    size: [{ small: 0, medium: 0, large: 0 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Zoggs',
    subcategory: 'One piece',
    category: 'swim',
    colour: 'Multi',
  },
  // swim suits- two piece
  {
    name: 'TYR Womens Wave Rider Trinity Top',
    price: 12,
    description:
      "Up to 20 times stronger than standard swimwear, the Women's Wave Rider Trinity Top from TYR is the perfect addition to your competition or training swimming wardrobe.",
    images: ['/images/swim/swimsuits/tyr:image1.jpeg'],
    stock: 3,
    size: [{ small: 1, medium: 1, large: 1 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'TYR',
    subcategory: 'Two piece',
    category: 'swim',
    colour: 'Multi',
  },
  {
    name: "Speedo Women's Boomstar Allover Thinstrap 2 Piece",
    price: 19,
    description:
      "Offering long-lasting durable wear with a stylish Boomstar print, the Women's Boomstar Allover Thinstrap Two-Piece Swimsuit from Speedo offers a great fit with light bust support and chlorine resistant fabric that holds shape over many sessions.",
    images: [
      '/images/swim/swimsuits/Speedo-Women-s-Boomstar:image1.jpg',
      '/images/swim/swimsuits/Speedo-Women-s-Boomstar:image2.jpg',
    ],
    stock: 18,
    size: [{ small: 2, medium: 5, large: 11 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
      {
        userId: '60268b35bdb3730f4b309c67',
        firstName: 'Keith',
        comment: 'Amazing',
        rating: 5,
      },
    ],
    brand: 'Speedo',
    subcategory: 'Two piece',
    category: 'swim',
    colour: 'Multi',
  },
  {
    name: "Zone3 Women's Cosmic Two Piece Swimming Bikini",
    price: 31,
    description:
      "The Zone3 Women's Cosmic Two Piece Swimming Bikini is a stylish swimming bikini with a bold cosmos design and bright green tailoring.",
    images: [
      '/images/swim/swimsuits/Zone3-Women-s-Cosmic-Two-Piece-Swimming-Bikini:image1.jpg',
      '/images/swim/swimsuits/Zone3-Women-s-Cosmic-Two-Piece-Swimming-Bikini:image2.jpg',
    ],
    stock: 5,
    size: [{ small: 2, medium: 1, large: 2 }],
    reviews: [],
    brand: 'Zone3',
    subcategory: 'Two piece',
    category: 'swim',
    colour: 'Multi',
  },
  {
    name: 'adidas Pro Collab Bikini',
    price: 23,
    description:
      'Working closely with the Early Bird Swimmers to deliver in both the performance and style stakes, the Pro Collab Bikini from adidas proves what a difference working together can make.',
    images: [
      '/images/swim/swimsuits/DQ3298_APP_on-model_standard_white:image2.jpg',
    ],
    stock: 25,
    size: [{ small: 2, medium: 1, large: 22 }],
    reviews: [
      {
        userId: '60268b35bdb3730f4b309c66',
        firstName: 'Ronnie',
        comment: 'Ok does what it should',
        rating: 3,
      },
    ],
    brand: 'Adidas',
    subcategory: 'Two piece',
    category: 'swim',
    colour: 'Multi',
  },
];

export default products;
