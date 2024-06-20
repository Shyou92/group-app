const moments = [
  {
    img: "./images/pic-1.png",
    text: "Hi, guys! You know who am I. So I wouldn't be a developer if I didn't create a presentation as small website",
  },
  {
    img: "./images/outcomes.png",
    text: "This year we have had a new book to start and I definitely liked its topics and how did we discuss them",
  },
  {
    img: "./images/unusual.png",
    text: "What did we have interesting or unusual this year?",
  },
  {
    img: "./images/book-magic.png",
    text: "Lot's of unusual stories during our reading classes",
  },
  {
    img: "./images/melting-brain.png",
    text: "Melting brain of Timofey at the end of the lessons",
  },
  {
    img: "./images/math-genius.png",
    text: "Math genius who decided to pass exam not for 100 mark",
  },
  {
    img: "./images/riddle.png",
    text: "Mr Riddle?",
  },
  {
    img: "./images/prove.gif",
    text: "In every unknown situation just say: 'Give me a proof!'",
  },
  {
    img: "./images/me.png",
    text: "Me, who constantly asks what is adjective or adverb (still don't remember, sorry 🥲)",
  },
  {
    img: "./images/class.png",
    text: "Our perfect last classes of a half of a year when we gather together and have perfect conversations",
  },
  {
    img: "./images/memory.png",
    text: "And what do you have to remember?",
  },
];

function renderList(moments) {
  const container = document.createElement("div");
  container.classList.add("container");
  function makeElem(arrItem) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const { img, text } = arrItem;
    if (slide) {
      slide.innerHTML = `<img class='image' src="${img}" alt="${text}"/> <h2 class='subtitle'>${text}</h2>`;
    }

    return slide;
  }

  moments.map((item) => {
    try {
      const listElement = makeElem(item);
      return container.append(listElement);
    } catch (Error) {
      console.log(Error);
    }
  });
  console.log(container);
  document.body.append(container);
}

renderList(moments);
