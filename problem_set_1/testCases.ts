export const testCases = [
    // Basic case
    ['bat', 'tab', 'cat'],
    // Words of different length that form a palindrome
    ['racecar', 'level', 'deified', 'civic'],
    // Words with different lengths
    ['a', 'b', 'ba', 'ab'],
    // Words with no possible palindrome pairs
    ['abcd', 'efgh', 'ijkl'],
    // Including empty strings
    ['a', '', 'aa'],
    // Words that form palindromes when reversed
    ['abc', 'cba', 'xy', 'yx'],
    // Multiple possible pairs
    ['a', 'aa', 'aaa', 'aaaa'],
    // Mixed case sensitivity
    ['Aa', 'aA', 'Bb', 'bB']
];