import { testCases } from "./testCases";

function isValid(str: string): boolean {
    let stack = [];
    for (let x = 0; x < str.length; x++) {
        if (str[x] == '(') {
            stack.push(')');
        } else if (str[x] == '[') {
            stack.push(']');
        } else if (str[x] == '{') {
            stack.push('}');
        } else if (stack.length == 0 || stack.pop() != str[x]) {
            return false;
        }
    }
    return stack.length === 0;
}

function main() {
    for (let x = 0; x < testCases.length; x++) {
        const result = isValid(testCases[x]);
        console.log(`Test Case #${x + 1}:`, testCases[x]);
        console.log(`Ans:`, result);
    }
}

main();