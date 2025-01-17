/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numLen = numbers.length;
    if (numLen === 0) {
        return [];
    } else {
        const x = [numbers[0], numbers[numbers.length - 1]];
        return x;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toNum = numbers.map((num: string): number =>
        !Number.isNaN(Number(num)) ? Number(num) : 0
    );
    return toNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((nAmounts: string): string => {
        if (nAmounts.includes("$")) {
            nAmounts = nAmounts.replace("$", "");
        }
        return nAmounts;
    });
    const convertNum = noDollar.map((num: string): number =>
        !Number.isNaN(Number(num)) ? Number(num) : 0
    );
    return convertNum;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //does not work
    const noQuestion = messages.filter(
        (messages: string): boolean => messages[messages.length - 1] !== "?"
    );
    const newMessages = noQuestion.map((messages: string): string => {
        return messages[messages.length - 1] === "!"
            ? messages.toUpperCase()
            : messages;
    });
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessthanfour = words.filter(
        (words: string): boolean => words.length < 4
    );
    return lessthanfour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (colors: string): boolean =>
            colors === "red" || colors === "green" || colors === "blue"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const total = addends.reduce((sum: number, val: number) => sum + val, 0);
    const stringAddeneds = addends.map((str: number): string => str.toString());
    const strRep = stringAddeneds.reduce(
        (totalStr: string, currStr: string) => totalStr + currStr + "+",
        ""
    );
    const newRep = strRep.substring(0, strRep.length - 1);
    return total + "=" + newRep;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(value: number[]): number[] {
    const values = [...value]; //ask why i need this (references?)
    const firstNeg = values.findIndex((num: number): boolean => num < 0);
    if (firstNeg === -1) {
        //no negative values found
        const sum = values.reduce(
            (currSum: number, val: number) => currSum + val,
            0
        );
        values.push(sum);
        return values;
    }
    if (firstNeg !== -1) {
        const tempVals = values.slice(0, firstNeg);
        const sum = tempVals.reduce(
            (currSum: number, val: number) => currSum + val,
            0
        );
        values.splice(firstNeg + 1, 0, sum);
        return values;
    }
    return [];
}
