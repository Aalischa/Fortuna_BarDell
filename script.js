
const messages = {
  ru: {
    title: "Фортуна в рюмке",
    subtitle: "Нажми кнопку и узнай, что ждёт тебя сегодня...",
    button: "Налить!",
    toasts: [
      "Жизнь — как ром: чем старше, тем крепче!",
      "Пей красиво. Живи дерзко. Люби с перцем!",
      "За тех, кто не успел, но всё равно пришёл!"
    ],
    tips: [
      "Если не знаешь, что заказать — возьми Bar Dell Martini.",
      "Не отвечай на сообщения бывших после второго коктейля.",
      "Не бойся быть собой. Бойся остаться без Mai Tai!"
    ],
    bonuses: [
      "10% скидка на сегодняшний счёт! Покажи это бармену.",
      "Бесплатный шот: Snake Tears или Green Mexican.",
      "Коктейль дня за полцены — спроси бармена!"
    ]
  },
  en: {
    title: "Fortune in a Shot",
    subtitle: "Press the button and discover your fate...",
    button: "Pour it!",
    toasts: [
      "Life is like rum: the older, the better!",
      "Drink classy. Live bold. Love spicy!",
      "To those who arrived late — but still made it!"
    ],
    tips: [
      "If unsure — order a Bar Dell Martini.",
      "Never reply to your ex after cocktail #2.",
      "Don't be afraid to be yourself. Fear missing a Mai Tai!"
    ],
    bonuses: [
      "10% off today’s bill! Show this to the bartender.",
      "Free shot: Snake Tears or Green Mexican.",
      "Today’s cocktail is half price — ask the bartender!"
    ]
  },
  de: {
    title: "Fortune im Shotglas",
    subtitle: "Drück den Knopf und erfahre dein Schicksal...",
    button: "Einschenken!",
    toasts: [
      "Das Leben ist wie Rum – je älter, desto besser!",
      "Trink stilvoll. Lebe wild. Liebe scharf!",
      "Auf die, die zu spät kamen – aber trotzdem erschienen!"
    ],
    tips: [
      "Wenn du unsicher bist – bestell ein Bar Dell Martini.",
      "Antworte nie nach dem zweiten Cocktail deinem Ex.",
      "Hab keine Angst du selbst zu sein – hab Angst vor einem Leben ohne Mai Tai!"
    ],
    bonuses: [
      "10 % Rabatt auf deine heutige Rechnung! Zeig es dem Barkeeper.",
      "Gratis Shot: Snake Tears oder Green Mexican.",
      "Heutiger Cocktail zum halben Preis – frag einfach nach!"
    ]
  }
};

let currentLang = 'ru';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelector('[data-i18n="title"]').innerText = messages[lang].title;
  document.querySelector('[data-i18n="subtitle"]').innerText = messages[lang].subtitle;
  document.querySelector('[data-i18n="button"]').innerText = messages[lang].button;
}

function showFortune() {
  const roll = Math.random();
  let messageSet;

  if (roll < 0.6) {
    messageSet = messages[currentLang].toasts;
  } else if (roll < 0.85) {
    messageSet = messages[currentLang].tips;
  } else {
    messageSet = messages[currentLang].bonuses;
  }

  const result = messageSet[Math.floor(Math.random() * messageSet.length)];
  document.getElementById("result").innerText = result;
}

// Try to set language from browser
const lang = navigator.language.slice(0, 2);
if (messages[lang]) setLanguage(lang);
