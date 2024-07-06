function anagramChecker(string1, string2) {
  const stringFilter = (string) => {
    return string.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  };
  const anagram1 = stringFilter(string1);
  const anagram2 = stringFilter(string2);

  return anagram1 === anagram2
}
console.log(anagramChecker('Astronomer', 'Moon starer'))