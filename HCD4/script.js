let par = document.querySelector("p");
const buttonCopy = document.querySelector("#copy");
const buttonPaste = document.querySelector("#paste");
const buttonUp = document.querySelector("#up");
const buttonDown = document.querySelector("#down");

const textarea = document.querySelector("textarea");

let clicks = 0;

const audio = new Audio("./audio/Purr.mp3");
const audio2 = new Audio("./audio/Glass.mp3");

// clean data
const parTrimmed = par.innerHTML.replace(/\s+/g, " ").trim();
const parToArr = parTrimmed.split(" ");

// gives each word in par a span element
par.innerHTML = parToArr
  .map((item) => {
    return "<span> " + item + " </span>";
  })
  .join(" ");

const spansEl = document.querySelectorAll("span");

let start;
let end;
let selectedString;

spansEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (clicks === 0) {
      start = e.target;
      end = e.target;
      clicks++;
      getSelection(1);
    } else if (clicks === 1) {
      if (e.target !== start) {
        end = e.target.nextElementSibling;
        getSelection();
        clicks++;
      } else {
        getSelection(1);
      }
    } else if (clicks === 2 && e.target.nextElementSibling === end) {
      getSelection();
    } else {
      start = "";
      end = "";
      clicks = 0;
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    e.target.parentElement !== par &&
    e.target !== textarea &&
    e.target !== buttonUp &&
    e.target !== buttonDown
  ) {
    start = "";
    end = "";
    clicks = 0;
  }
});

document.addEventListener("mousemove", (e) => {
  e.preventDefault();
});

const getSelection = (endOffset = 0) => {
  audio.play();
  const range = new Range();

  range.setStart(start, 0);
  range.setEnd(end, endOffset);

  document.getSelection().removeAllRanges();
  document.getSelection().addRange(range);

  selectedString = range.toString();
};

buttonCopy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(selectedString);
    console.log("Content copied to clipboard");
    audio2.play();
  } catch (err) {
    console.log(err);
  }
});

buttonPaste.addEventListener("click", async () => {
  try {
    let text = await navigator.clipboard.readText();
    text = text.replace(/\s+/g, " ");
    textarea.value = text;
    audio2.play();
  } catch (err) {}
});

// ////////////////// //
// Scroll up and down //
// ////////////////// //
buttonUp.addEventListener("click", () => {
  window.scrollBy(0, -100);
});

buttonDown.addEventListener("click", () => {
  window.scrollBy(0, 100);
});

// ////////////////// //
// changing font size //
// ////////////////// //
const htmlElement = document.documentElement;

// Selecting the buttons
const decreaseFont = document.getElementById("littleFont");
const increaseFont = document.getElementById("bigFont");
const changeFontSizeButtons = document.querySelectorAll(
  "#changeFontSize button"
);

// Initial font size
let fontSize = 16;

const changeFontSize = (amount) => {
  fontSize += amount;
  document.documentElement.style.fontSize = fontSize + "px";
};

changeFontSizeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const amount = e.target === decreaseFont ? -2 : +2;
    changeFontSize(amount);
  });
});
