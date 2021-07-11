const cards = [
  [
    'actionA',
    'actionB',
    'body',
    'space',
    'animalA',
    'animalB',
    'clothes',
    'emotions',
  ],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/action_a/cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/action_a/dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/action_a/dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/action_a/draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/action_a/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/action_a/fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/action_a/hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/action_a/jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'img/action_b/open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'img/action_b/play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'img/action_b/point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'img/action_b/ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'img/action_b/run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'img/action_b/sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'img/action_b/skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'img/action_b/swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'mouth',
      translation: 'рот',
      image: 'img/body/mouth.jpg',
      audioSrc: 'audio/mouth.mp3',
    },
    {
      word: 'nose',
      translation: 'нос',
      image: 'img/body/nose.jpg',
      audioSrc: 'audio/nose.mp3',
    },
    {
      word: 'eyes',
      translation: 'глаза',
      image: 'img/body/eyes.jpg',
      audioSrc: 'audio/eyes.mp3',
    },
    {
      word: 'ears',
      translation: 'уши',
      image: 'img/body/ears.jpg',
      audioSrc: 'audio/ears.mp3',
    },
    {
      word: 'hair',
      translation: 'волосы',
      image: 'img/body/hair.jpg',
      audioSrc: 'audio/hair.mp3',
    },
    {
      word: 'arms',
      translation: 'руки',
      image: 'img/body/arms.jpg',
      audioSrc: 'audio/arms.mp3',
    },
    {
      word: 'legs',
      translation: 'ноги',
      image: 'img/body/legs.jpg',
      audioSrc: 'audio/legs.mp3',
    },
    {
      word: 'back',
      translation: 'спина',
      image: 'img/body/back.jpg',
      audioSrc: 'audio/back.mp3',
    },
  ],

  [
    {
      word: 'sun',
      translation: 'солнце',
      image: 'img/space/sun.jpg',
      audioSrc: 'audio/sun.mp3',
    },
    {
      word: 'earth',
      translation: 'планета земля',
      image: 'img/space/earth.jpg',
      audioSrc: 'audio/earth.mp3',
    },
    {
      word: 'stars',
      translation: 'звезды',
      image: 'img/space/stars.jpg',
      audioSrc: 'audio/stars.mp3',
    },
    {
      word: 'planets',
      translation: 'планеты',
      image: 'img/space/solar.jpg',
      audioSrc: 'audio/planets.mp3',
    },
    {
      word: 'moon',
      translation: 'луна',
      image: 'img/space/moon.jpg',
      audioSrc: 'audio/moon.mp3',
    },
    {
      word: 'rocket',
      translation: 'ракета',
      image: 'img/space/rocket.jpg',
      audioSrc: 'audio/rocket.mp3',
    },
    {
      word: 'spaceman',
      translation: 'космонавт',
      image: 'img/space/spaceman.jpg',
      audioSrc: 'audio/spaceman.mp3',
    },
    {
      word: 'satellite',
      translation: 'спутник',
      image: 'img/space/satellite.jpg',
      audioSrc: 'audio/satellite.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'img/animal_a/cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'img/animal_a/chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'img/animal_a/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'img/animal_a/dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'img/animal_a/horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'img/animal_a/pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'img/animal_a/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'img/animal_a/sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'img/animal_b/bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'img/animal_b/fish1.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'img/animal_b/frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жираф',
      image: 'img/animal_b/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'img/animal_b/lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'img/animal_b/mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'img/animal_b/turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'img/animal_b/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'img/clothes/skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'img/clothes/pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/clothes/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/clothes/dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/clothes/boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/clothes/shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'img/clothes/coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'img/clothes/shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'img/emotion/sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'img/emotion/angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'img/emotion/happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'img/emotion/tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'img/emotion/surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'img/emotion/scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'img/emotion/smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'img/emotion/laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
];
export default cards;
