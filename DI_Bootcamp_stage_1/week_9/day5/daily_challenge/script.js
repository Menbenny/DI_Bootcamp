function anagramChecker(word, anagram) {
    const word = word.toLowerCase();
    const anagram = anagram.toLowerCase();
  for (let i = 0; i < word.length; i++) {
      if (word.includes(' ')){
          continue
      }
  }  
  return word.localeCompare(anagram)
}
anagramChecker('astronomer', 'moon starer')