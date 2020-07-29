const _products = [
  {
    id: 0,
    name: 'Kussmund Kette',
    description:
      'Die Kussmund Kette verführt uns mit ihrer Kraft. Er hängt an: Der gröberen 50 cm Kette. 925er Silber.',
    price: 175,
    imageUrl: '/img/SALZLOS1Kussmundkette.jpg',
    inventory: 1,
  },
  {
    id: 1,
    name: 'Leiter Kette',
    description:
      'Die Leiter Kette schwingt fein an deinem Hals. Sie hängt an: Der feinen 42 cm Kette. 925er Silber.',
    price: 125,
    imageUrl: '/img/SALZLOS19LeiterketteKampagne.jpg',
    inventory: 1,
  },
  {
    id: 2,
    name: 'Wein Kette',
    description:
      'Das Weinglas bleibt nett an deiner Seite und schwingt mit dir durchs Leben. Es hängt an: Der feinen 42 cm Kette. 925er Silber.',
    price: 105,
    imageUrl: '/img/SALZLOS21WeinketteKampagne.jpg',
    inventory: 1,
  },
  {
    id: 3,
    name: 'Männchen Leiter Kette',
    description:
      'Männchen und Leiter überklimmen jedes Hindernis. Sie hängt an: Der groben 50 cm Kette. 925er Silber.',
    price: 190,
    imageUrl: '/img/SALZLOS4Maennchen-Leiterkette.jpg',
    inventory: 1,
  },
  {
    id: 4,
    name: 'Die 7 Kette',
    description:
      'Die 7 Kette ist unserer Glücksbringer in jeder Zeit. Sie hängt an: Der gröberen 50 cm Kette. 925er Silber.',
    price: 145,
    imageUrl: '/img/SALZLOS24-7kette.jpg',
    inventory: 1,
  },
  {
    id: 5,
    name: 'Männchen Kette',
    description:
      'Das Männchen ein Ebenbild unserer Selbst, stets ein treuer Begleiter. Es hängt an: Der gröberen 50 cm Kette. 925er Silber.',
    price: 175,
    imageUrl: '/img/SALZLOS6Maennchenkette.jpg',
    inventory: 1,
  },
  {
    id: 6,
    name: 'Wolke 7 Kette',
    description:
      'Der Wolke 7 Schriftzug erinnert uns jeder Zeit an unseren freien Geist. Er hängt an: Der feinen 42 cm Kette. 925er Silber.',
    price: 145,
    imageUrl: '/img/SALZLOS23Wolke7kette.jpg',
    inventory: 1,
  },
  {
    id: 7,
    name: 'Die Wein Hänger',
    description:
      'Die Wein Hänger ziehen mit uns um jedes Haus. Sie hängen an: Der kleinen runden Ösenkette. 925er Silber.',
    price: 290,
    imageUrl: '/img/Shop7Weinhaenger1.jpg',
    inventory: 1,
  },
  {
    id: 8,
    name: 'Richtung Wolke 7 Hänger',
    description:
      'Die Richtung Wolke 7 Hänger lassen Raum für Fantasie. Sie hängen direkt an einer Öse. 925er Silber.',
    price: 175,
    imageUrl: '/img/Shop8Richtungwolke7haenger.jpg',
    inventory: 1,
  },
  {
    id: 9,
    name: 'Natur Hänger',
    description:
      'Die Natur Hänger komplementieren jeden Tag wie den anderen. Sie hängen für sich selbst. Mit einer Variation aus Achat-, Opal- und Türkisperlen. 925er Silber.',
    price: 230,
    imageUrl: '/img/Shop17Naturhaenger.jpg',
    inventory: 1,
  },
  {
    id: 10,
    name: 'Natur Hoops',
    description:
      'Die Naturhoops sind klassisch neu arrangiert, ein echter Alltimer. Sie messen ca. 17 cm diagonal. 925er Silber.',
    price: 150,
    imageUrl: '/img/Shop10Naturhoops.jpg',
    inventory: 1,
  },
  {
    id: 11,
    name: 'Natur Kette',
    description:
      'Die Natur Kette verfeinert jedes Dekoltee mit schlichter Eleganz. Sie besteht aus den länglichen Ösen und einer Variation aus Achat-, Opal- und Türkisperlen. Schließen lässt sie sich durch einen S-Haken. 925er Silber.',
    price: 325,
    imageUrl: '/img/SALZLOS26Naturkette.jpg',
    inventory: 1,
  },
  {
    id: 12,
    name: 'Natur Armband',
    description:
      'Das Natur Armband erscheint nett neben unserer Hand. Es besteht aus den länglichen Ösen und einer Variation aus Achat-, Opal- und Türkisperlen. Schließen lässt es sich durch einen S-Haken. 925er Silber.',
    price: 205,
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
      'Die Vereint Kette ist die Symbiose aus allem was wir erschaffen. Hier hängen fünf unserer geliebten Anhänger und eine Variation aus Achat-, Opal- und Türkisperlen. 925er Silber.',
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
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products));
  },
};
