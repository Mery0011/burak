//TASK-N
function palindromCheck(word: string): boolean {
    return word === word.split("").reverse().join("");
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false

//TASK-M
/*function getSquareNumbers(arr: number[]) {
    return arr.map((num) => {
        return {
            number: num,
            square: num * num,
        };
    });
}

console.log(getSquareNumbers([1, 2, 3]));
*/

//TASK-L
/*
function reverseSentence(str: string): string {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseSentence("we like coding"));
*/