function getAnagrams(strs, queries) {
  const anagramMap = {};
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!anagramMap[sortedStr]) {
      anagramMap[sortedStr] = [];
    }
    anagramMap[sortedStr].push(str);
  }

  const result = [];
  for (const query of queries) {
    const sortedQuery = query.split("").sort().join("");
    if (anagramMap[sortedQuery]) {
      result.push(anagramMap[sortedQuery].sort().join(" "));
    } else {
      result.push("-1");
    }
  }
  return result;
}

const n = 6;
const strs = ["cat", "tea", "pet", "tac", "act", "eat"];
const q = 4;
const queries = ["cat", "tca", "eee", "tea"];

const result = getAnagrams(strs, queries);
console.log(result.join("\n"));