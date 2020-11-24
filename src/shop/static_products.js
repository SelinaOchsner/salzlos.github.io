const _products = [
  {
    id: 0,
    name: 'Kussmund Kette',
    description:
      'Die Kussmund Kette verführt dich mit ihrer sanften Art. Der Anhänger hängt an: Der gröberen 50 cm Kette. 925er Silber.',
    price: 175,
    imageUrl: '/img/Shop1Kussmundkette.jpg',
    inventory: 1,
  },
  {
    id: 1,
    name: 'Leiter Kette',
    description:
      'Die Leiter Kette bewegt sich fein an deinem Hals. Der Anhänger hängt an: Der feinen 42 cm Kette. 925er Silber.',
    price: 125,
    imageUrl: '/img/SALZLOS19LeiterketteKampagne.jpg',
    inventory: 1,
  },
  {
    id: 2,
    name: 'Wein Kette',
    description:
      'Das Weinglas bleibt nett an deiner Seite und schwingt mit dir durchs Leben. Der Anhänger hängt an: Der feinen 42 cm Kette. 925er Silber.',
    price: 105,
    imageUrl: '/img/SALZLOS21WeinketteKampagne.jpg',
    inventory: 1,
  },
  {
    id: 3,
    name: 'Männchen Leiter Kette',
    description:
      'Männchen und Leiter überklimmen jedes Hindernis. Die Anhänger hängen an: Der groben 50 cm Kette. 925er Silber.',
    price: 175,
    imageUrl: '/img/Shop4Maennchenleiterkette.foto.jpg',
    inventory: 1,
  },
  {
    id: 4,
    name: 'Die 7 Kette',
    description:
      'Die 7 Kette ist dein Glücksbringer in jeder Zeit. Der Anhänger hängt an: Der gröberen 50 cm Kette. 925er Silber.',
    price: 145,
    imageUrl: '/img/SALZLOS24-7kette.jpg',
    inventory: 1,
  },
  {
    id: 5,
    name: 'Männchen Kette',
    description:
      'Das Männchen ein Ebenbild deines Selbst, stets ein treuer Begleiter. Der Anhänger hängt an: Der gröberen 50 cm Kette. 925er Silber.',
    price: 145,
    imageUrl: '/img/Shop6Maennchenkette.jpg',
    inventory: 1,
  },
  {
    id: 6,
    name: 'Wolke 7 Kette',
    description:
      'Der Wolke 7 Schriftzug erinnert dich jeder Zeit an deinen freien Geist. Der Anhänger hängt an: Der feinen 42 cm Kette. 925er Silber.',
    price: 125,
    imageUrl: '/img/SALZLOS23Wolke7kette.jpg',
    inventory: 1,
  },
  {
    id: 7,
    name: 'Die Wein Hänger',
    description:
      'Die Wein Hänger ziehen mit dir um jedes Haus. Sie hängen an: Der kleinen runden handgelöteten Ösenkette. 925er Silber.',
    price: 190,
    imageUrl: '/img/Shop7Weinhaenger1.jpg',
    inventory: 1,
  },
  {
    id: 8,
    name: 'Richtung Wolke 7 Hänger',
    description:
      'Die Richtung Wolke 7 Hänger lassen Raum für Fantasie. Sie hängen direkt an einer Öse. 925er Silber.',
    price: 125,
    imageUrl: '/img/Shop8Richtungwolke7haenger.jpg',
    inventory: 1,
  },
  {
    id: 9,
    name: 'Natur Hänger',
    description:
      'Die Natur Hänger komplementieren jeden Tag wie den anderen. Sie hängen für sich selbst. Mit einer Variation aus Achat-, Opal- und Türkisperlen. 925er Silber.',
    price: 145,
    imageUrl: '/img/Shop17Naturhaenger.jpg',
    inventory: 1,
  },
  {
    id: 10,
    name: 'Natur Hoops',
    description:
      'Die Naturhoops sind klassisch neu arrangiert, ein echter Alltimer. Sie messen ca. 17 cm diagonal. 925er Silber.',
    price: 125,
    imageUrl: '/img/Shop10Naturhoops.jpg',
    inventory: 1,
  },
  {
    id: 11,
    name: 'Natur Kette',
    description:
      'Die Natur Kette verfeinert dein Dekoltee mit schlichter Eleganz. Sie besteht aus den länglichen handgelöteten Ösen und einer Variation aus Achat-, Opal- und Türkisperlen. Schließen lässt sie sich durch einen S-Haken. 925er Silber.',
    price: 245,
    imageUrl: '/img/SALZLOS26Naturkette.jpg',
    inventory: 1,
  },
  {
    id: 12,
    name: 'Natur Armband',
    description:
      'Das Natur Armband erscheint nett neben deiner Hand. Es besteht aus den länglichen Ösen und einer Variation aus Achat-, Opal- und Türkisperlen. Schließen lässt es sich durch einen S-Haken. 925er Silber.',
    price: 175,
    imageUrl: '/img/SALZLOS20NaturarmbandKampagne.jpg',
    inventory: 1,
  },
  {
    id: 13,
    name: 'Vereint Armband',
    description:
      'Das Vereint Armband schmeichelt uns allen, wie wir zusammen stehen in all unseren Farben und Formen. Hier hängen vier unserer lieben Anhänger sowie eine Variation aus Achat-, Opal- und Türkisperlen. 925er Silber.',
    price: 375,
    imageUrl: '/img/SALZLOS18VereintarmbandKampagne.jpg',
    inventory: 1,
  },
  {
    id: 14,
    name: 'Vereint Kette',
    description:
      'Die Vereint Kette ist die Symbiose aus allem was du erschaffst. Hier hängen fünf der süßen Anhänger und eine Variation aus Achat-, Opal- und Türkisperlen. 925er Silber.',
    price: 593,
    imageUrl: '/img/SALZLOS17VereintketteKampagne.jpg',
    inventory: 1,
  },
  {
    id: 15,
    name: 'Ringe',
    description:
      'Drei simple Vierkantringe als Set. Ein angenehmer Begleiter in jeder Komposition. 925er Silber.',
    price: 65,
    imageUrl: '/img/SALZLOS25Ringe.jpg',
    inventory: 1,
  },
  {
    id: 16,
    name: '7 Hoops',
    description:
      'Die 7 Hoops sind leicht und erregen Aufmerksamkeit zu gleich. 925er Silber mit einer Variation an Opal-, Achat- und Türkisperlen.',
    price:195,
    imageUrl: '/img/7-Hoops.jpg',
    inventory: 1,
  },
  {
    id: 17,
    name: 'Drei Männchen Hänger',
    description:
      'Die Drei Männchen Hänger sind eine Reihung des Männchens und ergeben ein Ornament, welches jedes Ohr noch interessanter macht. 925er Silber. Vergoldet auf Anfrage.',
    price: 245,
    imageUrl: '/img/Shop19Dreimaennchenhaenger.jpg',
    inventory: 1,
  },
  {
    id: 18,
    name: 'Drei Männchen Kette',
    description:
      'Die Drei Männchen Kette ziert vertikal das Dekolleté. Auch hier ein wunderbares Ornament an einer leichten Kette. 925er Silber.',
    price: 195,
    imageUrl: '/img/Shop18Dreimaennchenkette.jpg',
    inventory: 1,
  },
  {
    id: 19,
    name: 'Voll Wolke 7 Kette',
    description:
      'Die Voll Wolke 7 Kette ist eine Reihung unseres Wolke 7 Schriftzuges. Durch ihre Form erregt sie zurückhaltende Aufmerksamkeit. 925er Silber..',
    price: 255,
    imageUrl: '/img/Shop20Vollwolke7kette.jpg',
    inventory: 1,
  },
  {
    id: 20,
    name: 'Kussmund Ring',
    description:
      'Der Kussmund Ring trägt sich nett an deinem Finger. Er wird verziert von einer Variation aus Opal-, Achat- und Türkisperlen. 925er Silber.',
    price: 185,
    imageUrl: '/img/Shop25Kussmundring.jpg',
    inventory: 1,
  },
  {
    id: 21,
    name: 'Simpel Armband vergoldet',
    description:
      'Das vergoldete Simpel Armband ist ein souveräner Hingucker. Klassisch und modern zugleich. Durch den gehämmerten S-Haken in Länge verstellbar. Im Kern Silber 925er, außen Gelbgold plattiert.',
    price: 225,
    imageUrl: '/img/Shop24vergoldetSimpelarmband.jpg',
    inventory: 1,
  },
  {
    id: 22,
    name: 'Wein Hänger vergoldet',
    description:
      'Die Wein Hänger und nun auch noch vergoldet. Für jeden der grundsätzlich goldfarbend trägt ein Muss. Silber 925er Kern, außen Gelbgold plattiert.',
    price: 225,
    imageUrl: '/img/Shop23vergoldetWeinhaenger.jpg',
    inventory: 1,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products));
  },
};
