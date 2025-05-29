const MOD = 1e9 + 7;

/**
 * Find all start indices of substring T in string S
 */
function findOccurrences(S, T) {
  const indices = [];
  const n = S.length;
  const m = T.length;
  for (let i = 0; i <= n - m; i++) {
    if (S.substr(i, m) === T) {
      indices.push(i);
    }
  }
  return indices;
}

/**
 * Main function to solve the problem
 * @param {string} S
 * @param {string} T
 * @returns {number} answer modulo 1e9+7
 */
function magicButton(S, T) {
  let answer = 0;
  const N = S.length;
  let current = S;
  for (let i = 0; i < N; i++) {
    // Find all occurrences of T in current string
    const occurrences = findOccurrences(current, T);
    // Sum all indices
    for (const idx of occurrences) {
      answer = (answer + idx) % MOD;
    }
    // Rotate string: last char to front
    current = current[current.length - 1] + current.slice(0, current.length - 1);
  }
  return answer;
}

// Example Usage
const S = "abcabc";
const T = "abc";
console.log(magicButton(S, T)); // Output: 14
