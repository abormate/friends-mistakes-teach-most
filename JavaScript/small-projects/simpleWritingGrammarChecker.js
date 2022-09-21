/*
Now that we’ve removed the unnecessary words, let’s take care of any misspelled words in the story. We can reassign storyWords to a new array of spell-checked words using the .map() method!

Reassign storyWords to equal the invocation of the .map() method on the storyWords array.

Setword as a parameter of .map()‘s callback function.

In the callback’s body, define a conditional statement to check if the word argument is equal to the misspelledWord variable. If it is, return the correct spelling of the string, “beautiful”. If not, return word.

Take a look at the story string in the console to see the correct spellings! You can see one instance of the spellchecked word in the first sentence of the story.
*/

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
// console.log(storyWords);

let count = 0;
storyWords.forEach((word) => {
  count++;
});
console.log(count);

storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return word = 'beautiful' }
  else {
    return word
  }
});

console.log(storyWords.join(' '));
