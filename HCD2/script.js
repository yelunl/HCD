let par = document.querySelector("p");
const buttonCopy = document.querySelector("#copy");
const buttonPaste = document.querySelector("#paste");
const textarea = document.querySelector("textarea");

let clicks = 0;

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
      popupDisappear(buttonCopy);
    } else if (clicks === 1) {
      if (e.target !== start) {
        end = e.target.nextElementSibling;
        getSelection();
        popupShow(e, buttonCopy);
        clicks++;
      } else {
        getSelection(1);
        popupShow(e, buttonCopy);
      }
    } else if (clicks === 2 && e.target.nextElementSibling === end) {
      getSelection();
      popupShow(e, buttonCopy);
    } else {
      start = "";
      end = "";
      clicks = 0;
      popupDisappear(buttonCopy);
    }
  });
});

const popupShow = (e, buttonType) => {
  buttonType.style.top = e.pageY + "px";
  buttonType.style.left = e.pageX + "px";
};

const popupDisappear = (buttonType) => {
  buttonType.style.top = -200 + "px";
  buttonType.style.left = -200 + "px";
};

document.addEventListener("click", (e) => {
  if (e.target.parentElement !== par && e.target !== textarea) {
    start = "";
    end = "";
    clicks = 0;
    popupDisappear(buttonCopy);
    popupDisappear(buttonPaste);
  }
});

document.addEventListener("mousemove", (e) => {
  e.preventDefault();
});

textarea.addEventListener("click", (e) => {
  popupShow(e, buttonPaste);
});

const getSelection = (endOffset = 0) => {
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
  } catch (err) {
    console.log(err);
  }
});

buttonPaste.addEventListener("click", async () => {
  try {
    let text = await navigator.clipboard.readText();
    text = text.replace(/\s+/g, " ");
    textarea.value = text;
  } catch (err) {}
});
