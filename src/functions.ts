/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const CelsiusValue: number = ((temperature - 32) * 5) / 9;
    return CelsiusValue;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum = 0; //ask why "let sum: number = 0" isnt needed here
    if (first < 0) {
        sum = sum + 0;
    } else {
        sum = sum + first;
    }
    if (second < 0) {
        sum = sum + 0;
    } else {
        sum = sum + second;
    }
    if (third < 0) {
        sum = sum + 0;
    } else {
        sum = sum + third;
    }
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    message = message.toUpperCase() + "!";
    return message;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message.endsWith("?"); //message[-1] === "?"; this doesnt work?
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word === "yes" || word.toUpperCase() === "YES") {
        return true;
    }
    if (word === "no" || word.toUpperCase() === "NO") {
        return false;
    } else {
        return null;
    }
}
