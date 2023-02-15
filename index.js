"use strict";
function sentenceSplitter(sentence) {
    return sentence.replace(/[.]/g, '').split(' ');
}
let onesentence = "This is a sentence to be split.";
let oneWords = sentenceSplitter(onesentence);
console.log(oneWords);
function combineToSentence(...words) {
    return words.join(' ');
}
let words = ["This", "is", "a", "sentence", "created", "from", "an", "array."];
let sentence = combineToSentence(...words);
console.log(sentence);
