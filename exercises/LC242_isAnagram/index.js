function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sCharsCounts = {}; // { H: 1, E: 1, L: 2, O: 1 }
  const tCharsCounts = {}; // { H: 1, E: 1, L: 2, O: 1 }


  for (let i = 0; i < s.length; i++) {
    let sEndChar = s[i];
    let tEndChar = t[i];
    sCharsCounts[sEndChar] = sCharsCounts[sEndChar] + 1 || 1;
    tCharsCounts[tEndChar] = tCharsCounts[tEndChar] + 1 || 1;
  }

  return Object.keys(sCharsCounts).every((char, index) => {
    return sCharsCounts[char] === tCharsCounts[char];
  })


  // One solution
  // s = s.split('').sort().join();
  // t = t.split('').sort().join();
  // return t === s;


  // another solution
  // s = s.split('').sort();
  // t = t.split('').sort();
  // return s.length === t.length && s.every((sElement, index) => {
  //   return sElement === t[index];
  // })

  // One last solution
}

module.exports = isAnagram;
