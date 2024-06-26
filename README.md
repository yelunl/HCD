# HCD

## Week 1
This project we will create a exclusive website for someone with a disability. In my case i was in team Nicolette. She is someone in a wheelchair with motor disability. She can barely use her fingers, which is why she navigates the web with a drawing tablet and speech software. During this project we have to create a website exclusively for Nicolette and help her use the web thinking of all the exclusive design principles: study situation, ignore conventions, prioritize identity, add nonsense. 

This week we heard in what team we were in. I was in the team Nicolette. Together with the rest of the team we started to brainstorm some interview questioned. I did some research on who Nicolette is and research her current ways on using the web. She uses speech recognition software and a drawing tablet no navigate on the web. I experimented around with these for a bit. It was a bit hard to learn the one about speech software.

It was very hard to come up with a concept the first day, because we didn't have an interview yet. 

The interview happened and it went well. We had a better picture on what her problems are and how she currently uses the web. Few important insights about the interview:
- Using one click to navigate the web is preferred.
- one keyboard press can be allowed. But not 2 or more.
- No keep pressing buttons
- make clicking area big
- typing in fields goes through speech software
- selecting text is very hard. Sometimes she selects too much or too little.
- dragging and item to a map goes well
- do not use a hover menu. They are too fast
- She should be able to find her content as fast and easy as possible. 

A few ideas i can come up with are an easier way to select and copy text. Using max of 1 click. I can make a website about nature and make it as easy as possible to navigate through. using big buttons. focussing on content.

## Week 2
I made my first prototype where you can select text with max 2 clicks. Then you get a popup where you can copy the text. After copying you can go to a textarea when clicking on it you get another popup that says paste. Then you have successfully selected, copy and pasted text. This will be tested with Nicolette. 

### The test
The test went well. There are many insight about this test. 
- Text overall with a bit small.
- Copying was really hard. Mostly because the copying start from each character. Sometimes when she used the tablet she would click twice on the same character which would be registered and cause the select to happen on that area. When clicking a different section with a 3rd click it won't work. It caused a bit of confusion.
- There was no feedback given when she selected text. So she clicked the copy button a few times because she wasn't sure if it was selected or not.
- There was a bit of scrolling needed. She couldn't do that with the pen. She said she has a hard time scrolling in general.

Things to do next:
- add more feedback when clicked on a button
- make selections based on words instead of characters
- no scrolling

Extra things
- Make scrolling possible with a click

## Week 3
I made new adjustments to the prototype based on the feedback of last week. 
1. Selections only happens on whole words instead of characters.
2. When the user clicks 2 times on the same word, nothing happens to the selection. You can still copy.
3. I added a hover effect for each word. And when clicked it highlights that specific word.

I changed a lot about my code in Javascript. It was harder than i thought. I had to go through every word in paragraph element and gave it a span element to make the hover effect work. selecting had to changed too so it would select the whole word with one click instead of characters. Had to create a little flowchart to better visualize on what i have to do. 

### The test
The selecting text still didn't work. I couldn't tell why it didn't work, testing it with the trackpad it would work perfectly. But during the test it didn't work with the tablet. Mostly selecting the second word, the entire selection would stop. I plan to thoroughly test my prototype with a tablet this week. The problem might just be the tablet settings. Or it might be dragging accidentally on a word that might cause it. Also i want to add a scroll option. But the selecting itself was clear for her.

## Week 4
So i have added an option to scroll and deleted and reinstalled the driver in hopes this might solve the problem with selecting. On top of it, after the feedback session i also added sound as additional feedback after each click. Also added buttons to make text on the screen bigger and smaller, i already made the overall font-size bigger before but maybe she would like a way to customize it herself. The feedback when someone hovers over the text i changed it a bit. When you hover over the text it gives a border, when clicking on a word it fills the background of that word. This might give a better indication if a word has been selected or not. This will be tested.

### The test
The test went very well. Selecting text went very smooth. She was happy with the way it worked. She was only a bit confused when asked to find the copy button. She couldn't find it. She prefers it if the buttons stay at one place so she can find it better. The sound as feedback she liked.

To make this prototype even better after the last test i put the copy and paste button underneath the input element without making it disappear or popup at different places. When one clicks on the buttons i also gave it a little feedback by changing the text within from 'kopieer' to 'gekopieerd' and 'plakken' and 'geplakt'. If there was another test, i would have tried to find out if this feedback would be clear for her or if she needs overall more things from this prototype.

## Exclusive design principles
### study situation
In week one we had done our interview to get a better understanding of Nicolette's situation. And how she currently uses the web and her struggles with it. This we have documented in our documentation. There are a few requirements i had documented in week one. Those are things i have to keep in mind all the time while creating my prototypes.

### Ignore conventions
The conventional way selecting (dragging) doesn't work for Nicolette with a tablet. Neither does copy paste with keyboard. So these are things that have to be ignored and have to think of other unique ways of still doing these things using a tablet.

### Prioritize identity
Nicolette uses a tablet to navigate the web and also uses a speech software installed on her laptop. Since this is her way of using the web, i want to prioritize using these tools that she is familiar with.

### Add nonsense
This was the hardest thing to come up with. I haven't add a lot of nonsense mostly because it's very hard to think of something when it comes to selecting text. Don't want to make it too confusing either by adding too many things especially not on text since clicking and aiming for a word that she wants can be a little troubling. But i did add sound as feedback whenever she clicked on a word or a button. This way it would be a little in the background and not be distracting while selecting text.