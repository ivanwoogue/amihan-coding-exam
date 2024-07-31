# Problem Set 2: Valid Parentheses

## Problem Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
valid. An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

## Solution Overview

Every open brackets must have the appropriate and corresponding close brackets. And, the order of open brackets being closed must be correct as well.

For example:

1. ( cannot be closed with } or ]
2. { cannot be closed with ) or ]
3. [ cannot be closed with ) or }

We know from experiences in Mathematics that the first closing bracket closes the immediate opening bracket. The immediate opening bracket is always the last one.

So, my approach is to create a stack because it is LIFO (Last In, First Out). It stores only the corresponding closing brackets when I encounter an opening bracket in my traversal. So, my stack is like the expected order of closing brackets. And when I encounter a closing bracket, I pop the stack and check if the pop value and the current element are a match.

**Time Complexity: O(n)**

## Instructions to Run the Code

```bash
    npm run ps2
```
