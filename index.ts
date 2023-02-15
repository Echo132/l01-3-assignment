function sentenceSplitter(sentence: string): string[] {
    return sentence.replace(/[.]/g, '').split(' ');
  }
  
    let onesentence = "This is a sentence to be split.";
  
    let oneWords = sentenceSplitter(onesentence);
  
    console.log(oneWords);

    function combineToSentence(...words: string[]): string {
        return words.join(' ');
  }