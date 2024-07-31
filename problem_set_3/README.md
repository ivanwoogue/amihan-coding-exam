# Problem Set 3: Longest Increasing Subsequence

## Problem Description

Given an unsorted array of integers, find the length of the longest increasing subsequence.
For context. The "Longest Increasing Subsequence" is a common problem in computer science and
dynamic programming. In the context of an array of integers, the goal is to find the length of the longest
subsequence of a given array such that all elements of the subsequence are sorted in increasing order.
Here's a more detailed explanation:
Subsequence: A subsequence is a sequence of elements that appear in the same order as they
are in the original sequence, but not necessarily consecutively.
Increasing Subsequence: An increasing subsequence is a subsequence in which the elements are
in strictly increasing order.
The "Longest Increasing Subsequence" problem asks for the length of the longest increasing
subsequence in a given array. For example, given the array: [10, 9, 2, 5, 3, 7, 101, 18]
One possible increasing subsequence is [2, 5, 7, 18], and the length of this subsequence is 4. The goal
is to find the length of the longest increasing subsequence for a given array.
Solving this problem efficiently often involves dynamic programming techniques, where you build up a
solution for each subproblem and use those solutions to solve the overall problem.

## Solution Overview

I have 2 solutions for this approach. The first approach uses Dynamic Programming while the second approach uses a Greedy Algorithm with Binary Search.

### 1st Apporach: Dynamic Programming

Let us take a look at this array of unsorted integers [10, 9, 2, 5, 3, 7, 101, 18]. Remember that our goal is to find the longest **increasing** subsequence.

Traversing from the end let us find each of its longest increasing subsequence.

| Contigous Array    | Longest Increasing Subsequence | Explanation                                                                                                                                                       |
| ------------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [18]               | 1                              | 18 is the only element                                                                                                                                            |
| [101, 18]          | 1                              | 101 > 18 so not an increasing subsequence                                                                                                                         |
| [7, 101, 18]       | 2                              | 7 < 101 and 7 < 18, we can add +1 to the longest subsequence starting from 101 and 18 to get 7's                                                                  |
| [3, 7, 101, 18]    | 3                              | 3 is < **all the numbers**, but 7 is chosen since it currently has the longest increasing subsequence. **Note:** We still have to traverse the rest of the array. |
| [5, 3, 7, 101, 18] | 3                              | We cannot use the 3's because 5 > 3, but we can use 7, 101 and 18. Since 7 has the biggest length, we use this.                                                   |

From these iterations, we can see that there is a pattern. We start from the end, find the longest increasing subsequence starting from each element, and store the result in an array (memoization). So for every subsequent elements in our traversal, we can find their lengths quickly by incrementing the length of those elements, whose longest increasing subsequence has already been calculated, by 1.

Finally, we return the biggest length in the memoized array.

This approach works perfectly, but it is not the most efficient. Let us try a different approach.

**Time Complexity: O(n^2)**

### 2nd Apporach: Greedy Algorithm with Binary Search

Let's use another example [4,10,4,3,8,9].

The idea here is to create an increasing subsequence INC_SEQ from traversing the given array.

If INC_SEQ is empty or the current element is < the last element in INC_SEQ, we push the element to INC_SEQ. If it is not <, we need to find the smallest number in INC_SEQ that is bigger than the current. What if we try to find the biggest number that is smaller than the current?

| Element | Smallest and >= current | Biggest and <= current | Description                                                                                                                                                                                   |
| ------- | ----------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4       | [4]                     | [4]                    |                                                                                                                                                                                               |
| 10      | [4, 10]                 | [4, 10]                |                                                                                                                                                                                               |
| 4       | [4, 10]                 | [4, 10]                |                                                                                                                                                                                               |
| 3       | [3, 10]                 | [4, 10]                | Nothing is replaced because 3 is the smallest.                                                                                                                                                |
| 8       | [3, 8]                  | [8,10]                 | This is the crucial error in the second method. 8 comes after 10, and it is just impossible that there will be an increasing subsequence [8, 10] based from the given since 8 comes after 10. |
| 9       | [3, 8, 9]               | [9, 10]                | Not equal!                                                                                                                                                                                    |

What can we observe here?

We know by intuition and logical thinking that the longest increasing subsequence is of length 3, so replacing the smallest number that is bigger than the current elemnt is the right way to go.

Because of Binary Search, it has a faster time complexity than the first approach.

**Time Complexity: O(n log(n))**

## Instructions to Run the Code

```bash
    npm run ps3
```
