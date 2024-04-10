const par = document.querySelector("p");
const buttonCopyContainer = document.querySelector("body > div:nth-of-type(1) > div");
const buttonCopy = document.querySelector("#copyButton");
const buttonPasteContainer = document.querySelector("body > div:nth-of-type(2) > div");
const buttonPaste = document.querySelector("#pasteButton");
const textarea = document.querySelector('textarea');

let clicks = 0;
let start;
let end;

par.addEventListener("click", (e) => {
  const rangeCoord = document.caretRangeFromPoint(e.clientX, e.clientY);
  console.log(rangeCoord);

  if (clicks === 0) {
    start = rangeCoord.startOffset; // 41
    clicks++;
    console.log("click is 0, startOffset: " + start);
    console.log("click is 0, clicks: " + clicks);
  } else if (clicks === 1) {
    end = rangeCoord.endOffset; //48

    console.log("click is 1, startOffset: " + start);
    console.log("click is 1, endOffset: " + end);
    
    console.log(e.clientY)

    buttonCopyContainer.style.top = e.pageY + 'px';
    buttonCopyContainer.style.left = e.pageX + 'px';

    console.log("click is 1, clicks: " + clicks);
    // console.log(e.target.firstChild);

    getRange(e.target.firstChild, start, end);

    start = 0;
    end = 0;
    clicks = 0;
  }
});

// clicking outside of par and button, make button disappear
document.addEventListener('click', (e) => {
    if(e.target !== par && e.target !== buttonCopy && e.target !== buttonPaste) {
        buttonCopy.style.display = 'none';
        buttonPaste.style.display = 'none';

    }
})

document.addEventListener('click', (e) => {
    if(e.target === textarea) {
    buttonPaste.style.display = 'block';
    buttonPasteContainer.style.top = e.pageY+ 'px';
    buttonPasteContainer.style.left = e.pageX + 'px';
    }
    
})

// let range = new Range();
let selectedString = '';

const getRange = (element, startOffset, endOffset) => {
//   console.log(element);
  console.log(startOffset);
  console.log(endOffset);
  const range = new Range();

  range.setStart(element, startOffset);
  range.setEnd(element, endOffset);

  selectedString = range.toString();

  makeSelection(range);
};

const makeSelection = (range) => {
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(range);

  console.log(document.getSelection());

  buttonCopy.style.display = 'block';
};

buttonCopy.addEventListener("click", async () => {
  try {
    console.log(selectedString);
    await navigator.clipboard.writeText(selectedString);
    console.log("Content copied to clipboard");

  } catch (err) {
    console.log(err);
  }
});

buttonPaste.addEventListener('click', async () => {
    try {
        let text = await navigator.clipboard.readText();
        text = text.replace(/\s+/g,' ');
        console.log(text)
        textarea.value = text
    } catch (err) {

    }
})

// const test = (start, end) => {

//     const range = new Range();
//     console.log(start)
//     console.log(end)
//     range.setStart(par.firstChild, start)
//     range.setEnd(par.firstChild, end)

//     console.log(range)

//     document.getSelection().removeAllRanges();
//     document.getSelection().addRange(range);

//     console.log(document.getSelection())
// }

// test();
