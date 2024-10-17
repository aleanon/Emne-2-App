const fs = require('fs');
function saveProducts() {
  const jsonData = JSON.stringify(products, null, 2);
  fs.writeFileSync('src/store/products.json', jsonData, 'utf8');
}

const products = [
  // Baguette Category (15 Products)
  {
    productId: 1,
    categoryIndex: 0,
    productName: 'Rekebaguette',
    unitPrice: 69,
    description:
      'En klassisk baguette fylt med ferske reker, majones og smør. Perfekt for sjømatelskere. Allergener: Skalldyr',
    image: 'rekebaguette.webp',
    preorderRequired: true,
    customizationAvailable: true,
    unitsInStock: 10,
  },
  {
    productId: 2,
    categoryIndex: 0,
    productName: 'Kyllingbaguette',
    unitPrice: 79,
    description:
      'Baguette med saftig marinert kylling, salat og hvitløksmajones. Allergener: Hvete, Egg',
    image: 'kyllingbaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 15,
  },
  {
    productId: 3,
    categoryIndex: 0,
    productName: 'Vegetarbaguette',
    unitPrice: 54,
    description:
      'En sunn baguette med hummus, avokado og grillede grønnsaker. Allergener: Hvete, Soya',
    image: 'vegetarbaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 12,
  },
  {
    productId: 4,
    categoryIndex: 0,
    productName: 'Roastbeefbaguette',
    unitPrice: 74,
    description:
      'Baguette med mørt roastbiff, sylteagurk og sennepsmajones. Allergener: Hvete, Sennep',
    image: 'roastbeefbaguette.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 8,
  },
  {
    productId: 5,
    categoryIndex: 0,
    productName: 'Tunfiskbaguette',
    unitPrice: 79,
    description:
      'Smakfull baguette fylt med tunfiskrøre, rødløk og salat. Allergener: Fisk, Hvete',
    image: 'tunfiskbaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 10,
  },
  {
    productId: 6,
    categoryIndex: 0,
    productName: 'Skinkebaguette',
    unitPrice: 69,
    description:
      'Baguette med fersk skinke, ost og salat. En klassiker til lunsj. Allergener: Melk, Hvete',
    image: 'skinkebaguette.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 20,
  },
  {
    productId: 7,
    categoryIndex: 0,
    productName: 'Egg- og baconbaguette',
    unitPrice: 74,
    description:
      'Sprø baguette med egg, sprøstekt bacon og salat. Allergener: Egg, Hvete',
    image: 'egg_baconbaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 18,
  },
  {
    productId: 8,
    categoryIndex: 0,
    productName: 'Brie og avokadobaguette',
    unitPrice: 89,
    description:
      'Frisk baguette med kremet brie og moden avokado. Allergener: Melk, Hvete',
    image: 'brie_avokadobaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 14,
  },
  {
    productId: 9,
    categoryIndex: 0,
    productName: 'Falafelbaguette',
    unitPrice: 79,
    description:
      'En plantebasert baguette med falafel, tahinisaus og salat. Allergener: Hvete, Sesam',
    image: 'falafelbaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 16,
  },
  {
    productId: 10,
    categoryIndex: 0,
    productName: 'Laks og kremostbaguette',
    unitPrice: 69,
    description:
      'Delikat baguette med røkt laks og kremost. Perfekt for fiskelskere. Allergener: Fisk, Melk, Hvete',
    image: 'laks_kremostbaguette.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 12,
  },
  {
    productId: 11,
    categoryIndex: 0,
    productName: 'Capresebaguette',
    unitPrice: 74,
    description:
      'En italiensk baguette med mozzarella, tomat, basilikum og balsamico. Allergener: Melk, Hvete',
    image: 'capresebaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 14,
  },
  {
    productId: 12,
    categoryIndex: 0,
    productName: 'Baguette med spekeskinke',
    unitPrice: 69,
    description:
      'Klassisk baguette med spekeskinke og smør. Allergener: Hvete, Melk',
    image: 'spekematbaguette.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 15,
  },
  {
    productId: 13,
    categoryIndex: 0,
    productName: 'Egg- og rekebaguette',
    unitPrice: 79,
    description:
      'Luksuriøs baguette med egg, reker og majones. Allergener: Skalldyr, Egg, Hvete',
    image: 'egg_rekebaguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 12,
  },
  {
    productId: 14,
    categoryIndex: 0,
    productName: 'Biff og løkbaguette',
    unitPrice: 74,
    description:
      'Baguette med grillet biff, karamellisert løk og salat. Allergener: Hvete',
    image: 'biff_løkbaguette.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 10,
  },
  {
    productId: 15,
    categoryIndex: 0,
    productName: 'Ribbe- og rødkålbaguette',
    unitPrice: 89,
    description:
      'Julestemning i en baguette med ribbe og rødkål. Allergener: Hvete, Melk',
    image: 'ribbe_baguette.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 8,
  },

  // Canapes Category (10 Products)
  {
    productId: 21,
    categoryIndex: 1,
    productName: 'Klubb Sandwich med Kylling',
    unitPrice: 59,
    description:
      'En klassisk klubb sandwich med grillet kylling, salat, tomat, bacon og majones på ristet brød. Allergener: Egg, Hvete.',
    image: 'klubb_sandwich_kylling.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 40,
  },
  {
    productId: 22,
    categoryIndex: 1,
    productName: 'BLT Sandwich',
    unitPrice: 62,
    description:
      'En tradisjonell BLT med sprø bacon, fersk salat og saftig tomat, servert på surdeigsbrød. Allergener: Hvete.',
    image: 'blt_sandwich.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 35,
  },
  {
    productId: 23,
    categoryIndex: 1,
    productName: 'Sandwich med Kalkun og Avokado',
    unitPrice: 75,
    description:
      'En mettende sandwich med røkt kalkunbryst, fersk avokado, salat og tomat, servert på flerkornsbrød. Allergener: Hvete.',
    image: 'kalkun_avokado_sandwich.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 20,
  },
  {
    productId: 24,
    categoryIndex: 1,
    productName: 'Roastbiff Sandwich',
    unitPrice: 69,
    description:
      'Roastbiff sandwich med pepperrotmajones, karamellisert løk og ruccola, servert på ciabatta. Allergener: Hvete.',
    image: 'roastbiff_sandwich.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 30,
  },
  {
    productId: 25,
    categoryIndex: 1,
    productName: 'Caprese Sandwich',
    unitPrice: 64,
    description:
      'En fersk Caprese sandwich med mozzarella, tomat og basilikum, toppet med balsamico, servert på baguette. Allergener: Melk, Hvete.',
    image: 'caprese_sandwich.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 25,
  },
  {
    productId: 26,
    categoryIndex: 1,
    productName: 'Sandwich med Skinke og Sveitserost',
    unitPrice: 61,
    description:
      'En enkel og deilig sandwich med skinke og sveitserost med sennep, servert på rugbrød. Allergener: Melk, Hvete.',
    image: 'skinke_sveitser_sandwich.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 40,
  },
  {
    productId: 27,
    categoryIndex: 1,
    productName: 'Tunfisksalat Sandwich',
    unitPrice: 68,
    description:
      'Kremet tunfisksalat med salat og tomat, servert på fullkornsbrød. Allergener: Fisk, Hvete, Egg.',
    image: 'tunfisksalat_sandwich.webp',
    preorderRequired: true,
    customizationAvailable: true,
    unitsInStock: 30,
  },
  {
    productId: 28,
    categoryIndex: 1,
    productName: 'Eggesalat Sandwich',
    unitPrice: 60,
    description:
      'Klassisk eggesalat sandwich med salat på mykt hvitt brød. Allergener: Egg, Hvete.',
    image: 'eggesalat_sandwich.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 50,
  },
  {
    productId: 29,
    categoryIndex: 1,
    productName: 'Grillet Ostesandwich',
    unitPrice: 59,
    description:
      'Gylden grillet ostesandwich med cheddar og mozzarella, servert på smørstekt surdeigsbrød. Allergener: Melk, Hvete.',
    image: 'grillet_ost_sandwich.webp',
    preorderRequired: true,
    customizationAvailable: true,
    unitsInStock: 35,
  },
  // Coffee Category (10 produkter)
  {
    productId: 31,
    categoryIndex: 2,
    productName: 'Cappuccino',
    unitPrice: 45,
    description:
      'En klassisk cappuccino laget med espresso, steamet melk og et lag melkeskum. Allergener: Melk.',
    image: 'cappuccino.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 50,
  },
  {
    productId: 32,
    categoryIndex: 2,
    productName: 'Latte',
    unitPrice: 48,
    description:
      'En mild kaffe latte med espresso og steamet melk, toppet med et tynt lag melkeskum. Allergener: Melk.',
    image: 'latte.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 40,
  },
  {
    productId: 33,
    categoryIndex: 2,
    productName: 'Espresso',
    unitPrice: 35,
    description:
      'En intens og smakfull enkel espresso, perfekt for kaffekjennere.',
    image: 'espresso.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 60,
  },
  {
    productId: 34,
    categoryIndex: 2,
    productName: 'Americano',
    unitPrice: 40,
    description:
      'En americano laget med espresso og varmt vann, en mildere kaffedrikk uten melk.',
    image: 'americano.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 45,
  },
  {
    productId: 35,
    categoryIndex: 2,
    productName: 'Cortado',
    unitPrice: 42,
    description:
      'En cortado laget med espresso og en liten mengde steamet melk for en balanse mellom kaffe og melk. Allergener: Melk.',
    image: 'cortado.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 30,
  },
  {
    productId: 36,
    categoryIndex: 2,
    productName: 'Macchiato',
    unitPrice: 38,
    description:
      'En espresso macchiato med et lite lag melkeskum på toppen. Allergener: Melk.',
    image: 'macchiato.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 25,
  },
  {
    productId: 37,
    categoryIndex: 2,
    productName: 'Flat White',
    unitPrice: 50,
    description:
      'En flat white laget med espresso og myk steamet melk for en silkemyk kaffedrikk. Allergener: Melk.',
    image: 'flat_white.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 35,
  },
  {
    productId: 38,
    categoryIndex: 2,
    productName: 'Mocha',
    unitPrice: 55,
    description:
      'En sjokoladeinfusert kaffe latte laget med espresso, steamet melk og sjokoladesirup. Allergener: Melk.',
    image: 'mocha.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 40,
  },
  {
    productId: 39,
    categoryIndex: 2,
    productName: 'Iskaffe',
    unitPrice: 48,
    description:
      'En forfriskende iskaffe laget med espresso, melk og isbiter. Allergener: Melk.',
    image: 'iskaffe.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 20,
  },
  {
    productId: 40,
    categoryIndex: 2,
    productName: 'Kaffe Frappé',
    unitPrice: 52,
    description:
      'En kremet kaffe frappé laget med espresso, is og melk, toppet med krem. Allergener: Melk.',
    image: 'kaffe_frappe.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 25,
  },

  // Cake Category (15 produkter)
  {
    productId: 41,
    categoryIndex: 3,
    productName: 'Sjokoladekake',
    unitPrice: 300,
    description:
      'En rik og fyldig sjokoladekake med kremglasur. Allergener: Melk, Egg, Hvete',
    image: 'sjokoladekake.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 30,
  },
  {
    productId: 42,
    categoryIndex: 3,
    productName: 'Ostekake med bær',
    unitPrice: 400,
    description:
      'En kremet ostekake toppet med friske bær. Allergener: Melk, Egg, Hvete',
    image: 'ostekake_baer.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 25,
  },
  {
    productId: 43,
    categoryIndex: 3,
    productName: 'Gulrotkake',
    unitPrice: 290,
    description:
      'Saftig gulrotkake med kremostglasur. Allergener: Melk, Egg, Hvete',
    image: 'gulrotkake.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 35,
  },
  {
    productId: 44,
    categoryIndex: 3,
    productName: 'Red Velvet kake',
    unitPrice: 450,
    description:
      'En elegant Red Velvet kake med kremostglasur. Allergener: Melk, Egg, Hvete',
    image: 'red_velvet.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 20,
  },
  {
    productId: 45,
    categoryIndex: 3,
    productName: 'Eplekake',
    unitPrice: 270,
    description:
      'En klassisk eplekake med kanel og sukker. Allergener: Hvete, Egg',
    image: 'eplekake.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 40,
  },
  {
    productId: 46,
    categoryIndex: 3,
    productName: 'Sitronkake',
    unitPrice: 310,
    description: 'Frisk sitronkake med glasur. Allergener: Egg, Hvete',
    image: 'sitronkake.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 25,
  },
  {
    productId: 47,
    categoryIndex: 3,
    productName: 'Marmorkake',
    unitPrice: 280,
    description:
      'En klassisk marmorkake med vanilje- og sjokoladesmak. Allergener: Melk, Egg, Hvete',
    image: 'marmorkake.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 30,
  },
  {
    productId: 48,
    categoryIndex: 3,
    productName: 'Cupcakes',
    unitPrice: 320,
    description:
      'Dekorative cupcakes med smørkrem. Allergener: Melk, Egg, Hvete',
    image: 'cupcakes.webp',
    preorderRequired: true,
    customizationAvailable: true,
    unitsInStock: 50,
  },
  {
    productId: 49,
    categoryIndex: 3,
    productName: 'Brownies',
    unitPrice: 350,
    description:
      'Seige brownies med sjokoladebiter. Allergener: Melk, Egg, Hvete',
    image: 'brownies.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 40,
  },
  {
    productId: 50,
    categoryIndex: 3,
    productName: 'Sjokolademousse',
    unitPrice: 310,
    description:
      'En luftig sjokolademousse servert i glass. Allergener: Melk, Egg',
    image: 'sjokolademousse.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 20,
  },
  {
    productId: 51,
    categoryIndex: 3,
    productName: 'Frukttærte',
    unitPrice: 370,
    description:
      'Sprø frukttærte med vaniljekrem og sesongens frukt. Allergener: Melk, Egg, Hvete',
    image: 'frukttaerte.webp',
    preorderRequired: false,
    customizationAvailable: false,
    unitsInStock: 30,
  },
  {
    productId: 52,
    categoryIndex: 3,
    productName: 'Makroner',
    unitPrice: 270,
    description: 'Franske makroner i ulike smaker. Allergener: Nøtter, Egg',
    image: 'makroner.webp',
    preorderRequired: true,
    customizationAvailable: true,
    unitsInStock: 100,
  },
  {
    productId: 53,
    categoryIndex: 3,
    productName: 'Tiramisu',
    unitPrice: 420,
    description:
      'Klassisk italiensk dessert med mascarpone og kaffe. Allergener: Melk, Egg, Hvete',
    image: 'tiramisu.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 15,
  },
  {
    productId: 54,
    categoryIndex: 3,
    productName: 'Pavlova',
    unitPrice: 300,
    description: 'Luftig pavlova med krem og frukt. Allergener: Melk, Egg',
    image: 'pavlova.webp',
    preorderRequired: false,
    customizationAvailable: true,
    unitsInStock: 20,
  },
  {
    productId: 55,
    categoryIndex: 3,
    productName: 'Sjokoladefondant',
    unitPrice: 450,
    description:
      'Varm sjokoladefondant med flytende kjerne. Allergener: Melk, Egg, Hvete',
    image: 'sjokoladefondant.webp',
    preorderRequired: true,
    customizationAvailable: false,
    unitsInStock: 10,
  },
];

// // function openTab(productsName) {
// //   let i;
// //   const x = document.getElementsByClassName('tab');
// //   for (i = 0; i < x.length; i++) {
// //     x[i].style.display = 'none';
// //   }
// //   document.getElementById(productsName).style.display = 'block';
// // }

// /*
// <div id="baguette" class="tab">
//   <h2 class="tab-button" onclick="openTab('baguette')">Baguette</h2>
//   <div>...</div>
// </div>

// <div id="snitter" class="tab" style="display:none">
//   <h2 class="tab-button" onclick="openTab('snitter')">Snitter</h2>
//   <div>....</div>
// </div>

// <div id="kaffe" class="tab" style="display:none">
//   <h2 class="tab-button" onclick="openTab('kaffe')">Kaffe</h2>
//   <div>.....</div>
// </div>

// */

saveProducts();
