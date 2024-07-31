# Problem Set 1: Palindrome Pairs

## Problem Description

Given a list of unique words, your task is to find all pairs of distinct indices (i, j) in the list so that the concatenation of the two words, i.e., words[i] + words[j], forms a palindrome.

## Solution Overview

### isPalindrome()

We can start from both ends of the string and check if the current elements are the same. Traverse both pointers until they passed by each other.

**Note: A palindrome always have odd number of letters. We do not need to check the middle one because it never has a pair.**

### palindromePairs()

We concatenate each string with the other strings and pass the concatenated string to isPalindrome(). If it is true, we pushed the indexes of the 2 strings combined to form a palindrome to our matrix.

**Time Complexity: O(n^2)**

## Instructions to Run the Code

```bash
    npm run ps1
```
