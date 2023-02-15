function sentenceSplitter(sentence: string): string[] {
    return sentence.replace(/[.]/g, '').split(' ');
  }
  
    let onesentence = "This is a sentence to be split.";
  
    let oneWords = sentenceSplitter(onesentence);
  
    console.log(oneWords);

    function combineToSentence(...words: string[]): string {
        return words.join(' ');
  }
  
    let words = ["This", "is", "a", "sentence", "created", "from", "an", "array."];
  
    let sentence = combineToSentence(...words);
  
    console.log(sentence);