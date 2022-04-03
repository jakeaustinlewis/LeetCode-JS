function isPalindrome(s) {
  // Sanitize input by removing non alpanumeric characters and lowercasing it.
  s = s.toLowerCase().replace(/[\W_]/g, '');

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;

  // Create a left and right pointer, initially at start and end of input string.
  // While Left less than Right
  // characters at left and right pointer are not equal, return false
  // return true
}
isPalindrome('love');

module.exports = isPalindrome;
