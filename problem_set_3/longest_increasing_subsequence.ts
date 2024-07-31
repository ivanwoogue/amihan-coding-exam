import { testCases } from "./testCases";

function lengthOfLIS_usingDP(nums: number[], max: number, ndx: number): number {
    let memo: number[] = [];
    for (let x = 0; x < nums.length; x++)
        memo[x] = 1;

    for (let x = nums.length - 1; x >= 0; x--) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] < nums[y]) {
                memo[x] = Math.max(memo[x], memo[y] + 1);
            }
        }
    }

    return memo.reduce((prev, curr) => prev > curr ? prev : curr);
}

function binarySearch_ndxSmallestNumBiggerThanCurrent(sequence: number[], current: number): number {
    let high = sequence.length - 1;
    let low = 0;
    let result = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (sequence[mid] >= current) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;
}

function lengthOfLIS(nums: number[]): number {
    let sequence: number[] = [];

    for (let x = 0; x < nums.length; x++) {
        let curr = nums[x];
        if (sequence.length == 0 || sequence[sequence.length - 1] < curr) {
            sequence.push(curr);
        } else {
            let index = binarySearch_ndxSmallestNumBiggerThanCurrent(sequence, curr);
            sequence[index] = curr;
        }
    }

    return sequence.length;
}

function main() {
    for (let x = 0; x < testCases.length; x++) {
        // const result = lengthOfLIS_usingDP(testCases[x], 0, 0);
        const result = lengthOfLIS(testCases[x]);
        console.log(`Test Case #${x + 1}:`, testCases[x]);
        console.log(`Ans:`, result);
    }
}

main();