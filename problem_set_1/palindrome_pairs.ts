import { testCases } from "./testCases";

function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function palindromePairs(words: string[]): number[][] {
    let pairs: number[][] = [];
    for (let x = 0; x < words.length; x++) {
        for (let y = 0; y < words.length; y++) {
            if (x == y) continue;

            let concatenated = words[x].concat(words[y]);
            if (isPalindrome(concatenated)) {
                pairs.push([x, y]);
            }
        }
    }
    return pairs;
}

function main() {
    for (let x = 0; x < testCases.length; x++) {
        const result = palindromePairs(testCases[x]);
        console.log(`Test Case #${x + 1}:`, testCases[x]);
        console.log(`Ans:`, result);
    }
}

main();