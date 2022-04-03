// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"


// Create an empty hashMap (key/val -> character/index)
// Create start and max variable, set both with initial values of zero

// Loop thru input string
//  If current Character in hashmap & has index >= start
//    Set start to index for character found in hasmap + 1
// Set key/value pair on hashmap to be current character/current index
// if length of current window is greater than max
//  Set max to length of current window


function lengthOfLongestSubstring(s) {
  let windowCharsMap = {}; // map letters as keys to its index
  let windowStart = 0;
  let maxLength = 0;

  // windowCharsMap = {
  //   a = 5,
  //   b = 0,
  //   c = 2
  // }

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }

    // reassign key to new value (index)
    windowCharsMap[endChar] = i;

    if (maxLength < i - windowStart + 1) {
      maxLength = i - windowStart + 1;
    }
  }
  return maxLength;
}

module.exports = lengthOfLongestSubstring;
