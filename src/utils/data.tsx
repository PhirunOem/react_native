const categoryData = [
  {name: 'MEN', description: 'This product is set for men.'},
  {name: 'WOMEN', description: 'This product is set for women.'},
  {name: 'KID', description: 'This product is set for kid.'},
];

const sliderImage = [
  'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/eced47a6a02f48638d48ba8fb65bca2a_9366/Graphic_Tee_White_IW3237_21_model.jpg',
  'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b6009017a9d4b71a5f53bb3fdbfdd96_9366/Adicolor_SST_Track_Top_Kids_Pink_IY7451_21_model.jpg',
  'https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6da502e5c094b40b2df6c1b7097e594_9366/ALL_SZN_Snack_Attack_French_Terry_Shorts_Green_IW6677_21_model.jpg',
];

const allShoes = [
  {
    productType: 'SOCCER',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_02_standard.jpeg'),
      require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_03_standard.jpeg'),
      require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_01_standard_hover.jpeg'),
        require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_02_standard.jpeg'),
        require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_03_standard.jpeg'),
        require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_04_standard.jpeg'),
        require('../assets/images/Soccer/white/F50_League_Multi-Ground_Soccer_Cleats_White_IE0604_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Soccer/black/Copa_Gloro_II_Firm_Ground_Soccer_Cleats_Black_IG8740_01_standard_hover.jpeg'),
        require('../assets/images/Soccer/black/Copa_Gloro_II_Firm_Ground_Soccer_Cleats_Black_IG8740_02_standard.jpeg'),
        require('../assets/images/Soccer/black/Copa_Gloro_II_Firm_Ground_Soccer_Cleats_Black_IG8740_03_standard.jpeg'),
        require('../assets/images/Soccer/black/Copa_Gloro_II_Firm_Ground_Soccer_Cleats_Black_IG8740_04_standard.jpeg'),
        require('../assets/images/Soccer/black/Copa_Gloro_II_Firm_Ground_Soccer_Cleats_Black_IG8740_05_standard.jpeg'),
      ],
      red: [
        require('../assets/images/Soccer/red/F50_League_Multi-Ground_Soccer_Cleats_White_IE0601_01_standard_hover.jpeg'),
        require('../assets/images/Soccer/red/F50_League_Multi-Ground_Soccer_Cleats_White_IE0601_02_standard.jpeg'),
        require('../assets/images/Soccer/red/F50_League_Multi-Ground_Soccer_Cleats_White_IE0601_03_standard.jpeg'),
        require('../assets/images/Soccer/red/F50_League_Multi-Ground_Soccer_Cleats_White_IE0601_04_standard.jpeg'),
        require('../assets/images/Soccer/red/F50_League_Multi-Ground_Soccer_Cleats_White_IE0601_05_standard.jpeg'),
      ],
      gold: [
        require('../assets/images/Soccer/gold/Messi_F50_Pro_Firm_Ground_Soccer_Cleats_Gold_JI2502_01_standard_hover.jpeg'),
        require('../assets/images/Soccer/gold/Messi_F50_Pro_Firm_Ground_Soccer_Cleats_Gold_JI2502_02_standard.jpeg'),
        require('../assets/images/Soccer/gold/Messi_F50_Pro_Firm_Ground_Soccer_Cleats_Gold_JI2502_03_standard.jpeg'),
        require('../assets/images/Soccer/gold/Messi_F50_Pro_Firm_Ground_Soccer_Cleats_Gold_JI2502_04_standard.jpeg'),
        require('../assets/images/Soccer/gold/Messi_F50_Pro_Firm_Ground_Soccer_Cleats_Gold_JI2502_05_standard.jpeg'),
      ],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'RUNNING',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_01_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM3_hover.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM4.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM7.jpeg'),
      ],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'SNEAKER',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_010_hover_standard.jpeg'),
      require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_01_standard.jpeg'),
      require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_02_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_010_hover_standard.jpeg'),
        require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_01_standard.jpeg'),
        require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_02_standard.jpeg'),
        require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_03_standard.jpeg'),
        require('../assets/images/Sneakers/white/Samba_OG_Shoes_White_IG1025_04_standard.jpeg'),
      ],
      black: [],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'WALKING',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_02_standard_hover.jpeg'),
      require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_03_standard.jpeg'),
      require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [],
      black: [],
      red: [],
      gold: [],
      purple: [],
      blue: [
        require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_01_standard.jpeg'),
        require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_02_standard_hover.jpeg'),
        require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_03_standard.jpeg'),
        require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_04_standard.jpeg'),
        require('../assets/images/Walking/blue/4DFWD_4_Running_Shoes_Blue_ID8888_05_standard.jpeg'),
      ],
    },
    code: 'SAVING',
    isFavorite: false,
  },

  {
    productType: 'FOOTBALL',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_02_standard_hover.jpeg'),
      require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_03_standard.jpeg'),
      require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_01_standard.jpeg'),
        require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_02_standard_hover.jpeg'),
        require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_03_standard.jpeg'),
        require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_04_standard.jpeg'),
        require('../assets/images/Football/white/Adizero_Electric_Football_Cleats_White_IE4377_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Football/black/Adizero_Impact_Speed_Coronation_Football_Cleats_Black_IG5908_01_standard.jpeg'),
        require('../assets/images/Football/black/Adizero_Impact_Speed_Coronation_Football_Cleats_Black_IG5908_02_standard_hover.jpeg'),
        require('../assets/images/Football/black/Adizero_Impact_Speed_Coronation_Football_Cleats_Black_IG5908_03_standard.jpeg'),
        require('../assets/images/Football/black/Adizero_Impact_Speed_Coronation_Football_Cleats_Black_IG5908_04_standard.jpeg'),
        require('../assets/images/Football/black/Adizero_Impact_Speed_Coronation_Football_Cleats_Black_IG5908_05_standard.jpeg'),
      ],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'BASKETBALL',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Basketball/purple/D.O.N_Issue_6_Camp_Basketball_Shoes_Purple_JH8969_02_standard.jpeg'),
      require('../assets/images/Basketball/purple/D.O.N_Issue_6_Camp_Basketball_Shoes_Purple_JH8969_01_standard.jpeg'),
      require('../assets/images/Basketball/purple/D.O.N_Issue_6_Camp_Basketball_Shoes_Purple_JH8969_012_hover_standard.jpeg'),
    ],
    imagesByColors: {
      white: [],
      black: [],
      red: [],
      gold: [],
      purple: [
        require('../assets/images/Basketball/purple/D.O.N_Issue_6_Camp_Basketball_Shoes_Purple_JH8969_012_hover_standard.jpeg'),
        require('../assets/images/Basketball/purple/D.O.N_Issue_6_Camp_Basketball_Shoes_Purple_JH8969_01_standard.jpeg'),
        require('../assets/images/Basketball/purple/D.O.N_Issue_6_Camp_Basketball_Shoes_Purple_JH8969_02_standard.jpeg'),
      ],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'RUNNING',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_01_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM3_hover.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM4.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM7.jpeg'),
      ],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'RUNNING',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_01_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM3_hover.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM4.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM7.jpeg'),
      ],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'RUNNING',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_01_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM3_hover.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM4.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM7.jpeg'),
      ],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'RUNNING',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_01_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM3_hover.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM4.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM7.jpeg'),
      ],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
  {
    productType: 'RUNNING',
    price: 160,
    description:
      'This soccer is good for men who like playing football because it made with something that good for your foot soft and easy.',
    imagesCover: [
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
      require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
    ],
    imagesByColors: {
      white: [
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_01_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_02_standard_hover.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_03_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_04_standard.jpeg'),
        require('../assets/images/Running/white/Duramo_Speed_Shoes_White_IF1205_05_standard.jpeg'),
      ],
      black: [
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM3_hover.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM4.jpeg'),
        require('../assets/images/Running/black/Ultraboost_5X_Shoes_Black_JI1332_HM7.jpeg'),
      ],
      red: [],
      gold: [],
      purple: [],
      blue: [],
    },
    code: 'SAVING',
    isFavorite: false,
  },
];

const allAvailableColors = [
  {label: 'Red', value: 'red'},
  {label: 'White', value: 'white'},
  {label: 'Black', value: 'black'},
  {label: 'Purple', value: 'purple'},
  {label: 'Blue', value: 'blue'},
  {label: 'Gold', value: 'gold'},
  {label: 'Grey', value: 'grey'},
  {label: 'Yellow', value: 'yellow'},
  {label: 'Green', value: 'green'},
  {label: 'Pink', value: 'pink'},
];

export {categoryData, sliderImage, allShoes, allAvailableColors};
